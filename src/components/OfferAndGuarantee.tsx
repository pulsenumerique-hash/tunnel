import React from 'react';
import { VALUE_STACK_ITEMS, PRICING, BONUS_PLACEHOLDER, GARANTIE_PLACEHOLDER, DATE_PLACEHOLDER } from '../utils/salesPageData';
import { calculateTotalValue, calculateSavings } from '../utils/salesPageLogic';
import { BuyButton, PlaceholderBadge } from './CommonUI';
import { Check, ShieldCheck, Gift, Zap, Layers, Sparkles, CreditCard, Smartphone, Lock } from 'lucide-react';

export const OfferAndGuarantee: React.FC = () => {
  const totalValue = calculateTotalValue(VALUE_STACK_ITEMS);
  const savings = calculateSavings(PRICING.regularPrice, PRICING.launchPrice);

  return (
    <>
      {/* 15. EMPILEMENT DE VALEUR + ANCRAGE DE PRIX */}
      <section id="section-15-empilement" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B1527]/10 text-[#5B1527] text-xs font-black uppercase tracking-wider mb-4 border border-[#5B1527]/20">
            <Layers className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Récapitulatif de Valeur Complète</span>
          </span>

          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-[#4A0E17] leading-tight mb-4">
            Voici exactement ce que tu reçois<br />
            <span className="text-[#D97706] italic">dans ton pack complet aujourd'hui :</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Si tu devais engager un consultant ou suivre des formations dispersées pour concevoir chacun de ces outils un par un, voici ce que cela représenterait en valeur réelle :
          </p>
        </div>

        {/* Tableau d'empilement de valeur */}
        <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-[#4A0E17] to-[#5B1527] text-white p-4 sm:p-5 flex justify-between items-center text-xs sm:text-sm font-bold">
            <span className="uppercase tracking-wider">Élément inclus dans ton pack</span>
            <span className="uppercase tracking-wider">Valeur estimée</span>
          </div>

          <div className="divide-y divide-neutral-100">
            {VALUE_STACK_ITEMS.map((item, index) => (
              <div key={index} className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-amber-50/40 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                    {item.item}
                  </span>
                </div>
                <span className="font-mono text-xs sm:text-sm font-bold text-neutral-500 shrink-0">
                  {item.value.toLocaleString('fr-FR')} FCFA
                </span>
              </div>
            ))}
          </div>

          {/* Totaux & Ancrage */}
          <div className="bg-[#FAF7F2] p-6 border-t-2 border-amber-300 space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-600">
              <span className="font-medium">Valeur totale estimée de l'ensemble :</span>
              <span className="font-mono text-base font-bold line-through text-neutral-400">
                {totalValue.toLocaleString('fr-FR')} FCFA
              </span>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-600">
              <span className="font-medium">Prix public normal après le lancement :</span>
              <span className="font-mono text-base font-bold line-through text-rose-500">
                {PRICING.regularPrice.toLocaleString('fr-FR')} FCFA
              </span>
            </div>

            <div className="pt-3 border-t border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#D97706] block">
                  Ton tarif de lancement aujourd'hui :
                </span>
                <span className="text-3xl sm:text-4xl font-black text-[#4A0E17]">
                  {PRICING.launchPrice.toLocaleString('fr-FR')} FCFA
                </span>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300">
                  Tu économises {savings.formattedSavings} ({savings.discountPercentage}% de réduction)
                </span>
                <span className="text-[11px] text-neutral-500 block mt-1">
                  Valable uniquement jusqu'au <PlaceholderBadge token={DATE_PLACEHOLDER} label="Date limite" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparaison honnête */}
        <div className="bg-amber-50/70 rounded-2xl p-6 border border-amber-200 text-xs sm:text-sm text-neutral-700 leading-relaxed mb-12">
          <p className="mb-2">
            <strong>Mettons les choses en perspective :</strong>
          </p>
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Une formation classique de 2 jours en salle coûte entre <strong>50 000 FCFA et 150 000 FCFA</strong>, plus le transport et la nourriture.</li>
            <li>Un seul rendez-vous au salon de coiffure ou un panier de courses basique coûte souvent plus de <strong>5 000 FCFA</strong>.</li>
            <li>Ce guide complet de 59 pages avec ses 6 outils pratiques ne te demande aujourd'hui que <strong>2 000 FCFA</strong>, accessible à vie.</li>
          </ul>
        </div>
      </section>

      {/* 16. L'OFFRE COMPLÈTE */}
      <section id="section-16-offre" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F2] via-amber-50 to-[#FAF7F2] relative">
        <div className="max-w-4xl mx-auto">
          {/* Main Offer Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-12 border-4 border-amber-400 shadow-2xl relative overflow-hidden">
            {/* Ribbon */}
            <div className="absolute top-6 -right-12 bg-[#D97706] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider py-1.5 px-12 rotate-45 shadow-md">
              -78% RÉDUCTION
            </div>

            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-3">
                Pack Complet Tout-en-Un
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl font-black text-[#4A0E17] leading-tight mb-3">
                Accède à « Ton talent, ta liberté »
              </h2>
              <p className="text-sm sm:text-base text-neutral-600">
                Le guide officiel + les 6 outils interactifs + les 6 annexes + les scripts WhatsApp
              </p>
            </div>

            {/* Checklist of what's inside */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 bg-[#FAF7F2] p-5 rounded-2xl border border-amber-200">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Le Guide PDF complet ~59 pages</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Outil 1 : Le Détecteur de talents</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Outil 2 : La Matrice score /20</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Outil 3 : Le Calculateur de prix FCFA</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Outil 4 : Le Modèle d'offre en 1 page</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Outil 5 : Les 6 Scripts WhatsApp prêts</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Outil 6 : Le Plan 90 Jours & 5 clientes</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pack 6 Annexes (idées statuts, objections...)</span>
              </div>
            </div>

            {/* Bonus Section Placeholder */}
            <div className="mb-8 p-4 rounded-2xl bg-amber-100/60 border border-amber-300 text-left">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-1">
                <Gift className="w-4 h-4 text-amber-700" />
                <span>BONUS SPÉCIAL LANCEMENT :</span>
              </div>
              <div className="text-xs text-neutral-700">
                <PlaceholderBadge token={BONUS_PLACEHOLDER} label="Bonus spécial" />
                <span className="block mt-1 text-[11px] text-neutral-500 italic">
                  (Si aucun bonus n'est configuré, ce bloc peut être retiré sans altérer l'offre)
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="text-center mb-8 bg-gradient-to-r from-amber-50 via-white to-amber-50 p-6 rounded-2xl border border-amber-200">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-1">
                PRIX NORMAL : <span className="line-through">9 000 FCFA</span>
              </span>
              <div className="text-4xl sm:text-6xl font-black text-[#4A0E17] tracking-tight mb-2">
                2 000 FCFA
              </div>
              <p className="text-xs sm:text-sm font-bold text-emerald-700">
                Paiement unique · Aucun abonnement caché · Accès à vie
              </p>
            </div>

            {/* Big CTA Button */}
            <div className="mb-6">
              <BuyButton
                label="JE COMMENCE MAINTENANT (2 000 FCFA)"
                subtext="Paiement 100% sécurisé via Mobile Money & Carte bancaire"
                badge="Téléchargement immédiat"
              />
            </div>

            {/* Security Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center pt-4 border-t border-neutral-100 text-xs text-neutral-500">
              <div className="flex items-center justify-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>Paiement crypté SSL 256 bits</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#D97706]" />
                <span>Orange Money, MTN MoMo, Wave</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Livraison immédiate par email</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17. LA GARANTIE */}
      <section id="section-17-garantie" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-400/80 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-inner">
            <ShieldCheck className="w-12 h-12" />
          </div>

          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Inversion Totale du Risque
            </span>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-black text-[#4A0E17]">
              « Le risque est entièrement pour moi, pas pour toi. »
            </h3>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Mon but n'est pas de prendre tes 2 000 FCFA. Mon but est que tu construises une activité digne qui te rapporte 10, 20 ou 50 fois cette somme.
            </p>

            <div className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-medium">
              <PlaceholderBadge token={GARANTIE_PLACEHOLDER} label="Formule de garantie" />
              <p className="mt-1 text-[11px] text-emerald-900">
                Si après avoir lu le guide et testé les outils tu sens que ce n'est pas pour toi, un simple message suffit pour être remboursée.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
