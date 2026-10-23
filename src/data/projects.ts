export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  category: string;
  featured: boolean;
  status: string;
  role: string;
  achievements: string[];
  note?: string;
  image?: string;
  imageAlt?: string;
  timeline?: string;
  impact?: string;
}
export const projects: Project[] = [
  {
    id: 'ai-eval-platform', title: 'AI Evaluation Platform', category: 'AI & agents', featured: true,
    status: 'Professional work', role: 'Evaluation design & engineering',
    summary: 'A better model needs a better way to measure it.',
    description: 'Built an internal evaluation platform from scratch at ClaimbAI, connecting task definitions and gold solutions to weighted rubrics, held-out evaluations and checkpoint comparisons. The focus is on understanding how an agent arrived at an answer, including partial progress, failed tool calls and shortcuts through the scoring system.',
    tech: ['Python', 'Rubric design', 'Formal verifiers', 'Trajectory analysis'],
    achievements: ['Pluggable tasks and environments with authored gold solutions.', 'Weighted partial-credit scoring and held-out task splits.', 'Multi-step trajectory inspection and checkpoint regression checks.', 'Failure-mode analysis to identify shortcut strategies and metric gaming.'],
    note: 'Internal engineering work. Implementation and evaluation data are not publicly distributed.'
  },
  {
    id: 'quanta', title: 'Quanta', category: 'Products', featured: true, status: 'Evaluation release', role: 'Solo product & engine engineering',
    summary: 'Claims valuation, with the working shown.',
    description: 'A deterministic claims engine that turns structured facts into traceable calculations and associated documents. The project spans a UK workflow and a newer bilingual Japan evaluation workspace with evidence intake, versioned public-rule calculations, human review and PDF exports.',
    tech: ['Python', 'Next.js', 'TypeScript', 'Rule engines', 'PDF generation'],
    image: 'quanta.webp', imageAlt: 'Quanta demonstration workspace showing insurance policies and claims',
    achievements: ['Deterministic calculations with explicit provenance and versioned rules.', 'English/Japanese intake, document extraction and bilingual PDF exports.', 'Human review and isolated local sessions in the Japan release.', 'Structured claim facts and document drafting in the UK workflow.'],
    note: 'An evaluation product: UK legal figures are fixtures; the Japan release uses public-rule sources and fictional sample cases. Paid comparables and enterprise integrations remain future work.'
  },
  {
    id: 'grip-intelligence', title: 'Grip Intelligence', category: 'Vision & robotics', featured: true, status: 'Product development', role: 'Computer vision & full-stack engineering',
    summary: 'From a swing video to feedback you can act on.',
    description: 'A golf coaching product that combines pose estimation, swing-event detection and biomechanics measurements with visual feedback. A shared inference pass powers event detection, posture analysis and annotated video, with web and mobile application work around the analysis pipeline.',
    tech: ['Python', 'MediaPipe', 'Next.js', 'Computer vision', 'Mobile'],
    image: 'grip.webp', imageAlt: 'Golf swing photography used in the Grip Intelligence product',
    achievements: ['Detects eight swing events using pose and wrist-trajectory heuristics.', 'Per-joint analysis and fault-coloured skeleton overlays.', 'Reliability gates decide whether a measurement can be graded.', 'Literature-backed scoring separates sourced metrics from provisional thresholds.'],
    note: 'The swing-event detector is heuristic. Product imagery is illustrative; it is not a captured analysis result.'
  },
  {
    id: 'architectai', title: 'ArchitectAI', category: 'Products', featured: true, status: 'Concept design tool', role: 'Constraint solving & product engineering',
    summary: 'A plot, a brief, and a plan that fits.',
    description: 'An editable residential concept-design workflow for Islamabad homes. Plot geometry, road orientation, room requirements and dimensional constraints feed a deterministic layout solver, with a 3D house view and exportable architectural documents.',
    tech: ['React', 'TypeScript', 'Constraint solving', 'PostgreSQL', 'CAD export'],
    image: 'architectai.webp', imageAlt: 'ArchitectAI generated residential floor plan with room dimensions',
    achievements: ['Map-selected plots and road-facing site proposals.', 'Deterministic floor plans with editable room and floor requirements.', 'Connected 3D, service proposals and PDF/CAD export workflows.', 'Optional AI critique alongside locally available plan generation.'],
    note: 'Produces concept designs. Construction-ready structural design, detailed MEP sizing and professional release remain outside the implemented scope.'
  },
  {
    id: 'slm-post-training', title: 'SLM Post-Training', category: 'AI & agents', featured: false, status: 'Professional work', role: 'Post-training lead at ClaimbAI',
    summary: 'Fine-tuning, preference optimisation, and rewards for tool use.',
    description: 'Own the post-training loop for an in-house small language model, spanning supervised fine-tuning, GRPO/PPO optimisation through Hugging Face TRL, reward-model training, rollout collection and dataset versioning.',
    tech: ['PyTorch', 'TRL', 'SFT', 'GRPO / PPO', 'vLLM'],
    achievements: ['End-to-end supervised and preference-based training workflows.', 'Formal verifiers and milestone rewards for multi-step tool use.', 'Auditable scoring of tool selection, arguments and recovery from failed calls.']
  },
  {
    id: 'rag-connectors', title: 'Enterprise RAG & Connectors', category: 'AI & agents', featured: false, status: 'Professional work', role: 'AI & data infrastructure',
    summary: 'Enterprise knowledge connected to grounded answers.',
    description: 'Architected production retrieval infrastructure at ClaimbAI, from indexing, chunking and embedding strategy to secure ingestion. Built and maintained 12+ connectors across platforms including Snowflake, Databricks, AWS, Azure, GitHub and Slack.',
    tech: ['LlamaIndex', 'pgvector', 'PostgreSQL', 'OAuth', 'RBAC'],
    achievements: ['Retrieval and ingestion architecture for enterprise knowledge.', '12+ secure connectors with OAuth and role-based access.', 'Private retrieval and local small-language-model workflows.']
  },
  {
    id: 'care-companion', title: 'Care Companion', category: 'Products', featured: false, status: 'MVP', role: 'AI workflow & application engineering',
    summary: 'An accessible front door to care for older adults.',
    description: 'A healthcare-assistance MVP built around large, simple patient interactions. Voice and text intake lead into follow-up questions, structured reports and doctor routing, with separate patient, doctor and admin workflows.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel AI SDK'],
    image: 'care-companion.webp', imageAlt: 'Care Companion patient interface',
    achievements: ['Structured symptom intake and AI-assisted follow-up questions.', 'Doctor queues, specialty/availability matching and response workflows.', 'Patient timelines, health profiles and family-access flows.'],
    note: 'Healthcare-assistance prototype; clinical validation is not claimed.'
  },
  {
    id: 'virtual-tour', title: 'Virtual Tour Studio', category: 'Products', featured: false, status: 'Frontend deployed', role: 'Capture workflow & platform engineering',
    summary: 'Turn phone captures into connected panoramic walkthroughs.',
    description: 'A mobile-browser capture experience that guides users through panorama targets and links rooms through marked exits. Includes a multilingual frontend, installable PWA and tour publishing/embed workflows.',
    tech: ['TypeScript', 'PWA', 'Panoramas', 'Docker'],
    image: 'virtual-tour.webp', imageAlt: 'Virtual Tour Studio panoramic walkthrough interface',
    achievements: ['Guided capture planning adapts to camera coverage and frame shape.', 'Linked photographic panoramas with room-to-room navigation.', 'Multilingual interface and browser-installable application.'],
    note: 'The frontend is deployed. Production tour processing still requires a persistent HTTPS Docker host.'
  },
  {
    id: 'valuation-explorer', title: 'Valuation Explorer', category: 'Data & infrastructure', featured: false, status: 'Private application', role: 'Financial modelling & product engineering',
    summary: 'See exactly what your valuation assumptions imply.',
    description: 'A private analysis app for businesses, property and listed groups in Pakistan. Traceable DCF, multiples and asset valuations sit alongside sum-of-the-parts modelling, sensitivity analysis and portfolio scenarios.',
    tech: ['TypeScript', 'Financial models', 'Document extraction', 'Scenario analysis'],
    achievements: ['Valuation workflows across 18 industries.', 'Reverse valuation solves for assumptions implied by a target value.', 'Document-derived inputs retain supporting page quotes for review.', 'Portfolio concentration and what-if analysis without trade execution.']
  },
  {
    id: 'decision-os', title: 'Decision OS / Rodi AI', category: 'AI & agents', featured: false, status: 'Product development', role: 'Content intelligence workflows',
    summary: 'AI-assisted recommendations for YouTube creators.',
    description: 'A content-intelligence workspace for YouTube channels, connecting creator workflows, channel analysis and AI-assisted recommendations. The local application includes a React frontend, backend services and an MCP component.',
    tech: ['React', 'Node.js', 'MCP', 'Content intelligence'],
    achievements: ['Creator-facing analysis and recommendation workflows.', 'Separate frontend, backend and MCP integration components.']
  },
  {
    id: 'ciara', title: 'Ciara', category: 'Products', featured: false, status: 'Platform development', role: 'Backend & real-time architecture',
    summary: 'The real-time systems behind rides and deliveries.',
    description: 'Ride-hailing backend and socket architecture across car, bike, shared-ride and food workflows. Related services cover driver onboarding, identity/document verification, live locations and AI-assisted customer support.',
    tech: ['Node.js', 'TypeScript', 'MongoDB', 'Redis', 'WebSockets'],
    achievements: ['Geospatial driver matching, driver rooms and booking flows.', 'Location broadcasting and Redis geospatial queries.', 'Driver signup with document extraction and identity-verification integration.', 'L1 support tooling with escalation to human support.']
  },
  {
    id: 'frontier-fleet', title: 'Frontier Fleet', category: 'Products', featured: false, status: 'In development', role: 'Full-stack PWA engineering',
    summary: 'A shared home for truckers, roadside help and fleet tracking.',
    description: 'An installable community application that brings a social feed, roadside assistance and lightweight fleet tracking into one experience, backed by a Cloudflare Worker and PostgreSQL.',
    tech: ['PWA', 'Cloudflare Workers', 'PostgreSQL', 'TypeScript'],
    achievements: ['Community, roadside assistance and tracking in one installable app.', 'Shared application/API deployment through a Cloudflare Worker.']
  },
  {
    id: 'voice-agents', title: 'Voice Agents: Aria & Flowly', category: 'AI & agents', featured: false, status: 'Prototypes & product work', role: 'Voice pipeline & conversational UX',
    summary: 'Speech, reasoning and tools in one conversational loop.',
    description: 'Voice-agent work spanning an AI front desk for aesthetic clinics, a local voice sales assistant and telephony/SIP integration experiments. Pipelines connect speech recognition, LLM reasoning and text-to-speech with conversational state.',
    tech: ['FastAPI', 'Whisper', 'Text-to-speech', 'Next.js', 'Tool calling'],
    achievements: ['Microphone input, transcript display and streamed voice playback.', 'Discovery and follow-up flows with session state and lead capture.', 'Clinic-facing product site and constrained conversational sandbox.'],
    note: 'Capabilities vary by prototype. Lead capture does not imply a completed calendar-booking integration.'
  },
  {
    id: 'multi-agent-automation', title: 'Multi-Agent Business Automation', category: 'AI & agents', featured: false, status: 'Engineering project', role: 'Agent orchestration',
    summary: 'Specialised agents with explicit handoffs and recovery.',
    description: 'A central controller routes work across specialised agents for Sales, HR, Marketing and Engineering. The engineering focus is on state handoff, retries and workflow automation across multi-step tasks.',
    tech: ['Python', 'Agent orchestration', 'Workflow automation'],
    achievements: ['Departmental workflows with 10–15 specialised agents per department.', 'Explicit retries and shared task-state handoffs.']
  },
  {
    id: 'local-research-agent', title: 'Local Research Agent & MCP', category: 'AI & agents', featured: false, status: 'Engineering project', role: 'Local agents & tool integration',
    summary: 'Research tools and memory on a local AI stack.',
    description: 'Local agent experiments combine n8n, Ollama, web search and PostgreSQL vector retrieval with persistent memory. A companion MCP client explores scoped filesystem access, tool schemas, permission checks and error handling.',
    tech: ['n8n', 'Ollama', 'PostgreSQL', 'MCP'],
    achievements: ['Persistent retrieval and memory across research sessions.', 'Permissioned tool access and explicit agent failure handling.']
  },
  {
    id: 'mybutler', title: 'MyButler', category: 'AI & agents', featured: false, status: 'Prototype', role: 'Assistant application development',
    summary: 'A personal-assistant interface with an ADK email-agent experiment.',
    description: 'A React assistant application with a separate email-agent implementation using Google ADK. The project explores personal workflow assistance through a web interface and an agent API.',
    tech: ['React', 'Google ADK', 'Python'],
    achievements: ['Assistant frontend and a separately runnable email-agent service.', 'Agent development through ADK web and API server workflows.']
  },
  {
    id: 'digital-product-architect', title: 'Digital Product Architect', category: 'AI & agents', featured: false, status: 'Prototype', role: 'Data pipelines & generation workflows',
    summary: 'Audience research connected to product concepts and sales copy.',
    description: 'An application that connects social-profile research with a catalogue of digital products, then generates an audience profile, product outline and marketplace listing. Built around Python collection tools and a Next.js application.',
    tech: ['Python', 'Next.js', 'Prisma', 'LLMs'],
    achievements: ['Catalogue collection and audience-language analysis.', 'Structured generation of product outlines and listing copy.'],
    note: 'An experimental research workflow; commercial outcomes are not claimed.'
  },
  {
    id: 'wavebook', title: 'Wavebook', category: 'Data & infrastructure', featured: false, status: 'Research application', role: 'Backtesting & analysis tooling',
    summary: 'A strategy lab for testing assumptions against market history.',
    description: 'A local backtesting app for mechanical, book-inspired strategies, with market selection, historical test periods and a separate paper-execution approval workflow.',
    tech: ['Python', 'Backtesting', 'Time series', 'Risk analysis'],
    achievements: ['Six mechanical strategies with configurable historical studies.', 'Daily and aggregated weekly market histories.', 'Separate approval queue and paper-execution dashboard.'],
    note: 'Research tooling. Private execution tests and strategy admission remain incomplete; investment performance is not claimed.'
  },
  {
    id: 'data-warehouse', title: '200M-Row Warehouse Transformation', category: 'Data & infrastructure', featured: false, status: 'Professional work', role: 'Data architecture & delivery at AIGENIUS',
    summary: 'From fragmented tables to a coherent analytics foundation.',
    description: 'Led a transformation of approximately 200 million rows across roughly 200 tables into a normalised 3NF warehouse and star-schema semantic layers for analytics, forecasting and dashboards.',
    tech: ['AWS Glue', 'SQL', '3NF', 'Dimensional modelling'],
    achievements: ['Normalised warehouse architecture and automated ETL.', 'Star-schema analytical layers for forecasting and reporting.']
  },
  {
    id: 'ml-platform', title: 'Cloud Training & Model Serving', category: 'Data & infrastructure', featured: false, status: 'Professional work', role: 'MLOps & platform engineering',
    summary: 'The infrastructure between a trained model and a usable system.',
    description: 'Deployment and platform work across AWS, Azure, GCP and Vercel, with containerised workloads, GPU scheduling, CI/CD and monitoring for model versions and prompt revisions.',
    tech: ['Kubernetes', 'Docker', 'vLLM', 'MLflow', 'CI/CD'],
    achievements: ['GPU-aware deployment and model serving workflows.', 'Quality and drift tracking across models and prompt revisions.']
  },
  {
    id: 'edge-vision', title: 'Real-Time Edge Vision', category: 'Vision & robotics', featured: false, status: 'Professional work', role: 'Software engineering at COMCEPT',
    summary: 'Detection and tracking within real hardware constraints.',
    description: 'Developed real-time computer-vision and tracking systems on NVIDIA Jetson Orin, integrating C++/Qt interfaces, multithreaded processing and optimised inference under latency, memory and power constraints.',
    tech: ['C++', 'Qt / QML', 'YOLO', 'TensorRT', 'Jetson Orin'],
    achievements: ['Model pruning and quantisation improved throughput by about 30%.', 'Reduced false positives by about 25%.', 'Integrated telemetry, Linux compute nodes and networked hardware.']
  },
  {
    id: 'agri-bot', title: 'Autonomous Agri-bot', category: 'Vision & robotics', featured: false, status: 'NUST final-year project', role: 'Mechatronics design & integration',
    summary: 'A modular robot for agricultural tasks.',
    description: 'Designed and manufactured a multipurpose agricultural robot with seeding/drilling modules, autonomous navigation, obstacle avoidance and a mobile control application during a BE in Mechatronics Engineering.',
    tech: ['CAD / ANSYS', 'Robotics', 'Sensors', 'Control systems'],
    achievements: ['Mechanical design, modular tooling and sensor integration.', 'Autonomous movement and mobile control.', 'A grades in both final-year project stages.']
  },
  {
    id: 'robotics-lab', title: 'Robotics & Vision Explorations', category: 'Vision & robotics', featured: false, status: 'Academic & research projects', role: 'Engineering & experimentation',
    summary: 'Robot control, recognition and movement analysis.',
    description: 'Earlier engineering work includes a fabricated six-degree-of-freedom robotic arm, MATLAB/OpenCV face recognition, and microrobot movement-analysis tools during an NCRA research internship.',
    tech: ['MATLAB', 'OpenCV', 'Arduino', 'C++', 'CAD'],
    achievements: ['Six-axis arm with servo actuation and Arduino control.', 'AlexNet transfer learning achieved 92% accuracy on a custom face dataset.', 'MATLAB GUI and real-time C++ image processing for microrobot experiments.']
  },
  {
    id: 'edu-platform', title: 'EduPlatform', category: 'Products', featured: false, status: 'Application project', role: 'Full-stack learning platform',
    summary: 'Live teaching, course access and real-time questions.',
    description: 'A learning platform with teacher-led live lectures, student course access, real-time Q&A and course-based payment workflows.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'LiveKit', 'Stripe'],
    achievements: ['Teacher and student experiences with live video.', 'Course payments, calendars and reporting interfaces.']
  },
  {
    id: 'web-platforms', title: 'Aethelos & Business Websites', category: 'Web experiences', featured: false, status: 'Website projects', role: 'Design & frontend engineering',
    summary: 'Distinctive websites for a growing collection of businesses.',
    description: 'Website work includes the Aethelos product directory, AZenthera AI studio, Baseline Consulting Group, Lattice AI and Pak Vendi. Projects range from buildless HTML sites to typed, data-driven Next.js applications.',
    tech: ['Next.js', 'React', 'TypeScript', 'HTML / CSS'],
    achievements: ['Aethelos directory with dedicated product pages and shared navigation.', 'Baseline service catalogue spanning eight practice areas.', 'Reusable typed content and responsive business interfaces.']
  },
  {
    id: 'research-data-tools', title: 'Research & Data Collection Tools', category: 'Data & infrastructure', featured: false, status: 'Local tools', role: 'Data collection & analysis',
    summary: 'Repeatable collection pipelines and searchable research data.',
    description: 'Local tools include a resumable geographic restaurant-data collector, a timeline collection dashboard, and structured intelligence assets for AI advisory research.',
    tech: ['Python', 'Playwright', 'FastAPI', 'SQLite', 'React'],
    achievements: ['Geographic collection with checkpoints, retries and aggregation.', 'Local data storage and searchable dashboard interfaces.', 'Structured case studies, benchmarks and research datasets.']
  }
];
export const getFeaturedProjects = () => projects.filter((project) => project.featured);
export const getAllProjects = () => projects;
