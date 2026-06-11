  import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Minha empresa é pequena. Faz sentido conversar com vocês?",
      a: "Faz mais sentido agora do que depois. Negócios pequenos que estruturam o digital cedo crescem com mais consistência e menos retrabalho. Hoje o consumidor pesquisa antes de sair de casa. Se seu negócio não aparece bem no digital, você perde para o concorrente que aparece, mesmo que seja pior que você.",
    },
    {
      q: "Como funciona a consultoria gratuita?",
      a: "A primeira conversa é uma oportunidade para entendermos melhor o seu negócio, seus objetivos e os principais desafios enfrentados atualmente. A partir disso, identificamos oportunidades e indicamos quais próximos passos podem fazer sentido."
    },
    {
      q: "Quanto custa trabalhar com a Zaytek?",
      a: "Depende do que o seu negócio precisa, e é exatamente por isso que começamos pelo diagnóstico. Não trabalhamos com tabela fixa porque cada negócio tem um desafio diferente. Na nossa primeira conversa, entendemos sua situação e apresentamos uma proposta clara, com investimento e prazo definidos, sem surpresas depois.",
    },
    {
      q: "Eu não entendo nada de internet. Vou conseguir acompanhar?",
      a: "Esse é exatamente o motivo de existirmos. Você não precisa entender de tecnologia, esse é o nosso trabalho. Cuidamos de tudo, te mantemos informado do que importa e entregamos algo que você consegue usar com autonomia.",
    },
    {
      q: "Não tenho tempo para gerenciar esse projeto",
      a: "Criamos soluções para devolver o seu tempo, não para tomar mais dele. Se você não tem tempo hoje, é exatamente porque faltam processos e estrutura digital no seu negócio. Nosso método foi desenhado para exigir o mínimo de você durante o desenvolvimento e simplificar sua rotina após a entrega.",
    },
    {
      q: "Como sei que vai funcionar para o meu negócio especificamente?",
      a: "Não trabalhamos com fórmula pronta. Por isso começamos pelo diagnóstico, entendendo o seu negócio antes de propor qualquer coisa. Prometemos estratégia, execução e honestidade durante todo o processo.",
    },
    {
      q: "Vocês apenas recomendam soluções ou também executam?",
      a: "Além de ajudar a identificar quais iniciativas fazem sentido para o momento do negócio, também desenvolvemos e implementamos as soluções necessárias. Nosso objetivo é acompanhar da estratégia à execução."
    } 
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-bg-primary" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[rgba(35,82,95,0.15)] bg-[rgba(35,82,95,0.06)] mb-6 text-[#5E757D] text-[11px] font-bold tracking-widest uppercase" aria-hidden="true">
            DÚVIDAS
          </div>
          <h2 id="faq-heading" className="text-[28px] md:text-[36px] font-bold text-[#112A32] leading-[1.2] mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-[16px] text-text-secondary">
            Tire suas dúvidas antes de dar o próximo passo.
          </p>
        </div>

        <div className="border-t border-[rgba(0,0,0,0.05)]" role="list">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              id={`faq-item-${index}`}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({
  key,
  id,
  question,
  answer,
  isOpen,
  onClick,
}: {
  key: number
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <div key={key} className="border-b border-[rgba(0,0,0,0.05)]" role="listitem">
      <button
        id={buttonId}
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2E8A9E] focus-visible:outline-offset-2 rounded-sm"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-sans font-medium text-[15px] sm:text-[16px] text-[#112A32] pr-6">
          {question}
        </span>
        <div className="shrink-0 text-accent" aria-hidden="true">
          {isOpen ? (
            <Minus size={20} strokeWidth={1.5} />
          ) : (
            <Plus size={20} strokeWidth={1.5} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-0 text-[15px] text-text-secondary leading-relaxed pr-10">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
