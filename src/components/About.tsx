import { motion } from "motion/react";
import { Search, Handshake, UserCheck, ArrowRight } from "lucide-react";

export default function About() {
  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+conheci+a+Zaytek+pelo+site+e+quero+conversar.";

  return (
    <section id="sobre" className="py-28 bg-bg-primary overflow-hidden" aria-labelledby="sobre-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="w-full relative lg:max-w-[460px] ml-auto order-2 lg:order-1"
          >
            <div className="relative aspect-square md:aspect-[4/4.5] rounded-[16px] overflow-hidden border border-border-light shadow-lg group">
              <img
                src="/perfil-sobre.png"
                alt="Gabriel - Fundador da Zaytek"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,30,34,0.4)] to-transparent pointer-events-none" />
            </div>

            {/* Optional decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="w-full order-1 lg:order-2 flex flex-col items-start lg:items-start text-left lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[rgba(35,82,95,0.15)] bg-[rgba(35,82,95,0.06)] mb-6 text-[#5E757D] text-[11px] font-bold tracking-widest uppercase">
              Sobre
            </div>

            <h2 id="sobre-heading" className="text-[30px] md:text-[34px] font-display font-bold text-[#112A32] leading-[1.2] mb-4 max-w-[500px]">
              Por que a Zaytek existe
            </h2>
            <h3 className="text-[18px] text-text-primary leading-[1.6] mb-8 font-medium max-w-[480px]">
              Uma assessoria construída para ajudar empresários a enxergar com clareza onde estão as oportunidades de crescimento
            </h3>

            <div className="space-y-5 text-[15px] font-sans text-text-secondary leading-[1.8] mb-12 max-w-[520px]">
              <p>Sou o Gabriel, fundador da Zaytek.
            
                Depois de trabalhar com diferentes empresas, percebi um padrão: 
                a maioria sabia que podia melhorar seus resultados, mas não conseguia
                identificar onde estavam as oportunidades ou o que realmente precisava ser priorizado.
              </p>
              <p>
                Foi dessa percepção que surgiu a Zaytek. Cada projeto começa pelo entendimento do negócio, 
                não pela venda de um serviço, só depois de mapear o contexto é que definimos o que faz sentido executar.
              </p>
              <p className="font-medium text-text-primary">
                Sem pacotes prontos e sem investimentos desnecessários.
                Apenas o que realmente faz sentido para cada empresa. 
              </p>
            </div>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
