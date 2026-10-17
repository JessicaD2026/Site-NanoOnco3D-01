import React, { useState } from 'react';
import { CheckCircle2, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { nanooncoData } from '../data/nanooncoData';

interface RoadmapProps {
  lang: 'pt' | 'en';
}

export const Roadmap: React.FC<RoadmapProps> = ({ lang }) => {
  const content = nanooncoData[lang].roadmap;
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(content.milestones.length - 1);

  const activeMilestone = content.milestones[selectedMilestoneIndex];

  return (
    <section id="inovacao" className="py-20 lg:py-28 bg-[#F3F8F6] text-[#263238] relative">
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

        {/* Horizontal Timeline Track */}
        <div className="relative mb-12">
          {/* Timeline connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-300 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {content.milestones.map((m, idx) => {
              const isSelected = idx === selectedMilestoneIndex;
              const isFuture = m.status === 'future';

              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestoneIndex(idx)}
                  className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#008B61] shadow-lg ring-2 ring-[#008B61]/30 -translate-y-1'
                      : isFuture
                      ? 'bg-emerald-50/70 border-emerald-300 text-[#153D38]'
                      : 'bg-white/80 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded ${
                        isFuture
                          ? 'bg-[#008B61] text-white'
                          : isSelected
                          ? 'bg-[#153D38] text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {m.year}
                    </span>
                    {isFuture ? (
                      <Compass className="w-3.5 h-3.5 text-[#008B61]" />
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008B61]" />
                    )}
                  </div>

                  <h3 className="text-xs font-bold text-[#153D38] line-clamp-1 mb-1">
                    {m.title}
                  </h3>

                  <span className="text-[10px] font-mono text-slate-500">
                    {isFuture ? (lang === 'pt' ? 'Em Expansão' : 'Future Horizon') : (lang === 'pt' ? 'Consolidado' : 'Delivered')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Deep-Dive Box */}
        {activeMilestone && (
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-md animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold px-3 py-1 rounded bg-[#008B61] text-white">
                    {activeMilestone.year}
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                    {activeMilestone.status === 'future'
                      ? (lang === 'pt' ? 'Próximos Passos & Metas' : 'Future Horizon & Scale')
                      : (lang === 'pt' ? 'Marco Histórico Realizado' : 'Historical Milestone')}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#153D38] tracking-tight">
                  {activeMilestone.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {activeMilestone.description}
                </p>
              </div>

              {/* Deliverables Box */}
              <div className="md:col-span-5 p-6 rounded-xl bg-[#F3F8F6] border border-slate-200">
                <span className="text-xs font-mono uppercase font-bold text-[#153D38] block mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#008B61]" />
                  <span>{lang === 'pt' ? 'Entregas e Objetivos' : 'Key Deliverables'}</span>
                </span>
                <ul className="space-y-2">
                  {activeMilestone.deliverables.map((del, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-[#008B61] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
