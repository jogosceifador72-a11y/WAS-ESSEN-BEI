import React from 'react';
import authorImg from '../assets/images/author_portrait_karin_1792240012084.jpg';
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { HOTMART_CHECKOUT_URL, EBOOK_PRICE } from '../data/ebookData';

export const AuthorSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white/45 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Author Portrait (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-md border-2 border-stone-200/80">
                  <img
                    src={authorImg}
                    alt="Karin Zeit – Autorin & Ernährungsbegleiterin"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#2D4533] text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Karin Zeit</span>
                </div>
              </div>
            </div>

            {/* Author Biography & Philosophy (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#3B5A43]">
                  Über die Autorin
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  Karin Zeit – Der sanfte Weg zu einem entspannten Magen
                </h2>
              </div>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                „Essen sollte wieder Genuss, Lebensfreude und Wohlbefinden bedeuten – nicht ständige Angst vor brennendem Schmerz in der Speiseröhre oder schlaflosen Nächten. Viele meiner Leserinnen und Leser fühlten sich von widersprüchlichen Internet-Tipps und extremen Diäten völlig überfordert.“
              </p>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                „Deshalb habe ich diesen kompakten 30-Seiten-Ratgeber geschrieben: Er verzichtet ganz bewusst auf komplizierte biochemische Vorträge und gibt Ihnen stattdessen klare, praxiserprobte Werkzeuge an die Hand, die Sie bereits heute bei der nächsten Mahlzeit anwenden können.“
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-stone-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Einfach & im eigenen Tempo</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Ohne teure Speziallebensmittel</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Sofort umsetzbar im Berufs- & Familienalltag</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
