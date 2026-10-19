import React, { useState } from 'react';
import { CHAPTERS_OUTLINE, HOTMART_CHECKOUT_URL, EBOOK_PRICE } from '../data/ebookData';
import { 
  BookOpen, 
  Check, 
  FileText, 
  CalendarDays, 
  ChefHat, 
  Search, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

export const BookContentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="inhalte" className="py-16 sm:py-24 bg-white/45 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-14"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B5A43]">
            <span>Inhaltsübersicht</span>
            <span aria-hidden="true">·</span>
            <span>30 Seiten Praxis pur</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Was steckt im Ratgeber? Ein Blick in die Kapitel
          </h2>

          <p className="text-base text-stone-600 leading-relaxed">
            Keine zeitraubende Theorie, keine medizinischen Fachbegriffe. Auf den Punkt formuliert, damit Sie die Ratschläge noch heute in Ihrer Küche umsetzen können.
          </p>
        </motion.div>

        {/* 6 Chapters Grid with Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CHAPTERS_OUTLINE.map((chapter, idx) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveTab(idx)}
              className={`cursor-pointer rounded-2xl p-6 border transition-all text-left flex flex-col justify-between ${
                activeTab === idx
                  ? 'bg-white/95 border-[#3B5A43] shadow-md ring-2 ring-[#3B5A43]/20'
                  : 'bg-white/85 backdrop-blur-md border-stone-200/90 hover:border-stone-300 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold font-sans text-[#2D4533] bg-[#EAEFE9] px-2.5 py-0.5 rounded">
                    Kapitel {chapter.number}
                  </span>
                  <span className="text-xs text-stone-500 font-mono">
                    {chapter.page}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                  {chapter.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {chapter.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/50 flex items-center gap-1.5 text-xs text-[#2D4533] font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Praxiserprobt & sofort umsetzbar</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner of the 3 Daily Meal Plans */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/90 backdrop-blur-md border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                <CalendarDays className="w-3.5 h-3.5 text-emerald-700" />
                Highlight aus Kapitel 04
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                3 vollständige Tagespläne – Ohne Grübeln durch den Tag
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Jeder Tag enthält Frühstück, Mittagessen, Abendessen und zwei smarte Zwischenmahlzeiten. Alle Zutaten sind in jedem normalen Supermarkt erhältlich, günstig und im Handumdrehen zubereitet.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs font-medium text-stone-700">
                <span>✔ Tag 1: Der Beruhigungs-Tag</span>
                <span>✔ Tag 2: Der Energie-Tag fürs Büro</span>
                <span>✔ Tag 3: Der Wohlfühl-Tag fürs Wochenende</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#2D4533] hover:bg-[#223527] rounded-xl shadow-sm hover:shadow transition-all"
              >
                <span>Ratgeber sichern ({EBOOK_PRICE})</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-stone-500 mt-2">
                Sofortiger Download im PDF-Format
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
