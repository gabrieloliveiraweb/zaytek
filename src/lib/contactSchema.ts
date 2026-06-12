import { z } from "zod";

export const REVENUE_OPTIONS = [
  "Abaixo de 10mil",
  "10mil a 30mil",
  "30mil a 70mil",
  "70mil a 100mil",
  "100mil a 300mil",
  "300mil a 500mil",
  "Acima de 500mil",
] as const;

export type RevenueOption = (typeof REVENUE_OPTIONS)[number];

export const contactSchema = z.object({
  nome: z
    .string()
    .min(1, "Nome é obrigatório.")
    .min(2, "Nome deve ter ao menos 2 caracteres.")
    .max(120, "Nome muito longo.")
    .trim(),

  email: z
    .string()
    .min(1, "E-mail é obrigatório.")
    .email("Informe um e-mail válido.")
    .max(254, "E-mail muito longo.")
    .trim(),

  telefone: z
    .string()
    .min(1, "Telefone é obrigatório.")
    .min(8, "Telefone muito curto.")
    .max(30, "Telefone muito longo.")
    .regex(/^[\d\s()+\-]+$/, "Telefone contém caracteres inválidos.")
    .trim(),

  revenue: z
    .string()
    .min(1, "Selecione uma faixa de faturamento.")
    .refine(
      (v): v is RevenueOption => (REVENUE_OPTIONS as readonly string[]).includes(v),
      { message: "Faixa de faturamento inválida." }
    ),
});

export type ContactFormData = z.infer<typeof contactSchema>;

/** Raw form values (before Zod refinement). Used as TFieldValues in react-hook-form. */
export type ContactFormInput = z.input<typeof contactSchema>;

