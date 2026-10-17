import React from 'react';
import { Layers, Sliders, GraduationCap, Dna, Flag, Globe2 } from 'lucide-react';
import { nanooncoData } from '../data/nanooncoData';

interface DifferentialsProps {
  lang: 'pt' | 'en';
}

export const Differentials: React.FC<DifferentialsProps> = ({ lang }) => {
  const content = nanooncoData[lang].differentials;

  const getDifferentialIcon = (id: string) => {
    switch (id) {
      case 'diff-1':
        return <Layers className="w-5 h-5 text-[#008B61]" />;
      case 'diff-2':
        return <Sliders className="w-5 h-5 text-[#008B61]" />;
      case 'diff-3':
        return <GraduationCap className="w-5 h-5 text-[#153D38]" />;
      case 'diff-4':
        return <Dna className="w-5 h-5 text-[#A20C12]" />;
      case 'diff-5':
        return <Flag className="w-5 h-5 text-[#008B61]" />;
      case 'diff-6':
        return <Globe2 className="w-5 h-5 text-[#153D38]" />;
      default:
        return <Layers className="w-5 h-5 text-[#008B61]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white text-[#263238] relative border-b border-slate-200">
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

        {/* 6 Competitive Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#F3F8F6] border border-slate-200 hover:border-[#008B61]/50 hover:shadow-md transition-all flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-xs">
                {getDifferentialIcon(item.id)}
              </div>

              <h3 className="text-base font-bold text-[#153D38] mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
