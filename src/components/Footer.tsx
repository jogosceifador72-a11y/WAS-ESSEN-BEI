import React from 'react';
import { SOCIAL_LINKS, HOTMART_CHECKOUT_URL, EBOOK_PRICE } from '../data/ebookData';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Download, 
  Heart, 
  AlertTriangle 
} from 'lucide-react';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'instagram':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'facebook':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
        </svg>
      );
    case 'tiktok':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V15c-.01 2.32-.6 4.67-2.06 6.46-1.46 1.79-3.7 2.87-6.02 2.78-2.67-.1-5.16-1.63-6.44-3.97-1.28-2.33-1.18-5.3.26-7.53 1.45-2.23 4.04-3.5 6.71-3.23.01 1.42-.01 2.85-.01 4.27-1.39-.17-2.85.34-3.74 1.42-.89 1.08-1.03 2.64-.34 3.86.69 1.23 2.1 1.95 3.51 1.78 1.41-.18 2.57-1.29 2.79-2.7.07-.48.06-.97.06-1.45V.02h-4.58z"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case 'threads':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.004 0C5.372 0 0 5.373 0 12c0 6.626 5.372 12 12.004 12 6.627 0 11.996-5.374 11.996-12 0-6.627-5.369-12-11.996-12zm4.847 13.978c-.287 3.236-2.316 4.908-5.042 4.908-3.048 0-5.111-2.124-5.111-5.244 0-3.14 2.155-5.352 5.34-5.352 2.915 0 4.887 1.838 4.981 4.542h-2.18c-.14-1.636-1.258-2.614-2.801-2.614-1.84 0-3.056 1.34-3.056 3.424 0 2.062 1.196 3.332 2.977 3.332 1.498 0 2.378-.797 2.658-2.146h-2.658v-1.85h4.892v1.002z"/>
        </svg>
      );
    case 'kwai':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z"/>
        </svg>
      );
    default:
      return null;
  }
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 lg:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Top Footer: Social Media Contact Buttons (explicitly requested by user in button format) */}
        <div className="space-y-6">
          <div className="text-center sm:text-left space-y-1">
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
              Bleiben Sie in Verbindung
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Karin Zeit in den sozialen Netzwerken
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-2xl">
              Folgen Sie Karin für tägliche Ernährungstipps, sanfte Wohlfühl-Rezepte und praktische Ratschläge für einen glücklichen Magen:
            </p>
          </div>

          {/* Contact Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-stone-800/90 hover:bg-stone-700/90 border border-stone-700 hover:border-emerald-500/50 transition-all text-white group shadow-xs"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center text-stone-200 group-hover:text-emerald-400 group-hover:bg-stone-950 transition-colors shrink-0">
                    {renderSocialIcon(link.iconName)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold truncate group-hover:text-emerald-300 transition-colors">
                      {link.name}
                    </div>
                    <div className="text-[11px] text-stone-400 truncate">
                      {link.handle}
                    </div>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Middle Footer: Brand and Disclaimers */}
        <div className="pt-10 border-t border-stone-800 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs text-stone-400">
          
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-white font-serif font-bold text-lg">
              <span className="w-7 h-7 rounded-md bg-stone-800 text-emerald-400 flex items-center justify-center font-sans text-xs">
                KZ
              </span>
              <span>Was essen bei Sodbrennen?</span>
            </div>
            <p className="leading-relaxed text-stone-400 text-xs">
              Ein kompakter Praxis-Ratgeber (PDF, 30 Seiten) von Karin Zeit. Mit Sofortmaßnahmen, 3 Tagesplänen, magenschonenden Rezepten und dem 7-Tage-Auslöser-Detektor.
            </p>
            <div className="flex items-center gap-4 text-stone-400 pt-1">
              <span>PDF-Sofortzugang</span>
              <span>·</span>
              <span>Sichere Hotmart-Abwicklung</span>
              <span>·</span>
              <span>{EBOOK_PRICE} Einmalpreis</span>
            </div>
          </div>

          <div className="md:col-span-6 space-y-3">
            <div className="flex items-start gap-2.5 p-4 rounded-xl bg-stone-800/60 border border-stone-700/80 text-[11px] leading-relaxed text-stone-300">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Rechtlicher & Medizinischer Hinweis:</strong> Dieser Ratgeber dient der Ernährungsberatung, Wissensvermittlung und allgemeinen Information. Er ersetzt keinesfalls eine professionelle ärztliche Diagnose, Beratung oder Therapie. Bei anhaltenden Beschwerden, Schmerzen oder Vorerkrankungen konsultieren Sie bitte immer Ihre Hausärztin / Ihren Hausarzt oder eine gastroenterologische Fachpraxis.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Footer: Copyright */}
        <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Karin Zeit. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4">
            <a href="#vorteile" className="hover:text-stone-300 transition-colors">Vorteile</a>
            <span>·</span>
            <a href="#lebensmittel-check" className="hover:text-stone-300 transition-colors">Lebensmittel-Check</a>
            <span>·</span>
            <a href="#faq" className="hover:text-stone-300 transition-colors">FAQ</a>
            <span>·</span>
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              Hotmart Checkout ({EBOOK_PRICE})
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
