import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'pt' | 'en';
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#008B61]/10 text-[#008B61] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#153D38]">
              {lang === 'pt' ? 'Política de Privacidade e Proteção de Dados (LGPD)' : 'Privacy Policy & Data Protection (LGPD)'}
            </h3>
            <span className="text-xs font-mono text-slate-400">
              NanoOnco3D Biotecnologia · Versão 2026
            </span>
          </div>
        </div>

        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <p>
            {lang === 'pt'
              ? 'A NanoOnco3D valoriza a privacidade e a segurança das informações de seus clientes, pesquisadores, parceiros comerciais e visitantes do website institucional. Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), este documento estabelece diretrizes para a coleta, uso e armazenamento de informações.'
              : 'NanoOnco3D values the privacy and confidentiality of our clients, researchers, and partners. In accordance with the Brazilian General Data Protection Law (LGPD), this document outlines our information handling guidelines.'}
          </p>

          <h4 className="font-bold text-[#153D38] text-sm pt-2">
            {lang === 'pt' ? '1. Coleta e Finalidade dos Dados' : '1. Data Collection & Purpose'}
          </h4>
          <p>
            {lang === 'pt'
              ? 'Os dados informados no formulário de contato (nome, e-mail institucional, telefone e informações de projeto) são utilizados exclusivamente para responder a solicitações de propostas comerciais, consultas técnico-científicas e estabelecimento de parcerias de pesquisa e desenvolvimento.'
              : 'Data submitted through our inquiry forms is strictly used to address commercial quotes, scientific queries, and collaborative R&D proposals.'}
          </p>

          <h4 className="font-bold text-[#153D38] text-sm pt-2">
            {lang === 'pt' ? '2. Compartilhamento e Sigilo' : '2. Confidentiality & Non-Disclosure'}
          </h4>
          <p>
            {lang === 'pt'
              ? 'Não compartilhamos nem comercializamos dados com terceiros não autorizados. Informações técnicas sobre formulações de fármacos ou dados de amostras biológicas compartilhadas no âmbito de projetos sob demanda são protegidas por Acordos de Confidencialidade (NDA) bilaterais prévios.'
              : 'We do not sell or disclose partner data to unauthorized third parties. Technical and biological data submitted for testing are safeguarded by mutual non-disclosure agreements (NDAs).'}
          </p>

          <h4 className="font-bold text-[#153D38] text-sm pt-2">
            {lang === 'pt' ? '3. Direitos do Titular' : '3. User Rights'}
          </h4>
          <p>
            {lang === 'pt'
              ? 'O titular dos dados pode solicitar, a qualquer momento, a confirmação, correção, atualização ou exclusão de suas informações através do e-mail: dornelas.jessica@nanoonco3d.com.br.'
              : 'You may request data access, rectification, or deletion at any time by contacting dornelas.jessica@nanoonco3d.com.br.'}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#008B61] hover:bg-[#007451] rounded-lg transition-colors"
          >
            {lang === 'pt' ? 'Entendido' : 'Acknowledge'}
          </button>
        </div>
      </div>
    </div>
  );
};
