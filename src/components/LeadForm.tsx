import { motion } from "motion/react";
import { ArrowRight, Lock, Loader2 } from "lucide-react";

import { useContactForm } from "@/src/hooks/useContactForm";
import { FormField, TextInput, SelectInput } from "@/src/components/ui/FormField";

export default function LeadForm() {
  const {
    register,
    errors,
    loading,
    revenueOptions,
    handleSubmit,
    onSubmit,
  } = useContactForm();

  return (
    <section id="contato" className="py-24 bg-bg-surface overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
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

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-border-light p-8 md:p-12 mb-6 max-w-2xl mx-auto flex flex-col gap-6"
          >
            <FormField label="Nome completo" htmlFor="nome" error={errors.nome?.message}>
              <TextInput
                id="nome"
                type="text"
                placeholder="Seu nome"
                maxLength={120}
                disabled={loading}
                error={errors.nome?.message}
                {...register("nome")}
              />
            </FormField>

            <FormField label="Seu e-mail" htmlFor="email" error={errors.email?.message}>
              <TextInput
                id="email"
                type="email"
                placeholder="voce@empresa.com"
                maxLength={254}
                disabled={loading}
                error={errors.email?.message}
                {...register("email")}
              />
            </FormField>

            <FormField
              label="Número de celular com DDD"
              htmlFor="telefone"
              error={errors.telefone?.message}
            >
              <TextInput
                id="telefone"
                type="tel"
                placeholder="(11) 99999-9999"
                maxLength={30}
                disabled={loading}
                error={errors.telefone?.message}
                {...register("telefone")}
              />
            </FormField>

            <FormField
              label="Faturamento mensal da empresa"
              htmlFor="revenue"
              error={errors.revenue?.message}
            >
              <SelectInput
                id="revenue"
                placeholder="Selecione uma faixa de faturamento"
                options={revenueOptions}
                disabled={loading}
                error={errors.revenue?.message}
                {...register("revenue")}
              />
            </FormField>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-accent hover:bg-accent-light text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-2 group w-full disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Agendar consultoria gratuita
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Privacy note */}
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
