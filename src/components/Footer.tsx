import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Mail, Phone, MapPin, Linkedin, Globe, Shield, ExternalLink } from 'lucide-react';
import { nanooncoData } from '../data/nanooncoData';

interface FooterProps {
  lang: 'pt' | 'en';
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenPrivacy }) => {
  const content = nanooncoData[lang].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#153D38] text-white border-t border-emerald-900/50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Identity & Purpose */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="dark" showTagline={true} />
            <p className="text-xs text-emerald-200/80 leading-relaxed font-normal max-w-sm">
              {content.tagline}
            </p>
            <p className="text-[11px] text-emerald-100/60 leading-relaxed">
              {lang === 'pt'
                ? 'DeepTech brasileira integrando biologia celular 3D, microfluídica, automação e bioengenharia translacional.'
                : 'Brazilian DeepTech engineering integrated 3D biology, microfluidics, automation, and translational bioassays.'}
            </p>
          </div>

          {/* Column 2: Navigation Mirror */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              {content.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  {lang === 'pt' ? 'Início' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="hover:text-white transition-colors">
                  {lang === 'pt' ? 'Quem Somos' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#time" className="hover:text-white transition-colors">
                  {lang === 'pt' ? 'Nosso Time' : 'Our Team'}
                </a>
              </li>
              <li>
                <a href="#tecnologias" className="hover:text-white transition-colors">
                  {lang === 'pt' ? 'Tecnologias' : 'Technologies'}
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  {lang === 'pt' ? 'Soluções' : 'Solutions'}
                </a>
              </li>
              <li>
                <a href="#aplicacoes" className="hover:text-white transition-colors">
                  {lang === 'pt' ? 'Aplicações' : 'Applications'}
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  {lang === 'pt' ? 'Contato' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              {content.solutionsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  {lang === 'pt' ? 'Cultivo Celular 3D & Esferoides' : '3D Cell Culture & Spheroids'}
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  {lang === 'pt' ? 'Biochips & Microfluídica' : 'Biochips & Microfluidics'}
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  {lang === 'pt' ? 'P&D sob Demanda & Triagem' : 'On-Demand R&D Screening'}
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  {lang === 'pt' ? 'Consultoria Técnico-Científica' : 'Scientific Consulting'}
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  {lang === 'pt' ? 'Capacitação & Cursos' : 'Training & Workspaces'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              {content.contactTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-100/80 font-mono">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#008B61] shrink-0" />
                <a href="tel:+5521982285680" className="hover:text-white transition-colors">
                  +55 (21) 98228-5680
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#008B61] shrink-0" />
                <a
                  href="mailto:dornelas.jessica@nanoonco3d.com.br"
                  className="hover:text-white transition-colors break-all"
                >
                  dornelas.jessica@nanoonco3d.com.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-[#008B61] shrink-0" />
                <a
                  href="https://www.linkedin.com/company/nanoonco3d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>linkedin.com/company/nanoonco3d</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#008B61] shrink-0" />
                <a
                  href="https://www.nanoonco3d.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.nanoonco3d.com.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#008B61] shrink-0" />
                <span>Rio de Janeiro, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-emerald-200/60 font-mono">
          <div>
            © {currentYear} NanoOnco3D. {content.copyright}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors flex items-center gap-1 focus-visible:outline-none"
            >
              <Shield className="w-3 h-3 text-emerald-400" />
              <span>{content.privacyPolicy}</span>
            </button>
            <span>·</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors focus-visible:outline-none"
            >
              {content.cookiesPolicy}
            </button>
            <span>·</span>
            <span>CNPJ & Registro em Ciência & Tecnologia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
