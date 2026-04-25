import { Bot, Brain, Code, Cpu } from "lucide-react";

const PILLARS = [
  {
    icon: Bot,
    title: "Agent Systems",
    body: "Multi-agent ecosystems with secure connectors, OAuth, and production backends across Cloud Run + Firebase.",
  },
  {
    icon: Brain,
    title: "AI / ML Pipelines",
    body: "RAG, SLM workflows, vector retrieval and LLM orchestration shaped for real-world latency and cost budgets.",
  },
  {
    icon: Code,
    title: "Production Focus",
    body: "FastAPI, CI/CD, monitoring, security review — moving prototypes from notebook to a system on-call.",
  },
  {
    icon: Cpu,
    title: "Edge Optimization",
    body: "TensorRT, quantization, ARM64 multithreading; deploying real-time CV pipelines on Jetson Orin.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-surface rule-bottom">
      <div className="container">
        {/* Section head */}
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mb-16 md:mb-24">
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
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <p className="font-display text-2xl md:text-[26px] leading-[1.35] max-w-[42ch]">
              I'm <em className="text-accent not-italic">Afzal Khan</em>, an AI
              engineer from Islamabad. I design agent-first products,
              production ML backends, and edge-optimised inference pipelines —
              and I sit with them long enough to make them dependable.
            </p>
            <p className="text-muted-foreground max-w-[58ch] leading-relaxed">
              At ClaimbAI I architect a multi-agent ecosystem with Google ADK,
              n8n, FastAPI and Cloud Run, building secure connectors over
              Gmail, Calendar and Drive, plus RAG flows on Postgres + vector
              stores.
            </p>
            <p className="text-muted-foreground max-w-[58ch] leading-relaxed">
              Before that, I shipped real-time computer-vision stacks on
              Jetson Orin — YOLOv9–v11, GOTURN, CSRT, SAMURAI — tuned with
              TensorRT and Qt visual dashboards for industrial use. I've
              transformed 200M-row datasets into 3NF warehouses, cut Pepsi's
              KSA/UAE refresh cycle by 57%, and kept the bill of complexity
              down while doing it.
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
                  MIT MicroMasters · in progress
                </div>
              </div>
            </div>
          </div>

          {/* Pillar grid */}
          <div className="col-span-12 lg:col-span-5">
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
