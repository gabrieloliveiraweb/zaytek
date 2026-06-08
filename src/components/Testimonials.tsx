import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const quotes = [
    {
      text: "Achei que ia ser só mais um site igual todo mundo faz, mas ficou muito melhor do que eu esperava. Hoje o pessoal realmente entra em contato por ele.",
      author: "Anderson R",
      role: "Dono de restaurante",
      rating: 5,
    },
    {
      text: "O que mais gostei foi que continuaram dando suporte depois da entrega. Sempre que precisei ajustar alguma coisa resolveram rápido.",
      author: "Josiel R",
      role: "Academia",
      rating: 5,
    },
    {
      text: "Curti porque não vieram empurrando coisa. Primeiro entenderam como funcionava meu atendimento e depois montaram a solução.",
      author: "John P",
      role: "Cliente",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-bg-surface overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-[rgba(35,82,95,0.15)] bg-[rgba(35,82,95,0.06)] mb-6 text-[#5E757D] text-[11px] font-bold tracking-widest uppercase"
          >
            depoimentos
          </motion.div>

          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[44px] font-bold text-[#112A32] leading-[1.15] mb-4"
          >
            Quem já deu o primeiro passo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] text-text-secondary"
          >
            Negócios reais que decidiram parar de improvisar no digital
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {quotes.map((quote, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-bg-primary rounded-[16px] p-8 border border-border-light relative flex flex-col justify-between"
            >
              <div className="absolute top-8 right-8 text-[rgba(35,82,95,0.05)]">
                <Quote size={64} className="rotate-12" />
              </div>

              <div>
                <div className="flex gap-1 mb-6" aria-label={`Avaliação: ${quote.rating} estrelas`} role="img">
                  {Array.from({ length: quote.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      aria-hidden="true"
                      className="fill-[#FACC15] text-[#FACC15]"
                    />
                  ))}
                </div>
                <p className="font-sans text-[16px] text-text-secondary leading-[1.7] mb-8 relative z-10 italic">
                  "{quote.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[#E5F0F2] flex items-center justify-center text-accent font-bold font-display text-[18px]">
                  {quote.author.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-bold text-[16px] text-[#255259]">
                    {quote.author}
                  </p>
                  <p className="font-sans text-[13px] text-text-secondary">
                    {quote.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
