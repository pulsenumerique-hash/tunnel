import React, { useState } from 'react';
import { HERO_HEADLINE_VARIANTS } from '../utils/salesPageData';
import { PLACEHOLDERS_LIST, generateStandaloneHtml } from '../utils/salesPageLogic';
import { Sparkles, Code2, Copy, Check, FileDown, Layers, HelpCircle, X, ChevronRight, Share2, Rocket } from 'lucide-react';

export const CopywriterToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'variants' | 'placeholders' | 'export' | 'funnel'>('variants');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedHtml, setCopiedHtml] = useState(false);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const handleCopyHtml = () => {
    const html = generateStandaloneHtml();
    navigator.clipboard.writeText(html);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2500);
  };

  const handleDownloadHtml = () => {
    const html = generateStandaloneHtml();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ton-talent-ta-liberte-page-vente.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Floating Pill for the User/Copywriter */}
      <div className="fixed top-14 right-2.5 sm:top-14 sm:right-4 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 sm:gap-2 bg-[#4A0E17]/95 hover:bg-[#3B0A16] text-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full shadow-lg text-[10px] sm:text-xs font-bold border border-amber-400/60 hover:scale-105 active:scale-95 transition-all backdrop-blur-xs"
          title="Ouvrir le panneau du Copywriter : Variantes Hero, Placeholders, Export HTML Systeme.io"
        >
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
          <span className="hidden sm:inline">Outils Copywriter & Export</span>
          <span className="sm:hidden font-extrabold text-amber-200">Outils</span>
        </button>
      </div>

      {/* Modal Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border-2 border-amber-300 overflow-hidden">
            {/* Header */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-[#4A0E17] to-[#5B1527] text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold">
                    Boîte à Outils Copywriter & Déploiement
                  </h3>
                  <p className="text-xs text-amber-200/80">
                    Guide « Ton talent, ta liberté » par les promoteurs de À Cœur Ouvert
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Fermer la boîte à outils"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-neutral-200 bg-neutral-50 px-4 sm:px-6 overflow-x-auto text-xs sm:text-sm font-bold shrink-0">
              <button
                onClick={() => setActiveTab('variants')}
                className={`py-3 px-4 border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === 'variants'
                    ? 'border-[#D97706] text-[#4A0E17]'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900'
                }`}
              >
                1. 5 Variantes Titre Hero
              </button>
              <button
                onClick={() => setActiveTab('placeholders')}
                className={`py-3 px-4 border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === 'placeholders'
                    ? 'border-[#D97706] text-[#4A0E17]'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900'
                }`}
              >
                2. Placeholders à compléter ({PLACEHOLDERS_LIST.length})
              </button>
              <button
                onClick={() => setActiveTab('export')}
                className={`py-3 px-4 border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === 'export'
                    ? 'border-[#D97706] text-[#4A0E17]'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900'
                }`}
              >
                3. Export HTML Systeme.io
              </button>
              <button
                onClick={() => setActiveTab('funnel')}
                className={`py-3 px-4 border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === 'funnel'
                    ? 'border-[#D97706] text-[#4A0E17]'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900'
                }`}
              >
                4. Tunnel & Recommandations
              </button>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 text-neutral-800 text-xs sm:text-sm leading-relaxed space-y-6">
              {/* TAB 1: 5 Variantes Hero */}
              {activeTab === 'variants' && (
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
                    <p className="font-bold text-[#4A0E17] mb-1">
                      💡 Comment tester ces 5 variantes pour booster tes conversions ?
                    </p>
                    <p className="text-neutral-600 text-xs">
                      Le titre Hero décide si 80% des visiteuses restent ou quittent la page. Teste ces 5 angles psychologiques en publicité Facebook/TikTok Ads ou en split-test A/B.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {HERO_HEADLINE_VARIANTS.map((v) => (
                      <div
                        key={v.id}
                        className="bg-white p-4 rounded-2xl border border-neutral-200 hover:border-amber-400 hover:shadow-md transition-all relative text-left"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-black uppercase text-[#D97706] bg-amber-50 px-2.5 py-0.5 rounded-full">
                            Variante {v.id} · {v.angle}
                          </span>
                          <button
                            onClick={() => handleCopy(`${v.title}\n${v.subtitle}`, v.id)}
                            className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-[#4A0E17] font-semibold bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1 rounded-lg transition-colors"
                          >
                            {copiedIndex === v.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-700">Copié !</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copier</span>
                              </>
                            )}
                          </button>
                        </div>
                        <h4 className="font-serif-display font-bold text-base text-[#4A0E17] mb-1">
                          « {v.title} »
                        </h4>
                        <p className="text-xs text-neutral-600">
                          {v.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: Placeholders Checklist */}
              {activeTab === 'placeholders' && (
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
                    <p className="font-bold text-[#4A0E17] mb-1">
                      📋 Liste exacte des éléments que tu dois compléter
                    </p>
                    <p className="text-neutral-600 text-xs">
                      Tous ces emplacements sont clairement indiqués entre crochets dans la page pour que tu puisses les personnaliser sans rien inventer.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {PLACEHOLDERS_LIST.map((item, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-2xl border border-neutral-200 text-left">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-xs font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                            {item.token}
                          </span>
                          <span className="text-[11px] text-neutral-500">
                            Présent dans : {item.section}
                          </span>
                        </div>
                        <p className="font-bold text-neutral-900 text-xs sm:text-sm mt-2">
                          {item.label}
                        </p>
                        <p className="text-xs text-neutral-600 mt-0.5">
                          {item.help}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: Export HTML autonome Systeme.io */}
              {activeTab === 'export' && (
                <div className="space-y-4 text-left">
                  <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
                    <p className="font-bold text-emerald-950 mb-1">
                      🚀 Prêt à publier en 1 clic dans Systeme.io ou sur tout serveur
                    </p>
                    <p className="text-emerald-900 text-xs">
                      Ce fichier autonome contient 100% du code HTML, CSS Tailwind et scripts nécessaires. Aucune dépendance externe lourde.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleCopyHtml}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#D97706] to-[#EA580C] text-white font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                    >
                      {copiedHtml ? (
                        <>
                          <Check className="w-4 h-4 text-white" />
                          <span>Code HTML complet copié dans le presse-papier !</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copier tout le code HTML autonome</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleDownloadHtml}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#5B1527] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#3B0A16] active:scale-95 transition-all"
                    >
                      <FileDown className="w-4 h-4" />
                      <span>Télécharger le fichier .html autonome</span>
                    </button>
                  </div>

                  <div className="bg-neutral-900 text-neutral-100 p-4 rounded-2xl text-xs font-mono max-h-56 overflow-y-auto">
                    <pre className="whitespace-pre-wrap">{generateStandaloneHtml().slice(0, 1200)}...</pre>
                  </div>
                </div>
              )}

              {/* TAB 4: Tunnel & Recommandations */}
              {activeTab === 'funnel' && (
                <div className="space-y-5 text-left">
                  <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#4A0E17] mb-2">
                      <Rocket className="w-4 h-4 text-[#D97706]" />
                      <span>1. Intégration dans Systeme.io</span>
                    </div>
                    <ul className="text-xs text-neutral-700 space-y-1.5 list-disc pl-5">
                      <li>Crée une nouvelle page dans ton tunnel de vente de type <strong>« Page de capture » ou « Page de vente »</strong>.</li>
                      <li>Supprime les blocs par défaut, glisse un bloc <strong>« Code HTML brut »</strong> pleine largeur.</li>
                      <li>Colle le code HTML fourni depuis l'onglet <em>3. Export HTML</em>.</li>
                      <li>Tous les boutons d'achat pointent déjà vers ton lien de checkout : <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[10px]">https://ibmlupvq.mychariow.com/prd_py1djv7z/checkout</code>.</li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#4A0E17] mb-2">
                      <Share2 className="w-4 h-4 text-emerald-600" />
                      <span>2. Trafic Facebook & TikTok Ads (Afrique francophone)</span>
                    </div>
                    <ul className="text-xs text-neutral-700 space-y-1.5 list-disc pl-5">
                      <li><strong>Cible géographique :</strong> Cameroun (Douala, Yaoundé), Côte d'Ivoire (Abidjan), Sénégal (Dakar), RDC (Kinshasa).</li>
                      <li><strong>Âge & Genre :</strong> Femmes 22-48 ans. Intérêts : Pâtisserie, Couture, Coiffure, Entrepreneuriat féminin.</li>
                      <li><strong>Format vidéo UGC :</strong> Une femme qui parle face caméra avec son téléphone : <em>« Si on te dit toujours que tu es douée pour la cuisine ou les tresses mais que ton Mobile Money reste vide, écoute ça... »</em>.</li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#4A0E17] mb-2">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                      <span>3. Relance WhatsApp pour les paniers hésitants</span>
                    </div>
                    <p className="text-xs text-neutral-700">
                      Sur le marché africain, 40% des ventes se concluent par WhatsApp pour rassurer la cliente sur le mode de paiement Mobile Money. Laisse ton bouton WhatsApp flottant toujours visible pour répondre aux questions simples en moins de 15 minutes.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-neutral-100 border-t border-neutral-200 flex justify-end shrink-0">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-xl bg-neutral-800 text-white text-xs font-bold hover:bg-neutral-900"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
