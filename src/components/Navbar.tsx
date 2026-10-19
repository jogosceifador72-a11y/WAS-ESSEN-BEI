import React from 'react';
import { BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { HOTMART_CHECKOUT_URL, EBOOK_PRICE } from '../data/ebookData';

export const Navbar: React.FC = () => {
  return (
    <>
      {/* Top micro-announcement banner */}
      <aside aria-label="Ankündigung" className="bg-[#2D4533] text-[#E8EFE9] text-xs py-2 px-4 text-center font-medium border-b border-[#3B5A43]">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
          <span>
            Digitaler PDF-Ratgeber mit 30 Seiten · Sofortiger Download per E-Mail nach Zahlungsbestätigung
          </span>
        </div>
      </aside>

      {/* 3-Zone Top Navigation Contract */}
      <header className="sticky top-0 z-30 bg-white/85 backdrop-blur-md border-b border-stone-200/80 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-stone-900 font-serif font-bold text-lg sm:text-xl tracking-tight whitespace-nowrap shrink-0 hover:text-[#2D4533] transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-[#EAEFE9] text-[#2D4533] flex items-center justify-center font-sans text-sm font-semibold border border-[#D5DFD4]">
              KZ
            </span>
            <span>Was essen bei Sodbrennen?</span>
          </a>

          {/* Zone 2: 4–5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a href="#vorteile" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
              Sofort-Hilfe
            </a>
            <a href="#lebensmittel-check" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
              Lebensmittel-Check
            </a>
            <a href="#inhalte" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
              Ratgeber-Inhalte
            </a>
            <a href="#zielgruppe" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
              Für wen?
            </a>
            <a href="#faq" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
              Fragen & Antworten
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#2D4533] hover:bg-[#223527] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 group"
            >
              <span>Jetzt sichern · {EBOOK_PRICE}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </header>
    </>
  );
};
