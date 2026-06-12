import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { z } from "zod";

// ── Shared schema (mirrors src/lib/contactSchema.ts — copied to avoid bundler issues) ──
// The API runs in Node, not via Vite, so we can't use src/ path aliases here.
const ALLOWED_REVENUE = [
  "Abaixo de 10mil",
  "10mil a 30mil",
  "30mil a 70mil",
  "70mil a 100mil",
  "100mil a 300mil",
  "300mil a 500mil",
  "Acima de 500mil",
] as const;

const contactSchema = z.object({
  nome: z.string().trim().min(2, "Nome deve ter ao menos 2 caracteres.").max(120),
  email: z.string().trim().email("E-mail inválido.").max(254),
  telefone: z
    .string()
    .trim()
    .min(8, "Telefone muito curto.")
    .max(30)
    .regex(/^[\d\s()+\-]+$/, "Telefone contém caracteres inválidos."),
  revenue: z
    .string()
    .refine((v): v is (typeof ALLOWED_REVENUE)[number] =>
      (ALLOWED_REVENUE as readonly string[]).includes(v)
    , { message: "Faixa de faturamento inválida." }),
});

// ── Sanitize: strip control characters to prevent header injection ─────────────
function sanitize(value: string): string {
  return value
    .replace(/[\r\n\t]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ── Main handler ───────────────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Method guard
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Método não permitido." });
  }

  // NOTE: Rate limiting removed. To add it, integrate Upstash Redis:
  // https://upstash.com/docs/redis/sdks/ratelimit-ts/overview

  // 3. Validate with Zod
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    const firstMsg = result.error.issues[0]?.message ?? "Dados inválidos.";
    // Log field-level errors server-side for debugging, never expose internally
    console.warn("[contact] Validation failed:", result.error.issues.map(i => i.message).join(", "));
    return res.status(400).json({ success: false, message: firstMsg });
  }

  const { nome, email, telefone, revenue } = result.data;

  // 4. Sanitize for email body (prevent header injection)
  const safeNome = sanitize(nome);
  const safeEmail = sanitize(email);
  const safeTelefone = sanitize(telefone);
  const safeRevenue = sanitize(revenue);

  // 5. Check env vars
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.error("[contact] Missing SMTP environment variables.");
    return res
      .status(500)
      .json({ success: false, message: "Erro interno. Tente novamente mais tarde." });
  }
console.log(process.env.SMTP_USER)
console.log(process.env.SMTP_PASS.trim())
  // 6. Build transporter with timeout
const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 587,
  secure: false,
  auth: {
    user: "contato@zaytek.com.br",
    pass: process.env.SMTP_PASS?.trim(),
  },
});
  // 7. Build email
  const textBody = [
    `Novo lead recebido pelo formulário da Zaytek`,
    ``,
    `Nome:        ${safeNome}`,
    `Email:       ${safeEmail}`,
    `Telefone:    ${safeTelefone}`,
    `Faturamento: ${safeRevenue}`,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
      <h2 style="color: #112A32; border-bottom: 2px solid #23525F; padding-bottom: 8px;">
        Novo Lead — Zaytek
      </h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px 12px; background:#f2f6f7; font-weight:bold; width:140px;">Nome</td>
          <td style="padding: 8px 12px;">${safeNome}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background:#f2f6f7; font-weight:bold;">E-mail</td>
          <td style="padding: 8px 12px;">${safeEmail}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background:#f2f6f7; font-weight:bold;">Telefone</td>
          <td style="padding: 8px 12px;">${safeTelefone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background:#f2f6f7; font-weight:bold;">Faturamento</td>
          <td style="padding: 8px 12px;">${safeRevenue}</td>
        </tr>
      </table>
    </div>
  `;

  // 8. Send
  try {
    await transporter.verify();
    await transporter.sendMail({
      from: `"Zaytek Formulário" <${SMTP_USER}>`,
      to: MAIL_TO,
      replyTo: safeEmail,
      subject: `Novo lead: ${safeNome}`,
      text: textBody,
      html: htmlBody,
    });

    console.log(`[contact] Email sent from ${safeEmail}`);
    return res.status(200).json({ success: true, message: "Mensagem enviada com sucesso." });
  } catch (err: unknown) {
    // Log server-side only — never expose to client
    const message = err instanceof Error ? err.message : String(err);
    console.error(`[contact] SMTP error: ${message}`);
    return res
      .status(500)
      .json({ success: false, message: "Falha ao enviar. Tente novamente mais tarde." });
  }
}
