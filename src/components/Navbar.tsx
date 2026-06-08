import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+quero+agendar+minha+consultoria+gratuita+com+a+Zaytek.";

  return (
    <>
      {/* Skip to content - acessibilidade para navegação por teclado */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:text-sm focus:font-medium"
      >
        Pular para o conteúdo principal
      </a>

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/95 backdrop-blur-md border-b border-border-light pb-0 pt-0 shadow-sm"
            : "bg-bg-primary/95 backdrop-blur-md pt-0 pb-0"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" aria-label="Zaytek - Página inicial">
            <img src="/logo.png" alt="Zaytek" className="h-6 md:h-8 w-auto object-contain" />
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            <a
              href="#hero"
              className="text-text-secondary hover:text-accent font-medium transition-colors text-sm cursor-pointer"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-text-secondary hover:text-accent font-medium transition-colors text-sm cursor-pointer"
            >
              Serviços
            </a>
            <a
              href="#projetos"
              className="text-text-secondary hover:text-accent font-medium transition-colors text-sm cursor-pointer"
            >
              Projetos
            </a>
            <a
              href="#processo"
              className="text-text-secondary hover:text-accent font-medium transition-colors text-sm cursor-pointer"
            >
              Processo
            </a>
            <a
              href="#faq"
              className="text-text-secondary hover:text-accent font-medium transition-colors text-sm cursor-pointer"
            >
              FAQ
            </a>
          </nav>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar consultoria gratuita pelo WhatsApp"
            className="hidden lg:inline-flex bg-accent text-white px-5 py-2.5 rounded-md font-medium text-sm hover:bg-accent-light transition-colors cursor-pointer"
          >
            Consultoria gratuita
          </a>

          <button
            className="lg:hidden text-text-primary cursor-pointer p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 top-20 bg-[rgba(13,30,34,0.15)] backdrop-blur-md z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-[72px] right-4 w-[240px] sm:w-[280px] bg-white border border-[rgba(35,82,95,0.08)] shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-3xl flex flex-col p-3 z-50 overflow-hidden"
            role="navigation"
            aria-label="Menu de navegação mobile"
          >
            <a
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="text-text-primary hover:text-accent font-semibold transition-all px-5 py-3.5 rounded-xl hover:bg-[rgba(35,82,95,0.04)] cursor-pointer"
            >
              Início
            </a>
            <div className="h-[1px] bg-[rgba(35,82,95,0.06)] mx-4" aria-hidden="true"></div>
            
            <a
              href="#servicos"
              onClick={() => setIsOpen(false)}
              className="text-text-primary hover:text-accent font-semibold transition-all px-5 py-3.5 rounded-xl hover:bg-[rgba(35,82,95,0.04)] cursor-pointer"
            >
              Serviços
            </a>
            <div className="h-[1px] bg-[rgba(35,82,95,0.06)] mx-4" aria-hidden="true"></div>
            
            <a
              href="#projetos"
              onClick={() => setIsOpen(false)}
              className="text-text-primary hover:text-accent font-semibold transition-all px-5 py-3.5 rounded-xl hover:bg-[rgba(35,82,95,0.04)] cursor-pointer"
            >
              Projetos
            </a>
            <div className="h-[1px] bg-[rgba(35,82,95,0.06)] mx-4" aria-hidden="true"></div>
            
            <a
              href="#processo"
              onClick={() => setIsOpen(false)}
              className="text-text-primary hover:text-accent font-semibold transition-all px-5 py-3.5 rounded-xl hover:bg-[rgba(35,82,95,0.04)] cursor-pointer"
            >
              Processo
            </a>
            <div className="h-[1px] bg-[rgba(35,82,95,0.06)] mx-4" aria-hidden="true"></div>
            
            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="text-text-primary hover:text-accent font-semibold transition-all px-5 py-3.5 rounded-xl hover:bg-[rgba(35,82,95,0.04)] cursor-pointer"
            >
              FAQ
            </a>
          </div>
        )}
      </header>
    </>
  );
}
