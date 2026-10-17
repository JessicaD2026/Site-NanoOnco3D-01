import React from 'react';
import { ArrowRight, Microscope, Layers, Activity } from 'lucide-react';
import { nanooncoData } from '../data/nanooncoData';

interface HeroProps {
  lang: 'pt' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = nanooncoData[lang].hero;

  return (
    <section id="inicio" className="relative bg-[#153D38] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden text-white">
      {/* Background Microfluidic Channel SVG Trace Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -100 200 C 300 200, 400 350, 720 350 C 1040 350, 1100 220, 1600 220"
            stroke="#008B61"
            strokeWidth="3"
            strokeDasharray="8 8"
            className="animate-fluid-flow"
          />
          <path
            d="M -50 450 C 400 450, 500 550, 900 550 C 1200 550, 1300 400, 1600 400"
            stroke="#008B61"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-fluid-flow"
          />
          {/* Subtle hexagonal lattice mesh in background */}
          <circle cx="720" cy="350" r="160" stroke="#008B61" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="720" cy="350" r="280" stroke="#008B61" strokeWidth="1" strokeOpacity="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Domain Kicker */}
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 mb-4 tracking-wide uppercase">
              <Microscope className="w-4 h-4 shrink-0 text-[#008B61]" />
              <span>{content.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white text-balance mb-6">
              {content.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal mb-5 max-w-2xl">
              {content.subtitle}
            </p>

            {/* Complementary Text */}
            <p className="text-sm text-emerald-200/70 leading-relaxed mb-8 max-w-xl">
              {content.complement}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#tecnologias"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#008B61] text-white hover:bg-[#007451] transition-all shadow-md hover:shadow-lg whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>{content.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#solucoes"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{content.ctaSecondary}</span>
              </a>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-emerald-300 hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap"
              >
                <span>{content.ctaContact}</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Impact Scientific Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-[#0F2D29] group">
              {/* Scientific Microscope Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/src/assets/images/hero_spheroid_microfluidics_1792212591565.jpg"
                  alt="Esferoide Celular 3D em Biochip Microfluídico com Perfusão Contínua"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Atmospheric Vignette Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#153D38] via-transparent to-black/30 pointer-events-none" />

                {/* Live Microfluidic Telemetry HUD Overlay */}
                <div className="absolute top-3 left-3 bg-[#153D38]/85 backdrop-blur-md border border-emerald-500/30 rounded-lg px-3 py-1.5 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-medium text-emerald-100">
                    PDMS Perfusion Chamber · Re &lt; 0.5
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-[#153D38]/85 backdrop-blur-md border border-white/15 rounded-lg px-2.5 py-1 text-[11px] font-mono text-emerald-200">
                  Scale: 200 µm
                </div>
              </div>

              {/* Explanatory Scientific Strip below the image */}
              <div className="p-4 bg-[#11312D] border-t border-emerald-500/20 flex items-center justify-between text-xs text-emerald-200/90 font-mono">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#008B61]" />
                  <span>Biochip Microfluídico 3D</span>
                </span>
                <span className="text-emerald-400">Microambiente Biomimético</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Scientific KPI Strip below Hero */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
                {stat.label}
              </span>
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
