import { AudioLines, Bot, Database, Workflow } from "lucide-react";

const PILLARS = [
  {
    icon: Bot,
    title: "RAG & Retrieval",
    body: "Indexing, chunking, embeddings — PostgreSQL vector stores with LlamaIndex, tuned for sub-second answers in production chat.",
  },
  {
    icon: Workflow,
    title: "Agentic Workflows",
    body: "Multi-step agents, MCP servers and tool-calling pipelines orchestrated with n8n, Google ADK and FastAPI backends.",
  },
  {
    icon: Database,
    title: "AI-Ready Data",
    body: "12+ OAuth/RBAC connectors across Snowflake, Databricks, AWS and Azure; auditing, cleaning and ETL automation for reliable ingestion.",
  },
  {
    icon: AudioLines,
    title: "Voice & Edge",
    body: "Multimodal voice agents (voice → ASR → embeddings → agent), local SLMs for private retrieval, and TensorRT-tuned inference on Jetson Orin.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-surface rule-bottom">
      <div className="container">
        {/* Section head */}
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mb-16 md:mb-24" data-reveal>
          <div className="col-span-12 md:col-span-3">
            <div className="section-eyebrow">02 / About</div>
          </div>
          <h2 className="col-span-12 md:col-span-9 section-title">
            An engineer who ships systems —
            <span className="italic text-accent"> not just demos.</span>
          </h2>
        </div>

        {/* Two-col editorial */}
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 gap-y-12">
          <div className="col-span-12 lg:col-span-7 space-y-6" data-reveal>
            <p className="font-display text-2xl md:text-[26px] leading-[1.35] max-w-[42ch]">
              I'm <em className="text-accent not-italic">Afzal Khan</em>, an AI
              workflow &amp; data engineer with 4+ years building production
              RAG chatbots, multi-step agentic workflows, and clean data
              pipelines on Databricks and Snowflake.
            </p>
            <p className="text-muted-foreground max-w-[58ch] leading-relaxed">
              At ClaimbAI I built a customer-support chatbot with complex RAG —
              indexing, chunking, embeddings — backed by a PostgreSQL vector
              store and LlamaIndex for sub-second retrieval. I maintain 12+
              secure connectors (Snowflake, Databricks, AWS, Azure, GitHub,
              Slack) with OAuth/RBAC, and I've designed multimodal voice agents
              plus a local SLM for on-prem, private knowledge retrieval.
            </p>
            <p className="text-muted-foreground max-w-[58ch] leading-relaxed">
              Before that, I shipped real-time computer-vision stacks on Jetson
              Orin — YOLOv9–v11 tuned with TensorRT — transformed a 200M-row
              dataset into a 3NF warehouse with star-schema semantic layers,
              and cut Pepsi's KSA/UAE refresh cycle by 57%. I use AI-native
              tools (Cursor, Claude) daily and work comfortably on US Eastern
              hours.
            </p>

            {/* signature block */}
            <div className="pt-6 mt-6 rule">
              <div className="flex items-end justify-between">
                <span className="font-display italic text-3xl text-foreground/80">
                  ~ A. Khan
                </span>
                <div className="text-right font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted-foreground">
                  Mechatronics, NUST
                  <br />
                  MIT MicroMasters · Statistics & DS
                </div>
              </div>
            </div>
          </div>

          {/* Pillar grid */}
          <div className="col-span-12 lg:col-span-5" data-reveal data-reveal-delay="120">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-px bg-border border border-border">
              {PILLARS.map((p, i) => (
                <li
                  key={p.title}
                  className="bg-card p-6 group transition-colors hover:bg-accent-soft/40"
                >
                  <div className="flex items-center justify-between mb-6">
                    <p.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                    <span className="font-mono text-[10.5px] tracking-[0.18em] text-muted-foreground tabular">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-2 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
