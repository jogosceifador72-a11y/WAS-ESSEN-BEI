import React, { useState, useEffect } from 'react';
import { HOTMART_CHECKOUT_URL, EBOOK_PRICE } from '../data/ebookData';
import { ArrowRight, Download } from 'lucide-react';

export const StickyMobileBar: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past 450px
      if (window.scrollY > 450) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-stone-200/90 shadow-lg px-4 py-2.5 flex items-center justify-between gap-3">
      <div className="min-w-0">
        <div className="text-[11px] text-stone-500 font-medium truncate">
          Was essen bei Sodbrennen?
        </div>
        <div className="text-base font-serif font-extrabold text-[#223527] tabular-nums leading-none mt-0.5">
          {EBOOK_PRICE}
        </div>
      </div>

      <a
        href={HOTMART_CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#2D4533] hover:bg-[#223527] rounded-lg shadow-sm whitespace-nowrap shrink-0"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Jetzt laden</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};
