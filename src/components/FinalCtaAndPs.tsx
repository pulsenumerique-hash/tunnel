import React from 'react';
import { DATE_PLACEHOLDER, GARANTIE_PLACEHOLDER, CHECKOUT_URL } from '../utils/salesPageData';
import { BuyButton, PlaceholderBadge } from './CommonUI';
import { Clock, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const FinalCtaAndPs: React.FC = () => {
  return (
    <>
      {/* 20. APPEL FINAL */}
      <section id="section-20-appel-final" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F2] to-amber-100/60 border-t border-amber-200 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B1527] text-white text-xs font-black uppercase tracking-wider mb-6">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>Dernière Chance au Tarif de Lancement</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-black text-[#4A0E17] leading-tight mb-6">
            Ton talent mérite mieux que des likes.<br />
            <span className="text-[#D97706] italic">Il mérite d'être payé.</span>
          </h2>

          <p className="text-base sm:text-xl text-neutral-700 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Pour seulement <strong>2 000 FCFA</strong> (au lieu de 9 000 FCFA), offre-toi le plan le plus clair, le plus bienveillant et le plus rentable d'Afrique francophone.
          </p>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-xl max-w-2xl mx-auto mb-10 text-left">
            <h3 className="font-serif-display text-lg font-bold text-[#4A0E17] mb-4 text-center">
              Ce que tu sécurises en cliquant ci-dessous :
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Le Guide PDF complet ~59 pages à remplir sur ton téléphone.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Les 6 Outils stratégiques (Détecteur, Matrice /20, Calculateur, etc.).</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Les 6 Annexes de terrain dont les scripts de prospection WhatsApp.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Le Plan 90 Jours orienté jalon 5 clientes payantes.</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#5B1527]">
              <span>Offre valable jusqu'au :</span>
              <PlaceholderBadge token={DATE_PLACEHOLDER} label="Date limite réelle" />
            </div>
          </div>

          <BuyButton
            label="OUI, JE COMMENCE MAINTENANT (2 000 FCFA)"
            subtext="Paiement 100% sécurisé via Mobile Money & Carte bancaire"
            badge="Accès immédiat garanti"
          />
        </div>
      </section>

      {/* 21. POST-SCRIPTUM (P.-S.) */}
      <section id="section-21-ps" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-amber-200">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <p className="font-serif-display font-bold text-base sm:text-lg text-[#4A0E17]">
            P.-S. — Tu es du genre à descendre tout en bas de page pour lire le résumé ? Voici ce que tu dois savoir :
          </p>

          <p>
            <strong>1. Le bénéfice principal :</strong> Ce guide n'est pas de la théorie. Il te donne le chemin exact en 7 maillons pour transformer ce que tu sais déjà faire (cuisine, couture, coiffure, rédaction, secrétariat, organisation...) en revenus réguliers par Mobile Money, en 90 jours.
          </p>

          <p>
            <strong>2. La garantie :</strong> Tu ne prends absolument aucun risque financier grâce à <PlaceholderBadge token={GARANTIE_PLACEHOLDER} label="Formule de garantie" />. Si le guide ne t'apporte pas la valeur promise, tu es remboursée sur simple demande.
          </p>

          <p>
            <strong>3. L'urgence vraie :</strong> Ce prix de <strong>2 000 FCFA</strong> est un tarif spécial de lancement. Dès le <PlaceholderBadge token={DATE_PLACEHOLDER} label="Date limite" />, le prix passe définitivement à son tarif officiel de <strong>9 000 FCFA</strong>. Chaque jour d'attente repousse ton indépendance financière.
          </p>

          <div className="pt-4 text-center">
            <a
              href={CHECKOUT_URL}
              target="_self"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#D97706] hover:text-[#B45309] hover:underline"
            >
              <span>➔ Clique ici pour télécharger ton guide dès maintenant à 2 000 FCFA</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-neutral-500 space-y-2">
          <p>© {new Date().getFullYear()} « Ton talent, ta liberté » — Tous droits réservés.</p>
          <p>Auteurs : Les promoteurs de À Cœur Ouvert</p>
          <p className="text-[11px] text-neutral-400">
            Ce site ne fait pas partie du réseau Meta Inc. ni de TikTok Inc. Les résultats individuels peuvent varier selon ton assiduité et ton application de la méthode.
          </p>
        </footer>
      </section>
    </>
  );
};
