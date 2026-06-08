import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vim+pelo+site+e+quero+agendar+minha+consultoria+gratuita.";

  return (
    <section
      id="hero"
      aria-label="Seção principal"
      className="relative w-full flex flex-col justify-center items-center bg-[#F2F6F7] overflow-hidden min-h-[100svh] py-28 md:py-24"
    >
      {/* Background Image - LCP: fetchpriority high */}
      <img
        src="/bg-home-zaytek.webp"
        alt="Cidades e tecnologia ao fundo"
        aria-hidden="true"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105 blur-[1px]"
      />

      {/* Subtle overlay to ensure text readability if needed */}
      <div className="absolute inset-0 bg-[#0D1E22]/40 z-0" />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle, rgba(35,82,95,0.08) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          backgroundPosition: "center",
        }}
      />
      {/* Soft radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 60%, rgba(35,82,95,0.07) 0%, transparent 65%)`,
        }}
      />

      <div className="w-full max-w-[900px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#4FD1C5]/50 bg-[#4FD1C5]/10 mb-6 text-[#4FD1C5] text-[11px] font-bold tracking-widest uppercase">
            ASSESSORIA DIGITAL
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="text-[32px] md:text-[48px] lg:text-[52px] font-bold text-white leading-[1.2] mb-6 tracking-tight"
        >
          Soluções Digitais Personalizadas para seu negócio Lucrar mais com menos dor de Cabeça
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="text-[14px] md:text-[16px] lg:text-[18px] text-[#D1D5DB] leading-[1.6] mb-[40px] max-w-[650px] font-light"
        >
          Entendemos o seu negócio, mapeamos o que precisa ser resolvido e executamos com estratégia, para você focar no que realmente importa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-[16px] w-full mb-6"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4FD1C5] text-[#0D1E22] px-8 py-3.5 w-full sm:w-auto rounded-[6px] font-bold text-[15px] hover:bg-[#38b2a5] shadow-[0_0_20px_rgba(79,209,197,0.3)] hover:shadow-[0_0_30px_rgba(79,209,197,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group"
          >
            Quero começar
          </a>

          <a
            href="#projetos"
            className="border border-white/20 text-[#D1D5DB] bg-transparent hover:bg-white/5 px-8 py-3.5 w-full sm:w-auto rounded-[6px] font-medium text-[15px] transition-colors flex items-center justify-center group"
          >
            Ver projetos{" "}
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[13px] text-[#9CA3AF] hidden sm:flex items-center justify-center gap-2"
        >
          <span>Atendimento pelo WhatsApp</span>
          <span>·</span>
          <span>Atendimento imediato via WhatsApp</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-white/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
