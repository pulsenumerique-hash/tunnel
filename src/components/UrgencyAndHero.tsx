import React from 'react';
import { DATE_PLACEHOLDER } from '../utils/salesPageData';
import { BuyButton, PlaceholderBadge } from './CommonUI';
import { BookOpen, Award, CheckCircle2, Sparkles, Smartphone, Clock, Shield } from 'lucide-react';

interface UrgencyAndHeroProps {
  onOpenVariants?: () => void;
  activeHeadlineIndex?: number;
}

export const UrgencyAndHero: React.FC<UrgencyAndHeroProps> = () => {
  return (
    <>
      {/* 1. BANDEAU D'URGENCE VRAIE */}
      <section
        id="section-1-bandeau"
        className="sticky top-0 z-40 bg-[#5B1527] text-white py-2 px-3 shadow-md border-b border-amber-500/30"
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-1.5 justify-center flex-wrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="tracking-wide uppercase text-amber-200 text-[10px] sm:text-xs font-black">
              ⚡ OFFRE SPÉCIALE LANCEMENT :
            </span>
            <span className="text-amber-300 font-extrabold text-xs sm:text-sm">2 000 FCFA</span>
            <span className="text-neutral-300 text-[10px] sm:text-xs line-through opacity-80">(9 000 FCFA)</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center text-[11px] sm:text-xs">
            <span>jusqu'au</span>
            <PlaceholderBadge token={DATE_PLACEHOLDER} label="Date limite réelle" />
          </div>
        </div>
      </section>

      {/* 2. HERO SECTION */}
      <header id="section-2-hero" className="relative pt-10 sm:pt-14 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#5B1527]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B1527]/10 text-[#5B1527] border border-[#5B1527]/20 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>Spécial Femmes d'Afrique Francophone · Cameroun, Côte d'Ivoire, Sénégal, RDC…</span>
          </div>

          {/* Headline Choc */}
          <h1 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-black text-[#4A0E17] leading-[1.15] sm:leading-[1.12] tracking-tight mb-6">
            Tu as du talent.<br />
            <span className="text-[#D97706] italic relative inline-block">
              Ton compte en banque
              <svg className="absolute -bottom-2 left-0 w-full text-amber-400" viewBox="0 0 300 12" fill="none">
                <path d="M2 9C75 3 225 3 298 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{' '}
            ne le sait pas encore.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-neutral-700 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Le guide pratique en 90 jours pour transformer ce que tu sais déjà faire en revenus réguliers,{' '}
            <strong className="text-neutral-900 font-extrabold underline decoration-amber-400 decoration-2">
              même sans diplôme, sans capital et sans audience.
            </strong>
          </p>

          {/* Pricing Highlight Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white/95 border-2 border-amber-300 px-6 py-3.5 rounded-2xl shadow-md mb-8">
            <div className="text-left">
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-neutral-500 block">
                Tarif de lancement immédiat
              </span>
              <div className="flex items-baseline gap-2.5">
                <span className="text-3xl sm:text-4xl font-black text-[#4A0E17]">2 000 FCFA</span>
                <span className="text-lg sm:text-xl line-through text-neutral-400 font-bold">9 000 FCFA</span>
              </div>
            </div>
            <div className="h-8 w-px bg-amber-200 hidden sm:block"></div>
            <div className="flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5" /> Économie immédiate : 7 000 FCFA (-78%)
              </span>
              <span className="text-[11px] text-neutral-500 mt-0.5">Accès instantané à vie après paiement</span>
            </div>
          </div>

          {/* Hero CTA Button */}
          <div className="mb-12">
            <BuyButton
              label="OUI, JE VEUX MON GUIDE MAINTENANT (2 000 FCFA)"
              subtext="Paiement 100% sécurisé via Mobile Money (Orange Money, MTN MoMo, Wave) & Carte"
              badge="Accès immédiat par téléchargement direct + email"
            />
          </div>

          {/* Realistic CSS Mockup of the Guide and 6 Worksheets */}
          <div className="relative max-w-xl mx-auto pt-4">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-200/80">
              {/* Corner badge */}
              <div className="absolute -top-3.5 -right-3.5 bg-gradient-to-r from-[#D97706] to-[#EA580C] text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Format Pratique PDF Remplissable</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Book Cover Mockup */}
                <div className="sm:col-span-6 flex justify-center">
                  <div className="relative w-48 sm:w-56 aspect-[1/1.42] bg-gradient-to-br from-[#4A0E17] via-[#5B1527] to-[#2B060E] rounded-r-xl rounded-l-sm p-5 text-white flex flex-col justify-between shadow-2xl border-l-4 border-amber-400/80 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    {/* Spine illusion */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 via-white/20 to-transparent pointer-events-none rounded-l-sm"></div>
                    
                    <div>
                      <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-amber-300 font-extrabold pb-3 border-b border-amber-400/30">
                        <span>Édition Pratique</span>
                        <span>~59 pages</span>
                      </div>
                      <div className="mt-6">
                        <span className="text-[11px] uppercase font-bold text-amber-200/90 tracking-widest block mb-1">
                          Le Manuel Pas à Pas
                        </span>
                        <h2 className="font-serif-display text-2xl font-black text-amber-100 leading-tight">
                          TON TALENT,<br />
                          TA LIBERTÉ
                        </h2>
                        <div className="w-12 h-1 bg-amber-400 my-2.5 rounded-full"></div>
                        <p className="text-[10px] text-neutral-300 leading-tight italic">
                          De l'idée aux 5 premières clientes qui paient en 90 jours
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-amber-400/30 flex justify-between items-end text-[9px] text-amber-200/80">
                      <div>
                        <span className="block font-semibold">Les promoteurs de</span>
                        <span className="block text-amber-300 font-bold">À Cœur Ouvert</span>
                      </div>
                      <span className="bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded text-[8px] font-bold">
                        PDF Interactif
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bundle details */}
                <div className="sm:col-span-6 text-left space-y-3">
                  <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block">
                    Ce que tu télécharges dans 2 minutes :
                  </span>
                  <ul className="text-xs sm:text-sm text-neutral-800 space-y-2 font-medium">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Le guide complet 59 pages</strong> au format PDF interactif remplissable sur téléphone.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Le pack des 6 outils</strong> : Détecteur, Matrice /20, Calculateur de prix, Modèle d'offre, Scripts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Les 6 annexes d'action</strong> (30 idées de contenus WhatsApp, 12 réponses aux objections...).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Adapté 100% au contexte local</strong> : FCFA, Mobile Money, WhatsApp Business.</span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <div className="bg-amber-50 rounded-xl p-2.5 border border-amber-200/80 flex items-center gap-2.5 text-xs text-amber-900 font-semibold">
                      <Smartphone className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Fonctionne directement sur ton smartphone Android ou iPhone.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. PREUVE RAPIDE */}
      <section id="section-3-preuve-rapide" className="border-y border-amber-300/60 bg-gradient-to-r from-amber-50 via-amber-100/60 to-amber-50 py-7 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-amber-200/60 shadow-xs">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#5B1527]/10 text-[#5B1527] mx-auto mb-2 font-bold text-xs">
                <BookOpen className="w-4 h-4" />
              </span>
              <span className="block text-2xl sm:text-3xl font-black text-[#5B1527]">11 Chapitres</span>
              <span className="text-xs sm:text-sm text-neutral-600 font-medium">Actionnables en 5 parties</span>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-amber-200/60 shadow-xs">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-[#D97706] mx-auto mb-2 font-bold text-xs">
                <Award className="w-4 h-4" />
              </span>
              <span className="block text-2xl sm:text-3xl font-black text-[#D97706]">6 Outils Clés</span>
              <span className="text-xs sm:text-sm text-neutral-600 font-medium">À remplir pas à pas</span>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-amber-200/60 shadow-xs">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#5B1527]/10 text-[#5B1527] mx-auto mb-2 font-bold text-xs">
                <Smartphone className="w-4 h-4" />
              </span>
              <span className="block text-2xl sm:text-3xl font-black text-[#5B1527]">~59 Pages</span>
              <span className="text-xs sm:text-sm text-neutral-600 font-medium">PDF interactif fluide</span>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-amber-200/60 shadow-xs">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-[#D97706] mx-auto mb-2 font-bold text-xs">
                <Clock className="w-4 h-4" />
              </span>
              <span className="block text-2xl sm:text-3xl font-black text-[#D97706]">90 Jours</span>
              <span className="text-xs sm:text-sm text-neutral-600 font-medium">Pour 5 clientes payantes</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
