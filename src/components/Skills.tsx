import { Bot, Brain, Cloud, Database, Gauge, Plug, Target, Zap } from "lucide-react";

const CATEGORIES = [
  {
    icon: Target,
    title: "Post-Training & RL",
    skills: ["RLVR", "GRPO", "PPO", "Preference Pairs", "Reward-Model Training", "Reward Shaping", "TRL", "Credit Assignment"],
  },
  {
    icon: Gauge,
    title: "Evaluation",
    skills: ["Rubric Design", "Partial Credit", "Gold Solutions", "Held-Out Sets", "Contamination Avoidance", "Trajectory Inspection", "Difficulty Calibration"],
  },
  {
    icon: Bot,
    title: "Agentic Systems",
    skills: ["Tool Calling", "Multi-Turn Rollouts", "Persistent State", "MCP Servers", "Google ADK", "n8n", "Cursor / Claude Code"],
  },
  {
    icon: Cloud,
    title: "Infra & DevOps",
    skills: ["Kubernetes", "Docker", "CI/CD", "AWS", "Azure", "GCP", "Vercel", "Modal", "GPU Scheduling"],
  },
  {
    icon: Brain,
    title: "Training Stack",
    skills: ["PyTorch", "Hugging Face", "vLLM", "Transformers", "MLflow", "Checkpointing", "Dataset Versioning"],
  },
  {
    icon: Plug,
    title: "APIs & Serving",
    skills: ["FastAPI / REST", "OpenAI", "Anthropic", "Gemini", "OAuth / RBAC Connectors", "Webhooks", "Redis"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: ["SQL / Python", "PostgreSQL + pgvector", "Snowflake", "Databricks", "ETL Automation", "3NF / Dimensional Modeling"],
  },
  {
    icon: Zap,
    title: "Edge & Optimization",
    skills: ["TensorRT", "ONNX", "Quantization & Pruning", "Jetson Orin (aarch64)", "YOLO v9–v11", "Real-time Inference"],
  },
];

const LANGUAGES = [
  "Python", "SQL", "C++", "TypeScript", "Node.js", "React",
  "Bash", "Git", "pytest", "Linux", "Qt",
];

const CERTIFICATIONS = [
  "MIT MicroMasters · Statistics & Data Science",
  "Independent research · mathematical logic & set theory",
  "CS50 — Harvard",
  "Google Data Analytics Certificate",
  "Advanced SQL · Udacity",
  "McKinsey Forward Program",
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
