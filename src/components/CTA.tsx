import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+quero+agendar+minha+consultoria+gratuita+com+a+Zaytek.";

  return (
    <section className="relative overflow-hidden pt-[120px] pb-[80px]" aria-labelledby="cta-heading">
      {/* Radial subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(35,82,95,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[42px] font-bold text-text-on-dark leading-[1.1] md:leading-tight mb-6"
        >
         Pronto para entender o que realmente vai mover o seu negócio?          
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[16px] text-text-muted-dark max-w-[460px] mx-auto mb-10"
        >
          Nossa consultoria gratuita funciona como um raio-x do momento atual da
          sua empresa. Agende sem compromisso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-accent text-white px-6 sm:px-8 py-4 sm:py-4 rounded-md font-medium text-[15px] sm:text-[16px] hover:bg-accent-light transition-colors items-center justify-center gap-2 group shadow-lg relative z-20 w-full sm:w-auto"
          >
            Agendar Consultoria Gratuita
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
