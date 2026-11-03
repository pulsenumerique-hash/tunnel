import React from 'react';
import { BuyButton } from './CommonUI';
import { Check, X, Bell, Sparkles, Heart, Shield, ArrowRight } from 'lucide-react';

export const TargetAndProjection: React.FC = () => {
  return (
    <>
      {/* 11. POUR QUI / PAS POUR QUI */}
      <section id="section-11-cible" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B1527]/10 text-[#5B1527] text-xs font-black uppercase tracking-wider mb-4 border border-[#5B1527]/20">
            <span>Filtre d'alignement</span>
          </span>

          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-[#4A0E17] leading-tight mb-4">
            Est-ce vraiment fait pour toi ?<br />
            <span className="text-[#D97706] italic">La vérité sans filtre.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Ce guide n'est pas pour tout le monde. Je tiens à ce que chaque femme qui investit ses 2 000 FCFA en tire une valeur multipliée par dix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* OUI C'EST POUR TOI */}
          <div className="bg-emerald-50/60 rounded-3xl p-6 sm:p-8 border-2 border-emerald-300 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black">
                <Check className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-serif-display text-xl sm:text-2xl font-black text-emerald-950">
                  C'EST FAIT POUR TOI SI :
                </h3>
                <span className="text-xs text-emerald-800 font-bold">Tu es une femme prête à agir</span>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-neutral-800 font-medium">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span><strong>L'étudiante ou jeune diplômée</strong> qui refuse de passer ses journées à attendre un hypothétique concours et veut ses propres rentrées dès maintenant.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span><strong>La salariée insatisfaite</strong> dont le salaire s'évapore le 5 du mois et qui a besoin d'un « side-business » solide et digne.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span><strong>La maman ou femme au foyer</strong> qui veut contribuer aux dépenses familiales sans délaisser ses enfants ni demander la permission pour chaque dépense.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span><strong>La créatrice ou artisane</strong> (couture, cuisine, coiffure, esthétique, gâteaux) qui travaille déjà dur mais vend beaucoup trop bas.</span>
              </li>
            </ul>
          </div>

          {/* NON CE N'EST PAS POUR TOI */}
          <div className="bg-rose-50/60 rounded-3xl p-6 sm:p-8 border-2 border-rose-300 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center font-black">
                <X className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-serif-display text-xl sm:text-2xl font-black text-rose-950">
                  CE N'EST PAS POUR TOI SI :
                </h3>
                <span className="text-xs text-rose-800 font-bold">À éviter absolument</span>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-neutral-800 font-medium">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                <span>Tu cherches un bouton magique pour devenir millionnaire sans lever le petit doigt ni appliquer les 11 chapitres.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                <span>Tu refuses de contacter tes premiers prospects avec les scripts fournis et préfères continuer à te plaindre du manque d'argent.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                <span>Tu es convaincue qu'il est impossible de réussir en Afrique sans corruption ou relations politiques.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                <span>Tu n'es pas prête à consacrer 20 à 30 minutes par jour à ton propre avenir financier.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 12. IDENTITÉ ET PROJECTION */}
      <section id="section-12-projection" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4A0E17] via-[#5B1527] to-[#380E17] text-white relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 border border-white/20 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Ferme les yeux un instant…</span>
          </span>

          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-amber-100 leading-tight mb-6">
            Imagine ta vie dans exactement 90 jours…
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tu as téléchargé le guide. Tu as suivi la méthode pas à pas, 30 minutes par jour. Regarde ce qui se passe maintenant dans ton quotidien :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-12">
            {/* Visual notification card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-amber-400/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                  <Bell className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold block">
                    Notification Mobile Money
                  </span>
                  <span className="text-xs text-neutral-300">Aujourd'hui à 14h22</span>
                </div>
              </div>
              <p className="font-mono text-sm sm:text-base font-bold text-white bg-black/30 p-3 rounded-xl border border-white/10 mb-3">
                « Vous avez reçu 25 000 FCFA de la part de Marie-Claire K. Solde actuel : 87 500 FCFA »
              </p>
              <p className="text-xs text-neutral-300">
                Ce frisson d'indépendance pure quand ton téléphone vibre pour un travail que tu aimes faire et qui est enfin respecté.
              </p>
            </div>

            {/* Freedom card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#D97706] text-white flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">
                    La liberté de dire OUI et de dire NON
                  </span>
                  <span className="text-xs text-neutral-300">Fierté retrouvée</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed mb-3">
                Tu n'as plus à baisser les yeux pour demander l'argent du taxi ou de la popote. Tu gâtes ta mère avec ton propre argent. Tu achètes ce dont tu as envie sans avoir de comptes à rendre.
              </p>
              <p className="text-xs text-amber-200 font-semibold italic">
                Dans le regard de ton entourage, tu n'es plus la fille hésitante. Tu es devenue une femme qui entreprend et qui réussit.
              </p>
            </div>
          </div>

          <BuyButton
            label="JE CHOISIS CETTE LIBERTÉ DÈS AUJOURD'HUI (2 000 FCFA)"
            subtext="Prends ta place parmi les femmes qui créent leur propre sécurité financière"
          />
        </div>
      </section>
    </>
  );
};
