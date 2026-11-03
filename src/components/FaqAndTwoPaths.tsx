import React, { useState } from 'react';
import { FAQ_ITEMS, CHECKOUT_URL } from '../utils/salesPageData';
import { BuyButton } from './CommonUI';
import { ChevronDown, HelpCircle, ArrowRight, Compass, XCircle, CheckCircle2, Split } from 'lucide-react';

export const FaqAndTwoPaths: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* 18. FAQ EN ACCORDÉON */}
      <section id="section-18-faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-4 border border-amber-300">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Foire Aux Questions</span>
          </span>

          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-[#4A0E17] leading-tight mb-4">
            Tu te poses encore des questions ?<br />
            <span className="text-[#D97706] italic">Voici les réponses claires et honnêtes.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Clique sur chaque question pour lever le moindre doute avant de nous rejoindre.
          </p>
        </div>

        <div className="space-y-4 mb-14">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full min-h-[52px] p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif-display font-bold text-base sm:text-lg text-[#4A0E17] hover:text-[#D97706] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-neutral-400 mt-1">
                      0{index + 1}
                    </span>
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#D97706]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-neutral-600 text-xs sm:text-sm leading-relaxed border-t border-neutral-100 pt-4 bg-[#FAF7F2]/40">
                    <p className="mb-4">{item.a}</p>
                    <a
                      href={CHECKOUT_URL}
                      target="_self"
                      className="min-h-[48px] inline-flex items-center gap-1.5 py-2 text-xs sm:text-sm font-bold text-[#D97706] hover:text-[#B45309] hover:underline"
                    >
                      <span>➔ Convaincue ? Rejoins-nous pour 2 000 FCFA</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <BuyButton
            label="J'AI MES RÉPONSES, JE COMMENCE (2 000 FCFA)"
            subtext="Accès instantané par téléchargement direct et email"
          />
        </div>
      </section>

      {/* 19. FUTURE PACING + CHOIX BINAIRE (DEUX CHEMINS) */}
      <section id="section-19-deux-chemins" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-amber-50/50 to-white border-t border-amber-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B1527] text-white text-xs font-black uppercase tracking-wider mb-4">
              <Split className="w-3.5 h-3.5 text-amber-300" />
              <span>Le Carrefour Décisif</span>
            </span>

            <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-[#4A0E17] leading-tight mb-4">
              Dans 90 jours, tu seras de toute façon<br />
              <span className="text-[#D97706] italic">90 jours plus loin.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600">
              Le temps avance, avec ou sans toi. Tu te trouves exactement à un croisement, face à deux routes bien réelles :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {/* Chemin A : L'inaction */}
            <div className="bg-rose-50/70 rounded-3xl p-6 sm:p-8 border-2 border-rose-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-rose-200 text-rose-800 flex items-center justify-center font-bold">
                    <XCircle className="w-6 h-6" />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700">Chemin A</span>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-black text-rose-950">
                      Tu fermes cette page et tu hésites
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-neutral-700 font-medium mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Tu gardes tes 2 000 FCFA dans ta poche (tu les dépenseras probablement en crédit ou goûter avant vendredi).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Dans 90 jours, ta situation financière est exactement la même qu'aujourd'hui.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Les mêmes fins de mois étouffantes, les mêmes demandes d'argent gênantes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Tu continues de regarder d'autres femmes réussir pendant que ton talent s'éteint.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-rose-100/70 p-3 rounded-xl text-center text-xs text-rose-900 font-bold">
                Bilan : Rien n'a changé, sauf 3 mois de plus perdus.
              </div>
            </div>

            {/* Chemin B : La décision */}
            <div className="bg-emerald-50/70 rounded-3xl p-6 sm:p-8 border-2 border-emerald-400 shadow-md flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs">
                La Voie Recommandée
              </span>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Chemin B</span>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-black text-emerald-950">
                      Tu investis 2 000 FCFA et tu agis
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-neutral-700 font-medium mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Ce soir même, tu télécharges le guide et remplis ton Détecteur de Talents.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>En 48h, ton prix minimum rentable est calculé et ton offre 1 page est rédigée.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Tu envoies les scripts WhatsApp éprouvés et décroches tes 5 premières clientes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Dans 90 jours, tu as ton propre argent liquide sur ton téléphone et la tête haute.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-100/80 p-3 rounded-xl text-center text-xs text-emerald-950 font-black">
                Bilan : Tu as créé une source de revenus qui t'appartient à vie.
              </div>

              <div className="mt-4 pt-1">
                <a
                  href={CHECKOUT_URL}
                  target="_self"
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm shadow-md active:scale-95 transition-all text-center uppercase tracking-wide cursor-pointer"
                >
                  <span>Je choisis le Chemin B (2 000 FCFA)</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
