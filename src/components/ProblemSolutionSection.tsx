import React from 'react';
import { 
  Check, 
  Flame, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  ArrowRight,
  UtensilsCrossed,
  Clock,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';
import { HOTMART_CHECKOUT_URL, EBOOK_PRICE } from '../data/ebookData';
import breakfastImg from '../assets/images/soothing_gut_breakfast_1792240011818.jpg';

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section id="vorteile" className="py-16 sm:py-24 bg-white/40 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-14"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B5A43]">
            <span>Schluss mit dem Brennen</span>
            <span aria-hidden="true">·</span>
            <span>Konkrete Alltagshilfe</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Verdauung ohne Schmerzen: Warum bisherige Diäten und Ratschläge versagt haben
          </h2>

          <p className="text-base text-stone-600 leading-relaxed">
            Wer unter saurem Aufstoßen und Druck im Oberbauch leidet, bekommt oft unzählige widersprüchliche Ratschläge. Dieser Ratgeber räumt auf und gibt Ihnen eine einfache, sofort anwendbare Schritt-für-Schritt-Anleitung.
          </p>
        </motion.div>

        {/* 2-Column Split: Image with Callout & The 3 Core Hurdles Solved */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Atmospheric image & recipe preview card (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden border border-stone-200/90 shadow-md flex-1 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={breakfastImg}
                  alt="Magenfreundlicher warmer Haferbrei mit Mandeln und Kamille"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-medium tracking-wide uppercase text-emerald-200">
                    Rezept-Vorschau aus Seite 25
                  </div>
                  <h3 className="text-lg font-serif font-bold">
                    Sanfter Hafer-Mandel-Brei
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Echtes Wohlfühlessen für den Magen: Schützt die empfindliche Speiseröhre, sättigt nachhaltig ohne Völlegefühl und schmeckt herrlich nussig-mild.
                </p>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1.5 font-medium text-stone-700">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-[#3B5A43]" /> 2 Rezepte + Snacks
                  </span>
                  <span>Zubereitung in unter 10 Min.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The 3 Core Hurdles Solved (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            
            {/* Hurdle 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-[#CCDCCD] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0 text-emerald-800 font-bold text-sm font-sans">
                  01
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                    Akutes Brennen im Keim ersticken
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Wenn die Säure wieder hochsteigt, zählt jede Minute. Sie erfahren genau, wie einfache Hausmittel wie stilles Wasser, Mandeln und Haferflocken Ihnen im akuten Moment Linderung verschaffen – ohne Medikamenten-Abhängigkeit.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hurdle 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-[#CCDCCD] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0 text-emerald-800 font-bold text-sm font-sans">
                  02
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                    Sicherheit bei jeder Mahlzeit (3 fertige Tagespläne)
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Nie mehr ängstlich vor dem Teller sitzen und sich fragen: „Werde ich das heute Nacht bereuen?“ Drei fertige Tagespläne, zwei bewährte Rezepte und praktische Snack-Ideen für unterwegs zeigen Ihnen genau, was schmeckt und guttut.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hurdle 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-[#CCDCCD] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0 text-emerald-800 font-bold text-sm font-sans">
                  03
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                    Fatale Fehler und falsche Hausmittel vermeiden
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Sie vermeiden gefährliche Irrtümer wie Milch oder Natron, die das Problem nach kurzer Linderung durch einen heftigen Säure-Rebound nur noch schlimmer machen. Sparen Sie Nerven, Fehlschläge und Zeit.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Result callout box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#EAEFE9]/95 backdrop-blur-md border border-[#CCDCCD] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#223527]">
                  Ihr Endergebnis
                </span>
                <p className="text-sm font-semibold text-stone-900">
                  Nach dem Lesen kennen Sie Ihre persönlichen Auslöser und beugen Sodbrennen im Alltag gezielt und dauerhaft vor.
                </p>
              </div>
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2.5 text-xs font-semibold text-white bg-[#2D4533] hover:bg-[#223527] rounded-lg transition-colors whitespace-nowrap inline-flex items-center gap-1.5 shadow-sm"
              >
                <span>Jetzt starten</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
