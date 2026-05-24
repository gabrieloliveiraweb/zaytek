import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Process() {
  const containerRef = useRef(null);
  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+quero+agendar+minha+consultoria+gratuita+com+a+Zaytek.";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  const steps = [
    {
      num: "01",
      title: "Diagnóstico",
      text: "Entendemos seu negócio, seu público e seus gargalos antes de propor qualquer solução.",
    },
    {
      num: "02",
      title: "Estratégia",
      text: "Estruturamos um plano claro com o que será feito, em qual ordem e com qual objetivo.",
    },
    {
      num: "03",
      title: "Solução",
      text: "Executamos sob medida e acompanhamos até o resultado acontecer de verdade.",
    },
  ];

  return (
    <section
      id="processo"
      className="py-24 bg-bg-dark text-text-on-dark relative"
      ref={containerRef}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-[#23525F] bg-transparent mb-6 text-[#3BB1CA] text-[11px] font-bold tracking-widest uppercase"
          >
            Como trabalhamos
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[30px] md:text-[34px] font-bold text-text-on-dark leading-[1.2]"
          >
            Um processo claro, do início ao resultado.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] text-text-muted-dark max-w-[500px] mx-auto mt-4"
          >
            Todo projeto segue um processo claro, do entendimento do seu negócio
            até a entrega.
          </motion.p>
        </div>

        {/* Desktop Process Timeline */}
        <div className="hidden md:block relative pt-6 pb-12">
          {/* Base Line */}
          <div className="absolute top-[26px] left-[10%] right-[10%] h-[2px] bg-border-dark" />
          {/* Active Line (driven by scroll) */}
          <motion.div
            className="absolute top-[26px] left-[10%] h-[2px] bg-[#3BB1CA] origin-left shadow-[0_0_12px_rgba(59,177,202,0.8)] rounded-full"
            style={{ width: lineWidth }}
          />

          <div className="grid grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-[44px] h-[44px] rounded-full border-[1.5px] border-border-dark bg-bg-dark flex items-center justify-center mb-8 relative transition-colors duration-500 group-hover:border-[#3BB1CA] group-hover:bg-[rgba(59,177,202,0.1)]">
                  <span className="font-display text-[15px] font-bold text-text-muted-dark group-hover:text-[#3BB1CA] transition-colors duration-500">
                    {step.num}
                  </span>
                </div>
                <div className="font-display font-bold text-[11px] text-accent-light uppercase tracking-[0.1em] mb-2">
                  Passo {parseFloat(step.num)}
                </div>
                <h3 className="font-display font-semibold text-[18px] text-text-on-dark mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-[13px] text-text-muted-dark leading-relaxed px-4">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden space-y-12 pl-4 md:pl-0 relative">
          {/* Mobile Base Line */}
          <div className="absolute left-[33px] top-4 bottom-8 w-[2px] bg-border-dark" />

          {/* Mobile Active Line (driven by scroll) */}
          <motion.div
            className="absolute left-[33px] top-4 w-[2px] bg-[#3BB1CA] origin-top shadow-[0_0_12px_rgba(59,177,202,0.8)] rounded-full"
            style={{ height: lineWidth }}
          />

          {steps.map((step, index) => (
            <div key={index} className="relative pl-16">
              <div className="absolute left-0 top-1 w-[36px] h-[36px] rounded-full border-[1.5px] border-border-dark bg-bg-dark flex items-center justify-center z-10">
                <span className="font-display text-[13px] font-bold text-[#3BB1CA]">
                  {step.num}
                </span>
              </div>
              <div className="font-display font-bold text-[11px] text-accent-light uppercase tracking-[0.1em] mb-1">
                Passo {parseFloat(step.num)}
              </div>
              <h3 className="font-display font-semibold text-[18px] text-text-on-dark mb-2 mt-1">
                {step.title}
              </h3>
              <p className="font-sans text-[13px] text-text-muted-dark leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent-light text-accent-light px-8 py-3.5 rounded-md font-medium text-[15px] hover:bg-accent-light hover:text-white transition-colors flex items-center gap-2 group"
          >
            Pronto para começar?{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
