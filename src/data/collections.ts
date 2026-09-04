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
import cover01 from "@/assets/collection-01.jpg";
import cover02 from "@/assets/collection-02.jpg";
import cover03 from "@/assets/collection-03.jpg";
import story01 from "@/assets/story-01.jpg";
import story02 from "@/assets/story-02.jpg";
import story03 from "@/assets/story-03.jpg";
import atelier from "@/assets/process.jpg";

// Image plein écran du hero
export const heroImage = hero;
// Image de la section "D'une idée à une marque"
export const processImage = atelier;

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
    name: "NOM DE LA COLLECTION",
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
    name: "NOM DE LA COLLECTION",
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
    gallery: [cover02, story02, story03, atelier, story01, cover01, cover03, story02],
  },
  {
    slug: "chapitre-03",
    index: "03",
    name: "NOM DE LA COLLECTION",
    season: "CHAPITRE 03",
    cover: cover03,
    story:
      "Raconte ici l'histoire de ce chapitre : d'où vient l'idée, ce qu'elle raconte, comment elle a été fabriquée.",
    videoUrl: "#",
    details: [
      "Molleton brossé",
      "Broderies sur la poitrine",
      "Capuche double épaisseur",
      "Série limitée",
    ],
    gallery: [cover03, atelier, story03, story01, story02, cover01, cover02, atelier],
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

