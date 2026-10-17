import React, { useState } from 'react';
import { X, Send, CheckCircle2, RefreshCw } from 'lucide-react';
import { nanooncoData } from '../data/nanooncoData';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'pt' | 'en';
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose, lang }) => {
  const content = nanooncoData[lang].contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: content.serviceOptions[0],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-[#008B61]/10 text-[#008B61] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#153D38]">
              {lang === 'pt' ? 'Proposta Solicitada!' : 'Proposal Request Sent!'}
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              {lang === 'pt'
                ? 'Nossa equipe técnica e comercial analisará os parâmetros informados e entrará em contato em breve.'
                : 'Our technical team will review your specifications and contact you shortly.'}
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-[#008B61] rounded-lg hover:bg-[#007451]"
            >
              {lang === 'pt' ? 'Concluir' : 'Done'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#008B61] font-bold block mb-1">
                {lang === 'pt' ? 'Contato Rápido' : 'Quick Proposal'}
              </span>
              <h3 className="text-xl font-extrabold text-[#153D38]">
                {lang === 'pt' ? 'Solicite uma Proposta Técnica' : 'Request Technical Proposal'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'pt'
                  ? 'Receba atendimento especializado para o desenho do seu ensaio ou projeto de biochip.'
                  : 'Receive custom scoping for your 3D cell assay or microfluidic device project.'}
              </p>
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                {lang === 'pt' ? 'Nome completo' : 'Full Name'} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B61]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                {lang === 'pt' ? 'E-mail corporativo' : 'Corporate Email'} *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B61]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                {lang === 'pt' ? 'Empresa / Instituição' : 'Company / Institution'}
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B61]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                {lang === 'pt' ? 'Solução ou Serviço Desejado' : 'Desired Solution'}
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B61]"
              >
                {content.serviceOptions.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                {lang === 'pt' ? 'Resumo da necessidade' : 'Project Summary'}
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={
                  lang === 'pt'
                    ? 'Descreva brevemente o modelo celular ou objetivo...'
                    : 'Briefly describe your biological model or testing objective...'
                }
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B61]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#008B61] hover:bg-[#007451] rounded-lg transition-colors"
              >
                {isSubmitting ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'pt' ? 'Enviar Solicitação' : 'Submit Request'}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
