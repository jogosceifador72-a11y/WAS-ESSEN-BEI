import React from 'react';
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { HOTMART_CHECKOUT_URL, EBOOK_PRICE } from '../data/ebookData';

export const TargetAudienceSection: React.FC = () => {
  return (
    <section id="zielgruppe" className="py-16 sm:py-24 bg-white/45 backdrop-blur-md border-b border-stone-200/80">
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
            <span>Klarheit & Ehrlichkeit</span>
            <span aria-hidden="true">·</span>
            <span>Passgenaue Zielgruppe</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Ist dieser Ratgeber das Richtige für Sie?
          </h2>

          <p className="text-base text-stone-600 leading-relaxed">
            Wir möchten sicherstellen, dass Sie mit Ihrem Kauf vollkommen zufrieden sind. Prüfen Sie kurz, ob Ihre Erwartungen zu unserem praktischen Leitfaden passen:
          </p>
        </motion.div>

        {/* Side-by-Side Comparison with scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Für Sie geeignet (Green/Positive) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-emerald-200/90 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    Dieser Ratgeber ist perfekt für Sie, wenn:
                  </h3>
                  <span className="text-xs text-emerald-800 font-medium">Praxisnah & sofort anwendbar</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-stone-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Sodbrennen ohne Komplikationen</strong> in den Griff bekommen möchten, ohne sich durch 400-seitige Fachbücher quälen zu müssen.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Einsteiger sind und klare Orientierung</strong> brauchen: Sie wollen einfach wissen, was Sie heute kochen und einkaufen dürfen.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Eine praktische Methode suchen</strong>, die Sie sofort in Ihrem eigenen Tempo in den Alltag integrieren können.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Wieder beschwerdefrei durchschlafen</strong> und das brennende Gefühl in Hals und Brust nachhaltig stoppen wollen.
                  </span>
                </li>
              </ul>

            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#2D4533] hover:bg-[#223527] rounded-xl transition-all shadow-sm"
              >
                <span>Ja, ich möchte schmerzfrei essen ({EBOOK_PRICE})</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Nicht für Sie geeignet (Neutral/Muted) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-stone-50/90 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-stone-200/90 flex flex-col justify-between shadow-xs"
          >
            <div className="space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-stone-200/70">
                <div className="w-10 h-10 rounded-xl bg-stone-200 flex items-center justify-center text-stone-600 shrink-0">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    Nicht für Sie geeignet, wenn:
                  </h3>
                  <span className="text-xs text-stone-500 font-medium">Ehrliche Grenzen des Ratgebers</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-stone-600">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Wunder-Ergebnisse über Nacht erwarten</strong>, ohne bereit zu sein, ein paar Kleinigkeiten bei der Lebensmittelauswahl selbst umzusetzen.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Lange, hochtheoretische oder wissenschaftliche Abhandlungen</strong> einem kompakten, pragmatischen 30-Seiten-Leitfaden vorziehen.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Einen Arztbesuch ersetzen wollen.</strong> Schwerwiegende chronische Erkrankungen, Geschwüre oder Blutungen müssen immer zwingend medizinisch abgeklärt werden.
                  </span>
                </li>
              </ul>

            </div>

            {/* Medical Disclaimer Banner */}
            <div className="mt-8 pt-6 border-t border-stone-200/70">
              <div className="flex items-start gap-2.5 text-xs text-stone-500 bg-white/95 p-3.5 rounded-xl border border-stone-200">
                <AlertCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Wichtiger Hinweis:</strong> Dieser Ratgeber dient der Ernährungsbildung und Alltagshilfe. Er stellt keine Heilversprechen dar und ersetzt keine ärztliche Untersuchung.
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
