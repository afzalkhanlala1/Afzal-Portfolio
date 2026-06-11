export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  category: string;
  featured: boolean;
  achievements?: string[];
  timeline?: string;
  impact?: string;
}

export const projects: Project[] = [
  {
    id: "claimbai-rag-chatbot",
    title: "Production RAG Customer-Support Chatbot",
    summary: "Complex RAG (indexing, chunking, embeddings) over a PostgreSQL vector store + LlamaIndex, serving real-time answers with sub-second retrieval.",
    description: "Built and shipped the core AI of ClaimbAI's customer-support product: a RAG chatbot using Google LLMs via BitNet, with a carefully tuned ingestion pipeline — document indexing, semantic chunking, and embedding strategies that materially improved retrieval relevance and latency. Delivered the full loop: vector store architecture, automated data pipelines, FastAPI backends, and clean chat-widget frontends (popup bubbles and text cards).",
    tech: ["RAG", "LlamaIndex", "PostgreSQL + pgvector", "BitNet", "Google LLMs", "FastAPI", "CI/CD", "Chat Widgets"],
    category: "RAG & Retrieval",
    featured: true,
    achievements: [
      "Sub-second retrieval across production knowledge bases",
      "Improved retrieval relevance via chunking + embedding tuning",
      "~70% reduction in manual support work through automation",
      "Chat-widget frontends shipped alongside the backend",
      "CI/CD pipeline cut rollback incidents ~40%",
    ],
    timeline: "Jul 2025 – Present",
    impact: "Real-time, accurate answers in production — not a demo",
  },
  {
    id: "secure-data-connectors",
    title: "12+ Secure Connectors for AI-Ready Data",
    summary: "OAuth/RBAC connectors across Snowflake, Databricks, AWS, Azure, GitHub and Slack — cleaning and organizing tables for reliable RAG ingestion.",
    description: "Designed, built and maintain the data-ingestion backbone for an AI platform: 12+ secure connectors with OAuth and role-based access control, moving data safely between enterprise platforms. Beyond plumbing, the work includes auditing, cleaning and reorganizing source tables so they're genuinely AI-ready — reliable inputs for vectorization and RAG pipelines rather than garbage-in, garbage-out.",
    tech: ["OAuth / RBAC", "Snowflake", "Databricks", "AWS", "Azure", "GitHub", "Slack", "ETL Automation", "Python"],
    category: "Data Engineering",
    featured: true,
    achievements: [
      "12+ production connectors with secure OAuth flows",
      "RBAC enforcement on every data path",
      "Data auditing + cleaning for reliable vectorization",
      "Automated pipelines feeding downstream RAG systems",
    ],
    timeline: "2025 – Present",
    impact: "Enterprise data made safely consumable by AI systems",
  },
  {
    id: "voice-agent-pipeline",
    title: "Multimodal Voice Agents & Local SLM",
    summary: "Voice → ASR → embeddings → agent pipelines, plus a local small language model for on-prem knowledge and private retrieval.",
    description: "Designed multimodal voice agents that take raw speech through ASR, embedding and agent-reasoning stages to produce grounded, actionable responses. Paired with a locally hosted SLM so sensitive knowledge never leaves the premises — private retrieval for organizations that can't ship data to a cloud LLM.",
    tech: ["Voice Agents", "Whisper / ASR", "Embeddings", "Local SLM", "Ollama", "Agent Workflows", "Python"],
    category: "Agent Systems",
    featured: true,
    achievements: [
      "End-to-end voice → ASR → embeddings → agent pipeline",
      "Local SLM deployment for on-prem private retrieval",
      "Multimodal input handling in production workflows",
    ],
    timeline: "2025 – Present",
    impact: "Voice-first AI with privacy-preserving local inference",
  },
  {
    id: "real-time-tracking-system",
    title: "Real-Time Multi-Object Tracking on Jetson Orin",
    summary: "Production tracking with YOLOv9–v11, GOTURN, CSRT and SAMURAI — TensorRT-optimized inference on NVIDIA Jetson Orin (aarch64).",
    description: "Engineered a high-performance computer-vision pipeline for industrial deployment: multiple tracking algorithms fused with GPU acceleration and ARM64 tuning for real-time performance on embedded hardware. Optimized via TensorRT, pruning and quantization, with C++/Qt dashboards (40+ screens) surfacing live telemetry.",
    tech: ["YOLOv9–v11", "GOTURN", "CSRT", "SAMURAI", "TensorRT", "ONNX", "C++", "Qt", "Jetson Orin", "ARM64"],
    category: "Computer Vision",
    featured: true,
    achievements: [
      "~30% inference throughput uplift via TensorRT + quantization",
      "25% reduction in false positives",
      "40+ screen C++/Qt telemetry dashboards — debugging time down 90%",
      "System integration across firmware and compute nodes; uptime up 95%",
    ],
    timeline: "Jan 2025 – Oct 2025",
    impact: "Real-time precision tracking on power-constrained edge hardware",
  },
  {
    id: "ai-agent-ecosystem",
    title: "AI Agent Ecosystem for Business Automation",
    summary: "Multi-agent automation across Sales, HR, Marketing and Engineering — a central controller orchestrating 10–15 specialized agents per department.",
    description: "Architected a department-spanning multi-agent system where a central controller routes work to 10–15 specialized agents per department. Each agent owns a narrow, well-defined task — lead triage, candidate screening, content drafting, ticket routing — with the controller handling orchestration, hand-offs and escalation to humans.",
    tech: ["Multi-Agent Systems", "Orchestration", "n8n", "LangChain", "RAG", "Workflow Automation", "Node.js"],
    category: "Agent Systems",
    featured: false,
    achievements: [
      "Central controller orchestrating 40+ agents across 4 departments",
      "~60% reduction in repetitive manual workload",
      "RAG-powered knowledge retrieval per department",
      "Human-in-the-loop escalation paths",
    ],
    impact: "~60% of repetitive work automated across departments",
  },
  {
    id: "claude-mcp-client",
    title: "Claude Desktop MCP Client",
    summary: "Local Model Context Protocol client giving Claude Desktop safe read/write/delete access to files on the local machine.",
    description: "Built a local MCP (Model Context Protocol) client for Claude Desktop — the open standard now used across AI tooling for connecting models to external systems. The client exposes controlled file-system operations (add, remove, read) so the model can act on local files without uncontrolled access.",
    tech: ["MCP", "Claude Desktop", "TypeScript", "Local Tooling", "File System APIs"],
    category: "AI Tooling",
    featured: false,
    achievements: [
      "Implements the MCP spec for local file operations",
      "Scoped, permissioned access — no blanket file-system exposure",
      "Daily-driver tooling for AI-native development",
    ],
    impact: "Hands-on with the protocol powering the current agent-tooling wave",
  },
  {
    id: "personal-assistant-agent",
    title: "Personal Assistant AI Agent",
    summary: "OpenAI + n8n assistant managing calendars, Gmail, Telegram, WhatsApp and day-to-day tasks through one conversational interface.",
    description: "Developed a personal assistant agent wired into real life: calendar management, email triage and drafting in Gmail, and messaging across Telegram and WhatsApp — all orchestrated with n8n workflows and OpenAI's API, with webhook-based integrations keeping everything in sync.",
    tech: ["OpenAI API", "n8n", "Gmail API", "Telegram", "WhatsApp", "Webhooks", "Calendar APIs"],
    category: "Agent Systems",
    featured: false,
    achievements: [
      "Single conversational interface across 5+ services",
      "Webhook-driven, event-based automation",
      "Email triage and calendar scheduling without manual input",
    ],
    impact: "A working agent handling real personal logistics daily",
  },
  {
    id: "local-research-agent",
    title: "Local Research AI Agent",
    summary: "Fully local research agent — n8n + Ollama + SERP API with a PostgreSQL vector DB for knowledge retrieval and persistent memory.",
    description: "Built a local-only research agent that searches the web via SERP API, reasons with locally hosted models through Ollama, and stores everything it learns in a PostgreSQL vector database — giving it persistent memory across sessions while keeping all data on-machine.",
    tech: ["Ollama", "n8n", "SERP API", "PostgreSQL + pgvector", "Local LLMs", "Persistent Memory"],
    category: "Agent Systems",
    featured: false,
    achievements: [
      "100% local inference — no data leaves the machine",
      "Persistent vector-DB memory across research sessions",
      "Automated search → synthesize → store loop",
    ],
    impact: "Private, repeatable research automation",
  },
  {
    id: "data-warehouse-transformation",
    title: "Enterprise Data Warehouse (200M Rows)",
    summary: "Converted a 200M-row dataset across ~200 tables into a normalized 3NF warehouse with star-schema semantic layers for analytics and forecasting.",
    description: "Led a major data transformation: untangling ~200 source tables into a clean 3NF data warehouse, then building star-schema semantic layers on top for analytics and forecasting. Automated ETL with AWS Glue + SQL so dashboards refresh without manual intervention.",
    tech: ["SQL", "AWS Glue", "ETL", "3NF Modeling", "Star Schema", "Data Warehousing", "Forecasting"],
    category: "Data Engineering",
    featured: false,
    achievements: [
      "200M rows / ~200 tables normalized to 3NF",
      "Star-schema semantic layers for analytics & forecasting",
      "Automated ETL — manual interventions cut by 4 hours",
      "Faster dashboard refresh for downstream teams",
    ],
    timeline: "Jul 2024 – Dec 2024",
    impact: "One clean warehouse where 200 messy tables used to be",
  },
  {
    id: "pepsi-automation-project",
    title: "Pepsi KSA & UAE Analytics Automation",
    summary: "Cut the analytics refresh cycle from 1 week to 3 days (57%) and required team size from 6 to 2 through query tuning and scripting.",
    description: "Re-engineered the analytics workflow behind Pepsi's KSA and UAE reporting: query optimization, refresh-pipeline automation and custom scripting that removed most of the manual steps from a week-long cycle.",
    tech: ["Tableau", "SQL", "Query Optimization", "Pipeline Automation", "Scripting"],
    category: "Analytics",
    featured: false,
    achievements: [
      "Refresh cycle: 1 week → 3 days (57% reduction)",
      "Team requirement: 6 people → 2",
      "Automated refresh pipelines replacing manual reporting",
    ],
    timeline: "Aug 2023 – Jul 2024",
    impact: "Same insight, half the time, a third of the team",
  },
  {
    id: "sports-analytics-platform",
    title: "Sports Performance Analytics Platform",
    summary: "Predictive models for player positioning and performance, with interactive dashboards used by coaching staff.",
    description: "Architected and deployed predictive models for player positioning and performance metrics, paired with interactive dashboards that coaching staff actually used in their weekly cycle — cutting match-analysis time by 45% and informing tactical decisions with data.",
    tech: ["OpenCV", "PyTorch", "Predictive Modeling", "Computer Vision", "React", "Dashboards"],
    category: "Computer Vision",
    featured: false,
    achievements: [
      "45% reduction in match-analysis time",
      "Player positioning + performance prediction models",
      "Interactive dashboards adopted by coaching staff",
    ],
    impact: "Tactical decisions backed by data, not just film review",
  },
  {
    id: "adaptive-language-learning",
    title: "Adaptive Language Learning Web App",
    summary: "Firebase + Gemini API — LLM-curated lessons, conversational practice and progress tracking that adapts to the learner.",
    description: "Created a language-learning platform where the curriculum isn't fixed: Gemini curates lessons based on each learner's progress, conversational practice sessions adapt in difficulty, and progress tracking closes the loop on what to teach next.",
    tech: ["Firebase", "Gemini API", "React", "LLM Curation", "Conversational AI"],
    category: "AI Application",
    featured: false,
    achievements: [
      "LLM-curated, per-learner lesson plans",
      "Conversational practice with adaptive difficulty",
      "Full progress-tracking feedback loop",
    ],
    impact: "A curriculum that rewrites itself around the learner",
  },
  {
    id: "face-recognition-software",
    title: "Face Recognition Pipeline",
    summary: "Transfer learning on AlexNet (MATLAB) — 92% classification accuracy on a custom dataset of 10,000+ images.",
    description: "Developed a high-performance facial-recognition pipeline using transfer learning on AlexNet, achieving 92% classification accuracy on a custom 10,000+ image dataset. Optimized batch inference to lift throughput by 35%.",
    tech: ["MATLAB", "Transfer Learning", "AlexNet", "Deep Learning", "Batch Inference"],
    category: "Computer Vision",
    featured: false,
    achievements: [
      "92% classification accuracy on 10,000+ custom images",
      "35% batch-inference throughput improvement",
      "Robust performance across lighting conditions",
    ],
    impact: "Reliable identification at production-relevant accuracy",
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id: string) => projects.find(p => p.id === id);
