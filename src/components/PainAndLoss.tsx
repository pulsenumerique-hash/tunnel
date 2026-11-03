import React from 'react';
import { BuyButton } from './CommonUI';
import { HeartCrack, TrendingDown, AlertTriangle, ArrowRight, Check } from 'lucide-react';

export const PainAndLoss: React.FC = () => {
  const painPhrases = [
    {
      quote: "« Tout le monde me répète que je suis super douée pour la cuisine, la coiffure ou l'organisation... mais à la fin du mois, mon compte reste désespérément à sec. »",
      reflection: "Les compliments réchauffent le cœur, mais ils ne paient ni le loyer ni les factures d'électricité."
    },
    {
      quote: "« Je dois encore baisser la tête et demander 5 000 ou 10 000 FCFA pour mes besoins personnels, mes mèches ou mon propre crédit téléphonique. »",
      reflection: "Cette dépendance quotidienne te pèse lourdement sur la gorge et étouffe ta fierté de femme."
    },
    {
      quote: "« Je vois passer sur WhatsApp et Facebook des filles moins talentueuses que moi qui vendent tous les jours et s'achètent ce qu'elles veulent. »",
      reflection: "Tu te demandes avec amertume : qu'est-ce qu'elles ont compris que je n'arrive pas à débloquer ?"
    },
    {
      quote: "« Mon salaire actuel ou ma petite bourse disparaît dès le 5 du mois dans les charges et le transport. »",
      reflection: "Travailler dur du matin au soir pour n'avoir aucun reste d'argent te vide moralement."
    },
    {
      quote: "« Quand une amie ou une tante me demande un service, je n'ose jamais fixer un vrai prix de peur de paraître ingrate ou cupide. »",
      reflection: "Résultat : tu passes des journées entières à travailler gratuitement pendant que les autres profitent."
    },
    {
      quote: "« J'ai plein d'idées brillantes dans la tête, mais quand je me lève le matin, je ne sais pas par quel bout commencer. »",
      reflection: "La surcharge mentale te paralyse, les semaines défilent et rien de concret ne se matérialise."
    },
    {
      quote: "« On m'a dit qu'il fallait un gros capital, un sponsor ou une boutique pour se lancer. Comme je n'en ai pas, j'attends. »",
      reflection: "Cette croyance toxique t'a déjà fait perdre des mois précieux alors que d'autres démarrent de leur salon."
    },
    {
      quote: "« J'ai peur d'annoncer mon offre, peur qu'on me dise que c'est trop cher, et peur du regard moqueur de la famille. »",
      reflection: "La peur du rejet te maintient dans l'ombre pendant que ton potentiel financier s'endort."
    },
    {
      quote: "« Les années passent vite. Je sens au fond de mes tripes que je vaux 10 fois mieux que la vie étriquée que je mène aujourd'hui. »",
      reflection: "Ce sentiment d'injustice silencieuse est le signe indéniable qu'il est temps de reprendre ton destin en main."
    }
  ];

  return (
    <>
      {/* 4. MIROIR DE LA DOULEUR (PAS) */}
      <section id="section-4-douleur" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartCrack className="w-3.5 h-3.5 text-rose-600" />
            <span>Miroir de la vérité</span>
          </span>
          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-[#4A0E17] leading-tight mb-4">
            Dis-moi franchement… Combien de fois t'es-tu reconnue là-dedans ?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Lis ces phrases lentement. Si au moins 3 d'entre elles résonnent dans ta poitrine, sache que tu n'es ni folle, ni paresseuse. Tu es simplement une femme douée à qui l'on n'a jamais transmis la bonne boussole.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {painPhrases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md">
                    Constat n°{index + 1}
                  </span>
                  <span className="text-xs font-bold text-neutral-400">« C'est exactement moi »</span>
                </div>
                <p className="font-serif-display text-base sm:text-lg font-bold text-[#3B0A16] italic leading-snug mb-3">
                  {item.quote}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 border-t border-neutral-100 pt-3 flex items-start gap-2">
                <span className="text-amber-600 font-bold">↳</span>
                <span>{item.reflection}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600 p-6 rounded-r-2xl shadow-xs text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#4A0E17] mb-1">
              Tu as reconnu ta propre voix ?
            </h3>
            <p className="text-sm text-neutral-700">
              Ce n'est pas une fatalité. C'est le signal exact qu'il te manque juste un maillon entre ce que tu sais faire et l'argent liquide.
            </p>
          </div>
          <a
            href="#section-6-revelation"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5B1527] text-white text-xs sm:text-sm font-bold hover:bg-[#3B0A16] transition-colors"
          >
            <span>Voir la révélation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 5. AGITATION (AVERSION À LA PERTE) */}
      <section id="section-5-agitation" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#4A0E17] text-white relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30 text-xs font-bold uppercase tracking-wider mb-6">
            <AlertTriangle className="w-4 h-4 text-amber-300" />
            <span>Le coût invisible et silencieux de l'inaction</span>
          </div>

          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-black text-amber-100 leading-tight mb-6">
            Chaque mois qui passe sans agir<br className="hidden sm:inline" />
            <span className="text-[#F59E0B]"> te coûte DÉJÀ de l'argent.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            On croit souvent que ne rien faire ne coûte rien. C'est l'illusion la plus destructrice. Regarde ce que ton inaction t'enlève discrètement chaque jour :
          </p>

          {/* Loss Aversion Math Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-left">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 block mb-2">
                En 1 seul mois
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white block mb-1">
                50 000 FCFA
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Le montant d'un petit complément d'activité réaliste qui t'échappe chaque 30 jours (la popote, le crédit, les factures sans stress).
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-amber-400/40 relative shadow-xl">
              <span className="absolute -top-3 right-4 bg-[#D97706] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                12 mois perdus
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 block mb-2">
                En 1 an d'attente
              </span>
              <span className="text-3xl sm:text-4xl font-black text-amber-300 block mb-1">
                600 000 FCFA
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Plus d'un demi-million de FCFA qui auraient pu rembourser tes dettes, payer l'avance d'un loyer ou sécuriser ta famille.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 block mb-2">
                En 5 ans d'hésitation
              </span>
              <span className="text-3xl sm:text-4xl font-black text-rose-300 block mb-1">
                3 000 000 FCFA
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Trois millions de FCFA évaporés dans les doutes et les « je verrai demain », pendant que le coût de la vie ne cesse de grimper.
              </p>
            </div>
          </div>

          <div className="bg-black/30 rounded-2xl p-4 border border-white/10 max-w-2xl mx-auto mb-10 text-xs text-neutral-300 italic">
            * <strong>Note d'honnêteté :</strong> Ce calcul de 50 000 FCFA/mois est une illustration mathématique pour mesurer le coût de l'attente, non une promesse de gain automatique. Les résultats dépendent de ton passage à l'action.
          </div>

          {/* Call to action repetition (Rule of 2-3 sections) */}
          <div className="pt-2">
            <BuyButton
              label="JE VEUX ARRÊTER DE PERDRE DE L'ARGENT (2 000 FCFA)"
              subtext="Un investissement minime pour récupérer le contrôle de tes finances"
              badge="Accès immédiat au guide complet"
            />
          </div>
        </div>
      </section>
    </>
  );
};
