import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vi+os+projetos+no+site+e+quero+conversar+sobre+o+meu+neg%C3%B3cio.";

  const projects = [
    {
      id: 1,
      num: "01",
      tag: "Site Institucional",
      title: "Ponto do Sabor",
      image: "/restaurante_mockup.webp",
      context:
        "Restaurante local que dependia só do boca a boca. Ninguém sabia que existia fora do bairro.",
      resultado: "Passou a receber contatos pelo digital ainda na semana do lançamento",
      link: "https://pontodosabor.com",
    },
    {
      id: 2,
      num: "02",
      tag: "Site Institucional",
      title: "Academia Worldfit",
      image: "/gym_mockup.webp",
      context:
        "Academia sem presença digital. Novos alunos só chegavam por quem já conhecia fisicamente.",
      resultado: "Ganhou presença no Google e passou a receber alunos que nunca tinham ouvido falar da academia.",
      link: "https://academiaworldfit.com",
    },
    {
      id: 3,
      num: "03",
      tag: "Cardápio Digital Premium",
      title: "Brasa & Brioche",
      image: "/hamb_mockup.webp",
      context:
        "Hamburgueria que recebia pedidos pelo direct e WhatsApp sem nenhuma organização ou presença profissional.",
      resultado:
        "Clientes pedem pelo site com autonomia. Menos mensagem, menos confusão, mais venda.",
      link: "https://brasaebrioche.vercel.app",
    },
  ];

  return (
    <section id="projetos" className="py-28 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-[rgba(35,82,95,0.15)] bg-[rgba(35,82,95,0.06)] mb-6 text-[#5E757D] text-[11px] font-bold tracking-widest uppercase"
          >
            Projetos
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[30px] md:text-[34px] font-display font-bold text-[#255259] leading-[1.2] mb-4 max-w-2xl mx-auto"
          >
            Cada projeto começa com um problema real e termina com um negócio
            mais forte.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] text-text-secondary max-w-[500px] mx-auto"
          >
            Veja como transformamos desafios reais em estruturas digitais que
            funcionam de verdade.
          </motion.p>
        </div>

        <div className="max-w-[1100px] mx-auto flex flex-col w-full">
          {projects.map((project, index) => {
            const isEven = index % 2 !== 0; // index 1 is Project 02
            return (
              <div key={project.id} className="relative w-full flex flex-col">
                <div className="w-full flex flex-col lg:flex-row items-stretch">
                  {/* MOBILE & TABLET (always image then content) */}
                  <div className="lg:hidden flex flex-col w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-15%" }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      className="w-full aspect-[16/9] rounded-[14px] overflow-hidden border border-[rgba(35,82,95,0.12)] mb-[20px] cursor-pointer"
                      onClick={() => setSelectedImage(project.image)}
                    >
                      <img
                        src={project.image}
                        alt={`Mockup do projeto ${project.title}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-15%" }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                        delay: 0.1,
                      }}
                      className="w-full px-[20px] pb-[12px] flex flex-col justify-center"
                    >
                      <div>
                        <span className="inline-flex bg-[rgba(35,82,95,0.08)] text-[#23525F] font-sans font-[600] text-[11px] uppercase tracking-[0.08em] rounded-[100px] px-[14px] py-[4px] w-fit">
                          {project.tag}
                        </span>
                      </div>
                      <h3 className="font-display font-[700] text-[26px] text-[#0D1E22] mt-[12px] leading-[1.2]">
                        {project.title}
                      </h3>
                      <p className="font-sans font-[400] text-[15px] text-[#4A6068] mt-[10px] leading-[1.65]">
                        {project.context}
                      </p>
                      <div className="mt-[20px] border-l-[2px] border-[#23525F] pl-[14px]">
                        <p className="font-sans font-[600] text-[15px] text-[#23525F] leading-[1.5]">
                          {project.resultado}
                        </p>
                      </div>
                      <div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-[20px] inline-flex items-center font-sans font-[500] text-[14px] text-[#23525F] hover:gap-[10px] transition-all duration-200 ease-in-out gap-[6px]"
                        >
                          Ver projeto <ArrowRight size={14} />
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  {/* DESKTOP ALTERNATING (Left aligned Content or Right aligned Content) */}
                  <div className="hidden lg:flex w-full items-stretch">
                    {!isEven ? (
                      <>
                        {/* Project 01, 03: [ 01 ] [ content ] [ image ] */}
                        <motion.div
                          className="w-[8%] flex items-center justify-center shrink-0"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, margin: "-15%" }}
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        >
                          <span className="font-sans font-[800] text-[72px] text-[rgba(35,82,95,0.12)]">
                            {project.num}
                          </span>
                        </motion.div>

                        <motion.div
                          className="w-[42%] flex flex-col justify-center px-[40px] py-[32px] shrink-0"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-15%" }}
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        >
                          <div>
                            <span className="inline-flex bg-[rgba(35,82,95,0.08)] text-[#23525F] font-sans font-[600] text-[11px] uppercase tracking-[0.08em] rounded-[100px] px-[14px] py-[4px] w-fit">
                              {project.tag}
                            </span>
                          </div>
                          <h3 className="font-display font-[700] text-[26px] text-[#0D1E22] mt-[12px] leading-[1.2]">
                            {project.title}
                          </h3>
                          <p className="font-sans font-[400] text-[15px] text-[#4A6068] mt-[10px] leading-[1.65]">
                            {project.context}
                          </p>
                          <div className="mt-[20px] border-l-[2px] border-[#23525F] pl-[14px]">
                            <p className="font-sans font-[600] text-[15px] text-[#23525F] leading-[1.5]">
                              {project.resultado}
                            </p>
                          </div>
                          <div>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-[20px] inline-flex items-center font-sans font-[500] text-[14px] text-[#23525F] hover:gap-[10px] transition-all duration-200 ease-in-out gap-[6px]"
                            >
                              Ver projeto <ArrowRight size={14} />
                            </a>
                          </div>
                        </motion.div>

                        <motion.div
                          className="w-[50%] aspect-[4/3] rounded-[14px] overflow-hidden border border-[rgba(35,82,95,0.12)] shrink-0 group cursor-pointer"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-15%" }}
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                          onClick={() => setSelectedImage(project.image)}
                        >
                           <img
                            src={project.image}
                            alt={`Mockup do projeto ${project.title}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[400ms] ease-in-out"
                          />

                        </motion.div>
                      </>
                    ) : (
                      <>
                        {/* Project 02: [ image ] [ content ] [ 02 ] */}
                        <motion.div
                          className="w-[50%] aspect-[4/3] rounded-[14px] overflow-hidden border border-[rgba(35,82,95,0.12)] shrink-0 group cursor-pointer"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-15%" }}
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                          onClick={() => setSelectedImage(project.image)}
                        >
                           <img
                            src={project.image}
                            alt={`Mockup do projeto ${project.title}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[400ms] ease-in-out"
                          />

                        </motion.div>

                        <motion.div
                          className="w-[42%] flex flex-col justify-center px-[40px] py-[32px] shrink-0"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-15%" }}
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        >
                          <div>
                            <span className="inline-flex bg-[rgba(35,82,95,0.08)] text-[#23525F] font-sans font-[600] text-[11px] uppercase tracking-[0.08em] rounded-[100px] px-[14px] py-[4px] w-fit">
                              {project.tag}
                            </span>
                          </div>
                          <h3 className="font-display font-[700] text-[26px] text-[#0D1E22] mt-[12px] leading-[1.2]">
                            {project.title}
                          </h3>
                          <p className="font-sans font-[400] text-[15px] text-[#4A6068] mt-[10px] leading-[1.65]">
                            {project.context}
                          </p>
                          <div className="mt-[20px] border-l-[2px] border-[#23525F] pl-[14px]">
                            <p className="font-sans font-[600] text-[15px] text-[#23525F] leading-[1.5]">
                              {project.resultado}
                            </p>
                          </div>
                          <div>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-[20px] inline-flex items-center font-sans font-[500] text-[14px] text-[#23525F] hover:gap-[10px] transition-all duration-200 ease-in-out gap-[6px]"
                            >
                              Ver projeto <ArrowRight size={14} />
                            </a>
                          </div>
                        </motion.div>

                        <motion.div
                          className="w-[8%] flex items-center justify-center shrink-0"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, margin: "-15%" }}
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        >
                          <span className="font-sans font-[800] text-[72px] text-[rgba(35,82,95,0.12)]">
                            {project.num}
                          </span>
                        </motion.div>
                      </>
                    )}
                  </div>
                </div>

                {/* Divider between projects except last */}
                {index < projects.length - 1 && (
                  <div className="w-full h-[1px] bg-[rgba(35,82,95,0.08)] my-[32px] lg:my-[48px]"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 relative z-30 w-full px-4">
          <p className="text-text-secondary text-[15px] text-center max-w-[280px] sm:max-w-none">
            Tem um desafio parecido? Vamos entender o que faz sentido para o seu caso
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-8 py-3.5 rounded-md font-medium text-[15px] hover:bg-accent-light transition-colors flex items-center gap-2 group shadow-md"
          >
            Falar com a Zaytek{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Visualização expandida do projeto"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors cursor-pointer p-2 rounded-full hover:bg-white/10"
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar visualização do projeto"
            >
              <X size={32} aria-hidden="true" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              src={selectedImage}
              alt="Projeto expandido"
              className="max-w-full max-h-[90vh] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
