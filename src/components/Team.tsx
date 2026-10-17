import React, { useState } from 'react';
import { Linkedin, Award, GraduationCap, Building2, User, ChevronRight, X, ExternalLink } from 'lucide-react';
import { nanooncoData, TeamMember } from '../data/nanooncoData';

interface TeamProps {
  lang: 'pt' | 'en';
}

export const Team: React.FC<TeamProps> = ({ lang }) => {
  const content = nanooncoData[lang].team;
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // High-fidelity scientific institutional monogram placeholder
  const renderInstitutionalAvatar = (member: TeamMember, size: 'large' | 'regular') => {
    const isLarge = size === 'large';
    const initials = member.name
      .split(' ')
      .filter((_, i, arr) => i === 0 || i === arr.length - 1)
      .map((n) => n[0])
      .join('');

    return (
      <div
        className={`${
          isLarge ? 'w-24 h-24 sm:w-28 sm:h-28 text-2xl' : 'w-16 h-16 text-lg'
        } rounded-2xl bg-gradient-to-br from-[#153D38] to-[#008B61] text-white flex flex-col items-center justify-center font-extrabold tracking-wider shadow-inner relative overflow-hidden shrink-0 border border-emerald-400/30 group-hover:scale-105 transition-transform`}
      >
        {/* Subtle geometric microfluidic lattice SVG in avatar background */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 10 50 H 90 M 50 10 V 90" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
        <span className="relative z-10">{initials}</span>
        <span className="text-[9px] uppercase font-mono tracking-widest text-emerald-200 font-semibold mt-0.5">
          {member.category === 'leadership' ? 'CEO' : member.category === 'advisor' ? 'UFF / P&D' : 'P&D'}
        </span>
      </div>
    );
  };

  return (
    <section id="time" className="py-20 lg:py-28 bg-white text-[#263238] relative border-y border-slate-200">
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

        {/* 7.1 Leadership Highlight Card (Jéssica Dornelas) */}
        <div className="mb-14">
          <div className="p-8 sm:p-10 bg-gradient-to-br from-[#153D38] to-[#0E2824] rounded-2xl text-white shadow-xl border border-emerald-500/20 relative overflow-hidden group">
            {/* Background geometric flare */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#008B61]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Avatar + Quick Badges */}
              <div className="md:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                {renderInstitutionalAvatar(content.leadership, 'large')}

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#008B61]/30 border border-[#008B61]/50 text-xs font-semibold text-emerald-300 mb-2 font-mono">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Liderança Executiva</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {content.leadership.name}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-300 font-mono mt-1">
                    {content.leadership.role}
                  </p>
                  <p className="text-xs text-emerald-100/70 mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{content.leadership.credentials}</span>
                  </p>
                </div>

                {content.leadership.linkedin && (
                  <a
                    href={content.leadership.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    aria-label={`LinkedIn de ${content.leadership.name}`}
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#008B61] fill-current" />
                    <span>Perfil no LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-emerald-300" />
                  </a>
                )}
              </div>

              {/* Biography & Strategic Role */}
              <div className="md:col-span-8 space-y-4 text-emerald-100/90 leading-relaxed border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8">
                <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-xs font-mono uppercase text-emerald-400 block mb-1">
                    {lang === 'pt' ? 'Áreas de Especialidade' : 'Specialization'}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {content.leadership.specialty}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {content.leadership.bio}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-emerald-300 font-mono">
                  <Building2 className="w-4 h-4 text-[#008B61]" />
                  <span>{content.leadership.institution}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7.2 Scientific & Technological Team */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-3">
            <div>
              <h3 className="text-xl font-bold text-[#153D38]">
                {lang === 'pt' ? 'Equipe Científica e Tecnológica' : 'Scientific & Technology Team'}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                {lang === 'pt' ? 'Pesquisadores em biologia celular, farmácia, engenharia e nanotecnologia' : 'Researchers in cell biology, pharmacy, engineering and nanotechnology'}
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 font-medium">
              6 {lang === 'pt' ? 'Integrantes' : 'Members'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.scientificTeam.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="p-5 rounded-xl bg-[#F3F8F6] border border-slate-200 hover:border-[#008B61] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-3">
                    {renderInstitutionalAvatar(member, 'regular')}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base font-bold text-[#153D38] group-hover:text-[#008B61] transition-colors truncate">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-emerald-700 font-mono truncate">
                        {member.role}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5 truncate">
                        {member.credentials}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-500">
                    {member.institution}
                  </span>
                  <span className="text-[#008B61] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>{lang === 'pt' ? 'Ver perfil' : 'View profile'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7.3 Scientific Advisors & Technological Collaborators */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-3">
            <div>
              <h3 className="text-xl font-bold text-[#153D38]">
                {lang === 'pt' ? 'Consultores e Colaboradores Científicos' : 'Scientific Advisors & Collaborators'}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                {lang === 'pt' ? 'Professores titulares e pesquisadores seniores da academia' : 'Full professors and senior academic researchers'}
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 font-medium">
              UFF / UFRJ / UNESP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.advisors.map((advisor) => (
              <div
                key={advisor.id}
                onClick={() => setSelectedMember(advisor)}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-[#153D38] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4 mb-4">
                  {renderInstitutionalAvatar(advisor, 'regular')}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-bold text-[#153D38] group-hover:text-[#008B61] transition-colors">
                      {advisor.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#A20C12] font-mono mt-0.5">
                      {advisor.role}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      {advisor.credentials}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {advisor.bio}
                </p>

                <div className="p-2.5 rounded bg-slate-50 text-[11px] font-mono text-slate-600 border border-slate-100 flex items-center justify-between">
                  <span>{advisor.specialty}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#008B61] shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Quote Banner */}
        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center">
          <p className="text-base sm:text-lg font-semibold text-[#153D38] italic mb-2">
            "{content.closingText}"
          </p>
          <span className="text-xs font-mono text-slate-500">
            {content.validationNote}
          </span>
        </div>
      </div>

      {/* Member Profile Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              {renderInstitutionalAvatar(selectedMember, 'regular')}
              <div>
                <h3 className="text-xl font-bold text-[#153D38]">
                  {selectedMember.name}
                </h3>
                <p className="text-xs font-semibold text-[#008B61] font-mono">
                  {selectedMember.role}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedMember.credentials}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                  {lang === 'pt' ? 'Instituição & Vínculo' : 'Affiliation'}
                </span>
                <p className="text-sm font-semibold text-[#153D38]">
                  {selectedMember.institution}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                  {lang === 'pt' ? 'Especialidade' : 'Specialization'}
                </span>
                <p className="text-sm text-slate-800">
                  {selectedMember.specialty}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                  {lang === 'pt' ? 'Trajetória & Contribuição' : 'Bio & Contribution'}
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              {selectedMember.linkedin && (
                <div className="pt-3 border-t border-slate-200">
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#008B61] hover:underline"
                  >
                    <Linkedin className="w-4 h-4 fill-current" />
                    <span>{lang === 'pt' ? 'Conectar no LinkedIn' : 'Connect on LinkedIn'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                {lang === 'pt' ? 'Fechar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
