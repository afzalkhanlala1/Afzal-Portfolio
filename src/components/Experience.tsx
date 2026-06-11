const EXPERIENCES = [
  {
    company: "ClaimbAI",
    position: "AI Engineer",
    location: "California, USA · Remote",
    period: "Jul 2025 — Present",
    description:
      "Building production RAG, agentic workflows and secure data ingestion for an AI-native customer-support platform.",
    highlights: [
      "Built a customer-support chatbot with complex RAG (indexing, chunking, embeddings) using Google LLMs via BitNet",
      "Built and maintain 12+ secure connectors (Snowflake, Databricks, AWS, Azure, GitHub, Slack) with OAuth/RBAC",
      "Designed multimodal voice agents (voice → ASR → embeddings → agent) plus a local SLM for private retrieval",
      "Architected PostgreSQL vector store + LlamaIndex RAG infrastructure — sub-second retrieval, ~70% less manual work",
      "Shipped chat widget frontends and FastAPI REST APIs with CI/CD — cut rollback incidents ~40%",
    ],
    current: true,
  },
  {
    company: "COMCEPT",
    position: "Software Engineer",
    location: "Islamabad, PK",
    period: "Jan 2025 — Oct 2025",
    description:
      "Developed real-time computer vision and multi-object tracking stacks deployed on NVIDIA Jetson Orin.",
    highlights: [
      "Built YOLOv9–v11, GOTURN, CSRT and SAMURAI tracking systems",
      "Optimized models via TensorRT, pruning and quantization — ~30% inference uplift, 25% fewer false positives",
      "Developed C++/Qt visualisation dashboards (40+ screens) — reduced debugging time by 90%",
      "Led integration across firmware and Radxa/Armbian compute nodes — increased uptime by 95%",
    ],
  },
  {
    company: "AIGENIUS",
    position: "Chief Operating Officer",
    location: "Islamabad, PK",
    period: "Jul 2024 — Dec 2024",
    description:
      "Led operations, recruitment and growth while contributing hands-on technical work.",
    highlights: [
      "Converted a 200M-row dataset (~200 tables) into a normalized 3NF warehouse with star-schema semantic layers",
      "Built a Node.js/React agent chatbot and automated ETL with AWS Glue + SQL",
      "Cut manual ETL interventions by 4 hours through pipeline automation",
      "Delivered player-tracking (OpenCV) PoCs and production scraping pipelines",
    ],
  },
  {
    company: "Convergent Business Technologies",
    position: "Consultant — Analytics & Insights",
    location: "Islamabad, PK",
    period: "Aug 2023 — Jul 2024",
    description:
      "Implemented market-basket analysis, dimensional modelling and dashboarding solutions.",
    highlights: [
      "Automated Pepsi KSA & UAE project — refresh cycle 1 week → 3 days (57%), team size 6 → 2",
      "Built ML pipelines for transcription and audio analytics (OCR + timestamped ASR)",
      "Performed ETL transforming raw sources into 3NF for analytics consumption",
      "Developed dimensional model semantic layers and Tableau dashboards",
    ],
  },
  {
    company: "Upwork",
    position: "Freelance Data Engineer & Developer",
    location: "Remote",
    period: "Aug 2022 — Aug 2023",
    description:
      "Delivered end-to-end analytics and predictive models for telco, healthcare and finance clients.",
    highlights: [
      "Automated ETL workflows using SQL and AWS Glue — improved report freshness by 25%",
      "Built churn, forecasting and inventory-optimization models end to end",
      "Created Power BI / Tableau dashboards with scheduled executive reporting",
      "Statistical analyses with pandas, NumPy and scikit-learn",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 md:py-36 bg-surface rule-bottom">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mb-16 md:mb-24" data-reveal>
          <div className="col-span-12 md:col-span-3">
            <div className="section-eyebrow">04 / Experience</div>
          </div>
          <h2 className="col-span-12 md:col-span-9 section-title">
            A career, in entries —
            <span className="italic text-accent"> reverse chronological.</span>
          </h2>
        </div>

        <ol className="border-t border-border">
          {EXPERIENCES.map((exp, i) => (
            <li
              key={exp.company + exp.period}
              className="grid grid-cols-12 gap-x-6 lg:gap-x-10 py-10 md:py-14 border-b border-border group"
              data-reveal
            >
              {/* Index */}
              <div className="col-span-12 md:col-span-1 font-mono text-[11px] tracking-[0.2em] text-muted-foreground tabular pt-2">
                / {String(EXPERIENCES.length - i).padStart(2, "0")}
              </div>

              {/* Meta */}
              <div className="col-span-12 md:col-span-3 flex flex-col gap-2 mb-4 md:mb-0">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground tabular">
                  {exp.period}
                </span>
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60">
                  {exp.location}
                </span>
                {exp.current && (
                  <span className="inline-flex items-center gap-2 self-start mt-2 px-2 py-1 border border-accent/40 text-accent font-mono text-[10px] tracking-[0.2em] uppercase">
                    <span className="h-1.5 w-1.5 bg-accent pulse-soft" />
                    Present
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-4">
                  <h3 className="font-display text-3xl md:text-[2.4rem] leading-tight tracking-tight">
                    {exp.position}
                    <span className="text-muted-foreground"> · </span>
                    <span className="italic text-accent">{exp.company}</span>
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-[62ch] mb-5">
                  {exp.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-foreground/80 leading-relaxed flex"
                    >
                      <span className="disc shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
