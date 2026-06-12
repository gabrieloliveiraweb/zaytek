import React, { useState } from 'react';
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

export default function ResponsiveHeroBanner() {
    const data = {
        logoUrl: "/logo2.png",
        backgroundImageUrl: "/globe-bg-hero.png",
        navLinks:[
                        { label: "Início", href: "#hero", isActive: true },
                        { label: "Serviços", href: "#servicos" },
                        { label: "Sobre", href: "#sobre" },
                        { label: "FAQ", href: "#faq" },
                        { label: "Contato", href: "#contato"}
        ],
        ctaButtonText: "Consultoria gratuita",
        ctaButtonHref: "https://wa.me/5541920047176?text=Oi+Gabriel%2C+quero+agendar+minha+consultoria+gratuita+com+a+Zaytek.",
        badgeText: "ASSESSORIA DIGITAL",
        title: "Soluções digitais personalizadas",
        titleLine2: "para empresas crescerem com mais estratégia",
        description: "Agende uma consultoria gratuita e receba um plano alinhado às necessidades e objetivos do seu negócio.",
        primaryButtonText: "Agendar consultoria gratuita",
        primaryButtonHref: "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vim+pelo+site+e+quero+agendar+minha+consultoria+gratuita.",
        secondaryButtonText: "Diagnóstico gratuito · Sem compromisso",
    } 
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-[100svh] overflow-hidden relative">
            <img
                src={data.backgroundImageUrl}
                alt=""
                className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
            />
            {/* Overlay adjusted for Zaytek identity */}
            <div className="absolute inset-0 bg-[#0D1E22]/60 z-0" />

            <header className="z-50 xl:top-4 relative">
                <div className="mx-6">
                    <div className="flex items-center justify-between pt-4 px-6">
                        <a
                            href="#hero"
                            className="inline-flex items-center justify-center bg-center"
                        >
                            <img
                                src={data.logoUrl} alt="Logo Zaytek" aria-label="Logo"
                                className="md:w-32 md:h-12 w-20 h-12 sm:w-24 object-contain"
                            />
                        </a>

                        <nav className="hidden lg:flex items-center gap-2">
                            <div className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-2 ring-1 ring-white/10 backdrop-blur">
                                {data.navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className={`px-3 py-2 text-sm font-medium hover:text-[#4FD1C5] font-sans transition-colors ${link.isActive ? 'text-[#4FD1C5]' : 'text-white/80'
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href={data.ctaButtonHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-2 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-light font-sans transition-colors"
                                >
                                    {data.ctaButtonText}
                                </a>
                            </div>
                        </nav>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden inline-flex h-10 w-14 items-center justify-center rounded-full backdrop-blur"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen
                                ? <X size={24} strokeWidth={1.5} className='text-white' />
                                : <Menu size={24} strokeWidth={1.5} className='text-white' />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-[rgba(13,30,34,0.8)] backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
                    <div className="absolute top-[80px] right-6 left-6 bg-white rounded-3xl p-4 flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
                        {data.navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-text-primary hover:text-accent font-semibold px-4 py-3 border-b border-[rgba(35,82,95,0.06)] last:border-0"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <div className="z-10 relative flex flex-col justify-center min-h-[calc(100svh-80px)] w-full max-w-[1000px] mx-auto px-6 items-center text-center pb-16">
                {data.badgeText && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-[#4FD1C5]/10 px-4 py-2 ring-1 ring-[#4FD1C5]/30 backdrop-blur-md animate-fade-slide-in-1">
                            <span className="text-[12px] font-bold text-[#4FD1C5] tracking-widest uppercase">
                                {data.badgeText}
                            </span>
                        </div>
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-6 tracking-tight"
                >
                    {data.title} {data.titleLine2}
                </motion.h1>

                {data.description && (
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="text-[14px] md:text-[16px] lg:text-[18px] text-[#D1D5DB] leading-[1.6] mb-[40px] max-w-[650px] font-light"
                    >
                        {data.description}
                    </motion.p>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col items-center justify-center w-full mb-6"
                >
                    <a
                        href={data.primaryButtonHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#4FD1C5] text-[#0D1E22] px-10 py-4 w-full sm:w-auto min-w-[280px] rounded-[6px] font-bold text-[16px] hover:bg-[#38b2a5] shadow-[0_0_20px_rgba(79,209,197,0.3)] hover:shadow-[0_0_30px_rgba(79,209,197,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group gap-2"
                    >
                        {data.primaryButtonText}
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </a>
                </motion.div>


                {data.secondaryButtonText && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.6 }}
                        className="text-[13px] text-[#9CA3AF] hidden sm:flex items-center justify-center gap-2"
                    >
                        {data.secondaryButtonText.split('·').map((part, index, arr) => (
                            <React.Fragment key={index}>
                                <span>{part.trim()}</span>
                                {index < arr.length - 1 && <span>·</span>}
                            </React.Fragment>
                        ))}
                    </motion.div>
                )}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-white/50"
            >
                <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                <ChevronDown size={28} />
                </motion.div>
            </motion.div>

        </section>
    );
};

