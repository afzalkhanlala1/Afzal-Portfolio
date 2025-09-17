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
    id: "claimbai-platform",
    title: "ClaimbAI Agent Platform",
    summary: "Architected multi-agent system integrating Google ADK, n8n, FastAPI and Cloud Run; built secure Gmail/Calendar/Drive connectors and RAG-style retrieval.",
    description: "Led the development of a comprehensive AI agent ecosystem that revolutionizes business automation. The platform features a multi-agent architecture with secure connectors to Google Workspace, automated questionnaire processing, and intelligent recommendation systems. Built with scalability in mind, the system handles complex workflows from mobile apps to cloud deployment.",
    tech: ["Google ADK", "n8n", "FastAPI", "PostgreSQL", "Firebase", "Cloud Run", "OAuth", "REST APIs"],
    category: "Production System",
    featured: true,
    achievements: [
      "Full-stack ecosystem with iOS/Android + web frontend",
      "Secure agent access to email, calendar, and tasks",
      "Automated questionnaire → Drive → backend → JSON pipeline",
      "CI/CD orchestration for scalable deployment"
    ],
    timeline: "July 2025 – Present",
    impact: "Enabled seamless business automation with 40% reduction in manual workflows"
  },
  {
    id: "sports-analytics-platform",
    title: "Advanced Sports Performance Analytics Platform",
    summary: "Predictive models for player positioning and performance dashboards for coaching staff.",
    description: "Developed cutting-edge computer vision system for real-time sports analytics, providing coaches with actionable insights into player performance, positioning, and tactical analysis. The platform combines OpenCV processing with predictive modeling to deliver comprehensive performance metrics.",
    tech: ["OpenCV", "PyTorch", "React", "JavaScript", "Computer Vision", "Predictive Modeling"],
    category: "Computer Vision",
    featured: false,
    achievements: [
      "Real-time player tracking and positioning analysis",
      "Performance dashboard for coaching staff",
      "Predictive models for tactical decision-making",
      "Interactive visualization of game analytics"
    ],
    impact: "Enhanced coaching decisions with data-driven insights"
  },
  {
    id: "real-time-tracking-system",
    title: "Real-time Object Tracking System (COMCEPT)",
    summary: "Production-grade tracking using YOLOv9–v11, GOTURN, CSRT on NVIDIA Jetson Orin with <98% precision in dynamic environments.",
    description: "Engineered high-performance computer vision pipeline for industrial applications, achieving exceptional precision in dynamic environments. The system combines multiple tracking algorithms with GPU acceleration and ARM64 optimization for real-time performance on embedded systems.",
    tech: ["YOLOv9-v11", "GOTURN", "CSRT", "SAMURAI", "TensorRT", "C++", "Qt", "NVIDIA Jetson Orin", "OpenCV", "ARM64"],
    category: "Computer Vision",
    featured: true,
    achievements: [
      "<98% precision in dynamic environments",
      "40% performance boost with ARM64 multithreading",
      "30% inference speed improvement with TensorRT optimization",
      "25% reduction in false positives",
      "40+ screen GUI solution with Qt integration"
    ],
    timeline: "Jan 2025 – Oct 2025",
    impact: "Revolutionized industrial automation with real-time precision tracking"
  },
  {
    id: "ai-agent-ecosystem",
    title: "AI Agent Ecosystem for Business Automation",
    summary: "Multi-agent automation for Sales, HR, Marketing and Engineering with a central AI controller.",
    description: "Designed and implemented a comprehensive multi-agent system that automates critical business functions across departments. The ecosystem features intelligent workflow orchestration, RAG-powered knowledge retrieval, and seamless integration with existing business tools.",
    tech: ["Node.js", "n8n", "RAG Patterns", "LangChain", "Multi-Agent Systems", "Workflow Automation"],
    category: "Agent Systems",
    featured: false,
    achievements: [
      "Cross-departmental automation (Sales, HR, Marketing, Engineering)",
      "Central AI controller for workflow orchestration",
      "RAG-powered knowledge retrieval",
      "Seamless integration with existing business tools"
    ],
    impact: "Streamlined business operations with 60% reduction in manual tasks"
  },
  {
    id: "face-recognition-software",
    title: "Face Recognition Software",
    summary: "High-performance face recognition using transfer learning with AlexNet; >90% accuracy.",
    description: "Developed robust face recognition system leveraging transfer learning techniques with AlexNet architecture. The system demonstrates exceptional accuracy in various lighting conditions and angles, making it suitable for security and identification applications.",
    tech: ["MATLAB", "Transfer Learning", "AlexNet", "Deep Learning", "Computer Vision"],
    category: "Deep Learning",
    featured: false,
    achievements: [
      ">90% accuracy across diverse conditions",
      "Transfer learning optimization",
      "Real-time processing capabilities",
      "Robust performance in various lighting"
    ],
    impact: "Enhanced security systems with reliable facial identification"
  },
  {
    id: "adaptive-language-learning",
    title: "Adaptive Language Learning Web App",
    summary: "Firebase + Gemini API; LLM-curated lessons and conversational practice with progress tracking.",
    description: "Created intelligent language learning platform that adapts to individual learning styles using LLM-powered content curation. Features conversational AI practice sessions, personalized lesson plans, and comprehensive progress tracking to optimize learning outcomes.",
    tech: ["Firebase", "Gemini API", "React", "LLM Integration", "Natural Language Processing"],
    category: "AI Application",
    featured: false,
    achievements: [
      "LLM-curated personalized lessons",
      "Conversational AI practice sessions",
      "Adaptive learning algorithm",
      "Comprehensive progress tracking system"
    ],
    impact: "Improved language learning efficiency by 45% through personalization"
  },
  {
    id: "local-research-agent",
    title: "Local Research AI Agent",
    summary: "Personal assistant with local LLM integration, SERP API, and Claude Desktop MCP client for research automation.",
    description: "Built comprehensive research automation system combining local LLM processing with web search capabilities. Features Claude Desktop integration, automated research workflows, and intelligent information synthesis for enhanced productivity.",
    tech: ["Ollama", "n8n", "SERP API", "OpenAI APIs", "MCP", "Local LLMs", "Research Automation"],
    category: "Research Tools",
    featured: false,
    achievements: [
      "Local LLM integration for privacy",
      "Automated research workflow orchestration",
      "Claude Desktop MCP client integration",
      "Intelligent information synthesis"
    ],
    impact: "Accelerated research processes with 70% time savings"
  },
  {
    id: "data-warehouse-transformation",
    title: "Enterprise Data Warehouse (200M+ Records)",
    summary: "Transformed 200M rows across 200 tables into 3NF data warehouse with advanced analytics and forecasting capabilities.",
    description: "Led massive data transformation project involving sophisticated ETL processes, dimensional modeling, and advanced analytics implementation. The project resulted in a robust 3NF data warehouse enabling real-time business intelligence and forecasting.",
    tech: ["SQL", "AWS Glue", "ETL", "Data Warehousing", "3NF", "Dimensional Modeling", "Business Intelligence"],
    category: "Data Engineering",
    featured: true,
    achievements: [
      "200M+ records across 200 tables processed",
      "3NF data warehouse architecture",
      "Advanced analytics and forecasting",
      "Real-time business intelligence dashboards",
      "Zero data loss backup strategies"
    ],
    timeline: "July 2024 – Dec 2024",
    impact: "Enabled data-driven decision making with 15% increase in user engagement"
  },
  {
    id: "pepsi-automation-project",
    title: "Pepsi KSA & UAE Analytics Automation",
    summary: "Reduced refresh cycle from 1 week to 3 days (57% improvement) and team size from 6 to 2 through automation.",
    description: "Revolutionized analytics workflow for Pepsi's KSA and UAE operations through intelligent automation and query optimization. Implemented custom scripting solutions that dramatically reduced processing time and resource requirements.",
    tech: ["Tableau", "SQL", "Custom Scripting", "Query Optimization", "Business Intelligence", "Automation"],
    category: "Business Intelligence",
    featured: false,
    achievements: [
      "57% reduction in refresh cycle time (1 week → 3 days)",
      "67% reduction in team size (6 → 2 people)",
      "Custom scripting automation solutions",
      "Advanced query optimization"
    ],
    timeline: "Aug 2023 – July 2024",
    impact: "Massive efficiency gains with 57% faster delivery and reduced operational costs"
  },
  {
    id: "chatbot-node-react",
    title: "Node.js/React Enterprise Chatbot",
    summary: "Intelligent chatbot with optimized SQL backend achieving 25% faster response times for real-time client interactions.",
    description: "Developed sophisticated enterprise chatbot solution with optimized backend architecture. Features intelligent query processing, real-time response optimization, and seamless integration with existing business systems.",
    tech: ["Node.js", "React", "SQL", "Backend Optimization", "Real-time Processing"],
    category: "Full-stack Development",
    featured: false,
    achievements: [
      "25% improvement in response times",
      "Optimized SQL query performance",
      "Real-time client interaction capabilities",
      "Enterprise-grade architecture"
    ],
    impact: "Enhanced customer experience with faster, more intelligent responses"
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id: string) => projects.find(p => p.id === id);