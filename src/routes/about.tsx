import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/samantha-about.png";
import { site } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `Studio - ${site.name}` },
      { name: "description", content: `Meet ${site.owner}, the Miami designer behind ${site.name}.` },
      { property: "og:title", content: `Studio - ${site.name}` },
      {
        property: "og:description",
        content: `Meet ${site.owner}, the Miami designer behind ${site.name}.`,
      },
    ],
  }),
  component: About,
});

const timeline = [
  { y: "2022", t: "Fell in love with interior design and began exploring how spaces can tell a story." },
  { y: "2023", t: "Muse Designs portfolio begins in Miami." },
  { y: "2024", t: "Continued gaining design knowledge through university studies." },
  { y: "Now", t: "Expanding Muse Designs through new render studies, concept spaces, and design ideas." },
];

function About() {
  return (
    <>
      <section className="px-6 md:px-10 pt-16 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 animate-reveal">
            <div className="aspect-[4/5] overflow-hidden outline outline-1 -outline-offset-1 outline-foreground/5">
              <img
                src={portrait}
                alt={`${site.owner}, founder`}
                width={800}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-4">
              {site.owner} - Founder / Designer
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in [animation-delay:300ms]">
            <span className="font-mono text-[10px] text-accent uppercase tracking-[0.25em] mb-6">
              My Approach
            </span>
            <h1 className="font-display text-5xl md:text-6xl mb-10 leading-[1.05] tracking-tight">
              Spaces designed with intention, balance, and{" "}
              <span className="italic text-accent">presence</span>.
            </h1>
            <div className="max-w-xl space-y-6 text-muted-foreground leading-relaxed text-pretty">
              <p>
                Muse Designs is the interior design portfolio of Samantha Morales, based in
                Miami, Florida. The work focuses on 3D room concepts that help clients imagine
                color, furniture, materials, and atmosphere before a space is built.
              </p>
              <p>
                Each render is treated like a small story: a place to test proportion, texture,
                lighting, and decor until the room feels both polished and livable.
              </p>
              <p>
                My portfolio continues to evolve through render studies, concept spaces, and
                project galleries that reflect the growth of Muse Designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 border-t border-border bg-[color:var(--stone-soft)]/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              The Journey
            </span>
            <h2 className="font-display text-4xl mt-4">Chronology</h2>
          </div>
          <ol className="lg:col-span-8 divide-y divide-border">
            {timeline.map((row) => (
              <li key={row.y} className="grid grid-cols-[5rem_1fr] gap-6 py-6 first:pt-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  {row.y}
                </span>
                <p className="font-display text-xl md:text-2xl leading-snug">{row.t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
