import React from 'react';
import { Building2, Rocket, Handshake, ArrowRight, Award } from 'lucide-react';
import { nanooncoData } from '../data/nanooncoData';

interface EcosystemProps {
  lang: 'pt' | 'en';
  onPartnerClick: () => void;
}

export const Ecosystem: React.FC<EcosystemProps> = ({ lang, onPartnerClick }) => {
  const content = nanooncoData[lang].ecosystem;

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Building2 className="w-5 h-5 text-[#008B61]" />;
      case 1:
        return <Rocket className="w-5 h-5 text-[#008B61]" />;
      case 2:
        return <Handshake className="w-5 h-5 text-[#A20C12]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#008B61]" />;
    }
  };

  return (
    <section id="parcerias" className="py-20 lg:py-28 bg-white text-[#263238] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#008B61] block mb-2">
            {content.sectionTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#153D38] tracking-tight mb-4">
            {content.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            {content.subtitle}
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {content.categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#F3F8F6] border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="text-base font-bold text-[#153D38]">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 mb-6 font-mono">
                  {cat.description}
                </p>

                <div className="space-y-3">
                  {cat.partners.map((partner, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#008B61]/40 transition-colors"
                    >
                      <h4 className="text-xs font-bold text-[#153D38] mb-0.5">
                        {partner.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        {partner.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Funding & Grants Row */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-200 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#008B61]/10 text-[#008B61] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#153D38]">
                {lang === 'pt' ? 'Programas de Apoio & Fomento' : 'Grant Programs & Funding Support'}
              </h4>
              <p className="text-xs text-slate-500">
                {lang === 'pt'
                  ? 'Iniciativas de inovação e pesquisa amparadas pelas principais agências de fomento'
                  : 'Innovation and research supported by leading national science agencies'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {content.fundingAgencies.map((agency) => (
              <span
                key={agency}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono font-bold text-[#153D38] shadow-2xs"
              >
                {agency}
              </span>
            ))}
          </div>
        </div>

        {/* Partner CTA */}
        <div className="text-center">
          <button
            onClick={onPartnerClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#008B61] hover:bg-[#007451] transition-all shadow-sm hover:shadow"
          >
            <span>{content.ctaPartner}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
