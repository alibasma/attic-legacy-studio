/* ------------------------------------------------------------------
   TOUT LE CONTENU MODIFIABLE DU SITE EST DANS CE FICHIER.

   POUR CHANGER UNE PHOTO :
   1. Envoie-moi ta photo dans le chat (bouton + → Joindre), ou dépose-la
      dans le dossier src/assets/.
   2. Remplace le nom du fichier dans les imports ci-dessous
      (ex : "@/assets/hero.jpg" → "@/assets/ma-photo.jpg").
   Rien d'autre à toucher : les images sont utilisées partout depuis ici.
------------------------------------------------------------------- */

// ---- IMAGES (à remplacer par les tiennes) ----
import hero from "@/assets/hero.jpg";
import cover01 from "@/assets/eternal-will.jpg";
import cover02 from "@/assets/iconic-heartbreak.jpg";
import cover03 from "@/assets/DSC06297.jpg";
import story01 from "@/assets/story-01.jpg";
import story02 from "@/assets/story-02.jpg";
import story03 from "@/assets/story-03.jpg";
import atelier from "@/assets/process.jpg";
import workshop from "@/assets/workshop.jpg";

// ---- PHOTOS ETERNAL WILL ----
import ew01 from "@/assets/IMG_0001.jpg";
import ew02 from "@/assets/IMG_0004.jpg";
import ew03 from "@/assets/IMG_0005.jpg";
import ew04 from "@/assets/IMG_9973.jpg";
import ew05 from "@/assets/IMG_9977.jpg";
import ew06 from "@/assets/IMG_9978.jpg";
import ew07 from "@/assets/IMG_9983.jpg";
import ew08 from "@/assets/IMG_9984.jpg";

// ---- PHOTOS WORLD CUP 2026 ----
import wc01 from "@/assets/DSC06072.jpg";
import wc02 from "@/assets/DSC06297.jpg";
import wc03 from "@/assets/IMG_0286.jpeg";
import wc04 from "@/assets/DSC06121.jpg";
import wc05 from "@/assets/DSC06149.jpg";
import wc06 from "@/assets/DSC06254.jpg";
import wc07 from "@/assets/DSC06263.jpg";
import wc08 from "@/assets/DSC06050.jpg";

// ---- PHOTOS ICONIC HEARTBREAK ----
import ih01 from "@/assets/DSC02824.jpg";
import ih02 from "@/assets/DSC02936.jpg";
import ih03 from "@/assets/DSC03118.jpg";
import ih04 from "@/assets/DSC03240.jpg";
import ih05 from "@/assets/DSC02508.jpg";
import ih06 from "@/assets/DSC03060.jpg";
import ih07 from "@/assets/IMG_3974.jpg";
import ih08 from "@/assets/DSC02668.jpg";

// Image plein écran du hero
export const heroImage = hero;
// Image de la section "D'une idée à une marque"
export const processImage = workshop;

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
    cover: cover01,
    story:
      "Eternal Will est né de cette volonté qui reste quand tout le reste disparaît. Continuer malgré les échecs, les doutes et les moments où abandonner semble plus simple. Parce que tout peut [...]
    videoUrl: "#",
    details: [
      "3 t-shirts",
      "Designé à la main",
      "Coupe oversize",
      "Série limitée",
    ],
    gallery: [ew01, ew02, ew03, ew04, ew05, ew06, ew07, ew08],
  },
  {
    slug: "chapitre-02",
    index: "02",
    name: "ICONIC HEARTBREAK",
    season: "CHAPITRE 02",
    cover: cover02,
    story:
      "Iconic Heartbreak est né de ces ruptures qui finissent par nous construire autant qu'elles nous détruisent. Une collection qui transforme la douleur, le manque et les souvenirs en quelque cho[...]
    videoUrl: "https://www.instagram.com/reel/DOQbVocDKJc/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    details: [
      "1 kway",
      "2 t-shirts",
      "1 collier",
      "Série limitée",
    ],
    gallery: [ih01, ih02, ih03, ih04, ih05, ih06, ih07, ih08],
  },
  {
    slug: "chapitre-03",
    index: "03",
    name: "WORLD CUP 2026",
    season: "CHAPITRE 03",
    cover: cover03,
    story:
      "Un drop pour la Coupe du monde. On voulait faire un truc artistique, où chaque pièce devient de l'art.",
    videoUrl: "https://www.instagram.com/reel/DaVpGEssx_D/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    details: [
      "2 manches longues",
      "Détails broderie",
      "Designé à la main",
      "Série limitée",
    ],
    gallery: [wc03, wc01, wc04, wc05, wc06, wc07, wc08, wc02],
  },
];

/* ---- CARROUSEL "AVANT ATTICLEGACY" ----
   Ce sont tes 10 slides (le texte est déjà sur les images).
   Pour en changer une : remplace le fichier importé en haut de la liste.     */
import slide01 from "@/assets/story-1.webp";
import slide02 from "@/assets/story-2.jpg";
import slide03 from "@/assets/story-3.webp";
import slide04 from "@/assets/story-4.webp";
import slide05 from "@/assets/story-5.webp";
import slide06 from "@/assets/story-6.webp";
import slide07 from "@/assets/story-7.jpg";
import slide08 from "@/assets/story-8.webp";
import slide09 from "@/assets/story-9.jpg";
import slide10 from "@/assets/story-10.jpg";
import slide11 from "@/assets/story-11.jpg";
import slide12 from "@/assets/story-12.png";

export const storySlides = [
  { src: slide01, caption: "01 — Ingénieur, entrepreneur, styliste, vidéaste." },
  { src: slide02, caption: "02 — Après le bac : partir de zéro." },
  { src: slide03, caption: "03 — École d'ingénieur à Dakar, la tête ailleurs." },
  { src: slide04, caption: "04 — 200 € et un grenier." },
  { src: slide05, caption: "05 — Les 40 premiers t-shirts." },
  { src: slide06, caption: "06 — 1 000 € perdus. J'arrête." },
  { src: slide07, caption: "07 — Dakar → Nice → Cologne." },
  { src: slide08, caption: "08 — Cologne : un an de maladie." },
  { src: slide09, caption: "09 — 10 000 € sur la table, je relance." },
  { src: slide10, caption: "10 — Paris : 63 commandes en 72h." },
  { src: slide11, caption: "11 — Un an plus tard, Lyon." },
  { src: slide12, caption: "12 — Refuser d'abandonner." },
];
