import cover01 from "@/assets/collection-01.jpg";
import cover02 from "@/assets/collection-02.jpg";
import cover03 from "@/assets/collection-03.jpg";
import story01 from "@/assets/story-01.jpg";
import story02 from "@/assets/story-02.jpg";
import story03 from "@/assets/story-03.jpg";
import process from "@/assets/process.jpg";

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

// Placeholder content — replace names, stories, product details,
// drop video links and gallery images with the real ones.
export const collections: Collection[] = [
  {
    slug: "chapter-01",
    index: "01",
    name: "COLLECTION NAME",
    season: "CHAPTER 01",
    cover: cover01,
    story:
      "Write the story of this chapter here. Where the idea came from, what it says, what it was made of.",
    videoUrl: "#",
    details: [
      "Heavyweight 420 GSM cotton",
      "Screen printed artwork",
      "Boxy oversized fit",
      "Limited run",
    ],
    gallery: [cover01, story01, story02, story03, process, cover02, cover03, story01],
  },
  {
    slug: "chapter-02",
    index: "02",
    name: "COLLECTION NAME",
    season: "CHAPTER 02",
    cover: cover02,
    story:
      "Write the story of this chapter here. Where the idea came from, what it says, what it was made of.",
    videoUrl: "#",
    details: [
      "Washed denim outerwear",
      "Custom hardware",
      "Relaxed silhouette",
      "Limited run",
    ],
    gallery: [cover02, story02, story03, process, story01, cover01, cover03, story02],
  },
  {
    slug: "chapter-03",
    index: "03",
    name: "COLLECTION NAME",
    season: "CHAPTER 03",
    cover: cover03,
    story:
      "Write the story of this chapter here. Where the idea came from, what it says, what it was made of.",
    videoUrl: "#",
    details: [
      "Brushed fleece hoodie",
      "Embroidered details",
      "Double layered hood",
      "Limited run",
    ],
    gallery: [cover03, process, story03, story01, story02, cover01, cover02, process],
  },
];

export const storySlides = [
  { src: story01, caption: "DAKAR — where it starts." },
  { src: story02, caption: "COLOGNE — a new language, a new street." },
  { src: story03, caption: "The first sketches." },
  { src: process, caption: "Nights spent learning everything alone." },
  { src: cover01, caption: "PARIS — the first drop." },
  { src: cover02, caption: "LYON — building it further." },
  { src: cover03, caption: "Today — ATTICLEGACY." },
];
