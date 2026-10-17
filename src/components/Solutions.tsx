import React from 'react';
import { Microscope, Layers, TestTube2, Cpu, FileSpreadsheet, GraduationCap, ArrowRight, Check } from 'lucide-react';
import { nanooncoData, Solution } from '../data/nanooncoData';

interface SolutionsProps {
  lang: 'pt' | 'en';
  onSelectService: (serviceName: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ lang, onSelectService }) => {
  const content = nanooncoData[lang].solutions;

  const getServiceIcon = (code: string) => {
    switch (code) {
      case '01':
        return <Microscope className="w-5 h-5 text-[#008B61]" />;
      case '02':
        return <Layers className="w-5 h-5 text-[#008B61]" />;
      case '03':
        return <TestTube2 className="w-5 h-5 text-[#A20C12]" />;
      case '04':
        return <Cpu className="w-5 h-5 text-[#008B61]" />;
      case '05':
        return <FileSpreadsheet className="w-5 h-5 text-[#153D38]" />;
      case '06':
        return <GraduationCap className="w-5 h-5 text-[#008B61]" />;
      default:
        return <Microscope className="w-5 h-5 text-[#008B61]" />;
    }
  };

  const handleRequestQuote = (solution: Solution) => {
    onSelectService(solution.name);
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-white text-[#263238] relative border-b border-slate-200">
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

        {/* 6 Commercial Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.list.map((solution) => (
            <div
              key={solution.id}
              className="p-7 rounded-2xl bg-[#F3F8F6] border border-slate-200 hover:border-[#008B61] hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with Editorial Number and Domain Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getServiceIcon(solution.code)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {solution.code}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#153D38] group-hover:text-[#008B61] transition-colors mb-2">
                  {solution.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {solution.description}
                </p>

                {/* Audience Badge */}
                <div className="mb-4 pb-3 border-b border-slate-200/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                    {lang === 'pt' ? 'Público Alvo' : 'Target Audience'}
                  </span>
                  <span className="text-xs font-medium text-slate-700">
                    {solution.targetAudience}
                  </span>
                </div>

                {/* Applications list */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono uppercase text-[#008B61] font-semibold block">
                    {lang === 'pt' ? 'Entregas & Aplicações' : 'Deliverables & Scope'}
                  </span>
                  <ul className="space-y-1.5">
                    {solution.applications.map((app, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#008B61] shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleRequestQuote(solution)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#008B61] hover:bg-[#007451] rounded-xl transition-all shadow-xs hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>{content.ctaRequestQuote}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
