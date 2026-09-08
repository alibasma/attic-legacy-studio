/* ------------------------------------------------------------------
   TOUT LE CONTENU MODIFIABLE DU SITE EST DANS CE FICHIER.

   POUR CHANGER UNE PHOTO :
   1. Envoie-moi ta photo dans le chat (bouton + → Joindre), ou dépose-la
      dans le dossier src/assets/.
   2. Remplace simplement le chemin de l'image ci-dessous
      (ex : "/assets/hero.jpg" → "/assets/ma-photo.jpg").
   Rien d'autre à toucher : les images sont utilisées partout depuis ici.
------------------------------------------------------------------- */

// Image plein écran du hero
export const heroImage = "/assets/hero.jpg";
// Image de la section "D'une idée à une marque"
export const processImage = "/assets/workshop.jpg";

export type Collection = {
  slug: string;
  index: string;
  name: string;
  season: string;
  cover: string;
  story: string;
  videoUrl: string;
  details: string[];
  gallery: string[];
};

/* ---- LES 3 COLLECTIONS ----
   name       : le nom de la collection
   story      : le texte qui raconte le chapitre
   videoUrl   : le lien vers la vidéo du drop (YouTube, Instagram, TikTok...)
   details    : les détails produit (une ligne par détail)
   gallery    : 6 à 8 photos supplémentaires                                  */
export const collections: Collection[] = [
  {
    slug: "chapitre-01",
    index: "01",
    name: "ETERNAL WILL",
    season: "CHAPITRE 01",
    cover: "/assets/eternal-will.jpg",
    story:
      "Eternal Will est né de cette volonté qui reste quand tout le reste disparaît. Continuer malgré les échecs, les doutes et les moments où abandonner semble plus simple. Parce que tout peut [...]",
    videoUrl: "#",
    details: [
      "3 t-shirts",
      "Designé à la main",
      "Coupe oversize",
      "Série limitée",
    ],
    gallery: [
      "/assets/IMG_0001.jpg",
      "/assets/IMG_0004.jpg",
      "/assets/IMG_0005.jpg",
      "/assets/IMG_9973.jpg",
      "/assets/IMG_9977.jpg",
      "/assets/IMG_9978.jpg",
      "/assets/IMG_9983.jpg",
      "/assets/IMG_9984.jpg",
    ],
  },
  {
    slug: "chapitre-02",
    index: "02",
    name: "ICONIC HEARTBREAK",
    season: "CHAPITRE 02",
    cover: "/assets/iconic-heartbreak.jpg",
    story:
      "Iconic Heartbreak est né de ces ruptures qui finissent par nous construire autant qu'elles nous détruisent. Une collection qui transforme la douleur, le manque et les souvenirs en quelque cho[...]",
    videoUrl: "https://www.instagram.com/reel/DOQbVocDKJc/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    details: [
      "1 kway",
      "2 t-shirts",
      "1 collier",
      "Série limitée",
    ],
    gallery: [
      "/assets/DSC02824.jpg",
      "/assets/DSC02936.jpg",
      "/assets/DSC03118.jpg",
      "/assets/DSC03240.jpg",
      "/assets/DSC02508.jpg",
      "/assets/DSC03060.jpg",
      "/assets/IMG_3974.jpg",
      "/assets/DSC02668.jpg",
    ],
  },
  {
    slug: "chapitre-03",
    index: "03",
    name: "WORLD CUP 2026",
    season: "CHAPITRE 03",
    cover: "/assets/DSC06297.jpg",
    story:
      "Un drop pour la Coupe du monde. On voulait faire un truc artistique, où chaque pièce devient de l'art.",
    videoUrl: "https://www.instagram.com/reel/DaVpGEssx_D/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    details: [
      "2 manches longues",
      "Détails broderie",
      "Designé à la main",
      "Série limitée",
    ],
    gallery: [
      "/assets/IMG_0286.jpeg",
      "/assets/DSC06072.jpg",
      "/assets/DSC06121.jpg",
      "/assets/DSC06149.jpg",
      "/assets/DSC06254.jpg",
      "/assets/DSC06263.jpg",
      "/assets/DSC06050.jpg",
      "/assets/DSC06297.jpg",
    ],
  },
];

/* ---- CARROUSEL "AVANT ATTICLEGACY" ----
   Ce sont tes 10 slides (le texte est déjà sur les images).
   Pour en changer une : remplace simplement le chemin de l'image.     */
export const storySlides = [
  { src: "/assets/story-1.webp", caption: "01 — Ingénieur, entrepreneur, styliste, vidéaste." },
  { src: "/assets/story-2.jpg", caption: "02 — Après le bac : partir de zéro." },
  { src: "/assets/story-3.webp", caption: "03 — École d'ingénieur à Dakar, la tête ailleurs." },
  { src: "/assets/story-4.webp", caption: "04 — 200 € et un grenier." },
  { src: "/assets/story-5.webp", caption: "05 — Les 40 premiers t-shirts." },
  { src: "/assets/story-6.webp", caption: "06 — 1 000 € perdus. J'arrête." },
  { src: "/assets/story-7.jpg", caption: "07 — Dakar → Nice → Cologne." },
  { src: "/assets/story-8.webp", caption: "08 — Cologne : un an de maladie." },
  { src: "/assets/story-9.jpg", caption: "09 — 10 000 € sur la table, je relance." },
  { src: "/assets/story-10.jpg", caption: "10 — Paris : 63 commandes en 72h." },
  { src: "/assets/story-11.jpg", caption: "11 — Un an plus tard, Lyon." },
  { src: "/assets/story-12.png", caption: "12 — Refuser d'abandonner." },
];
