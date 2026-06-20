import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { toast } from "sonner";
import inquiryErrorSound from "@/assets/audio/inquiry-error.mp3";
import inquirySuccessSound from "@/assets/audio/inquiry-success.mp3";
import { site } from "@/lib/site-content";

const WEB3FORMS_ACCESS_KEY = "556776ae-206d-4e1c-a0dd-31b550b5e1e2";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Inquire - ${site.name}` },
      {
        name: "description",
        content: `Contact ${site.owner} about an interior render or design concept.`,
      },
      { property: "og:title", content: `Inquire - ${site.name}` },
      {
        property: "og:description",
        content: `Contact ${site.owner} about an interior render or design concept.`,
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const successSoundRef = useRef<HTMLAudioElement>(null);
  const errorSoundRef = useRef<HTMLAudioElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      toast.error("Please complete every field.");
      return;
    }

    setSubmitting(true);
    const successSound = successSoundRef.current ?? new Audio(inquirySuccessSound);
    successSound.volume = 0.45;
    const errorSound = errorSoundRef.current ?? new Audio(inquiryErrorSound);
    errorSound.volume = 0.35;

    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", `New Muse Designs inquiry from ${name}`);
    data.append("from_name", "Muse Designs Contact Form");
    data.append("replyto", email);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Message could not be sent.");
      }

      form.reset();
      playSound(successSound);
      toast.success("Inquiry sent.", {
        description: "Thank you. I will get back to you soon.",
      });
    } catch {
      playSound(errorSound);
      toast.error("Your inquiry could not be sent.", {
        description: `Please email me directly at ${site.email}.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="px-6 md:px-10 pt-16 pb-24">
      <audio ref={successSoundRef} src={inquirySuccessSound} preload="auto" className="hidden" />
      <audio ref={errorSoundRef} src={inquiryErrorSound} preload="auto" className="hidden" />
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 animate-fade-in">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Design Inquiry
          </span>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight mt-4">
            Start a <span className="italic text-accent">project</span>.
          </h1>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <aside className="space-y-12 animate-fade-in">
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Tell me about your space, the mood you want to create, and the visual concept
              ideas I can help bring to life.
            </p>

            <dl className="space-y-8 font-mono text-[11px] uppercase tracking-[0.2em]">
              <div>
                <dt className="text-accent mb-2">General Inquiries</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-accent mb-2">Based In</dt>
                <dd className="leading-relaxed normal-case tracking-normal text-[12px] font-sans text-muted-foreground">
                  {site.location}
                </dd>
              </div>
              <div>
                <dt className="text-accent mb-2">Specialties</dt>
                <dd className="leading-relaxed normal-case tracking-normal text-[12px] font-sans text-muted-foreground">
                  3D Models
                  <br />
                  Interior Design
                  <br />
                  Video Renderings
                  <br />
                  Concept Floor Plans
                  <br />
                  Residential & Commercial Design
                </dd>
              </div>
            </dl>
          </aside>

          <form onSubmit={onSubmit} className="space-y-10 animate-fade-in [animation-delay:200ms]">
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />
            <Field name="name" label="Full Name" placeholder="E.g. Jane Doe" />
            <Field name="email" type="email" label="Email Address" placeholder="hello@example.com" />
            <Field
              name="message"
              label="Project Details"
              placeholder="Tell me about your vision..."
              textarea
            />

            <button
              type="submit"
              disabled={submitting}
              className="px-12 py-4 bg-foreground text-background font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-accent transition-colors duration-300 disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function playSound(audio: HTMLAudioElement) {
  audio.pause();
  audio.currentTime = 0;
  void audio.play().catch(() => undefined);
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  textarea = false,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground block mb-3">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          required
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-border py-3 placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-border py-3 placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
        />
      )}
    </label>
  );
}
