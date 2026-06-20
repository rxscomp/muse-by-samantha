import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getProject, projects, site } from "@/lib/site-content";

export const Route = createFileRoute("/gallery/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    const title = project ? `${project.title} - ${site.name}` : `Project - ${site.name}`;

    return {
      meta: [
        { title },
        {
          name: "description",
          content: project?.description ?? "Interior render project by Muse Designs.",
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: project?.description ?? "Interior render project by Muse Designs.",
        },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const project = getProject(slug);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [canOpenLightbox, setCanOpenLightbox] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1280px)");
    const updateLightboxAvailability = () => {
      setCanOpenLightbox(query.matches);
      if (!query.matches) {
        setActiveImage(null);
      }
    };

    updateLightboxAvailability();
    query.addEventListener("change", updateLightboxAvailability);

    return () => query.removeEventListener("change", updateLightboxAvailability);
  }, []);

  useEffect(() => {
    if (activeImage === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          current === null ? current : (current - 1 + project!.images.length) % project!.images.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveImage((current) =>
          current === null ? current : (current + 1) % project!.images.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage, project]);

  if (!project) {
    return (
      <section className="px-6 md:px-10 pt-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/gallery"
            className="font-mono text-[10px] uppercase tracking-[0.25em] border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            Back to Portfolio
          </Link>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight mt-10">
            Project not found.
          </h1>
        </div>
      </section>
    );
  }

  const showPreviousImage = () => {
    setActiveImage((current) =>
      current === null ? current : (current - 1 + project.images.length) % project.images.length,
    );
  };

  const showNextImage = () => {
    setActiveImage((current) =>
      current === null ? current : (current + 1) % project.images.length,
    );
  };
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <>
      <section className="px-6 md:px-10 pt-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/gallery"
            className="font-mono text-[10px] uppercase tracking-[0.25em] border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            Back to Portfolio
          </Link>

          <header className="grid lg:grid-cols-12 gap-8 lg:gap-14 mt-10 animate-fade-in">
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Project / {project.n}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4">
                {project.title}
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-pretty max-w-xl">
                {project.description}
              </p>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-5 mt-10 font-mono text-[10px] uppercase tracking-[0.2em]">
                <div>
                  <dt className="text-accent mb-2">Location</dt>
                  <dd className="text-muted-foreground">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-accent mb-2">Type</dt>
                  <dd className="text-muted-foreground">{project.type}</dd>
                </div>
                <div>
                  <dt className="text-accent mb-2">Year</dt>
                  <dd className="text-muted-foreground">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-accent mb-2">Study</dt>
                  <dd className="text-muted-foreground">{project.status}</dd>
                </div>
              </dl>
            </div>
          </header>

        </div>
      </section>

      <section className="px-6 md:px-10 pb-28">
        <div className="max-w-[96rem] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Render Collage
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {project.images.length} Visuals
            </span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10">
            {project.images.map((image, index) => (
              <figure
                key={`${project.slug}-${index}`}
                className="overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (canOpenLightbox) {
                      setActiveImage(index);
                    }
                  }}
                  disabled={!canOpenLightbox}
                  className="block w-full cursor-default text-left focus:outline-none xl:cursor-zoom-in disabled:cursor-default"
                  aria-label={`Open ${project.title} render ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${project.title} render ${index + 1}`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full h-auto transition-transform duration-1000 xl:hover:scale-[1.01]"
                  />
                </button>
              </figure>
            ))}
          </div>
          <nav
            className="mt-16 flex items-center justify-between gap-8 font-mono text-[10px] uppercase tracking-[0.25em]"
            aria-label="Project navigation"
          >
            {previousProject ? (
              <Link
                to="/gallery/$slug"
                params={{ slug: previousProject.slug }}
                className="border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Previous Project
              </Link>
            ) : (
              <span />
            )}
            {nextProject ? (
              <Link
                to="/gallery/$slug"
                params={{ slug: nextProject.slug }}
                className="border-b border-foreground pb-1 text-right hover:text-accent hover:border-accent transition-colors"
              >
                Next Project
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </section>

      {activeImage !== null ? (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 px-4 py-5 md:px-8 md:py-8 animate-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} image viewer`}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-4 top-4 md:right-8 md:top-8 inline-flex size-12 md:size-14 items-center justify-center rounded-full bg-background/10 text-background backdrop-blur-sm transition-colors hover:bg-background/20 hover:text-accent"
            aria-label="Close image viewer"
          >
            <X size={30} strokeWidth={1.5} />
          </button>

          {project.images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 md:left-8 inline-flex size-14 md:size-16 items-center justify-center rounded-full bg-background/10 text-background backdrop-blur-sm transition-colors hover:bg-background/20 hover:text-accent"
                aria-label="Previous image"
              >
                <ChevronLeft size={40} strokeWidth={1.4} />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 md:right-8 inline-flex size-14 md:size-16 items-center justify-center rounded-full bg-background/10 text-background backdrop-blur-sm transition-colors hover:bg-background/20 hover:text-accent"
                aria-label="Next image"
              >
                <ChevronRight size={40} strokeWidth={1.4} />
              </button>
            </>
          ) : null}

          <div className="flex h-full items-center justify-center px-9 md:px-16">
            <img
              src={project.images[activeImage]}
              alt={`${project.title} render ${activeImage + 1}`}
              className="max-h-full max-w-full object-contain animate-lightbox-image"
              onClick={(event) => event.stopPropagation()}
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-background/75">
            {activeImage + 1} / {project.images.length}
          </div>
        </div>
      ) : null}
    </>
  );
}
