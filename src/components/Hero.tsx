import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

const MARQUEE_ITEMS = [
  "Agent Systems",
  "RAG Pipelines",
  "Edge Inference",
  "TensorRT",
  "LangChain",
  "Google ADK",
  "Multi-Agent Orchestration",
  "Vector Search",
  "Jetson Orin",
  "FastAPI",
  "Cloud Run",
  "n8n Automation",
];

const Hero = () => {
  const scrollTo = (sel: string) =>
    document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] pt-28 md:pt-36 pb-12 overflow-hidden"
    >
      {/* faint grid backdrop */}
      <div className="absolute inset-0 grid-backdrop opacity-50 pointer-events-none" />

      <div className="container relative">
        {/* meta strip */}
        <div className="flex items-center justify-between rule-bottom pb-4 mb-12 md:mb-20 reveal" style={{ animationDelay: "60ms" }}>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full bg-accent pulse-soft" />
            </span>
            Available · Q3 2026
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            <MapPin className="h-3 w-3" />
            Islamabad / Remote
          </div>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            Vol. 03 · Portfolio
          </div>
        </div>

        {/* main editorial block */}
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 gap-y-10">
          {/* Left: pre-title */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 reveal" style={{ animationDelay: "120ms" }}>
            <span className="section-eyebrow">Afzal Khan</span>
            <p className="font-mono text-[12px] leading-relaxed text-muted-foreground max-w-[28ch]">
              AI engineer building agent-first systems, RAG infrastructure and
              edge-optimized ML — currently shipping at{" "}
              <span className="text-foreground">ClaimbAI</span>.
            </p>
          </div>

          {/* Right: huge type */}
          <h1
            className="col-span-12 lg:col-span-9 font-display tracking-tight leading-[0.92] reveal"
            style={{ animationDelay: "200ms" }}
          >
            <span className="block text-[clamp(3.25rem,11vw,10rem)]">
              Agents,
            </span>
            <span className="block text-[clamp(3.25rem,11vw,10rem)]">
              <em className="not-italic text-accent">retrieval</em>,
            </span>
            <span className="block text-[clamp(3.25rem,11vw,10rem)] italic">
              & the messy edge
            </span>
            <span className="block text-[clamp(3.25rem,11vw,10rem)]">
              of production AI.
            </span>
          </h1>
        </div>

        {/* lower row */}
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mt-16 md:mt-24">
          {/* Portrait + identity card */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4 reveal" style={{ animationDelay: "320ms" }}>
            <figure className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden bg-surface-2 border border-border">
                <img
                  src={`${import.meta.env.BASE_URL}afzal-photo.jpg`}
                  alt="Afzal Khan portrait"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-[filter] duration-700 ease-out"
                  loading="eager"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-foreground">
                <span>Fig. 01 — A. Khan</span>
                <span className="tabular">2026 / ENG</span>
              </figcaption>
            </figure>
          </div>

          {/* Bio + CTAs + stats */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col justify-between gap-12">
            <div className="reveal" style={{ animationDelay: "400ms" }}>
              <div className="section-eyebrow mb-5">Brief</div>
              <p className="font-display text-2xl md:text-[28px] lg:text-[34px] leading-[1.18] tracking-[-0.01em] max-w-[36ch]">
                I design and ship production AI — from secure agent connectors
                and RAG backends, to TensorRT-tuned inference on Jetson Orin.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("#projects")}
                  className="btn-ink"
                >
                  View Selected Work
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <a
                  href={`${import.meta.env.BASE_URL}Afzal_Khan_Resume.pdf`}
                  download
                  className="btn-ghost-ink"
                >
                  Download Résumé
                </a>
              </div>
            </div>

            {/* Stat ledger */}
            <div className="grid grid-cols-2 sm:grid-cols-4 rule reveal" style={{ animationDelay: "520ms" }}>
              {[
                { k: "Years building", v: "3+", note: "shipped systems" },
                { k: "Rows transformed", v: "200M", note: "to 3NF DW" },
                { k: "Inference uplift", v: "+30%", note: "TensorRT tuning" },
                { k: "Refresh cycles cut", v: "57%", note: "Pepsi KSA/UAE" },
              ].map((s, i) => (
                <div
                  key={s.k}
                  className={`py-6 pr-4 ${i !== 0 ? "sm:border-l border-border" : ""}`}
                >
                  <div className="font-display text-4xl md:text-5xl tabular leading-none">
                    {s.v}
                  </div>
                  <div className="mt-2 font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-foreground">
                    {s.k}
                  </div>
                  <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-foreground/50 mt-0.5">
                    {s.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 md:mt-28 py-5 border-y border-border bg-surface/50">
        <div className="marquee">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="font-display italic text-2xl md:text-3xl whitespace-nowrap text-foreground/70"
              >
                {item}
                <span className="text-accent mx-6">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="container mt-10 flex items-center justify-between font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
        <button
          onClick={() => scrollTo("#about")}
          className="group inline-flex items-center gap-2 hover:text-accent transition-colors"
        >
          <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
          Scroll
        </button>
        <span className="hidden sm:inline tabular">[ 01 — Index ]</span>
      </div>
    </section>
  );
};

export default Hero;
