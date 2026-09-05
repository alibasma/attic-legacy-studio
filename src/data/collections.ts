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
import heroAsset from "@/assets/hero.jpg.asset.json";
const hero = heroAsset.url;
import cover01Asset from "@/assets/eternal-will.jpg.asset.json";
import cover02Asset from "@/assets/iconic-heartbreak.jpg.asset.json";
import cover03Asset from "@/assets/DSC06297.jpg.asset.json";
const cover01 = cover01Asset.url;
const cover02 = cover02Asset.url;
const cover03 = cover03Asset.url;
import story01 from "@/assets/story-01.jpg";
import story02 from "@/assets/story-02.jpg";
import story03 from "@/assets/story-03.jpg";
import atelier from "@/assets/process.jpg";
import workshopAsset from "@/assets/workshop.jpg.asset.json";
const workshop = workshopAsset.url;

// ---- PHOTOS WORLD CUP 2026 ----
import wc01Asset from "@/assets/DSC06072.jpg.asset.json";
import wc02Asset from "@/assets/DSC06297.jpg.asset.json";
import wc03Asset from "@/assets/IMG_0286.jpeg.asset.json";
import wc04Asset from "@/assets/DSC06121.JPEG.asset.json";
import wc05Asset from "@/assets/DSC06149.JPEG.asset.json";
import wc06Asset from "@/assets/DSC06254.JPEG.asset.json";
import wc07Asset from "@/assets/DSC06263.JPEG.asset.json";
import wc08Asset from "@/assets/DSC06050.jpg.asset.json";
const wc01 = wc01Asset.url;
const wc02 = wc02Asset.url;
const wc03 = wc03Asset.url;
const wc04 = wc04Asset.url;
const wc05 = wc05Asset.url;
const wc06 = wc06Asset.url;
const wc07 = wc07Asset.url;
const wc08 = wc08Asset.url;

// ---- PHOTOS ICONIC HEARTBREAK ----
import ih01Asset from "@/assets/DSC02824.jpg.asset.json";
import ih02Asset from "@/assets/DSC02936.jpg.asset.json";
import ih03Asset from "@/assets/DSC03118.jpg.asset.json";
import ih04Asset from "@/assets/DSC03240.jpg.asset.json";
import ih05Asset from "@/assets/DSC02508.jpg.asset.json";
import ih06Asset from "@/assets/DSC03060.jpg.asset.json";
import ih07Asset from "@/assets/IMG_3974.jpg.asset.json";
import ih08Asset from "@/assets/DSC02668.jpg.asset.json";
const ih01 = ih01Asset.url;
const ih02 = ih02Asset.url;
const ih03 = ih03Asset.url;
const ih04 = ih04Asset.url;
const ih05 = ih05Asset.url;
const ih06 = ih06Asset.url;
const ih07 = ih07Asset.url;
const ih08 = ih08Asset.url;

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
      "Raconte ici l'histoire de ce chapitre : d'où vient l'idée, ce qu'elle raconte, comment elle a été fabriquée.",
    videoUrl: "#",
    details: [
      "Coton lourd 420 g/m²",
      "Sérigraphie artisanale",
      "Coupe oversize boxy",
      "Série limitée",
    ],
    gallery: [cover01, story01, story02, story03, atelier, cover02, cover03, story01],
  },
  {
    slug: "chapitre-02",
    index: "02",
    name: "ICONIC HEARTBREAK",
    season: "CHAPITRE 02",
    cover: cover02,
    story:
      "Raconte ici l'histoire de ce chapitre : d'où vient l'idée, ce qu'elle raconte, comment elle a été fabriquée.",
    videoUrl: "#",
    details: [
      "Denim délavé",
      "Boutons et rivets personnalisés",
      "Silhouette relaxed",
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
    videoUrl: "#",
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
import slide01 from "@/assets/story-1.webp.asset.json";
import slide02 from "@/assets/story-2.jpg.asset.json";
import slide03 from "@/assets/story-3.webp.asset.json";
import slide04 from "@/assets/story-4.webp.asset.json";
import slide05 from "@/assets/story-5.webp.asset.json";
import slide06 from "@/assets/story-6.webp.asset.json";
import slide07 from "@/assets/story-7.jpg.asset.json";
import slide08 from "@/assets/story-8.webp.asset.json";
import slide09 from "@/assets/story-9.jpg.asset.json";
import slide10 from "@/assets/story-10.jpg.asset.json";
import slide11 from "@/assets/story-11.jpg.asset.json";
import slide12 from "@/assets/story-12.png.asset.json";

export const storySlides = [
  { src: slide01.url, caption: "01 — Ingénieur, entrepreneur, styliste, vidéaste." },
  { src: slide02.url, caption: "02 — Après le bac : partir de zéro." },
  { src: slide03.url, caption: "03 — École d'ingénieur à Dakar, la tête ailleurs." },
  { src: slide04.url, caption: "04 — 200 € et un grenier." },
  { src: slide05.url, caption: "05 — Les 40 premiers t-shirts." },
  { src: slide06.url, caption: "06 — 1 000 € perdus. J'arrête." },
  { src: slide07.url, caption: "07 — Dakar → Nice → Cologne." },
  { src: slide08.url, caption: "08 — Cologne : un an de maladie." },
  { src: slide09.url, caption: "09 — 10 000 € sur la table, je relance." },
  { src: slide10.url, caption: "10 — Paris : 63 commandes en 72h." },
  { src: slide11.url, caption: "11 — Un an plus tard, Lyon." },
  { src: slide12.url, caption: "12 — Refuser d'abandonner." },
];

