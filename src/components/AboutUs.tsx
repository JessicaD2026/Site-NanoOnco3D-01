import React from 'react';
import { Target, Compass, ShieldCheck, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';
import { nanooncoData } from '../data/nanooncoData';

interface AboutUsProps {
  lang: 'pt' | 'en';
}

export const AboutUs: React.FC<AboutUsProps> = ({ lang }) => {
  const content = nanooncoData[lang].about;

  return (
    <section id="quem-somos" className="py-20 lg:py-28 bg-[#F3F8F6] text-[#263238] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#008B61] block mb-2">
            {content.sectionTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#153D38] tracking-tight max-w-3xl text-balance">
            {content.title}
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Institutional narrative */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg font-medium text-[#153D38] leading-relaxed">
              {content.lead}
            </p>

            {content.paragraphs.map((p, idx) => (
              <p key={idx} className="text-base text-slate-700 leading-relaxed font-normal">
                {p}
              </p>
            ))}

            {/* University Origin Callout */}
            <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#008B61]/10 text-[#008B61] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#153D38] mb-1">
                    {lang === 'pt' ? 'DNA Científico & Origem UFF' : 'Scientific DNA & UFF Heritage'}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {lang === 'pt'
                      ? 'Nascida a partir de pesquisas desenvolvidas na Universidade Federal Fluminense, a NanoOnco3D une a excelência da pesquisa acadêmica brasileira à agilidade da bioengenharia de precisão.'
                      : 'Born from academic research developed at Universidade Federal Fluminense, NanoOnco3D unites top Brazilian scientific research with translational bioengineering agility.'}
                  </p>
                </div>
              </div>
            </div>

            {/* One Health Principle Callout */}
            <div className="p-6 bg-[#153D38] text-white rounded-xl border border-emerald-900/50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#008B61] text-white flex items-center justify-center shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {lang === 'pt' ? 'Compromisso One Health' : 'One Health Commitment'}
                  </h3>
                  <p className="text-sm text-emerald-100/80 leading-relaxed">
                    {lang === 'pt'
                      ? 'Reconhecemos a conexão indissociável entre a saúde humana, animal e ambiental. Nossas tecnologias apoiam a redução de modelos animais e o avanço da medicina comparativa.'
                      : 'We recognize the profound link between human, veterinary, and environmental health. Our microfluidic platforms support the 3Rs principles and comparative biomedical progress.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Values Bento */}
          <div className="lg:col-span-6 space-y-6">
            {/* Mission Card */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-[#008B61]/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#008B61]/10 text-[#008B61] flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-[#153D38]">
                  {content.missionTitle}
                </h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {content.mission}
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-[#008B61]/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#153D38]/10 text-[#153D38] flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-[#153D38]">
                  {content.visionTitle}
                </h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {content.vision}
              </p>
            </div>

            {/* Values Grid */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#A20C12]/10 text-[#A20C12] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-[#153D38]">
                  {content.valuesTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {content.values.map((v, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex flex-col justify-start">
                    <span className="text-xs font-bold text-[#153D38] flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008B61] shrink-0" />
                      <span>{v.name}</span>
                    </span>
                    <span className="text-[12px] text-slate-600 leading-snug">
                      {v.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
