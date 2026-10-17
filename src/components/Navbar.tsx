import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentLang: 'pt' | 'en';
  onToggleLang: () => void;
  onRequestQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  onRequestQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = currentLang === 'pt' ? [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Nosso Time', href: '#time' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Aplicações', href: '#aplicacoes' },
    { label: 'Inovação', href: '#inovacao' },
    { label: 'Parcerias', href: '#parcerias' },
    { label: 'Contato', href: '#contato' },
  ] : [
    { label: 'Home', href: '#inicio' },
    { label: 'About', href: '#quem-somos' },
    { label: 'Team', href: '#time' },
    { label: 'Technologies', href: '#tecnologias' },
    { label: 'Solutions', href: '#solucoes' },
    { label: 'Applications', href: '#aplicacoes' },
    { label: 'Roadmap', href: '#inovacao' },
    { label: 'Ecosystem', href: '#parcerias' },
    { label: 'Contact', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#153D38]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-[#153D38] border-b border-emerald-900/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
            aria-label="NanoOnco3D - Início"
          >
            <BrandLogo variant="dark" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-emerald-100/90">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-1 whitespace-nowrap shrink-0 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#008B61] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Switcher & Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Toggle */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-emerald-100 bg-white/5 hover:bg-white/15 border border-white/15 rounded-lg transition-colors whitespace-nowrap"
              title={currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
              aria-label="Alternar idioma"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{currentLang === 'pt' ? 'EN' : 'PT'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onRequestQuoteModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#008B61] hover:bg-[#007451] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <span>{currentLang === 'pt' ? 'Solicite uma proposta' : 'Request Proposal'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-emerald-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-white/10 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-emerald-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestQuoteModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#008B61] hover:bg-[#007451] rounded-lg transition-colors"
                >
                  <span>{currentLang === 'pt' ? 'Solicite uma proposta' : 'Request Proposal'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
