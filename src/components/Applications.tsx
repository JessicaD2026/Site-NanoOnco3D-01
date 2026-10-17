import React, { useState } from 'react';
import { Stethoscope, Pill, Sparkles, Dog, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { nanooncoData, ApplicationArea } from '../data/nanooncoData';

interface ApplicationsProps {
  lang: 'pt' | 'en';
}

export const Applications: React.FC<ApplicationsProps> = ({ lang }) => {
  const content = nanooncoData[lang].applications;
  const [selectedAppId, setSelectedAppId] = useState<string>('medicina-personalizada');

  const selectedApp = content.list.find((app) => app.id === selectedAppId) || content.list[0];

  const getAppIcon = (id: string) => {
    switch (id) {
      case 'medicina-personalizada':
        return <Stethoscope className="w-5 h-5 text-[#A20C12]" />;
      case 'industria-farmaceutica':
        return <Pill className="w-5 h-5 text-[#008B61]" />;
      case 'industria-cosmetica':
        return <Sparkles className="w-5 h-5 text-[#153D38]" />;
      case 'medicina-veterinaria':
        return <Dog className="w-5 h-5 text-[#008B61]" />;
      default:
        return <Stethoscope className="w-5 h-5 text-[#008B61]" />;
    }
  };

  return (
    <section id="aplicacoes" className="py-20 lg:py-28 bg-[#F3F8F6] text-[#263238] relative">
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

        {/* 4 Interactive Sector Switcher Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {content.list.map((app) => {
            const isSelected = app.id === selectedAppId;
            return (
              <button
                key={app.id}
                onClick={() => setSelectedAppId(app.id)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#008B61] shadow-md ring-2 ring-[#008B61]/20'
                    : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                    {getAppIcon(app.id)}
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#008B61]" />
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#153D38] line-clamp-1">
                    {app.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 line-clamp-1">
                    {app.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Application In-Depth Showcase Block */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 animate-in fade-in duration-300">
          {/* Visual Scientific Photo Half */}
          <div className="lg:col-span-5 relative bg-slate-900 min-h-[300px] lg:min-h-full">
            <img
              src={selectedApp.image}
              alt={selectedApp.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                {selectedApp.subtitle}
              </span>
              <h3 className="text-xl font-extrabold tracking-tight">
                {selectedApp.title}
              </h3>
            </div>
          </div>

          {/* Details & Applications Content Half */}
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#008B61]/10 text-xs font-mono font-semibold text-[#008B61]">
                {getAppIcon(selectedApp.id)}
                <span>{selectedApp.subtitle}</span>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {selectedApp.description}
              </p>

              {/* Specific Workflow for Personalized Medicine */}
              {selectedApp.workflow && (
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
                    {lang === 'pt' ? 'Fluxo Tecnológico Translacional' : 'Translational Workflow'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                    {selectedApp.workflow.map((st) => (
                      <div key={st.step} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#008B61] block mb-1">
                            0{st.step}
                          </span>
                          <span className="text-xs font-bold text-[#153D38] block leading-tight mb-1">
                            {st.title}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 leading-snug">
                          {st.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Deliverables Bullet Points */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  {lang === 'pt' ? 'Linhas de Aplicação Prática' : 'Practical Application Lines'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedApp.applications.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008B61] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regulatory / Ethical Note */}
              {selectedApp.regulatoryNote && (
                <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200/80 flex items-start gap-3">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-900 leading-relaxed font-normal">
                    {selectedApp.regulatoryNote}
                  </p>
                </div>
              )}
            </div>

            {/* Quick Action Button */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                {lang === 'pt' ? 'Projetos sob demanda para centros e indústrias' : 'On-demand projects for institutions'}
              </span>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#008B61] hover:bg-[#007451] transition-colors"
              >
                <span>{lang === 'pt' ? 'Consultar viabilidade' : 'Check feasibility'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
