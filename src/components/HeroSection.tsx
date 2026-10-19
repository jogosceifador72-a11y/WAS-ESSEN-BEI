import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  Smartphone, 
  Clock, 
  BookOpen, 
  Sparkles,
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';
import { HOTMART_CHECKOUT_URL, EBOOK_PRICE } from '../data/ebookData';
import ebook3DMockup from '../assets/images/ebook_3d_mockup_1792240011668.jpg';
import ebookFlatCover from '../assets/images/ebook_cover_flat_1792240039029.jpg';

export const HeroSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'3d' | 'flat'>('3d');

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Editorial Kicker */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs font-medium text-stone-600 mb-6"
        >
          <span className="text-[#2D4533] font-semibold tracking-wide uppercase">Ernährungsratgeber</span>
          <span aria-hidden="true">·</span>
          <span>Praktisches PDF-Format</span>
          <span aria-hidden="true">·</span>
          <span>Sofort lieferbar</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Core Value Proposition & Conversion (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-[#E4ECE5] text-[#223527] border border-[#CCDCCD]">
                <Sparkles className="w-3.5 h-3.5 text-[#3B5A43]" />
                Der sanfte Weg zu einer beschwerdefreien Verdauung
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-stone-900 leading-[1.18] tracking-tight [text-wrap:balance]">
                Was essen bei Sodbrennen?
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                Auf 30 praktischen Seiten zeigt Ihnen dieser Ratgeber genau, welche Lebensmittel Ihren Magen sofort beruhigen und welche das Brennen verstärken. Ohne langes Rätselraten, ohne Fachchinesisch – mit fertigen Tagesplänen und bewährten Rezepten.
              </p>
            </div>

            {/* Core Feature Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
              <div className="flex items-start gap-2.5 text-sm text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Akute Sofortmaßnahmen:</strong> Wie stilles Wasser, Mandeln & Haferflocken im Moment lindern.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>3 fertige Tagespläne:</strong> Genau wissen, was auf den Teller darf – stressfrei und lecker.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Fehler vermeiden:</strong> Warum Mythen wie Milch oder Natron den Säurerückfluss verschlimmern.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Auslöser-Detektor:</strong> Eigene Trigger im Alltag erkennen und dauerhaft vorbeugen.
                </span>
              </div>
            </div>

            {/* Offer & Action Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm space-y-5">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                    Einmalige Investition · Sofortiger PDF-Zugang
                  </div>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#223527] tabular-nums">
                      {EBOOK_PRICE}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">
                      inkl. MwSt. · Kein Abo · Lebenslanger Zugriff
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/80">
                  <Download className="w-4 h-4 shrink-0 text-emerald-700" />
                  <span>Direkt nach Kauf im E-Mail-Postfach</span>
                </div>
              </div>

              {/* Main Primary CTA Button */}
              <div>
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-base sm:text-lg font-bold text-white bg-[#2D4533] hover:bg-[#223527] rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  <span>Jetzt Ratgeber herunterladen ({EBOOK_PRICE})</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Micro guarantees */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-2 text-center text-xs text-stone-500">
                  <span className="flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> 256-Bit SSL
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <Smartphone className="w-3.5 h-3.5 text-stone-600" /> Handy & PC
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-stone-600" /> 24/7 Sofortzugang
                  </span>
                </div>
              </div>

            </div>

            {/* Quiet disclaimer */}
            <p className="text-[12px] text-stone-500 leading-normal">
              Hinweis: Dieser Ratgeber dient der Ernährungsbildung und praktischen Lebensmittelauswahl. Er ersetzt keine medizinische Diagnose oder ärztliche Behandlung.
            </p>

            </motion.div>

          {/* Right Column: High-Impact Visual Mockup (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            
            <div className="relative w-full max-w-md mx-auto group">
              
              {/* Image Container with shadow and clean frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white/95 backdrop-blur-xs p-2.5 shadow-2xl border border-stone-200/80 transition-all duration-300">
                <img
                  src={viewMode === '3d' ? ebook3DMockup : ebookFlatCover}
                  alt="Was essen bei Sodbrennen? E-Book Cover"
                  className="w-full h-auto object-cover rounded-xl transition-all duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Digital badge overlay */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-semibold text-[#2D4533] shadow-sm border border-stone-200/90 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>30 Seiten PDF</span>
                </div>
              </div>

              {/* View toggle (3D Mockup vs Flat Cover) */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="inline-flex p-1 bg-stone-200/70 rounded-lg text-xs">
                  <button
                    onClick={() => setViewMode('3d')}
                    className={`px-3 py-1 rounded-md font-medium transition-colors ${
                      viewMode === '3d'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    3D Buchansicht
                  </button>
                  <button
                    onClick={() => setViewMode('flat')}
                    className={`px-3 py-1 rounded-md font-medium transition-colors ${
                      viewMode === 'flat'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Original-Cover
                  </button>
                </div>
              </div>

              {/* Format features ribbon */}
              <div className="mt-5 bg-white/80 backdrop-blur-xs border border-stone-200/90 rounded-xl p-3.5 text-xs text-stone-600 flex items-center justify-around text-center shadow-xs">
                <div>
                  <div className="font-semibold text-stone-900">Format</div>
                  <div>PDF E-Book</div>
                </div>
                <div className="w-px h-6 bg-stone-200" />
                <div>
                  <div className="font-semibold text-stone-900">Umfang</div>
                  <div>30 Seiten</div>
                </div>
                <div className="w-px h-6 bg-stone-200" />
                <div>
                  <div className="font-semibold text-stone-900">Lieferung</div>
                  <div>Direkt per E-Mail</div>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
