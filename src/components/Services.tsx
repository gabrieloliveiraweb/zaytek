import { motion } from "motion/react";
import {
  AppWindow,
  ShoppingCart,
  Activity,
  BarChart2,
  ArrowRight,
  Monitor,
  Rocket,
  Smartphone,
} from "lucide-react";

export default function Services() {
  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vim+pelo+site+e+quero+agendar+meu+diagn%C3%B3stico+gratuito.";

  const services = [
    {
      icon: (
        <AppWindow size={20} className="text-[#23525F]" strokeWidth={1.5} />
      ),
      title: "Sites e Landing Pages",
      text: "Uma presença online que representa o negócio com credibilidade e gera contato real.",
    },
    {
      icon: (
        <ShoppingCart size={20} className="text-[#23525F]" strokeWidth={1.5} />
      ),
      title: "Lojas Virtuais",
      text: "Seu negócio vendendo de forma contínua, sem depender de ponto físico ou marketplace.",
    },
    {
      icon: <Monitor size={20} className="text-[#23525F]" strokeWidth={1.5} />,
      title: "Sistemas & Softwares",
      text: "Painéis de gestão, portais de clientes, plataformas internas, construídos para o seu processo.",
    },
    {
      icon: <Activity size={20} className="text-[#23525F]" strokeWidth={1.5} />,
      title: "Automações e Integrações",
      text: "Para empresas que precisam estar no celular dos seus clientes ou equipe, com experiência pensada para o seu contexto.",
    },
    {
      icon: (
        <Smartphone size={20} className="text-[#23525F]" strokeWidth={1.5} />
      ),
      title: "Aplicativos Mobile",
      text: "Estruturamos a direção digital do seu negócio antes de qualquer investimento. Clareza antes de qualquer execução.",
    },
    {
      icon: (
        <Rocket size={20} className="text-[#23525F]" strokeWidth={1.5} />
      ),
      title: "Tráfego Pago",
      text: "Clientes chegando pelo digital de forma previsível, sem você precisar depender de indicação ou sorte.",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-bg-primary pt-0" aria-labelledby="servicos-heading">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-[rgba(35,82,95,0.15)] bg-[rgba(35,82,95,0.06)] mb-6 text-[#5E757D] text-[11px] font-bold tracking-widest uppercase"
          >
            O que Fazemos
          </motion.div>

          <motion.h2
            id="servicos-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[44px] font-bold text-[#112A32] leading-[1.2] mb-4 max-w-[700px]"
          >
            A ferramenta certa depende do momento do negócio          
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] text-text-secondary max-w-[500px] mx-auto"
          >
            Cada empresa está em um momento diferente. O que faz sentido para uma pode ser prematuro ou desnecessário para outra
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0 relative">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group py-6 px-4 border-b border-[rgba(35,82,95,0.10)] border-l-[2px] border-l-transparent hover:border-l-[#23525F] hover:bg-[rgba(35,82,95,0.03)] transition-all duration-200 ease-in-out flex flex-col justify-center`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-[40px] h-[40px] rounded-full bg-[rgba(35,82,95,0.10)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(35,82,95,0.18)] transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="font-sans font-medium text-[15px] text-text-primary group-hover:text-[#23525F] transition-colors duration-200">
                  {service.title}
                </h3>
              </div>
              <p className="font-sans text-[13px] text-text-secondary pl-14 md:min-h-[60px] flex items-start">
                <span className="line-clamp-3">{service.text}</span>
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex flex-col items-center text-center gap-6"
        >
          <div>
            <p className="text-text-secondary text-[15px] mb-1">
              Não tem certeza por onde começar?
            </p>
            <p className="text-text-primary font-medium text-[16px]">
              Agende uma consultoria gratuita.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-8 py-3.5 rounded-md font-medium text-[15px] hover:bg-accent-light transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            Agendar Consultoria{" "}
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
