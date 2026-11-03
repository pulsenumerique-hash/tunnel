import React from 'react';
import { SEVEN_LINKS } from '../utils/salesPageData';
import { BuyButton } from './CommonUI';
import { Lightbulb, Compass, ArrowRight, CheckCircle2, XCircle, Sparkles, Wrench, Target, FileText, Tag, Users, Wallet } from 'lucide-react';

export const RevelationAndChain: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'wrench': return <Wrench className="w-5 h-5 text-amber-600" />;
      case 'target': return <Target className="w-5 h-5 text-rose-600" />;
      case 'file-text': return <FileText className="w-5 h-5 text-indigo-600" />;
      case 'tag': return <Tag className="w-5 h-5 text-emerald-600" />;
      case 'users': return <Users className="w-5 h-5 text-blue-600" />;
      case 'wallet': return <Wallet className="w-5 h-5 text-emerald-700" />;
      default: return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <>
      {/* 6. RÉVÉLATION */}
      <section id="section-6-revelation" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-4 border border-amber-300">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>La Révélation que personne ne t'a dite</span>
          </span>

          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-[#4A0E17] leading-tight mb-6">
            Ton problème n'est pas le manque de talent.<br />
            <span className="text-[#D97706] italic">C'est le manque de CHEMIN</span> entre ton talent et l'argent.
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            Regarde autour de toi : les femmes qui gagnent bien leur vie ne sont pas 10 fois plus intelligentes ni 10 fois plus diplômées que toi. La seule différence ? Elles ont un <strong>pont solide</strong> entre ce qu'elles savent faire et le compte bancaire de leurs clientes.
          </p>
        </div>

        {/* Le piège classique vs Le vrai chemin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-rose-50/70 rounded-2xl p-6 border border-rose-200">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-sm mb-3">
              <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>L'erreur classique que font 90% des femmes :</span>
            </div>
            <p className="font-serif-display text-lg font-bold text-rose-950 mb-2">
              Talent ➔ ??? ➔ Vouloir de l'argent tout de suite
            </p>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Elles publient une photo floue sans prix sur leur statut WhatsApp, attendent que les gens devinent, n'osent pas relancer, se découragent après 3 jours et concluent : <em>« Les gens n'aiment pas payer »</em>.
            </p>
          </div>

          <div className="bg-emerald-50/70 rounded-2xl p-6 border border-emerald-200">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Le chemin méthodique et inarrêtable :</span>
            </div>
            <p className="font-serif-display text-lg font-bold text-emerald-950 mb-2">
              La Chaîne Talent ➔ Paiement en 7 Maillons
            </p>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Chaque étape s'enclenche naturellement dans la suivante. Quand les 7 maillons sont alignés, la vente n'est plus une mendicité stressante : c'est un échange fluide, respectueux et chaleureux.
            </p>
          </div>
        </div>

        {/* Schéma visuel de la chaîne en 7 maillons */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-xl mb-12">
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#D97706] block mb-1">
              Mécanisme Officiel
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-black text-[#4A0E17]">
              Le Schéma Complet de la Chaîne en 7 Maillons
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Si un seul de ces maillons est manquant ou tordu, l'argent se bloque. Le guide les répare tous.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute left-8 right-8 top-12 h-1 bg-gradient-to-r from-amber-400 via-[#D97706] to-emerald-500 -z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
              {SEVEN_LINKS.map((link) => (
                <div
                  key={link.step}
                  className="bg-[#FAF7F2] rounded-2xl p-4 border border-neutral-200 hover:border-amber-500 hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center mb-3 border border-amber-200 group-hover:scale-110 transition-transform">
                    {getIcon(link.icon)}
                  </div>
                  <span className="text-[10px] font-black uppercase text-amber-700 tracking-wider mb-1">
                    Maillon 0{link.step}
                  </span>
                  <h4 className="font-serif-display text-base font-bold text-[#4A0E17] mb-2 leading-tight">
                    {link.name}
                  </h4>
                  <p className="text-[11px] text-neutral-600 leading-snug">
                    {link.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200 text-center">
            <p className="text-xs sm:text-sm text-amber-950 font-semibold">
              🎯 <strong>Le secret :</strong> Tu as déjà le maillon 1 (ton talent). Il te manque simplement les maillons 2 à 7 pour que l'argent arrive sur ton téléphone. C'est exactement ce que nous allons construire ensemble.
            </p>
          </div>
        </div>
      </section>

      {/* 7. LA SOLUTION */}
      <section id="section-7-solution" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F2] to-amber-50/60 border-b border-amber-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B1527] text-white text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>La Solution Directe</span>
          </span>

          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-[#4A0E17] leading-tight mb-6">
            « Ton talent, ta liberté » est le raccourci le plus direct jamais conçu pour les femmes d'Afrique.
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ce n'est pas un manuel théorique avec des théories américaines inapplicables à Douala, Abidjan, Dakar ou Kinshasa. C'est une feuille de route de terrain, taillée sur mesure pour nos réalités quotidiennes (la famille, les interruptions, le manque de temps, les retards, le Mobile Money, la méfiance des acheteurs).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mb-10">
            <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-xs">
              <span className="text-2xl font-black text-[#D97706] block mb-2">01</span>
              <h3 className="font-serif-display font-bold text-[#4A0E17] text-base mb-1">Règle des 48 heures</h3>
              <p className="text-xs text-neutral-600">
                Chaque chapitre se termine par une action concrète à réaliser en 48 heures. Pas de procrastination, des résultats visibles dès le premier week-end.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-xs">
              <span className="text-2xl font-black text-[#D97706] block mb-2">02</span>
              <h3 className="font-serif-display font-bold text-[#4A0E17] text-base mb-1">Scripts à copier-coller</h3>
              <p className="text-xs text-neutral-600">
                Tu n'as rien à inventer. Les messages WhatsApp pour proposer tes services, fixer un prix et encaisser un acompte sont déjà rédigés mot pour mot.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-xs">
              <span className="text-2xl font-black text-[#D97706] block mb-2">03</span>
              <h3 className="font-serif-display font-bold text-[#4A0E17] text-base mb-1">Exemples 100% locaux</h3>
              <p className="text-xs text-neutral-600">
                Cuisine, coiffure, couture, relecture de mémoires, gestion de planning, pâtisserie, confection de jus, cosmétiques maison... des cas réels du continent.
              </p>
            </div>
          </div>

          <BuyButton
            label="JE VEUX LE GUIDE & LES 7 MAILLONS (2 000 FCFA)"
            subtext="Accès immédiat dès validation par Mobile Money ou Carte"
          />
        </div>
      </section>
    </>
  );
};
