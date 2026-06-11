import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, TrendingUp } from "lucide-react";
import { getAllProjects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Projects = () => {
  useScrollReveal();
  const projects = getAllProjects();
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );
  const [filter, setFilter] = useState<string>("All");
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Slim nav */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => (window.location.href = import.meta.env.BASE_URL)}
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to portfolio
          </button>
          <span className="font-display italic text-2xl">
            Afzal<span className="text-accent">.</span>
          </span>
          <span className="hidden sm:block font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            Archive · 2026
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-20 rule-bottom overflow-hidden">
        <div className="absolute inset-0 grid-backdrop opacity-50 pointer-events-none" />
        <div className="container relative">
          <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10" data-reveal>
            <div className="col-span-12 md:col-span-3">
              <div className="section-eyebrow">A / Archive</div>
            </div>
            <div className="col-span-12 md:col-span-9 flex flex-col gap-8">
              <h1 className="font-display tracking-tight leading-[0.92] text-[clamp(3rem,9vw,8rem)]">
                Project <em className="text-accent not-italic">archive</em> —
                <br />
                in full.
              </h1>
              <p className="text-muted-foreground font-mono text-[12.5px] tracking-[0.04em] max-w-[60ch]">
              A complete record of shipped systems and explorations:
              production RAG, voice agents, secure connectors, MCP tooling,
              computer-vision pipelines, warehouses — and a few side
              experiments that earned their keep.
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-14 flex flex-wrap gap-2 border-t border-border pt-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-mono text-[11px] tracking-[0.18em] uppercase px-3 py-2 border transition-colors ${
                  filter === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground"
                }`}
              >
                {c}
              </button>
            ))}
            <span className="ml-auto self-end font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground tabular">
              {visible.length} / {projects.length}
            </span>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ol className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
            {visible.map((p, i) => (
              <li
                key={p.id}
                className="bg-card p-7 md:p-9 flex flex-col group hover:bg-surface transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted-foreground tabular">
                    / {String(i + 1).padStart(2, "0")} · {p.category}
                  </span>
                  {p.featured && (
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent border border-accent/40 px-2 py-1">
                      Featured
                    </span>
                  )}
                </div>

                <h2 className="font-display text-3xl md:text-[2.4rem] leading-[1.05] tracking-tight mb-4 group-hover:text-accent transition-colors">
                  {p.title}
                </h2>

                {p.timeline && (
                  <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground tabular mb-3">
                    {p.timeline}
                  </span>
                )}

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {p.description}
                </p>

                {p.achievements && p.achievements.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 font-mono text-[10.5px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
                      <TrendingUp className="h-3.5 w-3.5 text-accent" />
                      Highlights
                    </div>
                    <ul className="space-y-2">
                      {p.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex items-baseline gap-3 text-sm text-foreground/80"
                        >
                          <span className="font-mono text-[10px] text-accent shrink-0 tabular pt-1">
                            +
                          </span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {p.impact && (
                  <div className="mb-6 border-l-2 border-accent pl-4 py-1">
                    <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-accent mb-1">
                      Impact
                    </div>
                    <p className="text-sm text-foreground/80">{p.impact}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <a
                  href="https://github.com/afzalkhanlala1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group/cta inline-flex items-center justify-between border-t border-border pt-5 font-mono text-[11px] tracking-[0.18em] uppercase hover:text-accent transition-colors"
                >
                  Source / details
                  <ArrowUpRight className="h-4 w-4 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5 transition-transform" />
                </a>
              </li>
            ))}
          </ol>

          {/* CTA */}
          <div className="mt-20 grid grid-cols-12 gap-x-6 lg:gap-x-10 items-center bg-surface border border-border p-10 md:p-14">
            <div className="col-span-12 md:col-span-8">
              <div className="section-eyebrow mb-4">Next step</div>
              <h3 className="font-display text-3xl md:text-[2.6rem] leading-tight tracking-tight max-w-[28ch]">
                Like what you see? Let's talk through your{" "}
                <em className="text-accent not-italic">next system</em>.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 mt-8 md:mt-0">
              <button
                onClick={() =>
                  (window.location.href = `${import.meta.env.BASE_URL}#contact`)
                }
                className="btn-ink"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <a
                href={`${import.meta.env.BASE_URL}Afzal_Khans_Resume.pdf`}
                download
                className="btn-ghost-ink"
              >
                Download résumé
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
