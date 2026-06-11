import { motion } from "motion/react";
import {  ArrowRight, EyeOff, Ban, Compass, Wrench, HardHat, Gauge, BatteryLow} from "lucide-react";

const painPointsCopy = {
  badge: "Você se identifica?",
  title: "Sinais de que existe oportunidade para evoluir",
  subtitle: "Ao trabalhar com empresas em diferentes fases, percebemos padrões que costumam indicar onde está o próximo passo de crescimento",

  cards: [
    {
      icon: "BatteryLow",
      title: "Crescer está custando mais trabalho do que dinheiro",
      description: "Quando a operação depende de esforço manual para funcionar, cada novo cliente ou projeto aumenta a pressão, em vez de gerar mais resultado com o mesmo time."
    },
    {
      icon: "EyeOff",
      title: "O negócio é bom, mas ninguém encontra online",
      description: "Decisões de compra passam pela internet antes de chegarem até você. Se a presença digital não reflete a qualidade do negócio, oportunidades ficam pelo caminho."
    },
    {
      icon: "Ban",
      title: "O negócio chegou em um teto e crescer parece arriscado",
      description: "Chega um ponto em que crescer sem estrutura deixa de ser uma opção. A questão não é se tem demanda, mas se a operação aguenta atender bem."
    },
    {
      icon: "Compass",
      title: "Existem oportunidades claras, mas falta saber por onde começar",
      description: "Há consciência de que algo pode ser feito, mas a dúvida sobre o que priorizar paralisa. Sem um diagnóstico claro, qualquer investimento parece arriscado."
    }
  ],

  footer: {
    text: "Se algum desses cenários soa familiar, provavelmente existe uma \noportunidade concreta esperando para ser aproveitada.",
    buttonText: "Agendar consultoria gratuita"
  }
}


const iconMap = {
  Ban: Ban,
  EyeOff: EyeOff,
  Compass: Compass,
  BatteryLow: BatteryLow    
};

export default function PainPoints() {
  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vim+pelo+site+e+quero+entender+como+resolver+os+problemas+digitais+do+meu+neg%C3%B3cio.";

  return (
    <section className="py-24 bg-bg-dark text-text-on-dark flex items-center" aria-labelledby="painpoints-heading">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-[#23525F] bg-transparent mb-6 text-[#3BB1CA] text-[11px] font-bold tracking-widest uppercase"
          >
            {painPointsCopy.badge}
          </motion.div>

          <motion.h2
            id="painpoints-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[30px] md:text-[34px] font-bold leading-tight mb-4 max-w-2xl"
          >
            {painPointsCopy.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[16px] text-text-muted-dark max-w-[540px] mx-auto"
          >
            {painPointsCopy.subtitle}
          </motion.p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {painPointsCopy.cards.map((card, idx) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                className="group bg-[rgba(255,255,255,0.04)] border border-border-dark rounded-[12px] p-7 md:p-8 hover:border-[rgba(46,138,158,0.3)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {IconComponent && (
                  <IconComponent
                    className="text-accent-light mb-5"
                    size={26}
                    strokeWidth={1.5}
                  />
                )}
                <h3 className="text-[16px] font-bold text-text-on-dark mb-2">
                  {card.title}
                </h3>
                <p className="text-[14px] text-text-muted-dark leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <p className="text-text-muted-dark text-[15px]">
            {painPointsCopy.footer.text.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < painPointsCopy.footer.text.split("\n").length - 1 && <br className="hidden sm:block" />}
              </span>
            ))}
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-8 py-3.5 rounded-md font-medium text-[15px] hover:bg-accent-light transition-colors flex items-center gap-2 group"
          >
            {painPointsCopy.footer.buttonText}
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
