import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { projects, site } from "@/lib/site-content";

const galleryLocation = (location: string) =>
  location.replace(/,?\s*Miami,\s*(?:FL|Florida)$/, "");

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Portfolio - ${site.name}` },
      {
        name: "description",
        content: `Selected 3D interior renderings and room concepts by ${site.owner}.`,
      },
      { property: "og:title", content: `Portfolio - ${site.name}` },
      {
        property: "og:description",
        content: `Selected 3D interior renderings and room concepts by ${site.owner}.`,
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname !== "/gallery") {
    return <Outlet />;
  }

  return (
    <section className="px-6 md:px-10 pt-16 pb-24">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 animate-fade-in">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Index / Portfolio
            </span>
            <h1 className="font-display text-5xl md:text-7xl tracking-tight mt-4">
              Selected <span className="italic">Works</span>
            </h1>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
            Miami / {projects.length} Render Studies
          </span>
        </header>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, i) => {
            const shortLocation = galleryLocation(project.location);
            const compactMobileStudy =
              project.status === "Organic Contemporary Luxe" ||
              project.status === "Timeless Modern Luxury";

            return (
              <Link
                key={project.n}
                to="/gallery/$slug"
                params={{ slug: project.slug }}
                className={`group animate-fade-in ${i % 2 === 1 ? "md:mt-24" : ""}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="overflow-hidden mb-6 outline outline-1 -outline-offset-1 outline-foreground/5">
                  <img
                    src={project.img}
                    alt={project.title}
                    width={1000}
                    height={1200}
                    loading="lazy"
                    className="w-full h-auto transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em]">
                        /{project.n}
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl group-hover:italic transition-all">
                        {project.title}
                      </h2>
                    </div>
                    <p className="hidden md:block text-[11px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
                      {shortLocation} - {project.type} - {project.year}
                    </p>
                  </div>
                  <div className="shrink-0 max-w-[46%] text-right md:max-w-none">
                    <span
                      className={`block text-[9px] font-mono uppercase tracking-[0.2em] pt-1 ${
                        project.status === "Portfolio Study"
                          ? "text-muted-foreground"
                          : "text-accent"
                      } ${compactMobileStudy ? "max-md:ml-auto max-md:max-w-32" : ""}`}
                    >
                      {project.status}
                    </span>
                    <p className="mt-4 text-[10px] font-mono text-muted-foreground uppercase tracking-[0.18em] leading-relaxed md:hidden">
                      {shortLocation}
                      <br />
                      {project.type} - {project.year}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
