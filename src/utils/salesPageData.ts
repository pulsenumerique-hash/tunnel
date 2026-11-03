/**
 * Données structurées et constantes de la page de vente "Ton talent, ta liberté"
 * Auteurs : Les promoteurs de À Cœur Ouvert
 */

export const CHECKOUT_URL = "https://ibmlupvq.mychariow.com/prd_py1djv7z/checkout";
export const WHATSAPP_PLACEHOLDER = "https://wa.me/237699000000?text=Bonjour,%20j%27ai%20une%20question%20sur%20le%20guide%20Ton%20talent,%20ta%20libert%C3%A9";
export const DATE_PLACEHOLDER = "27 novembre 2026";
export const BONUS_PLACEHOLDER = "Audio exclusif : Les 5 phrases magiques pour désamorcer les clientes qui demandent le crédit";
export const GARANTIE_PLACEHOLDER = "Garantie 100 % satisfaite ou remboursée pendant 7 jours sans justification";
export const BIO_PLACEHOLDER = "Initiative panafricaine engagée pour l'autonomisation financière et l'émancipation des femmes en Afrique francophone. Les promoteurs de À Cœur Ouvert accompagnent les sœurs, mamans et entrepreneures à briser définitivement la dépendance financière en transformant leurs compétences quotidiennes en activités rentables, déclarées et respectées.";
export const PHOTO_PLACEHOLDER = "[PHOTO]";

export interface TestimonialItem {
  id: number;
  name: string;
  city: string;
  country: string;
  avatarColor: string;
  initials: string;
  activity: string;
  resultBadge: string;
  time: string;
  whatsappMessage: string;
  keyWin: string;
}

export const REAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Béatrice Ngono Manga",
    city: "Douala",
    country: "Cameroun",
    avatarColor: "bg-emerald-600",
    initials: "BN",
    activity: "Pâtisserie & gâteaux d'anniversaire à domicile",
    resultBadge: "+22 500 FCFA en 48h",
    time: "Hier à 19:42",
    whatsappMessage: "Bonsoir à toute l'équipe de À Cœur Ouvert ! Je devais absolument vous écrire pour vous dire merci. J'ai appliqué le script n°2 hier soir sur mon statut WhatsApp pour mes gâteaux. Ce matin, 2 mamans d'élèves m'ont commandé des gâteaux d'anniversaire et ont versé leurs acomptes par Orange Money (22 500 FCFA au total). Pour la première fois de ma vie, je n'ai pas eu honte de demander un acompte avant d'acheter les ingrédients ! Votre méthode marche vraiment !",
    keyWin: "2 commandes fermes dès la première application du script WhatsApp"
  },
  {
    id: 2,
    name: "Aminata Traoré Coulibaly",
    city: "Abidjan (Cocody)",
    country: "Côte d'Ivoire",
    avatarColor: "bg-[#D97706]",
    initials: "AT",
    activity: "Soins capillaires & perruques naturelles",
    resultBadge: "Tarif x3 (de 4 000 à 12 000 FCFA)",
    time: "Aujourd'hui à 11:15",
    whatsappMessage: "Coucou l'équipe À Cœur Ouvert ! Le calculateur de prix (Outil 3) a été un vrai choc pour moi. Je coiffais pour 4 000 FCFA en me faisant mal au dos toute la journée. J'ai suivi votre méthode pour restructurer mon offre en 1 page à 12 000 FCFA en ajoutant le conseil personnalisé. Mes clientes ont payé par Wave sans discuter un seul franc ! Je me sens enfin respectée dans mon travail.",
    keyWin: "Multiplication de ses tarifs par 3 sans perdre de clientes"
  },
  {
    id: 3,
    name: "Christelle Mboumba",
    city: "Yaoundé (Bastos)",
    country: "Cameroun",
    avatarColor: "bg-[#5B1527]",
    initials: "CM",
    activity: "Rédaction de CV & profils professionnels",
    resultBadge: "5 clientes & 45 000 FCFA",
    time: "Lundi à 15:30",
    whatsappMessage: "Bonjour À Cœur Ouvert ! Je viens de franchir le cap des 5 clients de votre Plan 90 jours ! Total encaissé sur mon compte MTN MoMo : 45 000 FCFA en seulement 3 semaines. Mon mari n'en revenait pas quand j'ai pris en charge moi-même la facture d'électricité et les fournitures des enfants ce mois-ci. Quelle fierté de ne plus tendre la main !",
    keyWin: "Jalon des 5 premières clientes payantes franchi en 3 semaines"
  }
];

export const PRICING = {
  regularPrice: 9000, // FCFA
  launchPrice: 2000,  // FCFA
  currency: "FCFA",
  monthlyExampleGain: 50000, // FCFA
};

export interface ToolItem {
  id: number;
  number: string;
  name: string;
  deliverable: string;
  concreteBenefit: string;
  tag: string;
  action48h: string;
}

export const TOOLS: ToolItem[] = [
  {
    id: 1,
    number: "01",
    name: "Le Détecteur de Talents",
    deliverable: "Feuille de travail guidée (auto-diagnostic en 15 questions)",
    concreteBenefit: "Isole en 20 minutes tes 3 capacités les plus recherchées par ton entourage, même si tu as l'impression de n'avoir aucun talent particulier.",
    tag: "Diagnostic express",
    action48h: "Identifie ta compétence brute n°1 dès le 1er soir."
  },
  {
    id: 2,
    number: "02",
    name: "La Matrice de Compétences (Score /20)",
    deliverable: "Grille d'évaluation objective en 4 critères d'attractivité",
    concreteBenefit: "Attribue une note sur 20 à chaque idée pour savoir immédiatement laquelle a le plus fort potentiel d'achat sur le marché local.",
    tag: "Filtre anti-échec",
    action48h: "Élimine les fausses bonnes idées qui ne rapportent rien."
  },
  {
    id: 3,
    number: "03",
    name: "Le Calculateur de Prix Minimum",
    deliverable: "Formule étape par étape (coûts + temps + marge psychologique)",
    concreteBenefit: "Fixe un tarif juste et rentable en FCFA, sans trembler, sans sous-facturer et sans avoir peur de faire fuir les clientes.",
    tag: "Fin du complexe de prix",
    action48h: "Arrête de travailler gratuitement ou au rabais."
  },
  {
    id: 4,
    number: "04",
    name: "Le Modèle d'Offre Irrésistible en 1 Page",
    deliverable: "Template synthétique à trous prêt à remplir",
    concreteBenefit: "Structure une promesse limpide : ce que tu vends, pour qui, le résultat garanti, le prix et le mode de règlement rapide (Orange Money, MTN MoMo).",
    tag: "Clarté commerciale",
    action48h: "Ton offre tient sur une seule feuille claire et désirable."
  },
  {
    id: 5,
    number: "05",
    name: "Les Scripts de Prospection Douce (6 messages)",
    deliverable: "6 messages prêts à copier-coller pour WhatsApp & Messenger",
    concreteBenefit: "Contacte tes premiers prospects avec tact et professionnalisme, sans supplier, sans passer pour une vendeuse insistante.",
    tag: "Copier-coller WhatsApp",
    action48h: "Envoie tes 3 premiers messages de test en toute sérénité."
  },
  {
    id: 6,
    number: "06",
    name: "Le Plan de Lancement 90 Jours",
    deliverable: "Feuille de route hebdomadaire semainier d'action",
    concreteBenefit: "Sache chaque lundi matin exactement quoi faire, étape par étape, pour décrocher tes 5 premières clientes payantes sans t'éparpiller.",
    tag: "Plan d'action pas à pas",
    action48h: "Planifie ta semaine 1 en moins de 10 minutes."
  }
];

export const SEVEN_LINKS = [
  { step: 1, name: "Talent", desc: "Ce que tu fais naturellement bien (couture, cuisine, coiffure, rédaction de CV, organisation, conseil, tresses, pâtisserie…)", icon: "sparkles" },
  { step: 2, name: "Compétence", desc: "La méthode ou le savoir-faire structuré qui produit un résultat mesurable et reproductible.", icon: "wrench" },
  { step: 3, name: "Problème Résolu", desc: "Le besoin urgent ou la frustration douloureuse d'une personne prête à payer pour une solution rapide.", icon: "target" },
  { step: 4, name: "Offre en 1 Page", desc: "Une proposition claire, irrésistible et rassurante qui élimine l'hésitation chez ton interlocutrice.", icon: "file-text" },
  { step: 5, name: "Prix Juste", desc: "Un tarif calculé en FCFA qui honore ta valeur et que la cliente paie volontiers avec respect.", icon: "tag" },
  { step: 6, name: "Cliente Qualifiée", desc: "La femme ou l'homme qui a le problème exact, le budget disponible et la volonté d'agir maintenant.", icon: "users" },
  { step: 7, name: "Paiement Mobile", desc: "Le tintement de la notification Mobile Money ou virement qui atteste de ton indépendance financière.", icon: "wallet" }
];

export const PROGRAM_PARTS = [
  {
    part: "Partie 1",
    title: "Se découvrir et assumer sa valeur",
    chapters: "Chapitres 1 & 2",
    production: "Ton auto-diagnostic de talent validé et ta compétence principale notée sur 20.",
    summary: "Détruis le syndrome de l'imposteur, fais l'inventaire honnête de ce que tu sais faire et choisis ton cheval de bataille."
  },
  {
    part: "Partie 2",
    title: "Trouver l'argent dans son quotidien",
    chapters: "Chapitres 3 & 4",
    production: "La liste des 3 problèmes douloureux de ton environnement local prêts à être monétisés.",
    summary: "Regarde ton quartier, ton réseau WhatsApp et tes collègues avec les yeux d'une créatrice de valeur. Découvre où dort l'argent."
  },
  {
    part: "Partie 3",
    title: "Construire ton offre irrésistible",
    chapters: "Chapitres 5 & 6",
    production: "Ta fiche offre 1 page finalisée avec ton tarif minimum rentable calculé en FCFA.",
    summary: "Packager son talent pour qu'il devienne évident à acheter. Fixer son prix sans peur ni culpabilité."
  },
  {
    part: "Partie 4",
    title: "Trouver ses premières clientes sans pub",
    chapters: "Chapitres 7 & 8",
    production: "Tes 6 scripts personnalisés envoyés à tes premiers contacts chauds avec gestion des réponses.",
    summary: "La prospection douce sur WhatsApp et bouche-à-oreille local. Comment obtenir tes 5 premières clientes payantes."
  },
  {
    part: "Partie 5",
    title: "Durer, encaisser et devenir incontournable",
    chapters: "Chapitres 9, 10 & 11",
    production: "Ton système de fidélisation, de demande de recommandations et de gestion des finances.",
    summary: "Ne pas être un feu de paille. Séparer l'argent de la maison et l'argent du business, réinvestir et stabiliser ton revenu mensuel."
  }
];

export const ANNEXES = [
  { title: "Annexe 1 : Tableau de suivi 12 semaines", desc: "Pour piloter tes actions quotidiennes et mesurer tes progrès pas à pas." },
  { title: "Annexe 2 : Modèle officiel de reçu & facturette", desc: "Pour rassurer tes clientes et afficher un professionnalisme irréprochable dès le jour 1." },
  { title: "Annexe 3 : 30 idées de contenus WhatsApp & réseaux", desc: "Ne sois plus jamais à court d'idées pour donner envie sans passer pour une marchande agressive." },
  { title: "Annexe 4 : Les 12 objections fréquentes & leurs réponses mot pour mot", desc: "« C'est trop cher », « Je vais réfléchir », « Je n'ai pas la monnaie » : quoi répondre avec élégance." },
  { title: "Annexe 5 : 10 exemples concrets de talents transformés en offres qui paient", desc: "Cuisine, coiffure, couture, relecture/CV, cours de soutien, pâtisserie, organisation d'événements, etc." },
  { title: "Annexe 6 : La Check-list ultime de lancement en 48 heures", desc: "La liste à cocher pour ne rien oublier avant d'encaisser ton premier acompte." }
];

export const VALUE_STACK_ITEMS = [
  { item: "Le Guide pratique complet « Ton talent, ta liberté » (59 pages PDF remplissable)", value: 15000 },
  { item: "Outil 1 : Le Détecteur de Talents en 15 questions ciblées", value: 5000 },
  { item: "Outil 2 : La Matrice de Compétences (Score objectif /20)", value: 5000 },
  { item: "Outil 3 : Le Calculateur de Prix Minimum Rentable en FCFA", value: 6000 },
  { item: "Outil 4 : Le Modèle d'Offre Irrésistible en 1 Page", value: 7500 },
  { item: "Outil 5 : Les 6 Scripts de Prospection WhatsApp prêts à envoyer", value: 8000 },
  { item: "Outil 6 : La Feuille de route Plan 90 Jours & Jalon 5 Clientes", value: 6500 },
  { item: "Le pack des 6 Annexes opérationnelles (modèles, 30 idées de statuts, 12 objections)", value: 9000 },
];

export const FAQ_ITEMS = [
  {
    q: "Je n'ai pas de diplôme ou d'expérience reconnue. Est-ce vraiment pour moi ?",
    a: "Absolument. Les gens ne paient pas pour un morceau de papier au mur : ils paient pour un problème résolu, un gain de temps ou un soulagement. Que tu saches confectionner un gâteau savoureux, tresser vite et sans douleur, rédiger un CV percutant ou organiser un dressing, les clientes recherchent le résultat pratique. Le Chapitre 1 t'aide justement à transformer ce que tu fais naturellement en compétence professionnelle reconnue."
  },
  {
    q: "Je n'ai pas de capital pour démarrer. Comment faire ?",
    a: "C'est précisément toute la force de cette méthode ! Tu n'as pas besoin d'emprunter, de louer un local commercial coûteux ou d'acheter du stock. Tu démarres avec ce que tu as déjà entre les mains : ton smartphone, ta connexion habituelle et ton talent. Ton premier investissement est ce guide à 2 000 FCFA. Grâce au modèle d'acompte enseigné, ce sont tes premières clientes qui financent les fournitures éventuelles."
  },
  {
    q: "Je suis déjà occupée (boulot, enfants, maison), aurai-je le temps ?",
    a: "Chaque chapitre applique la 'Règle des 48 heures' : une seule action précise, courte et concrète à réaliser en 15 à 30 minutes par jour. Le guide est conçu pour s'insérer dans l'emploi du temps chargé d'une maman ou d'une salariée. Tu avances à ton propre rythme, sans brûler ton énergie."
  },
  {
    q: "D'autres femmes font déjà exactement la même chose que moi dans mon quartier...",
    a: "Tant mieux ! C'est la preuve irréfutable qu'il y a un marché actif et que l'argent circule. Pense aux boulangeries ou aux salons de coiffure : il y en a plusieurs dans la même rue et tous ont des clients. Dans la Partie 3, tu vas apprendre à formuler une offre unique (rapidité, accueil chaleureux, finition, suivi) qui fera que les clientes te choisiront TOI, même si une voisine fait la même activité."
  },
  {
    q: "Comment vais-je recevoir le guide et les outils après mon paiement ?",
    a: "L'accès est immédiat et automatique. Dès la validation de ton paiement de 2 000 FCFA par Mobile Money (Orange Money, MTN MoMo, Wave, etc.) ou carte bancaire, tu es redirigée vers ta page de téléchargement sécurisée et tu reçois un email instantané avec ton guide PDF complet et tous tes outils interactifs."
  },
  {
    q: "Je ne suis pas très à l'aise avec la technologie et Internet...",
    a: "Si tu sais ouvrir WhatsApp, lire un message et faire un transfert Mobile Money, tu as 100 % des compétences techniques requises. Aucun logiciel compliqué, pas de site web à coder, pas de paramétrage technique. Tout se passe avec des documents PDF clairs, lisibles sur n'importe quel téléphone, et l'application WhatsApp que tu utilises déjà chaque jour."
  },
  {
    q: "Et si je ne sais même pas exactement quel est mon talent ?",
    a: "C'est le cas de 7 femmes sur 10 avant de lire ce guide ! Souvent, ce que nous faisons le plus facilement nous semble banal, alors que d'autres personnes galèrent et rêvent de payer pour qu'on le fasse à leur place. L'Outil n°1 (Le Détecteur de Talents en 15 questions) a été spécialement conçu pour déterrer tes pépites cachées en moins de 20 minutes."
  },
  {
    q: "Et si j'applique tout et que ça ne marche pas pour moi ?",
    a: "Tu es protégée par l'engagement des promoteurs de À Cœur Ouvert : [GARANTIE, ex. 100 % satisfaite ou remboursée pendant 7 jours sans justification]. Si après avoir lu le guide et rempli les outils tu n'as pas obtenu la clarté promise, il te suffit d'envoyer un simple message pour être intégralement remboursée. Le risque financier est à 100 % pour nous, pas pour toi."
  }
];

export const HERO_HEADLINE_VARIANTS = [
  {
    id: 1,
    title: "Tu as du talent. Ton compte en banque ne le sait pas encore.",
    subtitle: "Le guide en 90 jours pour transformer ce que tu sais faire en revenus, même sans diplôme, sans capital et sans audience.",
    angle: "Principal (choc, identité & contraste immédiat - recommandé)"
  },
  {
    id: 2,
    title: "Arrête de donner gratuitement ce que d'autres femmes vendent chaque jour.",
    subtitle: "La méthode en 90 jours pour transformer tes compétences naturelles en rentrées régulières par Mobile Money.",
    angle: "Frustration & réveil de valeur (très puissant pour les femmes sollicitées sans rémunération)"
  },
  {
    id: 3,
    title: "De « Tu es trop douée ma sœur » à « Vous avez reçu 25 000 FCFA ».",
    subtitle: "Le guide pratique en 59 pages pour transformer les compliments de ton entourage en clientes fidèles qui paient.",
    angle: "Preuve concrète du quotidien & contraste verbal saisissant"
  },
  {
    id: 4,
    title: "Comment trouver tes 5 premières clientes payantes en 90 jours avec ce que tu sais DÉJÀ faire.",
    subtitle: "Pas de gros capital. Pas de boutique. Pas de sponsor. Juste ton talent, WhatsApp et une méthode prouvée.",
    angle: "Promesse pragmatique orientée résultat d'affaires"
  },
  {
    id: 5,
    title: "Combien d'argent perds-tu chaque mois en gardant ton talent pour toi seule ?",
    subtitle: "50 000 FCFA par mois, c'est 600 000 FCFA par an. Récupère ta liberté financière dès aujourd'hui pour 2 000 FCFA.",
    angle: "Aversion à la perte & ancrage financier rationnel"
  }
];
