import { motion } from "motion/react";
import { Globe, Clock, LineChart, Smartphone, ArrowRight } from "lucide-react";

export default function PainPoints() {
  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vim+pelo+site+e+quero+entender+como+resolver+os+problemas+digitais+do+meu+neg%C3%B3cio.";

  return (
    <section className="py-24 bg-bg-dark text-text-on-dark flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-[#23525F] bg-transparent mb-6 text-[#3BB1CA] text-[11px] font-bold tracking-widest uppercase"
          >
            Você se identifica?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[30px] md:text-[34px] font-bold leading-tight mb-4 max-w-2xl"
          >
            Os erros digitais que mais custam dinheiro para negócios
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[16px] text-text-muted-dark max-w-[540px] mx-auto"
          >
            Depois de trabalhar com diferentes negócios, os mesmos padrões
            aparecem. Veja se você se identifica:
          </motion.p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Row 1: Wide + Narrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 group bg-[rgba(255,255,255,0.04)] border border-border-dark rounded-[12px] p-7 md:p-8 hover:border-[rgba(46,138,158,0.3)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <Clock
              className="text-accent-light mb-5"
              size={26}
              strokeWidth={1.5}
            />
            <h3 className="text-[16px] font-bold text-text-on-dark mb-2">
              Processos manuais travando o crescimento
            </h3>
            <p className="text-[14px] text-text-muted-dark leading-relaxed">
              Atendimento desorganizado e controles manuais consomem o tempo que
              deveria ir para o negócio. Crescer sem estrutura só gera mais
              desgaste.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 group bg-[rgba(255,255,255,0.04)] border border-border-dark rounded-[12px] p-7 md:p-8 hover:border-[rgba(46,138,158,0.3)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <Globe
              className="text-accent-light mb-5"
              size={26}
              strokeWidth={1.5}
            />
            <h3 className="text-[16px] font-bold text-text-on-dark mb-2">
              Ignorar a internet como canal de vendas
            </h3>
            <p className="text-[14px] text-text-muted-dark leading-relaxed">
              Todo dia clientes pesquisam, comparam e decidem online. Se o seu
              negócio não aparece, essa venda vai para o concorrente.
            </p>
          </motion.div>

          {/* Row 2: Narrow + Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 group bg-[rgba(255,255,255,0.04)] border border-border-dark rounded-[12px] p-7 md:p-8 hover:border-[rgba(46,138,158,0.3)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <LineChart
              className="text-accent-light mb-5"
              size={26}
              strokeWidth={1.5}
            />
            <h3 className="text-[16px] font-bold text-text-on-dark mb-2">
              Presença digital sem estratégia
            </h3>
            <p className="text-[14px] text-text-muted-dark leading-relaxed">
              Estar online não é suficiente. Sem estratégia, você investe tempo
              e dinheiro em ações que não geram retorno.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 group bg-[rgba(255,255,255,0.04)] border border-border-dark rounded-[12px] p-7 md:p-8 hover:border-[rgba(46,138,158,0.3)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <Smartphone
              className="text-accent-light mb-5"
              size={26}
              strokeWidth={1.5}
            />
            <h3 className="text-[16px] font-bold text-text-on-dark mb-2">
              Tratar o digital como opcional
            </h3>
            <p className="text-[14px] text-text-muted-dark leading-relaxed">
              Quem vê o digital como algo a mais está cedendo mercado para quem
              já entendeu que é a base.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <p className="text-text-muted-dark text-[15px]">
            Se você se identificou com algum desses pontos,
            <br className="hidden sm:block" /> é exatamente aí que a Zaytek
            atua.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-8 py-3.5 rounded-md font-medium text-[15px] hover:bg-accent-light transition-colors flex items-center gap-2 group"
          >
            Quero entender como resolver{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
