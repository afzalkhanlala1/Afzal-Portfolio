import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "ClaimbAI",
      position: "AI Engineer",
      location: "California, USA (Remote)",
      period: "July 2025 – Present",
      description: "Architected & shipped an agent-first ecosystem using Google ADK, n8n, Firebase Functions, and Cloud Run powering web + iOS/Android frontends.",
      highlights: [
        "Built secure connectors for Gmail, Calendar, Drive and task systems enabling agent access to user resources",
        "Designed RAG and SLM workflows with PostgreSQL vector stores and LlamaIndex-like patterns",
        "Implemented production REST/FastAPI backends with CI/CD pipelines and monitoring",
        "Collaborated with product, mobile, and security teams for privacy-preserving connectors"
      ],
      current: true
    },
    {
      company: "COMCEPT",
      position: "Software Engineer",
      location: "Islamabad, Pakistan",
      period: "Jan 2025 – October 2025",
      description: "Developed real-time computer vision and tracking stacks deployed on NVIDIA Jetson Orin.",
      highlights: [
        "Built YOLOv9–v11, GOTURN, CSRT, SAMURAI tracking systems",
        "Optimized models via TensorRT, pruning, and quantization — improved inference speed by ~30%",
        "Developed C++/Qt visualization dashboards (40+ screens)",
        "Led system integration across firmware and compute nodes, reducing boot time"
      ]
    },
    {
      company: "AIGENIUS",
      position: "Chief Operating Officer (COO)",
      location: "Islamabad, Pakistan",
      period: "July 2024 – December 2024",
      description: "Led operations, recruitment, and growth initiatives while contributing hands-on technical expertise.",
      highlights: [
        "Directed transformation of 200M-row dataset into normalized 3NF data warehouse",
        "Built Node.js/React chatbot and automated ETL using AWS Glue",
        "Developed proof-of-concept player tracking system using OpenCV",
        "Managed client relationships and cross-functional teams (sales, engineering, analytics)"
      ]
    },
    {
      company: "Convergent Business Technologies",
      position: "Consultant Analytics and Insights",
      location: "Islamabad, Pakistan",
      period: "August 2023 – July 2024",
      description: "Implemented market-basket analysis, dimensional modeling, and dashboarding solutions.",
      highlights: [
        "Automated Pepsi KSA & UAE project, reducing refresh cycle from 1 week to 3 days (57% reduction)",
        "Built ML pipelines for transcription and audio analytics (OCR + timestamped ASR)",
        "Conducted ETL to transform raw data into 3NF data warehouse",
        "Developed dimensional model semantic layers for analytics"
      ]
    },
    {
      company: "Upwork",
      position: "Freelance Data Engineer and Developer",
      location: "Remote",
      period: "August 2022 – August 2023",
      description: "Delivered end-to-end analytics and predictive models for telco, healthcare, and finance clients.",
      highlights: [
        "Built automated ETL workflows using SQL and AWS Glue",
        "Created dashboards in Power BI and Tableau with automated reporting",
        "Conducted statistical analyses using pandas, NumPy, and scikit-learn",
        "Provided consulting services to optimize data-driven strategies for SMEs"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From startup COO to AI engineer, building production systems that scale.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-large transition-all duration-300 border border-border/50">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground mb-1">
                        {exp.position}
                      </h3>
                      <div className="text-lg font-semibold text-accent mb-2">
                        {exp.company}
                        {exp.current && (
                          <span className="ml-3 text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col lg:text-right text-sm text-muted-foreground">
                      <div className="flex items-center lg:justify-end mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;