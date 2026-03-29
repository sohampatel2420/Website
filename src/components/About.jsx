import React from 'react';

const About = () => {
    return (
        <section id="about" className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-x-hidden pointer-events-none z-10">
            {/* Huge background text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full overflow-hidden flex justify-center z-0">
                <h1 
                    className="text-[25vw] md:text-[28vw] font-black tracking-tighter whitespace-nowrap opacity-[0.03]"
                    style={{ 
                        color: 'transparent', 
                        WebkitTextStroke: '1px rgba(255, 255, 255, 1)' 
                    }}
                >
                    WHO I AM
                </h1>
            </div>

            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pointer-events-auto relative z-10">
                
                {/* Left: Profile picture with decorative frame */}
                <div className="lg:col-span-5 relative group">
                    {/* Offset decorative border */}
                    <div 
                        className="absolute top-4 left-4 w-full h-full rounded-2xl border border-white/10 pointer-events-none"
                        style={{ zIndex: 0 }}
                    />
                    
                    <div className="relative w-full aspect-3/4 overflow-hidden rounded-2xl bg-white/5" style={{ zIndex: 1 }}>
                        <img 
                            src="/Profile_Pic.png" 
                            alt="Soham Patel"
                            className="w-full h-full object-cover transition-all duration-700 ease-out grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
                        />
                        
                        {/* Thin overlay gradients to blend into dark theme */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                    
                    {/* Technical annotations floating around the image */}
                    <div className="absolute -left-8 top-1/4 -rotate-90 origin-left text-[10px] tracking-[0.3em] font-medium text-white/30 uppercase hidden md:block" style={{ zIndex: 2 }}>
                        [ FIG. 01 ]
                    </div>
                    <div className="absolute -right-4 bottom-1/4 rotate-90 origin-right text-[10px] tracking-[0.3em] font-medium text-white/30 uppercase hidden md:block" style={{ zIndex: 2 }}>
                        EST. 2023
                    </div>
                </div>

                {/* Right: Minimalist block of text */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-12 lg:pl-12">
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-px bg-white/30" />
                            <span className="text-[10px] tracking-[0.4em] font-light text-white/50 uppercase">
                                The Data Scientist
                            </span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight uppercase" style={{ fontFamily: '"Orbitron", sans-serif' }}>
                            WHO I{' '}
                            <span style={{ color: 'transparent', WebkitTextStroke: '2px #ffffff' }}>AM.</span>
                        </h2>
                    </div>
                    
                    <div className="space-y-8 border-l border-white/10 pl-6 md:pl-8 py-2 relative">
                        {/* Structural dot */}
                        <div className="absolute -left-[2.5px] top-4 w-1 h-1 bg-white/40 rounded-full"></div>

                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-xl">
                            I am <span className="text-white font-bold">Soham Patel</span>, a Data Science fresher with hands-on experience in Machine Learning, NLP, and Generative AI. Proficient in Python, SQL, data preprocessing, exploratory data analysis, and model building. Actively seeking Data Science / AI-ML opportunities to apply analytical and problem-solving skills in real-world scenarios.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="space-y-2">
                                <span className="block text-[10px] tracking-[0.2em] text-white/30 uppercase">Focus</span>
                                <span className="block text-md text-gray-300 font-light">Machine Learning & AI</span>
                                <span className="block text-md text-gray-300 font-light">NLP & Generative AI</span>
                            </div>
                            <div className="space-y-2">
                                <span className="block text-[10px] tracking-[0.2em] text-white/30 uppercase">Education</span>
                                <span className="block text-md text-gray-300 font-light">B.Voc (IT) — 8.16 CGPA</span>
                                <span className="block text-md text-gray-300 font-light">Silver Oak Univ. | 2025</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pt-8">
                        <a href="#work" className="hero-btn-primary-inverse group w-fit">
                            <span>Explore Work</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default About;
