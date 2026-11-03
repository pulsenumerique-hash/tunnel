/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { UrgencyAndHero } from './components/UrgencyAndHero';
import { PainAndLoss } from './components/PainAndLoss';
import { LazySection } from './components/LazySection';
import { FloatingControls } from './components/FloatingControls';

// Chargement différé (code-splitting / lazy loading) pour les composants lourds sous la ligne de flottaison
const RevelationAndChain = lazy(() =>
  import('./components/RevelationAndChain').then((m) => ({ default: m.RevelationAndChain }))
);
const ToolsAndProgram = lazy(() =>
  import('./components/ToolsAndProgram').then((m) => ({ default: m.ToolsAndProgram }))
);
const TargetAndProjection = lazy(() =>
  import('./components/TargetAndProjection').then((m) => ({ default: m.TargetAndProjection }))
);
const SocialProofAndAuthor = lazy(() =>
  import('./components/SocialProofAndAuthor').then((m) => ({ default: m.SocialProofAndAuthor }))
);
const OfferAndGuarantee = lazy(() =>
  import('./components/OfferAndGuarantee').then((m) => ({ default: m.OfferAndGuarantee }))
);
const FaqAndTwoPaths = lazy(() =>
  import('./components/FaqAndTwoPaths').then((m) => ({ default: m.FaqAndTwoPaths }))
);
const FinalCtaAndPs = lazy(() =>
  import('./components/FinalCtaAndPs').then((m) => ({ default: m.FinalCtaAndPs }))
);
const CopywriterToolbar = lazy(() =>
  import('./components/CopywriterToolbar').then((m) => ({ default: m.CopywriterToolbar }))
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241E1E] selection:bg-[#F3C287] selection:text-[#380E17]">
      {/* Panneau Outils & Export (chargé de manière différée pour préserver la bande passante mobile) */}
      <Suspense fallback={null}>
        <CopywriterToolbar />
      </Suspense>

      <main className="relative">
        {/* Sections 1, 2, 3: Eager Loading pour First Contentful Paint immédiat */}
        <UrgencyAndHero />

        {/* Sections 4, 5: Eager Loading pour accrocher immédiatement la visiteuse */}
        <PainAndLoss />

        {/* Sections 6, 7: Révélation (Chaîne en 7 maillons) & La Solution */}
        <LazySection id="section-6-revelation" minHeight="500px" fallbackTitle="La Chaîne en 7 Maillons">
          <Suspense fallback={<div className="h-96 animate-pulse bg-amber-50/50 rounded-3xl m-4" />}>
            <RevelationAndChain />
          </Suspense>
        </LazySection>

        {/* Sections 8, 9, 10: Les 6 Outils, Programme 5 parties & Plan 90 Jours */}
        <LazySection id="section-8-outils" minHeight="600px" fallbackTitle="Boîte à Outils & Programme">
          <Suspense fallback={<div className="h-96 animate-pulse bg-amber-50/50 rounded-3xl m-4" />}>
            <ToolsAndProgram />
          </Suspense>
        </LazySection>

        {/* Sections 11, 12: Pour qui / Pas pour qui & Projection 90 jours */}
        <LazySection id="section-11-cible" minHeight="450px" fallbackTitle="Pour qui & Projection">
          <Suspense fallback={<div className="h-96 animate-pulse bg-amber-50/50 rounded-3xl m-4" />}>
            <TargetAndProjection />
          </Suspense>
        </LazySection>

        {/* Sections 13, 14: Preuve Sociale & Les promoteurs de À Cœur Ouvert */}
        <LazySection id="section-13-preuve-sociale" minHeight="450px" fallbackTitle="Témoignages & L'Auteure">
          <Suspense fallback={<div className="h-96 animate-pulse bg-amber-50/50 rounded-3xl m-4" />}>
            <SocialProofAndAuthor />
          </Suspense>
        </LazySection>

        {/* Sections 15, 16, 17: Empilement de Valeur, Offre Complète & Garantie */}
        <LazySection id="section-15-empilement" minHeight="550px" fallbackTitle="Offre Complète & Garantie">
          <Suspense fallback={<div className="h-96 animate-pulse bg-amber-50/50 rounded-3xl m-4" />}>
            <OfferAndGuarantee />
          </Suspense>
        </LazySection>

        {/* Sections 18, 19: FAQ en Accordéon (8 questions) & Deux Chemins */}
        <LazySection id="section-18-faq" minHeight="500px" fallbackTitle="Questions Fréquentes">
          <Suspense fallback={<div className="h-96 animate-pulse bg-amber-50/50 rounded-3xl m-4" />}>
            <FaqAndTwoPaths />
          </Suspense>
        </LazySection>

        {/* Sections 20, 21: Appel Final & Post-Scriptum */}
        <LazySection id="section-20-appel-final" minHeight="400px" fallbackTitle="Offre Finale">
          <Suspense fallback={<div className="h-96 animate-pulse bg-amber-50/50 rounded-3xl m-4" />}>
            <FinalCtaAndPs />
          </Suspense>
        </LazySection>
      </main>

      {/* Barre sticky mobile et bouton WhatsApp */}
      <FloatingControls />
    </div>
  );
}
