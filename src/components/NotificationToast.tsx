import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, Download, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PurchaseEvent {
  id: string;
  timeAgo: string;
  type: string;
}

const PURCHASE_EVENTS: PurchaseEvent[] = [
  { id: '1', timeAgo: 'Vor 2 Minuten', type: 'Kauf bestätigt' },
  { id: '2', timeAgo: 'Vor 6 Minuten', type: 'Kauf bestätigt' },
  { id: '3', timeAgo: 'Vor 11 Minuten', type: 'Kauf bestätigt' },
  { id: '4', timeAgo: 'Vor 18 Minuten', type: 'Kauf bestätigt' },
  { id: '5', timeAgo: 'Vor 24 Minuten', type: 'Kauf bestätigt' },
  { id: '6', timeAgo: 'Vor 31 Minuten', type: 'Kauf bestätigt' },
];

export const NotificationToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initial delay before first appearance
    const initialTimer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 3500);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (!isVisible || isDismissed || isHovered) return;

    // Show for 6 seconds, then hide for 4 seconds, then show next
    const hideTimer = setTimeout(() => {
      setIsVisible(false);

      const nextTimer = setTimeout(() => {
        if (!isDismissed) {
          setCurrentIndex((prev) => (prev + 1) % PURCHASE_EVENTS.length);
          setIsVisible(true);
        }
      }, 4000);

      return () => clearTimeout(nextTimer);
    }, 6500);

    return () => clearTimeout(hideTimer);
  }, [isVisible, isDismissed, isHovered, currentIndex]);

  if (isDismissed) return null;

  const currentEvent = PURCHASE_EVENTS[currentIndex];

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 max-w-sm pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="pointer-events-auto bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-xl rounded-xl p-3.5 flex items-start gap-3 text-stone-800"
            role="status"
            aria-live="polite"
          >
            {/* Visual Icon Badge */}
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0 text-emerald-700">
              <CheckCircle2 className="w-5 h-5" />
            </div>

            {/* Content Body: STRICTLY ANONYMOUS - No personal names */}
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                  {currentEvent.type}
                </span>
                <span className="text-[11px] text-stone-500">· {currentEvent.timeAgo}</span>
              </div>
              <p className="text-xs font-medium text-stone-900 mt-0.5 truncate">
                „Was essen bei Sodbrennen?“
              </p>
              <div className="flex items-center gap-2 mt-1 text-[11px] text-stone-500">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <Download className="w-3 h-3" /> PDF-Sofortzugang per E-Mail
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-stone-600">
                  <ShieldCheck className="w-3 h-3 text-stone-500" /> Verifiziert
                </span>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 -mr-1 -mt-1 text-stone-500 hover:text-stone-700 hover:bg-stone-100 rounded-md transition-colors"
              title="Benachrichtigung schließen"
              aria-label="Benachrichtigung schließen"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
