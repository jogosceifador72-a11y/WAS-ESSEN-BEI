import React from 'react';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Download, 
  Sparkles, 
  Smartphone, 
  Lock, 
  CreditCard,
  MailCheck,
  FileCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { HOTMART_CHECKOUT_URL, EBOOK_PRICE } from '../data/ebookData';
import ebook3DMockup from '../assets/images/ebook_3d_mockup_1792240011668.jpg';

export const PricingOfferSection: React.FC = () => {
  return (
    <section id="bestellen" className="py-16 sm:py-24 bg-white/40 backdrop-blur-md border-b border-stone-200/80">
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
            <span>Jetzt sichern</span>
            <span aria-hidden="true">·</span>
            <span>Einmaliger Festpreis</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Ihr kompletter Fahrplan zu einer beschwerdefreien Verdauung
          </h2>

          <p className="text-base text-stone-600 leading-relaxed">
            Kein Abonnement, keine versteckten Kosten. Sichern Sie sich den 30-seitigen Leitfaden mit allen Tagesplänen zum einmaligen Aktionspreis von {EBOOK_PRICE}.
          </p>
        </motion.div>

        {/* High-Converting Pricing Box with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-[#3B5A43]/40 shadow-xl relative"
        >
          
          {/* Subtle top ribbon */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2D4533] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Digitaler Sofortdownload · Lesbar auf allen Geräten</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
            
            {/* Left: Book Cover Thumbnail (4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="w-48 sm:w-56 rounded-xl overflow-hidden shadow-lg border border-stone-200/80 bg-white p-2">
                <img
                  src={ebook3DMockup}
                  alt="Was essen bei Sodbrennen? Ratgeber Buchcover"
                  className="w-full h-auto object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs font-medium text-stone-500">
                  Umfang: 30 Seiten im PDF-Format
                </span>
              </div>
            </div>

            {/* Right: Package Content & Hotmart CTA (8 cols) */}
            <div className="md:col-span-8 space-y-6">
              
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  „Was essen bei Sodbrennen?“
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Der sanfte Weg zu einer beschwerdefreien Verdauung – mit Sofortmaßnahmen, Tagesplänen und Rezepten.
                </p>
              </div>

              {/* What is inside */}
              <div className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>30-seitiger kompakter PDF-Ratgeber</strong> (Smartphone, Tablet, PC)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Akut-Sofortmaßnahmen:</strong> Schmerz stoppen mit Mandeln, Wasser & Hafer</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>3 vollständige Tagespläne</strong> für unbeschwerten Genuss ohne Rätselraten</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>2 magenschonende Wohlfühl-Rezepte</strong> & smarte Zwischenmahlzeiten</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Die Mythos-Falle entlarvt:</strong> Warum Milch & Natron die Säure anheizen</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Persönlicher 7-Tage Auslöser-Detektor</strong> zum Ausdrucken oder Ausfüllen</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="pt-4 border-t border-stone-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs text-stone-500 font-medium block">
                      Einmaliger Gesamtpreis
                    </span>
                    <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#223527] tabular-nums">
                      {EBOOK_PRICE}
                    </div>
                  </div>

                  <div className="text-xs text-stone-500 sm:text-right">
                    <span className="block font-medium text-stone-700">Sofortige Lieferung</span>
                    <span>Per E-Mail direkt nach Zahlungsbestätigung</span>
                  </div>
                </div>

                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-base sm:text-lg font-bold text-white bg-[#2D4533] hover:bg-[#223527] rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  <span>Jetzt bei Hotmart bestellen ({EBOOK_PRICE})</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secure Payment Badges */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-500">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-stone-600" /> Sichere 256-Bit SSL Verschlüsselung
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-stone-600" /> PayPal, Kreditkarte & mehr
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5 text-emerald-800 font-medium">
                    <MailCheck className="w-3.5 h-3.5 text-emerald-600" /> Sofortige PDF-Zustellung
                  </span>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
