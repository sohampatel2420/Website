import React from "react";

const skillCategories = [
  {
    title: "Programming & Data",
    tag: "01",
    skills: [
      { name: "Python", icon: "fa-brands fa-python", color: "#3776AB" },
      { name: "SQL", icon: "fa-solid fa-database", color: "#4479A1" },
      { name: "Pandas", icon: "fa-solid fa-table", color: "#150458" },
      { name: "NumPy", icon: "fa-solid fa-calculator", color: "#013243" },
      { name: "Matplotlib", icon: "fa-solid fa-chart-line", color: "#11557C" },
      { name: "Seaborn", icon: "fa-solid fa-chart-area", color: "#4C72B0" },
    ],
  },
  {
    title: "Data Analysis & Visualization",
    tag: "02",
    skills: [
      { name: "Data Cleaning", icon: "fa-solid fa-broom", color: "#22d3ee" },
      { name: "EDA", icon: "fa-solid fa-magnifying-glass-chart", color: "#38bdf8" },
      { name: "Statistical Analysis", icon: "fa-solid fa-square-root-variable", color: "#a78bfa" },
      { name: "Data Visualization", icon: "fa-solid fa-chart-pie", color: "#34d399" },
    ],
  },
  {
    title: "Machine Learning",
    tag: "03",
    skills: [
      { name: "Regression", icon: "fa-solid fa-chart-line", color: "#F89939" },
      { name: "Classification", icon: "fa-solid fa-tags", color: "#1E90FF" },
      { name: "Clustering", icon: "fa-solid fa-circle-nodes", color: "#e879f9" },
      { name: "Feature Engineering", icon: "fa-solid fa-gears", color: "#fbbf24" },
      { name: "Model Evaluation", icon: "fa-solid fa-clipboard-check", color: "#4ade80" },
      { name: "Scikit-learn", icon: "fa-solid fa-brain", color: "#F89939" },
      { name: "XGBoost", icon: "fa-solid fa-bolt", color: "#1E90FF" },
    ],
  },
  {
    title: "Deep Learning & AI",
    tag: "04",
    skills: [
      { name: "Neural Networks", icon: "fa-solid fa-network-wired", color: "#FF6F00" },
      { name: "CNNs", icon: "fa-solid fa-image", color: "#38bdf8" },
      { name: "RNNs", icon: "fa-solid fa-rotate", color: "#a78bfa" },
      { name: "NLP", icon: "fa-solid fa-language", color: "#34d399" },
      { name: "Computer Vision", icon: "fa-solid fa-eye", color: "#f472b6" },
      { name: "TensorFlow", icon: "fa-solid fa-network-wired", color: "#FF6F00" },
      { name: "HuggingFace", icon: "fa-solid fa-robot", color: "#FFD21E" },
    ],
  },
  {
    title: "Generative & Agentic AI",
    tag: "05",
    skills: [
      { name: "LLMs", icon: "fa-solid fa-comments", color: "#10A37F" },
      { name: "RAG", icon: "fa-solid fa-book-open", color: "#7B68EE" },
      { name: "Embeddings", icon: "fa-solid fa-vector-square", color: "#22d3ee" },
      { name: "LangChain", icon: "fa-solid fa-link", color: "#2dd4bf" },
      { name: "LangGraph", icon: "fa-solid fa-diagram-project", color: "#38bdf8" },
      { name: "n8n", icon: "fa-solid fa-sitemap", color: "#FF6D5A" },
      { name: "Vector DB", icon: "fa-solid fa-cubes", color: "#a78bfa" },
      { name: "ChatBots", icon: "fa-solid fa-headset", color: "#10A37F" },
      { name: "FAISS", icon: "fa-solid fa-magnifying-glass", color: "#7B68EE" },
      { name: "Ollama", icon: "fa-solid fa-microchip", color: "#00D4AA" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-h px-6 md:px-20 justify-center">
      <div className="content-wrap w-full max-w-5xl flex flex-col items-center">
        {/* Section header — matching About section style */}
        <div className="flex items-center gap-4 mb-14 self-start">
          <div className="w-12 h-px bg-white/30" />
          <span className="text-[10px] tracking-[0.4em] font-light text-white/50 uppercase">
            Data Science & AI Stack
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight self-start mb-14">
          Tools I <span className="font-bold">build models with.</span>
        </h2>

        {/* Skill containers */}
        <div className="skills-containers-wrap">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-container-outer">
              {/* SVG orbiting star — same technique as hamburger ring */}
              <svg className="skill-star-ring" viewBox="0 0 1200 200" preserveAspectRatio="none">
                <rect
                  x="1" y="1" width="1198" height="198"
                  rx="16" ry="16"
                  fill="none"
                  className="star-ring-bg"
                  strokeWidth="1"
                />
                <rect
                  x="1" y="1" width="1198" height="198"
                  rx="16" ry="16"
                  fill="none"
                  className="star-ring-dash"
                  strokeWidth="2"
                  strokeDasharray="40 2752"
                  strokeLinecap="round"
                />
              </svg>

              {/* Inner content */}
              <div className="skill-container-inner">
                {/* Header row — always visible */}
                <div className="skill-container-header">
                  <div className="skill-container-tag">{cat.tag}</div>
                  <span className="skill-container-title">{cat.title}</span>
                  <div className="skill-container-line" />
                  <svg
                    className="skill-container-chevron"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                {/* Skills grid — revealed on hover */}
                <div className="skill-chips-grid">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="skill-chip"
                      style={{ "--chip-color": skill.color }}
                    >
                      <i className={`skill-chip-icon ${skill.icon}`} />
                      <span className="skill-chip-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
