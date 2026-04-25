const EXPERIENCES = [
  {
    company: "ClaimbAI",
    position: "AI Engineer",
    location: "California, USA · Remote",
    period: "Jul 2025 — Present",
    description:
      "Architected & shipped an agent-first ecosystem with Google ADK, n8n, Firebase Functions, and Cloud Run powering web, iOS and Android frontends.",
    highlights: [
      "Built secure connectors for Gmail, Calendar, Drive and task systems for agent access to user resources",
      "Designed RAG and SLM workflows with Postgres vector stores and LlamaIndex-style patterns",
      "Implemented production REST/FastAPI backends with CI/CD pipelines and monitoring",
      "Collaborated with product, mobile, and security teams on privacy-preserving connectors",
    ],
    current: true,
  },
  {
    company: "COMCEPT",
    position: "Software Engineer",
    location: "Islamabad, PK",
    period: "Jan 2025 — Oct 2025",
    description:
      "Developed real-time computer vision and tracking stacks deployed on NVIDIA Jetson Orin.",
    highlights: [
      "Built YOLOv9–v11, GOTURN, CSRT and SAMURAI tracking systems",
      "Optimized models via TensorRT, pruning and quantization — ~30% inference uplift",
      "Developed C++/Qt visualisation dashboards (40+ screens)",
      "Led system integration across firmware and compute nodes, reducing boot time",
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
      "Directed transformation of 200M-row dataset into a normalized 3NF data warehouse",
      "Built Node.js/React chatbot and automated ETL with AWS Glue",
      "Developed proof-of-concept player tracking system with OpenCV",
      "Managed client relationships and cross-functional teams",
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
      "Automated Pepsi KSA & UAE project — refresh cycle 1 week → 3 days (57%)",
      "Built ML pipelines for transcription and audio analytics (OCR + ASR)",
      "Conducted ETL transforming raw data into 3NF warehouse",
      "Developed dimensional model semantic layers for analytics",
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
      "Automated ETL workflows using SQL and AWS Glue",
      "Built dashboards in Power BI and Tableau with automated reporting",
      "Statistical analyses with pandas, NumPy and scikit-learn",
      "Consulting for data-driven SME strategies",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 md:py-36 bg-surface rule-bottom">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mb-16 md:mb-24">
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
