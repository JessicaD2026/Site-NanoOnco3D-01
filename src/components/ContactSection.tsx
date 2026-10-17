import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Linkedin, Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { nanooncoData } from '../data/nanooncoData';

interface ContactSectionProps {
  lang: 'pt' | 'en';
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  preselectedService = '',
}) => {
  const content = nanooncoData[lang].contact;

  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    interestArea: content.interestOptions[0],
    desiredService: content.serviceOptions[0],
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      const match = content.serviceOptions.find((opt) =>
        opt.toLowerCase().includes(preselectedService.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, desiredService: match }));
      }
    }
  }, [preselectedService, content.serviceOptions]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = lang === 'pt' ? 'Nome é obrigatório.' : 'Full name is required.';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = lang === 'pt' ? 'Instituição ou empresa é obrigatória.' : 'Organization is required.';
    }
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = lang === 'pt' ? 'Informe um e-mail válido.' : 'Please enter a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = lang === 'pt' ? 'Informe um telefone com DDD.' : 'Please enter a valid phone number.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = lang === 'pt' ? 'Por favor descreva seu projeto com pelo menos 10 caracteres.' : 'Please describe your request (min. 10 characters).';
    }
    if (!formData.consent) {
      newErrors.consent = lang === 'pt' ? 'O consentimento é obrigatório para o contato.' : 'Consent is required for us to reply.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulating realistic validated server submission dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      interestArea: content.interestOptions[0],
      desiredService: content.serviceOptions[0],
      message: '',
      consent: false,
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white text-[#263238] relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Coordinates & Direct Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#153D38] text-white shadow-lg border border-emerald-900/50">
              <h3 className="text-xl font-bold mb-4 tracking-tight">
                {content.corporateInfo.company}
              </h3>
              <p className="text-xs text-emerald-200/80 mb-6 leading-relaxed">
                {lang === 'pt'
                  ? 'Conectamos ciência avançada a demandas industriais e clínicas através de modelos biológicos translacionais.'
                  : 'Bridging deep scientific investigation with clinical and industrial needs via translational models.'}
              </p>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3 text-emerald-100">
                  <MapPin className="w-4 h-4 text-[#008B61] shrink-0 mt-0.5" />
                  <span>{content.corporateInfo.location}</span>
                </div>

                <div className="flex items-start gap-3 text-emerald-100">
                  <Phone className="w-4 h-4 text-[#008B61] shrink-0 mt-0.5" />
                  <a
                    href={`tel:${content.corporateInfo.phone}`}
                    className="hover:text-emerald-300 transition-colors"
                  >
                    {content.corporateInfo.phoneFormatted}
                  </a>
                </div>

                <div className="flex items-start gap-3 text-emerald-100">
                  <Mail className="w-4 h-4 text-[#008B61] shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${content.corporateInfo.email}`}
                    className="hover:text-emerald-300 transition-colors break-all"
                  >
                    {content.corporateInfo.email}
                  </a>
                </div>
              </div>

              {/* Direct Quick-Action Channels */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <a
                  href={content.corporateInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-[#008B61] hover:bg-[#007451] rounded-xl transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === 'pt' ? 'Conversar pelo WhatsApp' : 'Chat on WhatsApp'}</span>
                </a>

                <a
                  href={`mailto:${content.corporateInfo.email}?subject=Solicitacao%20de%20Contato%20-%20NanoOnco3D`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-100 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>{lang === 'pt' ? 'Enviar e-mail direto' : 'Direct Email'}</span>
                </a>

                <a
                  href={content.corporateInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-200 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 rounded-xl transition-all"
                >
                  <Linkedin className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'pt' ? 'Acompanhe no LinkedIn' : 'Follow on LinkedIn'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Lead Generation Form */}
          <div className="lg:col-span-7 bg-[#F3F8F6] p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-[#008B61]/10 text-[#008B61] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-[#153D38]">
                  {content.form.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {content.form.successMessage}
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#008B61] bg-white border border-[#008B61] rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{content.form.sendAnother}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <h3 className="text-lg font-bold text-[#153D38] mb-4">
                  {content.form.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                      {content.form.fullName} *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={lang === 'pt' ? 'Dra. Maria Silva' : 'Dr. Jane Doe'}
                      className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B61] ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </span>
                    )}
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                      {content.form.organization} *
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder={lang === 'pt' ? 'Instituto / Indústria / P&D' : 'Research Institute / Biotech'}
                      className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B61] ${
                        errors.organization ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.organization && (
                      <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.organization}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                      {content.form.email} *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nome@instituicao.org"
                      className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B61] ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                      {content.form.phone} *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+55 (21) 99999-9999"
                      className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B61] ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Area of Interest */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                      {content.form.interestArea}
                    </label>
                    <select
                      value={formData.interestArea}
                      onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B61]"
                    >
                      {content.interestOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Desired Service */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                      {content.form.desiredService}
                    </label>
                    <select
                      value={formData.desiredService}
                      onChange={(e) => setFormData({ ...formData, desiredService: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B61]"
                    >
                      {content.serviceOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 mb-1">
                    {content.form.message} *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'pt'
                        ? 'Descreva linhagens de interesse, parâmetros de perfusão, número de compostos a testar ou objetivos de cooperação...'
                        : 'Describe cell lines, perfusion parameters, number of compounds to screen, or partnership goals...'
                    }
                    className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B61] ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* LGPD Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-[#008B61] focus:ring-[#008B61]"
                    />
                    <span className="text-xs text-slate-600 leading-snug">
                      {content.form.consent}
                    </span>
                  </label>
                  {errors.consent && (
                    <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.consent}</span>
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#008B61] hover:bg-[#007451] disabled:opacity-50 rounded-xl transition-all shadow-sm hover:shadow"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>{content.form.submittingButton}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{content.form.submitButton}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
