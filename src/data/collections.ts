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
   Ajoute, enlève ou réordonne les slides librement.                          */
export const storySlides = [
  { src: story01, caption: "DAKAR — là où tout commence." },
  { src: story02, caption: "COLOGNE — une nouvelle langue, une nouvelle rue." },
  { src: story03, caption: "Les premiers croquis." },
  { src: atelier, caption: "Des nuits à tout apprendre seul." },
  { src: cover01, caption: "PARIS — le premier drop." },
  { src: cover02, caption: "LYON — construire la suite." },
  { src: cover03, caption: "Aujourd'hui — ATTICLEGACY." },
];
