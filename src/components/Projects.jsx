import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
    {
        id: "01",
        title: "AI E-Commerce Analyst",
        subtitle: "Predictive Analytics & LLM Insights",
        description: "An end-to-end predictive analytics system that forecasts next-day e-commerce revenue using machine learning. Integrates LLM-based automated insight generation for business analysis, with interactive Streamlit dashboards for real-time data exploration and visualization.",
        tags: ["Python", "Pandas", "XGBoost", "Scikit-learn", "LLMs", "Streamlit"],
        features: [
            "End-to-end predictive analytics pipeline with XGBoost",
            "Next-day e-commerce revenue forecasting",
            "LLM-based automated business insight generation",
            "Interactive Streamlit dashboard for data visualization"
        ],
        demoLink: "https://github.com/sohampatel2420/AI-Powered-E-Commerce-Growth-Analyst",
        repoLink: "https://github.com/sohampatel2420/AI-Powered-E-Commerce-Growth-Analyst.git",
        image: "/images/projects/ecommerce.png"
    },
    {
        id: "02", 
        title: "RAG PDF Q&A", 
        subtitle: "Retrieval-Augmented Generation System", 
        description: "A Retrieval-Augmented Generation (RAG) pipeline for document-based question answering. Uses FAISS vector search with embedding-based semantic retrieval and local LLMs via Ollama to generate accurate, context-aware responses from uploaded PDF documents.", 
        tags: ["Python", "FAISS", "Embeddings", "LLMs", "Ollama", "Streamlit"], 
        features: [ "RAG pipeline for intelligent document Q&A", "FAISS vector search with semantic retrieval", "Local LLM inference via Ollama", "Streamlit-based interactive PDF upload & query interface" ],
        demoLink: "https://github.com/sohampatel2420/RAG-powered-PDF-Search-Engine",
        repoLink: "https://github.com/sohampatel2420/RAG-powered-PDF-Search-Engine.git",
        image: "/images/projects/ragpdf.png"
    },
    {
        id: "03", 
        title: "Vehicle Data EDA", 
        subtitle: "Exploratory Data Analysis Project", 
        description: "A comprehensive exploratory data analysis project on a real-world vehicle dataset. Performed end-to-end data cleaning, preprocessing, and statistical analysis to uncover hidden trends and patterns, with rich visualizations created using Matplotlib and Seaborn.",
        tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
        features: [ "End-to-end data cleaning and preprocessing", "Statistical analysis with trend identification", "Rich data visualizations and pattern discovery", "Jupyter Notebook-based reproducible analysis" ], 
        demoLink: "https://github.com/sohampatel2420/Vehicle-Dataset-Comprehensive-Data-Analysis", 
        repoLink: "https://github.com/sohampatel2420/Vehicle-Dataset-Comprehensive-Data-Analysis.git",
        image: "/images/projects/vehicle.png"
    }
];

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const isEven = index % 2 === 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`relative flex flex-col md:flex-row items-center w-full mb-24 md:mb-40 transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
        >
            {/* Timeline Node Dot */}
            <div className={`absolute left-1.5 md:left-[calc(50%-10px)] top-8 md:top-1/2 w-5 h-5 rounded-full border-4 z-10 md:-translate-y-1/2 transition-colors duration-700 delay-300
                ${isVisible ? 'bg-zinc-100 border-zinc-950' : 'bg-[rgba(9,9,11,0.5)] border-zinc-950'}`}
            />

            {/* Content Container (Alternates left/right on desktop) */}
            <div className={`w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} pl-12 md:pl-0`}>

                {/* Image Section */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="w-full aspect-video bg-[rgba(24,24,27,0.5)] border border-zinc-800 rounded-lg relative overflow-hidden group mb-8 md:mb-0 backdrop-blur-sm">
                        {project.image ? (
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-mono text-9xl font-black opacity-20 select-none transition-transform duration-700 group-hover:scale-110">
                                {project.id}
                            </div>
                        )}
                        <div className="absolute inset-0 bg-zinc-900/40 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                </div>

                {/* Text Section */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center ${isEven ? 'md:pl-16' : 'md:pr-16 md:items-end md:text-right'}`}>
                    <div className={`flex items-center gap-4 mb-4 ${!isEven && 'md:flex-row-reverse'}`}>
                        <span className="font-mono text-sm text-zinc-500">{project.id}</span>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-xl text-zinc-400 mb-6 font-medium">
                        {project.subtitle}
                    </p>

                    <p className="text-zinc-400 mb-8 leading-relaxed max-w-xl">
                        {project.description}
                    </p>

                    <div className="mb-8 w-full">
                        <ul className={`flex flex-col gap-3 ${!isEven && 'md:items-end'}`}>
                            {project.features.map((feature, i) => (
                                <li key={i} className={`flex items-center gap-3 text-sm text-zinc-400 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`flex flex-wrap gap-3 mb-10 ${!isEven && 'md:justify-end'}`}>
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="text-xs font-mono uppercase tracking-wider border border-zinc-800 px-3 py-1.5 rounded-full text-zinc-400 backdrop-blur-sm bg-black/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className={`flex items-center gap-4 ${!isEven && 'md:flex-row-reverse'} pointer-events-auto mt-4`}>
                        <a
                            href={project.demoLink}
                            target="_blank" rel="noopener noreferrer"
                            className="hero-btn-primary-inverse group"
                        >
                            <span>VIEW PROJECT</span>
                            <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                        <a
                            href={project.repoLink}
                            target="_blank" rel="noopener noreferrer"
                            className="hero-btn-outline-inverse group"
                        >
                            <span>SOURCE CODE</span>
                            <Github size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Track scroll position to fill the timeline spine
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if(!ticking) {
                requestAnimationFrame(() => {
                    if (!containerRef.current) return;
                    const rect = containerRef.current.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    const start = windowHeight / 2;
                    const end = rect.height;
                    const current = start - rect.top;

                    const progress = Math.max(0, Math.min(1, current / end));
                    setScrollProgress(progress);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-transparent text-zinc-50 min-h-screen">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col gap-4 mb-24 md:mb-40">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase text-zinc-100">
                        Selected Works
                    </h2>
                    <div className="w-24 h-1 bg-zinc-800" />
                </div>

                <div className="relative" ref={containerRef}>
                    {/* Background Timeline Spine */}
                    <div className="absolute left-[15px] md:left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-[rgba(24,24,27,0.5)]" />

                    {/* Animated Scroll Progress Spine */}
                    <div
                        className="absolute left-[15px] md:left-[calc(50%-1px)] top-0 w-0.5 bg-zinc-100 transition-all duration-200 ease-out will-change-height"
                        style={{ height: `${scrollProgress * 100}%` }}
                    />

                    {/* Project Items */}
                    <div className="relative z-10">
                        {PROJECTS.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
