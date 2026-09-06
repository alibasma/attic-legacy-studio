import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { collections } from "@/data/collections";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = collections.find((c) => c.slug === params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Indisponible — ATTICLEGACY" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.collection.season} — ATTICLEGACY`;
    const description = `${loaderData.collection.name} : images, détails produit et vidéo du drop de ce chapitre ATTICLEGACY.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: CollectionPage,
});

function CollectionPage() {
  const { collection } = Route.useLoaderData();

  const returnToPreviousPosition = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.assign("/");
  };

  return (
    <main className="min-h-screen">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={collection.cover}
          alt={`Cover ${collection.name}`}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
          <Button
            type="button"
            variant="ghost"
            onClick={returnToPreviousPosition}
            className="label h-auto w-fit p-0 text-muted-foreground hover:bg-transparent hover:text-primary"
          >
            ← Retour
          </Button>
          <div>
            <p className="label text-primary">{collection.season}</p>
            <h1 className="display mt-3 text-[16vw] leading-[0.8] md:text-[9vw]">
              {collection.name}
            </h1>
          </div>
        </div>
      </div>

      <section className="grid gap-10 border-b border-border px-6 py-16 md:grid-cols-2 md:px-12">
        <p className="max-w-xl text-lg text-muted-foreground md:text-xl">{collection.story}</p>
        <div>
          <p className="label text-primary">Détails produit</p>
          <ul className="mt-4 space-y-2 text-base">
            {collection.details.map((d) => (
              <li key={d} className="border-b border-border pb-2">
                {d}
              </li>
            ))}
          </ul>
          {collection.videoUrl && collection.videoUrl !== "#" && (
            <a
              href={collection.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="label mt-8 inline-block bg-primary px-6 py-4 text-primary-foreground transition-opacity hover:opacity-80"
            >
              Voir la vidéo du drop →
            </a>
          )}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-1 md:grid-cols-4">
        {collection.gallery.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${collection.name} look ${i + 1}`}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover grayscale-[30%] transition duration-500 hover:grayscale-0"
          />
        ))}
      </section>

      <div className="flex justify-between px-6 py-12 md:px-12">
        <Button
          type="button"
          variant="ghost"
          onClick={returnToPreviousPosition}
          className="label h-auto p-0 text-muted-foreground hover:bg-transparent hover:text-primary"
        >
          ← ATTICLEGACY
        </Button>
        <span className="label text-muted-foreground">{collection.index} / 03</span>
      </div>
    </main>
  );
}
