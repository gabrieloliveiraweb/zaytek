import { motion } from "motion/react";
import { ArrowRight, Lock } from "lucide-react";

export default function LeadForm() {
  return (
    <section id="contato" className="py-24 bg-bg-surface overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-[rgba(35,82,95,0.15)] bg-[rgba(35,82,95,0.06)] mb-6 text-[#5E757D] text-[11px] font-bold tracking-widest uppercase"
          >
            Contato
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[44px] font-bold text-[#112A32] leading-[1.15] mb-4"
          >
            Agende sua consultoria gratuita
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] md:text-[18px] text-text-secondary max-w-[500px] mx-auto"
          >
            Preencha o formulário e nossa equipe entrará em contato com você em breve.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <form className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-border-light p-8 md:p-12 mb-6 max-w-2xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[14px] font-bold text-[#112A32]">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                placeholder="Seu nome"
                className="w-full px-4 py-3.5 bg-bg-primary border border-border-light rounded-xl text-[15px] outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[14px] font-bold text-[#112A32]">
                Seu e-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="voce@empresa.com"
                className="w-full px-4 py-3.5 bg-bg-primary border border-border-light rounded-xl text-[15px] outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[14px] font-bold text-[#112A32]">
                Número de celular com DDD
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="(11) 99999-9999"
                className="w-full px-4 py-3.5 bg-bg-primary border border-border-light rounded-xl text-[15px] outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="revenue" className="text-[14px] font-bold text-[#112A32]">
                Faturamento mensal da empresa
              </label>
              <select
                id="revenue"
                className="w-full px-4 py-3.5 bg-bg-primary border border-border-light rounded-xl text-[15px] text-text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none cursor-pointer"
                required
                defaultValue=""
              >
                <option value="" disabled hidden>Selecione uma faixa de faturamento</option>
                <option value="Abaixo de 10mil">Abaixo de 10mil</option>
                <option value="10mil a 30mil">10mil a 30mil</option>
                <option value="30mil a 70mil">30mil a 70mil</option>
                <option value="70mil a 100mil">70mil a 100mil</option>
                <option value="100mil a 300mil">100mil a 300mil</option>
                <option value="300mil a 500mil">300mil a 500mil</option>
                <option value="Acima de 500mil">Acima de 500mil</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-4 bg-accent hover:bg-accent-light text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-2 group w-full"
            >
              Agendar consultoria gratuita
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-2 mt-2 text-[13px] text-text-muted">
              <Lock size={14} className="text-[#3BB1CA]" />
              <span>Seus dados são tratados com total confidencialidade.</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
