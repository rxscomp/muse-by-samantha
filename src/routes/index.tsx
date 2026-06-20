import { createFileRoute, Link } from "@tanstack/react-router";
import floralPrint from "@/assets/floral-print.png";
import homeHero from "@/assets/home-hero.png";
import { featuredProjects, site } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.title },
      { name: "description", content: site.description },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="px-6 md:px-10 pt-6 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative w-full max-w-[34rem] mx-auto lg:mx-0">
                <img
                  src={floralPrint}
                  alt=""
                  aria-hidden="true"
                  className="hero-floral-outline pointer-events-none absolute left-0 top-[39%] z-20 block w-[18rem] -translate-x-[45%] -translate-y-1/2 -rotate-45 sm:w-[21rem] sm:-translate-x-[47%] md:w-[23rem] md:-translate-x-[50%] lg:w-[25rem]"
                />
                <div className="relative aspect-[4/5] overflow-hidden outline outline-1 -outline-offset-1 outline-foreground/5 animate-reveal">
                  <img
                    src={homeHero}
                    alt="Muse Designs interior render"
                    width={1200}
                    height={1600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 animate-fade-in [animation-delay:400ms]">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Interior Design Portfolio - Miami, Florida
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-[0.92] tracking-tight mt-6 mb-7 text-balance">
                Concept spaces designed to be <span className="italic text-accent">felt</span>{" "}
                before they are built.
              </h1>
              <p className="max-w-[30rem] text-muted-foreground leading-relaxed text-pretty">
                Muse Designs reflects how vision becomes reality through a curated portfolio
                of 3D design renderings, decor concepts, and spaces thoughtfully shaped by
                Samantha Morales.
              </p>
              <div className="mt-10 flex gap-8 text-[10px] font-mono uppercase tracking-[0.25em]">
                <Link
                  to="/gallery"
                  className="border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  View Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Inquire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pt-24 pb-10 md:pb-14 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-baseline mb-16">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
              Featured
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.n}
                to="/gallery/$slug"
                params={{ slug: project.slug }}
                className={`group ${index === 1 ? "md:mt-24" : ""}`}
              >
                <div className="overflow-hidden aspect-[16/10] mb-6">
                  <img
                    src={project.img}
                    alt={project.title}
                    width={1000}
                    height={1200}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-2xl group-hover:italic transition-all">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.2em] mt-2">
                      {project.location} / {project.type}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-20 md:mt-24 flex justify-center">
            <Link
              to="/gallery"
              className="font-mono text-[11px] uppercase tracking-[0.25em] border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
