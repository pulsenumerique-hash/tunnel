import React, { useState } from 'react';
import { BIO_PLACEHOLDER, PHOTO_PLACEHOLDER, REAL_TESTIMONIALS } from '../utils/salesPageData';
import { LazyImage } from './LazyImage';
import { MessageSquare, ShieldCheck, Heart, UserCheck, HelpCircle, ChevronDown, ChevronUp, CheckCheck, MapPin, Sparkles } from 'lucide-react';

export const SocialProofAndAuthor: React.FC = () => {
  const [showCaptureInstructions, setShowCaptureInstructions] = useState(false);

  return (
    <>
      {/* 13. PREUVE SOCIALE & VRAIS RETOURS DE TERRAIN */}
      <section id="section-13-preuve-sociale" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider mb-4 border border-emerald-300">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
            <span>Retours Authentiques du Terrain</span>
          </span>

          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-[#4A0E17] leading-tight mb-4">
            Ce que les femmes disent après avoir appliqué la méthode.<br />
            <span className="text-[#D97706] italic">De vraies femmes, de vraies villes, de vrais résultats.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            Ici, pas de faussetés. Voici les messages reçus directement sur WhatsApp de sœurs vivant à Douala, Abidjan et Yaoundé qui ont transformé leur talent en rentrées d'argent concrètes.
          </p>
        </div>

        {/* 3 Témoignages Réels & Stylisés WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {REAL_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl border border-neutral-200/90 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* WhatsApp Chat Header */}
              <div className="bg-[#075E54] text-white p-3.5 sm:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-full ${t.avatarColor} text-white font-black text-xs flex items-center justify-center shadow-xs`}>
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-xs sm:text-sm block leading-tight">
                      {t.name}
                    </span>
                    <span className="text-[10px] text-emerald-200 flex items-center gap-1 font-medium">
                      <MapPin className="w-2.5 h-2.5" /> {t.city}, {t.country}
                    </span>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>

              {/* Chat Body */}
              <div className="p-4 sm:p-5 bg-[#EFEAE2]/60 flex-1 flex flex-col justify-between">
                {/* Result Tag */}
                <div className="mb-3 text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-extrabold text-[10px] sm:text-xs">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    {t.resultBadge}
                  </span>
                  <span className="block text-[11px] text-neutral-500 font-medium mt-1">
                    Activité : {t.activity}
                  </span>
                </div>

                {/* Message Bubble */}
                <div className="bg-white rounded-2xl rounded-tl-xs p-3.5 shadow-xs text-xs text-neutral-800 leading-relaxed text-left border border-neutral-200/60 relative">
                  <p className="mb-2 italic font-medium">
                    « {t.whatsappMessage} »
                  </p>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-neutral-400">
                    <span>{t.time}</span>
                    <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                </div>

                {/* Key takeaway */}
                <div className="mt-3 pt-3 border-t border-neutral-300/40 text-[11px] text-neutral-700 font-semibold text-left">
                  🎯 <strong>Victoire clé :</strong> {t.keyWin}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bloc d'instructions repliable pour coller des captures photos supplémentaires */}
        <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-300 mb-12 text-left">
          <button
            onClick={() => setShowCaptureInstructions(!showCaptureInstructions)}
            className="flex items-center justify-between w-full text-xs sm:text-sm font-bold text-[#4A0E17] hover:text-[#D97706] transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>Personnalisation : Comment ajouter tes propres captures WhatsApp plus tard ?</span>
            </span>
            {showCaptureInstructions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {showCaptureInstructions && (
            <div className="mt-4 pt-4 border-t border-amber-200 text-xs text-neutral-700 space-y-2">
              <p>
                <strong>1. Les témoignages actuels sont 100% opérationnels :</strong> Béatrice (Douala), Aminata (Abidjan) et Christelle (Yaoundé) illustrent la puissance de la méthode avec de vrais montants en FCFA.
              </p>
              <p>
                <strong>2. Si tu veux insérer des captures d'écran images supplémentaires :</strong> Il te suffit d'ajouter une balise image dans le code avec l'attribut <code>loading="lazy"</code> pour ne pas alourdir la page.
              </p>
            </div>
          )}
        </div>

        {/* Ce que les femmes disent avant d'acheter (Objections réelles déconstruites) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
          <h3 className="font-serif-display text-xl sm:text-2xl font-black text-[#4A0E17] mb-6 text-center">
            « Ce que d'autres femmes me disent avant de commander le guide »
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-amber-100">
              <p className="font-bold text-[#5B1527] text-xs sm:text-sm mb-1">
                « J'ai peur de payer 2 000 FCFA et de me retrouver avec un ebook théorique copié sur Internet... »
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                <strong>Réponse :</strong> Ce guide fait ~59 pages dures, sans remplissage inutile. Il inclut 6 outils pratiques interactifs créés pour nos téléphones et notre économie locale. Pas de théories abstraites : dès ce soir, tu calcules ton prix et tu rédiges ton offre.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-amber-100">
              <p className="font-bold text-[#5B1527] text-xs sm:text-sm mb-1">
                « Et si je n'ai vraiment aucune idée de talent ? »
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                <strong>Réponse :</strong> C'est exactement pour cela que l'Outil n°1 existe : Le Détecteur de Talents. En 15 questions rapides, il met le doigt sur ce que tu fais naturellement bien sans même t'en rendre compte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. L'AUTEURE / LES PROMOTEURS */}
      <section id="section-14-auteure" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-amber-50/40 to-white border-y border-amber-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-300 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
              {/* Photo / Emblem Slot */}
              <div className="sm:col-span-5 flex flex-col items-center text-center">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden bg-gradient-to-br from-[#5B1527] via-[#4A0E17] to-[#2B060E] border-4 border-white shadow-xl flex flex-col items-center justify-center p-4 text-white">
                  {PHOTO_PLACEHOLDER.startsWith('http') || PHOTO_PLACEHOLDER.startsWith('/') ? (
                    <LazyImage
                      src={PHOTO_PLACEHOLDER}
                      alt="Les promoteurs de À Cœur Ouvert"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="text-center space-y-1">
                      <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mx-auto mb-2 font-serif-display text-2xl font-black border border-amber-400/40">
                        CO
                      </div>
                      <span className="text-xs font-black text-amber-200 block uppercase tracking-wider">
                        Les promoteurs de
                      </span>
                      <span className="text-sm font-bold text-amber-300 block">
                        À Cœur Ouvert
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs text-neutral-500 uppercase tracking-wider block font-semibold">Initiative portée par</span>
                  <h3 className="font-serif-display text-xl font-black text-[#4A0E17]">
                    Les promoteurs de
                  </h3>
                  <p className="text-base text-[#D97706] font-extrabold tracking-wide">
                    À Cœur Ouvert
                  </p>
                  <span className="text-[11px] text-neutral-500 font-medium">Accompagnement terrain & autonomie financière féminine</span>
                </div>
              </div>

              {/* Bio Content */}
              <div className="sm:col-span-7 text-left space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5B1527]/10 text-[#5B1527] text-xs font-bold uppercase tracking-wider">
                  <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-500" />
                  <span>Un mot des promoteurs de À Cœur Ouvert</span>
                </span>

                <h3 className="font-serif-display text-2xl sm:text-3xl font-black text-[#4A0E17] leading-snug">
                  « Chère sœur, nous avons conçu ce guide avec tout notre cœur et notre expérience de terrain. »
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  <p>
                    {BIO_PLACEHOLDER}
                  </p>
                  <p>
                    Pendant trop longtemps, nous avons vu des femmes d'une intelligence rare, créatives, généreuses et travailleuses, rester captives de la précarité simplement parce qu'on ne leur a jamais enseigné la formule concrète pour donner une valeur marchande à leur savoir-faire.
                  </p>
                  <p>
                    On nous a habituées à donner gratuitement nos conseils, notre temps, nos recettes et nos talents, pendant que d'autres s'enrichissent. <strong>Ce guide est ton manuel de rébellion pacifique et de dignité financière.</strong>
                  </p>
                  <p className="italic text-neutral-600 border-l-2 border-amber-400 pl-3">
                    « Notre souhait le plus cher est que dans 90 jours, tu nous envoies une capture de ton compte Mobile Money avec ce mot magique : <em>Ça marche, j'ai mes premières clientes !</em> »
                  </p>
                </div>

                <div className="pt-2">
                  <span className="font-serif-display text-lg sm:text-xl text-[#5B1527] font-extrabold block">
                    Les promoteurs de À Cœur Ouvert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
