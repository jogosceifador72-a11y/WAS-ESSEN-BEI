import React, { useState } from 'react';
import { 
  FOOD_DATABASE, 
  FoodCheckItem, 
  HOTMART_CHECKOUT_URL, 
  EBOOK_PRICE 
} from '../data/ebookData';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Search, 
  HelpCircle,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import remediesImg from '../assets/images/fresh_remedies_spread_1792240012073.jpg';

export const FoodAmpelCheck: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'soothing' | 'myth' | 'trigger'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = FOOD_DATABASE.filter((item) => {
    const matchesFilter = filter === 'all' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="lebensmittel-check" className="py-16 sm:py-24 bg-white/50 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B5A43]">
            <span>Interaktiver Einblick</span>
            <span aria-hidden="true">·</span>
            <span>Magen-Ampel & Mythen</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Was beruhigt Ihren Magen – und was feuert das Brennen erst recht an?
          </h2>

          <p className="text-base text-stone-600 leading-relaxed">
            Häufig werden im Internet Hausmittel empfohlen, die das Problem in Wahrheit verschlimmern. Testen Sie hier typische Beispiele aus dem 30-seitigen Ratgeber:
          </p>
        </motion.div>

        {/* Visual Callout Banner with Photography */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-[#D5DFD4] flex flex-col md:flex-row items-center gap-6 shadow-sm"
        >
          <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0 shadow-sm border border-stone-200">
            <img 
              src={remediesImg} 
              alt="Magenfreundliche Hausmittel Mandeln und Hafer" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-1.5 flex-1">
            <h3 className="text-base font-serif font-bold text-stone-900">
              Sofortige Linderung durch fundierte Hausmittel
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Im Ratgeber lernen Sie genau, wie stilles Wasser, feingekaute Mandeln und Haferflocken im akuten Moment wirken – und warum Sie von Natron und Kuhmilch dringend die Finger lassen sollten.
            </p>
          </div>
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 text-xs font-semibold text-white bg-[#2D4533] hover:bg-[#223527] rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            Alle 30 Seiten im Ratgeber lesen
          </a>
        </motion.div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Segmented filter buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Alle ({FOOD_DATABASE.length})
            </button>
            <button
              onClick={() => setFilter('soothing')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'soothing'
                  ? 'bg-white text-emerald-800 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Magen-Freunde
            </button>
            <button
              onClick={() => setFilter('myth')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'myth'
                  ? 'bg-white text-amber-800 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              Gefährliche Mythen
            </button>
            <button
              onClick={() => setFilter('trigger')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'trigger'
                  ? 'bg-white text-rose-800 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <XCircle className="w-3.5 h-3.5 text-rose-600" />
              Säure-Auslöser
            </button>
          </div>

          {/* Quick search input */}
          <div className="relative sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Lebensmittel suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3B5A43] focus:border-[#3B5A43] text-stone-800 placeholder-stone-400"
            />
          </div>

        </div>

        {/* Food Items Grid with Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => {
            const isSoothing = item.category === 'soothing';
            const isMyth = item.category === 'myth';
            const isTrigger = item.category === 'trigger';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (idx % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/95 backdrop-blur-md border border-stone-200/90 rounded-xl p-4 flex flex-col justify-between hover:border-[#3B5A43]/50 hover:shadow-md transition-all"
              >
                <div>
                  {/* Category Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-medium text-stone-500">
                      {isSoothing && 'Empfohlen'}
                      {isMyth && 'Mythos & Irrtum'}
                      {isTrigger && 'Vermeiden'}
                    </span>
                    <span className="text-[11px] font-semibold flex items-center gap-1">
                      {isSoothing && (
                        <span className="text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Beruhigend
                        </span>
                      )}
                      {isMyth && (
                        <span className="text-amber-700 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" /> Rebound-Gefahr
                        </span>
                      )}
                      {isTrigger && (
                        <span className="text-rose-700 flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> Reizend
                        </span>
                      )}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    {item.explanation}
                  </p>
                </div>

                {/* Practical Tip */}
                <div className="pt-2 border-t border-stone-200/60 mt-2 text-[11px] text-stone-700 flex items-start gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-[#3B5A43] shrink-0 mt-0.5" />
                  <span>{item.tip}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-stone-500 text-sm">
            Kein Lebensmittel gefunden. Suchen Sie nach Mandeln, Milch, Hafer oder Kaffee.
          </div>
        )}

      </div>
    </section>
  );
};
