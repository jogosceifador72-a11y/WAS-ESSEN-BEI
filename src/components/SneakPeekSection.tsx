import React, { useState } from 'react';
import { BookOpen, Eye, ArrowRight, Check, Sparkles, FileText, Calendar, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { HOTMART_CHECKOUT_URL, EBOOK_PRICE } from '../data/ebookData';

export const SneakPeekSection: React.FC = () => {
  const [selectedPreview, setSelectedPreview] = useState<'sofort' | 'plan' | 'mythen'>('sofort');

  return (
    <section className="py-16 sm:py-24 bg-white/40 backdrop-blur-md border-b border-stone-200/80">
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
            <span>Exklusive Leseprobe</span>
            <span aria-hidden="true">·</span>
            <span>Einblick ins E-Book</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Blättern Sie virtuell im Ratgeber
          </h2>

          <p className="text-base text-stone-600 leading-relaxed">
            Überzeugen Sie sich selbst von der klaren, übersichtlichen Gestaltung. Kein unnötiges Füllmaterial – nur praxisnahe Hilfe.
          </p>

          {/* Interactive Preview Tabs */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="inline-flex p-1 bg-white/90 backdrop-blur-xs rounded-xl border border-stone-200 shadow-2xs">
              <button
                onClick={() => setSelectedPreview('sofort')}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  selectedPreview === 'sofort'
                    ? 'bg-[#2D4533] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Akut-Sofortmaßnahmen (S. 6)</span>
              </button>
              <button
                onClick={() => setSelectedPreview('plan')}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  selectedPreview === 'plan'
                    ? 'bg-[#2D4533] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Tagesplan 1 (S. 21)</span>
              </button>
              <button
                onClick={() => setSelectedPreview('mythen')}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  selectedPreview === 'mythen'
                    ? 'bg-[#2D4533] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Die Mythos-Falle (S. 11)</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Realistic Book Page Preview Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-300/80 p-6 sm:p-10 relative overflow-hidden"
        >
          
          {/* Page header banner */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-200 text-xs text-stone-500 font-mono">
            <span>WAS ESSEN BEI SODBRENNEN? · RATGEBER</span>
            <span>
              {selectedPreview === 'sofort' && 'SEITE 06'}
              {selectedPreview === 'plan' && 'SEITE 21'}
              {selectedPreview === 'mythen' && 'SEITE 11'}
            </span>
          </div>

          {/* Page Content depending on tab */}
          <div className="py-6 min-h-[320px] flex flex-col justify-between">
            {selectedPreview === 'sofort' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Kapitel 1 · Akute Sofortmaßnahmen
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                    Das 3-Schritte-Notfallprotokoll bei brennendem Schmerz
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Wenn die Magensäure in die Speiseröhre schießt, zählt jede Minute. Wenden Sie folgende Reihenfolge an:
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 text-xs sm:text-sm space-y-1">
                    <div className="font-bold text-stone-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-mono">1</span>
                      150 ml stilles, lauwarmes Wasser in winzigen Schlucken trinken
                    </div>
                    <p className="text-stone-600 pl-7 text-xs">
                      Spült die aggressive Magensäure mechanisch aus der empfindlichen Speiseröhre zurück in den Magen, ohne die Magenwand zu überdehnen.
                    </p>
                  </div>

                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 text-xs sm:text-sm space-y-1">
                    <div className="font-bold text-stone-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-mono">2</span>
                      4 bis 5 ungesalzene Mandeln ganz langsam und fein zerkauen
                    </div>
                    <p className="text-stone-600 pl-7 text-xs">
                      Der feine Mandelbrei bindet freie Säuremoleküle sofort physikalisch ab und beruhigt die gereizten Schleimhäute.
                    </p>
                  </div>

                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 text-xs sm:text-sm space-y-1">
                    <div className="font-bold text-stone-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-mono">3</span>
                      Aufrechte Haltung einnehmen (Mindestens 30 Minuten nach dem Essen nicht hinlegen)
                    </div>
                    <p className="text-stone-600 pl-7 text-xs">
                      Nutzen Sie die Schwerkraft: Das Liegen erleichtert den Rückfluss des sauren Mageninhalts enorm.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {selectedPreview === 'plan' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Kapitel 4 · Tagesplan 1
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                    Der Entlastungstag: Sanfter Schutz von morgens bis abends
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3 bg-[#FAF9F5] rounded-xl border border-stone-200 space-y-1">
                    <span className="font-bold text-stone-900 block">Frühstück (07:30 – 08:30 Uhr)</span>
                    <p className="text-stone-600 text-xs">
                      Warmer Haferbrei (50g zarte Haferflocken) mit Wasser zubereitet, verfeinert mit 1/2 geriebenem Apfel und 1 TL Mandelmus.
                    </p>
                  </div>

                  <div className="p-3 bg-[#FAF9F5] rounded-xl border border-stone-200 space-y-1">
                    <span className="font-bold text-stone-900 block">Mittagessen (12:30 – 13:30 Uhr)</span>
                    <p className="text-stone-600 text-xs">
                      Gedämpfter Basmati-Reis mit zart gegartem Zucchini-Karotten-Gemüse und einer Prise Fenchelsaat. Milder Kräutertee.
                    </p>
                  </div>

                  <div className="p-3 bg-[#FAF9F5] rounded-xl border border-stone-200 space-y-1">
                    <span className="font-bold text-stone-900 block">Nachmittags-Snack (16:00 Uhr)</span>
                    <p className="text-stone-600 text-xs">
                      1 reife Banane oder 1 Dinkel-Zwieback mit lauwarmem Kamillentee.
                    </p>
                  </div>

                  <div className="p-3 bg-[#FAF9F5] rounded-xl border border-stone-200 space-y-1">
                    <span className="font-bold text-stone-900 block">Abendessen (spätestens 18:30 Uhr)</span>
                    <p className="text-stone-600 text-xs">
                      Cremige Kartoffel-Kürbis-Suppe (ohne Sahne, mit etwas Hafermilch püriert) und gerösteten Sonnenblumenkernen.
                    </p>
                  </div>
                </div>

                <div className="text-[11px] text-stone-500 italic">
                  * Vollständige Einkaufsliste und Mengenangaben für alle 3 Tage im E-Book enthalten.
                </div>
              </div>
            )}

            {selectedPreview === 'mythen' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">
                    Kapitel 2 · Aufklärung
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                    Warum Milch und Natron das Sodbrennen verschlimmern
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Zwei der am häufigsten gegoogelten Hausmittel sind für Ihren Magen ein Bumerang:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="p-3.5 bg-rose-50/60 rounded-xl border border-rose-200/80 text-xs sm:text-sm space-y-1">
                    <div className="font-bold text-rose-950">
                      Der Mythos „Kuhmilch neutralisiert Säure“
                    </div>
                    <p className="text-stone-700 text-xs leading-relaxed">
                      Im ersten Moment fühlt sich die kühle Milch wohltuend an. Doch sobald sie im Magen ankommt, regen das Kasein-Eiweiß und der hohe Kalziumgehalt die Magendrüsen dazu an, doppelt so viel Säure nachzuschütten. Das Brennen kehrt nach 20 Minuten noch intensiver zurück.
                    </p>
                  </div>

                  <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/80 text-xs sm:text-sm space-y-1">
                    <div className="font-bold text-amber-950">
                      Die Gefahr von „Natron / Natriumbicarbonat“
                    </div>
                    <p className="text-stone-700 text-xs leading-relaxed">
                      Natron reagiert mit Magensäure explosionsartig zu Kohlendioxid-Gas (CO2). Dieses Gas erzeugt einen enormen Druck im Magen, der den unteren Speiseröhren-Schließmuskel aufsprengt und die Säure direkt nach oben schießt.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Page footer preview bar */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-stone-500">
              Dies ist nur ein kurzer Auszug aus den insgesamt 30 Seiten.
            </span>
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-[#2D4533] hover:text-[#223527] transition-colors"
            >
              <span>Vollständigen Ratgeber herunterladen ({EBOOK_PRICE})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
