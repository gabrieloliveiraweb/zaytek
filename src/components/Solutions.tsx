import { motion } from "motion/react";
import { Eye, Cog, Search, Handshake } from "lucide-react";

export default function Solutions() {
  const items = [
    {
      icon: <Eye size={24} className="text-[#23525F]" />,
      title: "Visibilidade que atrai cliente de verdade.",
      text: "Presença digital estratégica e preparada para converter visitante em cliente.",
    },
    {
      icon: <Cog size={24} className="text-[#23525F]" />,
      title: "Operação que cresce sem travar.",
      text: "Estruturamos processos para que o crescimento gere resultado, não caos.",
    },
    {
      icon: <Search size={24} className="text-[#23525F]" />,
      title: "Diagnóstico antes de qualquer investimento.",
      text: "Entendemos o seu negócio antes de propor qualquer coisa.",
    },
    {
      icon: <Handshake size={24} className="text-[#23525F]" />,
      title: "Um parceiro no digital, não um fornecedor.",
      text: "Acompanhamos e evoluímos a solução junto com o seu negócio.",
    },
  ];

  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-[rgba(35,82,95,0.2)] bg-[rgba(35,82,95,0.08)] mb-6 text-[#23525F] text-[11px] font-bold tracking-widest uppercase"
          >
            Como resolvemos
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[30px] md:text-[34px] font-bold text-[#112A32] leading-[1.2] mb-4"
          >
            A Zaytek cuida do digital para você{" "}
            <br className="hidden md:block" />
            focar no seu negócio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] text-text-secondary max-w-[500px] mx-auto"
          >
            Não é só execução. É estratégia, estrutura e acompanhamento do
            diagnóstico até o resultado.
          </motion.p>
        </div>

        <div className="space-y-0">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative flex items-center py-8 px-4 border-b border-[rgba(35,82,95,0.10)] border-l-2 border-l-transparent hover:-translate-y-1 group-hover:border-l-[#23525F] group-hover:bg-[rgba(35,82,95,0.03)] transition-all duration-200 ease-in-out cursor-pointer ${index === 0 ? "border-t" : ""}`}
            >
              <div className="relative z-10 w-full flex flex-row items-center justify-between gap-4 sm:gap-12 pl-2 sm:pl-4">
                <div className="flex-1 relative pt-2 sm:pt-0">
                  {/* Large Outline Number */}
                  <div className="absolute -top-3 sm:-top-2 -left-2 text-[64px] sm:text-[88px] font-display font-bold text-[rgba(35,82,95,0.09)] pointer-events-none select-none z-0 leading-none">
                    0{index + 1}
                  </div>
                  <h3 className="relative z-10 font-display font-bold text-[18px] sm:text-[20px] text-text-primary group-hover:text-[#23525F] transition-colors duration-200 mb-1">
                    {item.title}
                  </h3>
                  <p className="relative z-10 font-sans text-[14px] text-text-secondary mt-1">
                    {item.text}
                  </p>
                </div>
                <div className="shrink-0 w-[44px] h-[44px] rounded-full bg-[rgba(35,82,95,0.10)] flex items-center justify-center group-hover:bg-[rgba(35,82,95,0.18)] transition-all duration-200">
                  {item.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
