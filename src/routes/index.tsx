import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { collections, storySlides, heroImage, processImage } from "@/data/collections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ATTICLEGACY — Partir de rien, créer l'extraordinaire" },
      {
        name: "description",
        content:
          "Une marque streetwear construite de zéro, entre Dakar, Cologne, Paris et Lyon. Une seule personne, chaque étape.",
      },
      { property: "og:title", content: "ATTICLEGACY — Partir de rien, créer l'extraordinaire" },
      {
        property: "og:description",
        content:
          "Une marque streetwear construite de zéro, entre Dakar, Cologne, Paris et Lyon. Une seule personne, chaque étape.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <StoryCarousel />
      <FromIdeaToBrand />
      <Collections />
      <Slogan />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex h-screen flex-col justify-between overflow-hidden">
      <img
        src={heroImage}
        alt="Campagne ATTICLEGACY"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background" />

      <header className="relative flex items-center justify-between p-6 md:p-10">
        <span className="label">ATTICLEGACY</span>
        <span className="label text-muted-foreground">DEPUIS DAKAR</span>
      </header>

      <div className="relative px-6 pb-16 md:px-10 md:pb-20">
        <h1 className="display text-[19vw] leading-[0.78] md:text-[13vw]">ATTICLEGACY</h1>
        <p className="display mt-4 max-w-3xl text-2xl text-primary md:text-4xl">
          Partir de rien, créer l'extraordinaire.
        </p>
        <p className="mt-6 max-w-md text-sm text-muted-foreground md:text-base">
          Une marque streetwear construite de zéro, entre Dakar, Cologne, Paris et Lyon.
        </p>
        <a href="#histoire" className="label mt-10 inline-block border-b border-primary pb-1">
          Découvrir l'histoire ↓
        </a>
      </div>
    </section>
  );
}

function StoryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const go = (dir: number) => {
    const next = Math.min(Math.max(active + dir, 0), storySlides.length - 1);
    setActive(next);
    const track = trackRef.current;
    if (track) {
      const child = track.children[next] as HTMLElement | undefined;
      child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  return (
    <section id="histoire" className="border-t border-border py-20 md:py-28">
      <div className="px-6 md:px-10">
        <h2 className="display text-[13vw] leading-[0.8] md:text-[7vw]">Avant Atticlegacy</h2>
        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          Avant de découvrir la marque, découvre d'où elle vient.
        </p>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:px-10"
      >
        {storySlides.map((slide, i) => (
          <figure key={i} className="w-[85vw] shrink-0 snap-center md:w-[62vw]">
            <img
              src={slide.src}
              alt={slide.caption}
              loading="lazy"
              className="aspect-[7/5] w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">{slide.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-6 px-6 md:px-10">
        <span className="label">
          {String(active + 1).padStart(2, "0")} / {String(storySlides.length).padStart(2, "0")}
        </span>
        <button
          onClick={() => go(-1)}
          aria-label="Précédent"
          className="label border border-border px-4 py-3 hover:border-primary hover:text-primary"
        >
          ←
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Suivant"
          className="label border border-border px-4 py-3 hover:border-primary hover:text-primary"
        >
          →
        </button>
      </div>
    </section>
  );
}

const steps = ["DESIGN", "PRODUIT", "SHOOT", "MONTAGE", "LANCEMENT"];
const cities = ["DAKAR", "COLOGNE", "PARIS", "LYON"];

function FromIdeaToBrand() {
  return (
    <section className="border-t border-border">
      <div className="grid gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <h2 className="display text-[12vw] leading-[0.8] md:text-[6vw]">D'une idée à une marque</h2>
          <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
            ATTICLEGACY est née d'une idée simple : transformer ce que je n'avais pas en quelque
            chose que les gens peuvent porter. Pas d'investisseurs, pas d'équipe, pas de raccourci —
            seulement une obsession pour les images, les vêtements et l'histoire derrière.
          </p>

          <p className="display mt-12 text-3xl text-primary md:text-5xl">
            Une seule personne. Chaque étape.
          </p>
          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            De la première idée à l'image finale, je construis aujourd'hui chaque partie
            d'ATTICLEGACY moi-même : développement produit, sourcing, direction créative, shootings,
            contenu, montage vidéo, site web et marketing.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
            {steps.map((s, i) => (
              <span key={s} className="label flex items-center gap-3">
                {s}
                {i < steps.length - 1 && <span className="text-primary">→</span>}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-8">
            {cities.map((c) => (
              <span key={c} className="display text-xl md:text-3xl">
                {c} <span className="text-primary">→</span>
              </span>
            ))}
          </div>
        </div>

        <img
          src={processImage}
          alt="Construire ATTICLEGACY seul, la nuit"
          loading="lazy"
          width={1280}
          height={1600}
          className="h-full w-full object-cover md:sticky md:top-10 md:max-h-[80vh]"
        />
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <h2 className="display px-6 text-[13vw] leading-[0.8] md:px-10 md:text-[7vw]">
        Les 3 derniers chapitres
      </h2>

      <div className="mt-12 grid gap-1 md:grid-cols-3">
        {collections.map((c) => (
          <Link
            key={c.slug}
            to="/collections/$slug"
            params={{ slug: c.slug }}
            className="group relative block overflow-hidden"
          >
            <img
              src={c.cover}
              alt={c.name}
              loading="lazy"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-transparent to-transparent p-6">
              <span className="label text-primary">{c.index}</span>
              <span className="display mt-2 text-3xl md:text-4xl">{c.name}</span>
              <span className="label mt-3 text-muted-foreground">Ouvrir le chapitre →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Slogan() {
  return (
    <footer className="border-t border-border px-6 py-24 md:px-10 md:py-32">
      <p className="display text-[11vw] leading-[0.85] md:text-[6.5vw]">
        Ton point de départ
        <br />
        ne définira jamais
        <br />
        <span className="text-primary">ton futur.</span>
      </p>
      <p className="label mt-12 text-muted-foreground">ATTICLEGACY</p>
    </footer>
  );
}
