import React, { useState, useEffect } from 'react';
import { CHECKOUT_URL, WHATSAPP_PLACEHOLDER } from '../utils/salesPageData';
import { ShoppingBag, ArrowRight, MessageCircle, X } from 'lucide-react';

export const FloatingControls: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [showWaModal, setShowWaModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky mobile buy button after scrolling 450px
      if (window.scrollY > 450) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    // If WHATSAPP_PLACEHOLDER is still unconfigured, explain politely in a modal so it doesn't break
    if (WHATSAPP_PLACEHOLDER.startsWith('[')) {
      e.preventDefault();
      setShowWaModal(true);
    }
  };

  return (
    <>
      {/* 1. BOUTON FLOTTANT WHATSAPP (Bottom Right) */}
      <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40">
        <a
          href={WHATSAPP_PLACEHOLDER}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          aria-label="Poser une question sur WhatsApp"
          className="group min-h-[48px] min-w-[48px] flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/80"
          style={{ boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)' }}
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366] shrink-0" />
          <span className="text-xs sm:text-sm font-black tracking-wide pr-1">
            Une question ?
          </span>
        </a>
      </div>

      {/* WhatsApp Modal for Placeholder Info if clicked while unconfigured */}
      {showWaModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-amber-300 relative text-left">
            <button
              onClick={() => setShowWaModal(false)}
              className="absolute top-4 right-4 min-h-[48px] min-w-[48px] flex items-center justify-center text-neutral-400 hover:text-neutral-700 rounded-full"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="font-serif-display text-lg font-bold text-[#4A0E17]">
                Configuration du lien WhatsApp
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 mb-4 leading-relaxed">
              Ce bouton pointe actuellement vers l'emplacement <span className="font-mono bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-bold">[LIEN_WHATSAPP]</span>.
            </p>
            <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-xs text-amber-950 mb-4">
              <p className="font-bold mb-1">Pour activer ton lien WhatsApp direct :</p>
              <p className="text-[11px] text-neutral-600">
                Remplace simplement <code className="font-mono font-bold">[LIEN_WHATSAPP]</code> dans le fichier par ton lien wa.me (ex : <code className="font-mono">https://wa.me/2376XXXXXXXX</code>).
              </p>
            </div>
            <button
              onClick={() => setShowWaModal(false)}
              className="w-full min-h-[48px] py-3 rounded-xl bg-[#5B1527] text-white text-xs sm:text-sm font-bold hover:bg-[#3B0A16] flex items-center justify-center"
            >
              Compris, je ferme
            </button>
          </div>
        </div>
      )}

      {/* 2. BOUTON D'ACHAT COLLANT (STICKY MOBILE BAR) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-200 p-3 shadow-2xl md:hidden transition-transform duration-300 ${
          showSticky ? 'translate-y-0' : 'translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div className="text-left shrink-0">
            <span className="text-[10px] uppercase font-bold text-neutral-400 block leading-tight">
              Prix spécial
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-[#4A0E17]">2 000 FCFA</span>
              <span className="text-[11px] line-through text-neutral-400">9 000</span>
            </div>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_self"
            className="flex-1 min-h-[50px] inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D97706] to-[#EA580C] text-white font-extrabold text-xs sm:text-sm shadow-md active:scale-95 transition-all text-center uppercase tracking-wide"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span>J'achète maintenant</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>
      </div>
    </>
  );
};
