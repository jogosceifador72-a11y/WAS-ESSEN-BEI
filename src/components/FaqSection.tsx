import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { HOTMART_CHECKOUT_URL, EBOOK_PRICE } from '../data/ebookData';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Wie und wann erhalte ich das E-Book nach dem Kauf?",
    answer: "Unmittelbar nach der Zahlungsbestätigung erhalten Sie eine E-Mail von der Zahlungsplattform Hotmart mit Ihrem direkten Download-Link. Sie können das E-Book sofort öffnen und mit dem Lesen beginnen – auch mitten in der Nacht oder am Wochenende."
  },
  {
    question: "Auf welchen Geräten kann ich das E-Book lesen?",
    answer: "Der Ratgeber liegt als universelle PDF-Datei vor. Sie können ihn problemlos auf Ihrem Smartphone (iOS & Android), Tablet, E-Reader mit PDF-Funktion sowie auf jedem Laptop und PC (Windows & Mac) öffnen. Bei Bedarf können Sie die Seiten oder die Tagespläne auch ausdrucken."
  },
  {
    question: "Warum umfasst der Ratgeber bewusst 30 Seiten?",
    answer: "Weil Sie bei brennenden Magenschmerzen schnelle und konkrete Hilfe brauchen – und keine 400 Seiten medizinische Trockentheorie. Sie erhalten eine präzise Anleitung mit Sofortmaßnahmen, 3 fertigen Tagesplänen, 2 Rezepten und dem Auslöser-Detektor, ohne Zeit zu verlieren."
  },
  {
    question: "Warum raten Sie von Milch und Natron als Hausmittel ab?",
    answer: "Das ist einer der häufigsten Fehler: Milch puffert die Säure nur für wenige Augenblicke, stimuliert jedoch durch Eiweiß und Kalzium kurz darauf eine umso stärkere Säureproduktion (Säure-Rebound). Natron wiederum setzt schlagartig CO2-Gas frei, überdehnt den Magen und schwächt den Schließmuskel. Im Ratgeber erfahren Sie, welche sanften Hausmittel wie Mandeln oder Haferbrei den Magen wirklich dauerhaft beruhigen."
  },
  {
    question: "Muss ich teure Spezialprodukte oder Pulver kaufen?",
    answer: "Nein, absolut nicht. Sämtliche in den Tagesplänen und Rezepten verwendeten Lebensmittel sind gewöhnliche, magenfreundliche Zutaten, die Sie preiswert in jedem herkömmlichen Supermarkt oder Discounter um die Ecke finden."
  },
  {
    question: "Ersetzt der Ratgeber einen Arztbesuch?",
    answer: "Nein. Dieser Ratgeber dient der Information und praktischen Ernährungsumstellung im Alltag. Bei anhaltenden, extremen Schmerzen, Schluckbeschwerden, unbeabsichtigtem Gewichtsverlust oder Blutungen ist eine fachärztliche Abklärung (z. B. durch Magenspiegelung) zwingend erforderlich."
  },
  {
    question: "Wie funktioniert die Bezahlung über Hotmart?",
    answer: "Hotmart ist eine weltweit führende und sichere Plattform für digitale Produkte. Die Transaktion erfolgt über eine zertifizierte 256-Bit SSL-Verschlüsselung. Sie können bequem und geschützt mit den gängigen Zahlungsmethoden wie PayPal, Kreditkarte und weiteren Optionen bezahlen."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white/40 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3 mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B5A43]">
            <span>Häufige Fragen</span>
            <span aria-hidden="true">·</span>
            <span>Alles auf einen Blick</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Häufig gestellte Fragen (FAQ)
          </h2>

          <p className="text-base text-stone-600 leading-relaxed">
            Haben Sie noch eine offene Frage? Hier finden Sie alle wichtigen Details zum E-Book und Ablauf.
          </p>
        </motion.div>

        {/* Accordion list with scroll animation */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/90 backdrop-blur-md border border-stone-200/90 rounded-xl overflow-hidden transition-colors shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-serif font-semibold text-stone-900 hover:text-[#2D4533] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#2D4533]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/50">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Small Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-[#CCDCCD] shadow-xs"
        >
          <h3 className="text-base font-serif font-bold text-stone-900 mb-1">
            Bereit für ein Leben ohne ständiges Magenbrennen?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mb-4">
            Sichern Sie sich jetzt den 30-seitigen Ratgeber inklusive aller 3 Tagespläne für {EBOOK_PRICE}.
          </p>
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2D4533] hover:bg-[#223527] rounded-lg transition-colors shadow-sm"
          >
            <span>Jetzt E-Book herunterladen</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
