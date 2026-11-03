import React from 'react';
import { CHECKOUT_URL } from '../utils/salesPageData';
import { ShoppingBag, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface BuyButtonProps {
  label?: string;
  subtext?: string;
  className?: string;
  pulse?: boolean;
  size?: 'normal' | 'large';
  badge?: string;
}

export const BuyButton: React.FC<BuyButtonProps> = ({
  label = "OUI, JE COMMENCE MAINTENANT (2 000 FCFA)",
  subtext = "Paiement sécurisé par Mobile Money (Orange, MTN, Wave) & Carte · Accès instantané",
  className = "",
  pulse = true,
  size = 'large',
  badge
}) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
          <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
          {badge}
        </span>
      )}
      <a
        href={CHECKOUT_URL}
        target="_self"
        className={`group relative min-h-[52px] sm:min-h-[60px] inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-5 py-4 sm:px-9 sm:py-5 rounded-2xl font-black text-white text-sm sm:text-lg md:text-xl transition-all duration-300 shadow-xl cursor-pointer ${
          pulse ? 'animate-gentle-pulse hover:scale-[1.02]' : 'hover:scale-[1.01]'
        } bg-gradient-to-r from-[#D97706] via-[#EA580C] to-[#C2410C] hover:from-[#B45309] hover:via-[#C2410C] hover:to-[#9A3412] active:scale-[0.98] leading-tight`}
        style={{
          boxShadow: '0 12px 30px -6px rgba(234, 88, 12, 0.45), 0 4px 12px -2px rgba(194, 65, 12, 0.3)'
        }}
      >
        <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform group-hover:rotate-6" />
        <span className="tracking-wide uppercase text-center break-words max-w-full">{label}</span>
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform group-hover:translate-x-1 hidden sm:inline" />
      </a>
      {subtext && (
        <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-3 max-w-md flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 inline" />
          <span>{subtext}</span>
        </p>
      )}
    </div>
  );
};

export const PlaceholderBadge: React.FC<{ token: string; label?: string }> = ({ token, label }) => {
  const isUnfilled = token.startsWith('[') && token.endsWith(']');
  if (!isUnfilled) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md font-bold text-xs bg-amber-200/90 text-amber-950 border border-amber-400 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span>
        {token}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md font-mono text-xs font-bold bg-amber-100 text-amber-900 border border-dashed border-amber-400 select-all"
      title={`Emplacement à compléter : ${label || token}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
      {token}
    </span>
  );
};

export const SectionDivider: React.FC<{ icon?: React.ReactNode }> = () => {
  return (
    <div className="flex items-center justify-center my-12 max-w-xs mx-auto">
      <div className="h-px bg-gradient-to-r from-transparent via-[#5B1527]/20 to-transparent w-full"></div>
      <div className="px-3 text-[#D97706]">✦</div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#5B1527]/20 to-transparent w-full"></div>
    </div>
  );
};
