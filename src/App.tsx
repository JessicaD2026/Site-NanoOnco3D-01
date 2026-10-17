import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Team } from './components/Team';
import { Technologies } from './components/Technologies';
import { Solutions } from './components/Solutions';
import { Applications } from './components/Applications';
import { Differentials } from './components/Differentials';
import { Roadmap } from './components/Roadmap';
import { Ecosystem } from './components/Ecosystem';
import { KnowledgeNews } from './components/KnowledgeNews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { PrivacyModal } from './components/PrivacyModal';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForQuote(serviceName);
  };

  const handlePartnerClick = () => {
    setSelectedServiceForQuote('Parceria Institucional ou Cooperação de P&D');
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F8F6] text-[#263238] selection:bg-[#008B61] selection:text-white">
      {/* Fixed Navigation Header */}
      <Navbar
        currentLang={lang}
        onToggleLang={toggleLanguage}
        onRequestQuoteModal={() => setIsProposalModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero lang={lang} />

        {/* 2. Quem Somos (About Us) */}
        <AboutUs lang={lang} />

        {/* 3. Nosso Time (Team) */}
        <Team lang={lang} />

        {/* 4. Tecnologias (Technologies & Interactive Perfusion Circuit) */}
        <Technologies lang={lang} />

        {/* 5. Soluções e Serviços (Solutions & Services) */}
        <Solutions lang={lang} onSelectService={handleSelectService} />

        {/* 6. Áreas de Aplicação (Applications) */}
        <Applications lang={lang} />

        {/* 7. Diferenciais Competitivos (Differentials) */}
        <Differentials lang={lang} />

        {/* 8. Inovação e Roadmap (Roadmap) */}
        <Roadmap lang={lang} />

        {/* 9. Parcerias e Ecossistema (Ecosystem) */}
        <Ecosystem lang={lang} onPartnerClick={handlePartnerClick} />

        {/* 10. Pesquisa, Conhecimento e Notícias (Knowledge & News) */}
        <KnowledgeNews lang={lang} />

        {/* 11. Contato e Conversão Comercial (Contact & Leads) */}
        <ContactSection lang={lang} preselectedService={selectedServiceForQuote} />
      </main>

      {/* Institutional Footer */}
      <Footer lang={lang} onOpenPrivacy={() => setIsPrivacyModalOpen(true)} />

      {/* Modals & Utilities */}
      <ProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
        lang={lang}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        lang={lang}
      />

      {/* Smooth Back to Top */}
      <BackToTop />
    </div>
  );
}
