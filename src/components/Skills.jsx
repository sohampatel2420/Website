import React from "react";

const skillCategories = [
  {
    title: "Frontend Modules",
    tag: "01",
    skills: [
      { name: "React", icon: "fa-brands fa-react", color: "#61DAFB" },
      { name: "Next.js", icon: "fa-solid fa-n", color: "#ffffff" },
      { name: "HTML5", icon: "fa-brands fa-html5", color: "#E34F26" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
      { name: "Tailwind", icon: "fa-solid fa-wind", color: "#38B2AC" },
      { name: "JS (ES6+)", icon: "fa-brands fa-js", color: "#F7DF1E" },
    ],
  },
  {
    title: "Backend & Data",
    tag: "02",
    skills: [
      { name: "Node.js", icon: "fa-brands fa-node", color: "#339933" },
      { name: "Express", icon: "fa-solid fa-server", color: "#ffffff" },
      { name: "MongoDB", icon: "fa-solid fa-database", color: "#47A248" },
      { name: "Firebase", icon: "fa-brands fa-google", color: "#FFA611" },
    ],
  },
  {
    title: "Tools & Core",
    tag: "03",
    skills: [
      { name: "Git", icon: "fa-brands fa-git-alt", color: "#F05032" },
      { name: "Java", icon: "fa-brands fa-java", color: "#fca311" },
      { name: "Python", icon: "fa-brands fa-python", color: "#3776AB" },
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
            Technologies & Expertise
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight self-start mb-14">
          Tools I <span className="font-bold">work with.</span>
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
