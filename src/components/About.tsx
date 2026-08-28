import { Gauge, Layers, Target, Workflow } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Post-Training & RL",
    body: "SFT, preference optimization with GRPO/PPO via TRL, and reward-model training on curated preference pairs — served with vLLM.",
  },
  {
    icon: Layers,
    title: "Reward & Verifier Design",
    body: "Milestone rewards for long tool-use trajectories, so partial progress earns credit instead of collapsing into one terminal pass/fail signal.",
  },
  {
    icon: Gauge,
    title: "Evaluation Infrastructure",
    body: "A from-scratch eval platform: task definitions, gold solutions, rubric-based partial credit, held-out splits and per-run trajectory inspection.",
  },
  {
    icon: Workflow,
    title: "Platform & Infra",
    body: "Kubernetes, Docker and CI/CD across AWS, Azure, GCP and Vercel — GPU scheduling, resumable checkpointed jobs, and LLMOps monitoring.",
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
            <span className="italic text-accent"> and the evals that judge them.</span>
          </h2>
        </div>

        {/* Two-col editorial */}
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 gap-y-12">
          <div className="col-span-12 lg:col-span-7 space-y-6" data-reveal>
            <p className="font-display text-2xl md:text-[26px] leading-[1.35] max-w-[42ch]">
              I'm <em className="text-accent not-italic">Afzal Khan</em>, an AI
              engineer with 4+ years across ML engineering, post-training and
              the production infrastructure that keeps both honest.
            </p>
            <p className="text-muted-foreground max-w-[58ch] leading-relaxed">
              At ClaimbAI I own the full post-training loop for an in-house
              SLM: supervised fine-tuning, preference-based optimization with
              GRPO and PPO through Hugging Face TRL, and reward-model training
              on curated preference pairs. I designed the verifiers and reward
              shaping for multi-step tool-use trajectories — decomposing long
              tasks into milestone checks so sparse terminal rewards don't
              destroy credit assignment — and built the evaluation platform
              that grades the whole thing.
            </p>
            <p className="text-muted-foreground max-w-[58ch] leading-relaxed">
              The last year has been as much platform as research: Kubernetes,
              Docker and CI/CD across AWS, Azure, GCP and Vercel, GPU
              scheduling for training and serving, and PostgreSQL/Redis-backed
              job state so long runs resume instead of restarting. Before that
              I shipped real-time computer-vision stacks on Jetson Orin —
              YOLOv9–v11 tuned with TensorRT — and normalized a 200M-row
              dataset into a 3NF warehouse. I work comfortably on US Eastern
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
                  MIT MicroMasters · Statistics &amp; DS
                  <br />
                  Mathematical logic · set theory
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
