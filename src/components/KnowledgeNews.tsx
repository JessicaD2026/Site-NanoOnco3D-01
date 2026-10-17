import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, User } from 'lucide-react';
import { nanooncoData, NewsItem } from '../data/nanooncoData';

interface KnowledgeNewsProps {
  lang: 'pt' | 'en';
}

export const KnowledgeNews: React.FC<KnowledgeNewsProps> = ({ lang }) => {
  const content = nanooncoData[lang].knowledge;
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#F3F8F6] text-[#263238] relative border-b border-slate-200">
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

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.articles.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#008B61] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <span className="text-[#008B61] font-semibold">{item.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#153D38] group-hover:text-[#008B61] transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                  <Clock className="w-3 h-3" />
                  <span>{item.readTime}</span>
                </span>
                <span className="text-[#008B61] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>{lang === 'pt' ? 'Ler artigo' : 'Read article'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Fechar artigo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#008B61] font-semibold mb-2">
              <BookOpen className="w-4 h-4" />
              <span>{selectedArticle.category}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500">{selectedArticle.date}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#153D38] tracking-tight mb-4">
              {selectedArticle.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-6 pb-4 border-b border-slate-100">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>{selectedArticle.author}</span>
            </div>

            <div className="prose prose-sm text-slate-700 leading-relaxed space-y-4 font-normal">
              <p className="font-medium text-slate-900 text-sm">
                {selectedArticle.summary}
              </p>
              <p className="text-sm">
                {selectedArticle.content}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                NanoOnco3D · Divulgação Científica Translacional
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
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
