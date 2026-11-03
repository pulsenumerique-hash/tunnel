import React from 'react';
import { TOOLS, PROGRAM_PARTS, ANNEXES } from '../utils/salesPageData';
import { BuyButton } from './CommonUI';
import { Wrench, CheckCircle, Calendar, Sparkles, BookCheck, Clock, Flag, Award } from 'lucide-react';

export const ToolsAndProgram: React.FC = () => {
  return (
    <>
      {/* 8. CE QUE TU VAS CONSTRUIRE (LES 6 OUTILS) */}
      <section id="section-8-outils" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B1527]/10 text-[#5B1527] border border-[#5B1527]/20 text-xs font-black uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Boîte à Outils Clé en Main</span>
          </span>

          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-[#4A0E17] leading-tight mb-4">
            Ce que tu vas construire :<br />
            <span className="text-[#D97706] italic">6 outils concrets</span> pour ne plus jamais naviguer à vue.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Fini les carnets de notes remplis de brouillons qui dorment dans un tiroir. À la fin de ta lecture, tu possèdes ces 6 actifs opérationnels prêts à encaisser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-3xl p-6 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-amber-100 text-[#D97706] font-black text-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {tool.number}
                  </span>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {tool.tag}
                  </span>
                </div>

                <h3 className="font-serif-display text-xl font-black text-[#4A0E17] mb-3 leading-snug">
                  {tool.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  {tool.concreteBenefit}
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-4 space-y-2">
                <div className="bg-[#FAF7F2] rounded-xl p-3 border border-amber-200/60 text-xs">
                  <span className="text-[10px] font-extrabold uppercase text-neutral-400 block mb-0.5">
                    Livrable obtenu :
                  </span>
                  <span className="font-semibold text-neutral-800 block">
                    {tool.deliverable}
                  </span>
                </div>
                <div className="text-[11px] text-amber-700 font-semibold flex items-center gap-1.5 pt-1">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Action 48 h : {tool.action48h}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. LE PROGRAMME COMPLET (5 PARTIES + 6 ANNEXES) */}
      <section id="section-9-programme" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 border-y border-amber-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B1527] text-white text-xs font-bold uppercase tracking-wider mb-4">
              <BookCheck className="w-3.5 h-3.5 text-amber-300" />
              <span>Sommaire Pédagogique</span>
            </span>

            <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-[#4A0E17] leading-tight mb-4">
              11 Chapitres structurés en 5 parties.<br />
              <span className="text-[#D97706] italic">Zéro bla-bla, que du résultat.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600">
              Voici exactement ce que tu vas traverser, et ce que tu auras produit à la fin de chaque étape :
            </p>
          </div>

          {/* 5 Parts */}
          <div className="space-y-5 mb-14">
            {PROGRAM_PARTS.map((part, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-amber-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-[#5B1527] text-amber-200 font-extrabold text-xs uppercase tracking-wider">
                      {part.part}
                    </span>
                    <span className="text-xs font-bold text-neutral-400">
                      {part.chapters}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70 inline-flex items-center gap-1 w-fit">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Livrable clé inclus
                  </span>
                </div>

                <h3 className="font-serif-display text-xl sm:text-2xl font-black text-[#4A0E17] mb-2">
                  {part.title}
                </h3>

                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  {part.summary}
                </p>

                <div className="bg-amber-50/80 rounded-xl p-3 border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium flex items-start gap-2">
                  <span className="font-black text-[#D97706]">Ce que tu auras produit :</span>
                  <span>{part.production}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 6 Annexes */}
          <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-neutral-200 mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-[#D97706]" />
              <h3 className="font-serif-display text-xl sm:text-2xl font-black text-[#4A0E17]">
                + Les 6 Annexes Opérationnelles Incluses
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ANNEXES.map((annex, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-amber-200/60 shadow-xs">
                  <h4 className="font-bold text-[#5B1527] text-xs sm:text-sm mb-1">
                    {annex.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-snug">
                    {annex.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <BuyButton
            label="JE VEUX ACCÉDER AU PROGRAMME COMPLET (2 000 FCFA)"
            subtext="Téléchargement direct immédiat du PDF 59 pages + 6 outils"
          />
        </div>
      </section>

      {/* 10. PLAN 90 JOURS EN 3 TEMPS */}
      <section id="section-10-plan-90" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-300">
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            <span>Feuille de Route Structurée</span>
          </span>

          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-[#4A0E17] leading-tight mb-4">
            Le Plan 90 Jours :<br />
            <span className="text-[#D97706] italic">Objectif 5 clientes payantes.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Pourquoi 5 clientes ? Parce que 5 clientes démontrent que ton offre plaît, que ton prix est juste et que la machine tourne. Une fois 5 clientes atteintes, en faire 50 n'est plus qu'une question de répétition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phase 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-t-4 border-[#5B1527] border-x border-b border-neutral-200 shadow-sm relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#5B1527]">Jours 1 à 30</span>
              <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2.5 py-0.5 rounded-full">Phase 1</span>
            </div>
            <h3 className="font-serif-display text-xl font-black text-[#4A0E17] mb-3">
              Les Fondations Invisibles
            </h3>
            <ul className="text-xs sm:text-sm text-neutral-600 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Diagnostic de ton talent et élimination des doutes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Calcul précis de ton prix minimum rentable en FCFA.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Rédaction de ton offre irrésistible en 1 page claire.</span>
              </li>
            </ul>
            <div className="bg-[#FAF7F2] p-3 rounded-xl border border-amber-200 text-xs text-neutral-800 font-semibold">
              🏁 Jalon : Ton offre est validée et prête à être proposée sans aucune honte.
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-t-4 border-[#D97706] border-x border-b border-neutral-200 shadow-md relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#D97706]">Jours 31 à 60</span>
              <span className="text-xs bg-amber-500 text-white font-bold px-2.5 py-0.5 rounded-full">Phase 2</span>
            </div>
            <h3 className="font-serif-display text-xl font-black text-[#4A0E17] mb-3">
              Les Premières Ventes
            </h3>
            <ul className="text-xs sm:text-sm text-neutral-600 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Activation de tes contacts chauds avec les 6 scripts WhatsApp.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Premier test en réel et ajustement des retours clients.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Encaissement des 2 à 3 premiers acomptes par Mobile Money.</span>
              </li>
            </ul>
            <div className="bg-amber-50 p-3 rounded-xl border border-amber-300 text-xs text-amber-950 font-bold">
              💰 Jalon : Le premier tintement de notification sur ton téléphone !
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-t-4 border-emerald-600 border-x border-b border-neutral-200 shadow-sm relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700">Jours 61 à 90</span>
              <span className="text-xs bg-emerald-100 text-emerald-900 font-bold px-2.5 py-0.5 rounded-full">Phase 3</span>
            </div>
            <h3 className="font-serif-display text-xl font-black text-[#4A0E17] mb-3">
              Régularité & 5 Clientes
            </h3>
            <ul className="text-xs sm:text-sm text-neutral-600 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Atteinte du cap décisif des 5 clientes payantes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Récolte des premiers témoignages et bouche-à-oreille.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Séparation nette des finances perso et pro.</span>
              </li>
            </ul>
            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-bold">
              🎯 Jalon : Ton activité tourne et génère des revenus réguliers.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
