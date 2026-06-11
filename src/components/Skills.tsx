import { AudioLines, Bot, Brain, Cloud, Database, Plug, Zap } from "lucide-react";

const CATEGORIES = [
  {
    icon: Brain,
    title: "LLMs, RAG & Agents",
    skills: ["RAG Pipelines", "LangChain", "LlamaIndex", "Agentic Workflows", "MCP Servers", "Prompt Engineering", "Ollama / Local SLMs", "BitNet"],
  },
  {
    icon: Bot,
    title: "Agent Orchestration",
    skills: ["Google ADK", "n8n", "Multi-Agent Systems", "Tool Calling", "Zapier / Make", "GoHighLevel", "Cursor / Claude Code"],
  },
  {
    icon: AudioLines,
    title: "Voice & Multimodal",
    skills: ["Voice Agents", "Whisper / ASR", "Librosa", "Voice → ASR → Agent Pipelines", "Hugging Face", "Transformers"],
  },
  {
    icon: Plug,
    title: "APIs & Integrations",
    skills: ["OpenAI", "Anthropic", "Gemini", "FastAPI / REST", "OAuth / RBAC Connectors", "Webhooks", "CI/CD"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: ["SQL / Python", "PostgreSQL + pgvector", "Snowflake", "Databricks", "ETL Automation", "Data Auditing & Cleaning", "3NF / Dimensional Modeling"],
  },
  {
    icon: Cloud,
    title: "MLOps & Cloud",
    skills: ["Docker", "Kubernetes", "MLflow", "AWS Glue", "SageMaker", "Cloud Run", "Firebase", "Azure"],
  },
  {
    icon: Zap,
    title: "Edge & Optimization",
    skills: ["TensorRT", "ONNX", "Quantization & Pruning", "Jetson Orin (aarch64)", "YOLO v9–v11", "Real-time Inference"],
  },
  {
    icon: Brain,
    title: "ML & Analytics",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Predictive Analytics", "Tableau", "Power BI"],
  },
];

const LANGUAGES = [
  "Python", "SQL", "C++", "TypeScript", "JavaScript", "Node.js",
  "React", "FastAPI", "Qt", "Bash", "MATLAB",
];

const CERTIFICATIONS = [
  "MIT MicroMasters · Statistics & Data Science",
  "McKinsey Forward Program",
  "Google Data Analytics Certificate",
  "Tableau Data Analysis Certification",
  "Advanced SQL · Udacity",
  "UI / UX Design · CalArts",
  "CS50 — Harvard",
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 md:py-36 rule-bottom">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mb-16 md:mb-24" data-reveal>
          <div className="col-span-12 md:col-span-3">
            <div className="section-eyebrow">05 / Stack</div>
          </div>
          <h2 className="col-span-12 md:col-span-9 section-title">
            Tools I reach for —
            <span className="italic text-accent"> by problem.</span>
          </h2>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border" data-reveal>
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className="bg-card p-7 md:p-8 group"
            >
              <div className="flex items-start justify-between mb-6">
                <cat.icon
                  className="h-5 w-5 text-accent"
                  strokeWidth={1.5}
                />
                <span className="font-mono text-[10.5px] tracking-[0.18em] text-muted-foreground tabular">
                  / {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-2xl mb-5 group-hover:text-accent transition-colors">
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li key={s} className="tag">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Languages + Certs */}
        <div className="mt-20 grid grid-cols-12 gap-x-6 lg:gap-x-10 gap-y-12">
          {/* Languages */}
          <div className="col-span-12 lg:col-span-7" data-reveal>
            <div className="section-eyebrow mb-6">Languages & Frameworks</div>
            <ul className="flex flex-wrap gap-3">
              {LANGUAGES.map((l) => (
                <li
                  key={l}
                  className="font-mono text-[12px] tracking-[0.04em] uppercase border border-border px-3 py-2 hover:border-accent hover:text-accent transition-colors"
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>

          {/* Education + Certs */}
          <div className="col-span-12 lg:col-span-5" data-reveal data-reveal-delay="120">
            <div className="section-eyebrow mb-6">Education & Certifications</div>
            <div className="rule pt-6">
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="font-display text-2xl md:text-[28px] leading-tight">
                  BSc Mechatronics
                </h3>
                <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted-foreground shrink-0">
                  NUST
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                National University of Sciences & Technology
              </p>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((c) => (
                  <li
                    key={c}
                    className="flex items-baseline gap-3 text-sm text-foreground/80"
                  >
                    <span className="font-mono text-[10px] text-accent shrink-0 tabular pt-1">+</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
