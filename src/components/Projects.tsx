import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects, projects as allProjects } from "@/data/projects";

const Projects = () => {
  const featured = getFeaturedProjects();
  const recent = allProjects.filter((p) => !p.featured).slice(0, 4);
  const list = [...featured, ...recent];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-28 md:py-36 rule-bottom">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <div className="section-eyebrow">03 / Selected Work</div>
          </div>
          <div className="col-span-12 md:col-span-9 flex flex-col gap-6">
            <h2 className="section-title">
              A working <em className="text-accent">archive</em>
              <br />
              of shipped systems.
            </h2>
            <p className="font-mono text-[12.5px] tracking-[0.04em] text-muted-foreground max-w-[52ch]">
              Production AI agents, RAG infrastructure, computer-vision
              pipelines and data warehouses — each entry pulled from a
              real-world deployment.
            </p>
          </div>
        </div>

        {/* List */}
        <ol
          className="border-t border-border"
          onMouseLeave={() => setHovered(null)}
        >
          {list.map((p, i) => (
            <li key={p.id}>
              <a
                href="https://github.com/afzalkhanlala1"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(i)}
                className={`row-link grid grid-cols-12 gap-x-6 items-baseline py-7 md:py-8 transition-opacity duration-300
                  ${hovered !== null && hovered !== i ? "opacity-40" : "opacity-100"}`}
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[11px] tracking-[0.2em] text-muted-foreground tabular pt-1">
                  / {String(i + 1).padStart(2, "0")}
                </span>

                <div className="col-span-10 md:col-span-7 flex flex-col gap-2">
                  <h3 className="font-display text-3xl md:text-[2.6rem] leading-[1.05] tracking-tight transition-colors">
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-[length:0%_1px] bg-left-bottom transition-[background-size] duration-700 group-hover:bg-[length:100%_1px]">
                      {p.title}
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-[60ch] leading-relaxed">
                    {p.summary}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.slice(0, 5).map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 5 && (
                      <span className="tag">+{p.tech.length - 5}</span>
                    )}
                  </div>
                </div>

                <div className="hidden md:flex col-span-3 flex-col gap-1 pt-1">
                  <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted-foreground">
                    Category
                  </span>
                  <span className="font-mono text-[12px] tracking-[0.04em] text-foreground">
                    {p.category}
                  </span>
                  {p.timeline && (
                    <>
                      <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted-foreground mt-3">
                        Timeline
                      </span>
                      <span className="font-mono text-[12px] tabular text-foreground">
                        {p.timeline}
                      </span>
                    </>
                  )}
                </div>

                <div className="col-span-12 md:col-span-1 flex justify-end pt-2 md:pt-1">
                  <ArrowUpRight
                    className="row-arrow h-5 w-5 text-foreground"
                    strokeWidth={1.5}
                  />
                </div>
              </a>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <div className="mt-14 md:mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="font-display text-2xl md:text-3xl max-w-[40ch] leading-snug">
            More projects sit in the archive — research agents, chatbots,
            transfer-learning experiments.
          </p>
          <button
            onClick={() =>
              (window.location.href = `${import.meta.env.BASE_URL}projects`)
            }
            className="btn-ink self-start sm:self-auto"
          >
            Open the archive
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
