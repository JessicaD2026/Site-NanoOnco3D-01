import React, { useState } from 'react';
import { Layers, Cpu, Radio, Network, CheckCircle2, AlertCircle, ArrowRight, Gauge, Activity, Droplets } from 'lucide-react';
import { nanooncoData } from '../data/nanooncoData';

interface TechnologiesProps {
  lang: 'pt' | 'en';
}

export const Technologies: React.FC<TechnologiesProps> = ({ lang }) => {
  const content = nanooncoData[lang].technologies;
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = content.circuitSteps[activeStepIndex];

  return (
    <section id="tecnologias" className="py-20 lg:py-28 bg-[#F3F8F6] text-[#263238] relative">
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

        {/* 4 Technology Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {content.list.map((tech) => {
            const isDev = tech.status === 'development';
            return (
              <div
                key={tech.id}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#008B61]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md border ${
                        isDev
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      }`}
                    >
                      {tech.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {isDev ? 'P&D Integrado' : 'Pronto para Aplicação'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#153D38] mb-2 flex items-center gap-2">
                    {tech.id === 'cultivo-3d' && <Layers className="w-5 h-5 text-[#008B61]" />}
                    {tech.id === 'microfluidica' && <Droplets className="w-5 h-5 text-[#008B61]" />}
                    {tech.id === 'biossensores' && <Radio className="w-5 h-5 text-[#A20C12]" />}
                    {tech.id === 'automacao' && <Cpu className="w-5 h-5 text-[#153D38]" />}
                    <span>{tech.title}</span>
                  </h3>

                  <p className="text-sm font-medium text-slate-700 mb-3">
                    {tech.summary}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {tech.description}
                  </p>

                  {/* Key Applications List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      {lang === 'pt' ? 'Aplicações & Recursos' : 'Applications & Features'}
                    </span>
                    <ul className="space-y-1.5">
                      {tech.applications.slice(0, 5).map((app, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#008B61] shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Metrics / Specifications footer */}
                {tech.metrics && (
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 bg-slate-50 p-3 rounded-lg">
                    {tech.metrics.map((m, i) => (
                      <div key={i}>
                        <span className="text-[10px] font-mono uppercase text-slate-500 block">
                          {m.label}
                        </span>
                        <span className="text-xs font-semibold text-[#153D38]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Interactive Fluidic Circuit Animated Scheme */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#153D38] text-white shadow-xl border border-emerald-500/20">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 uppercase mb-2">
              <Activity className="w-4 h-4" />
              <span>{content.circuitSectionTitle}</span>
            </div>
            <p className="text-sm text-emerald-100/80 leading-relaxed font-normal">
              {content.circuitDescription}
            </p>
          </div>

          {/* Interactive Flow Stepper Navigation */}
          <div className="relative mb-8 overflow-x-auto pb-4">
            <div className="flex items-center justify-between min-w-[700px] gap-2">
              {content.circuitSteps.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`flex-1 p-3 rounded-xl border text-left transition-all relative ${
                      isActive
                        ? 'bg-[#008B61] border-emerald-300 text-white shadow-md'
                        : 'bg-white/5 border-white/10 text-emerald-200/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono opacity-80">0{idx + 1}</span>
                      {idx < content.circuitSteps.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                      )}
                    </div>
                    <span className="text-xs font-bold block truncate">{step.name}</span>
                    <span className="text-[10px] font-mono opacity-70 truncate block">
                      {step.role}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Microfluidic Connecting Pulse Line */}
            <div className="mt-4 px-2">
              <svg className="w-full h-3" viewBox="0 0 700 12" fill="none">
                <line
                  x1="10"
                  y1="6"
                  x2="690"
                  y2="6"
                  stroke="#008B61"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  className="animate-fluid-flow"
                />
              </svg>
            </div>
          </div>

          {/* Active Component Telemetry & Biological Role Details */}
          {activeStep && (
            <div className="p-6 rounded-xl bg-[#0E2824] border border-emerald-500/30 grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-in fade-in duration-200">
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Estágio 0{activeStepIndex + 1}
                  </span>
                  <h4 className="text-xl font-extrabold text-white">
                    {activeStep.name}
                  </h4>
                  <span className="text-xs font-mono text-emerald-400">
                    — {activeStep.role}
                  </span>
                </div>

                <p className="text-sm text-emerald-100/90 leading-relaxed font-normal">
                  {activeStep.detail}
                </p>

                <div className="p-3 rounded-lg bg-black/25 border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">
                    Telemetria Operacional & Especificação
                  </span>
                  <span className="text-xs font-mono text-slate-200">
                    {activeStep.telemetry}
                  </span>
                </div>
              </div>

              {/* Controlled Parameters Monitor Card */}
              <div className="md:col-span-5 bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-xs font-mono font-semibold text-emerald-300 flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>Controle de Parâmetros</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400/80">
                    STATUS: CALIBRADO
                  </span>
                </div>

                <div className="space-y-2.5">
                  {activeStep.parameters.map((param, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-emerald-200/70 font-mono">{param.name}</span>
                      <span className="font-mono font-semibold text-white bg-black/30 px-2 py-0.5 rounded border border-white/5">
                        {param.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
