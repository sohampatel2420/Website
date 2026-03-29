import React, { useState, useEffect, useRef } from 'react';
import '../index.css';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const scrollBadgeRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('work')
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Dot grid generator
  const dotGrid = [];
  for (let row = 0; row < 12; row++) {
    for (let col = 0; col < 8; col++) {
      dotGrid.push(
        <circle
          key={`${row}-${col}`}
          cx={col * 28 + 14}
          cy={row * 28 + 14}
          r="2"
          fill="#d4d4d4"
        />
      );
    }
  }

  return (
    <section
      className="relative w-full min-h-dvh flex flex-col justify-center overflow-hidden z-10 pointer-events-none"
      style={{ background: '#ffffff' }}
    >
      {/* Top & Bottom thin horizontal lines */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: '#e5e5e5' }} />
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: '#e5e5e5' }} />

      {/* Large "01" watermark */}
      <div
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          left: '-2%',
          fontSize: 'clamp(200px, 28vw, 400px)',
          fontFamily: '"Orbitron", sans-serif',
          fontWeight: 900,
          color: '#f5f5f5',
          lineHeight: 1,
          opacity: isMounted ? 1 : 0,
          transition: 'opacity 1.5s ease 0.2s',
        }}
      >
        01
      </div>

      {/* "+" Crosshair markers */}
      {[
        { top: '8%', left: '6%' },
        { top: '12%', right: '8%' },
        { bottom: '15%', left: '48%' },
        { bottom: '8%', right: '12%' },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            ...pos,
            color: '#d4d4d4',
            fontSize: '18px',
            fontWeight: 300,
            fontFamily: 'monospace',
            opacity: isMounted ? 1 : 0,
            transition: `opacity 1s ease ${0.8 + i * 0.15}s`,
          }}
        >
          +
        </div>
      ))}

      {/* Dot grid background (right side) */}
      <svg
        className="absolute pointer-events-none select-none"
        style={{
          right: '5%',
          top: '15%',
          width: '224px',
          height: '336px',
          opacity: isMounted ? 0.6 : 0,
          transition: 'opacity 1.2s ease 0.6s',
        }}
      >
        {dotGrid}
      </svg>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-0">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-8">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 lg:max-w-[55%]">

            {/* Giant Name */}
            <div
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.4s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.4s',
              }}
            >
              <h1
                className="leading-[0.85] font-black uppercase tracking-tighter"
                style={{
                  fontFamily: '"Orbitron", sans-serif',
                  fontSize: 'clamp(60px, 10vw, 140px)',
                  color: '#0a0a0a',
                  margin: 0,
                }}
              >
                SOHAM
              </h1>
              <h1
                className="leading-[0.85] font-black uppercase tracking-tighter"
                style={{
                  fontFamily: '"Orbitron", sans-serif',
                  fontSize: 'clamp(60px, 10vw, 140px)',
                  color: 'transparent',
                  WebkitTextStroke: '2px #0a0a0a',
                  margin: 0,
                }}
              >
                PATEL
              </h1>
            </div>

            {/* Divider line */}
            <div
              className="my-7"
              style={{
                width: '60px',
                height: '2px',
                background: '#0a0a0a',
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s',
              }}
            />

            {/* Description */}
            <p
              className="text-base md:text-lg leading-relaxed max-w-md mb-9 font-medium"
              style={{
                color: '#888',
                fontFamily: '"Rajdhani", sans-serif',
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(15px)',
                transition: 'opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s',
              }}
            >
              Data Science fresher building intelligent ML & GenAI solutions — focused on predictive analytics, NLP, and real-world problem solving.
            </p>

            {/* Buttons */}
            <div
              className="flex items-center gap-4 pointer-events-auto"
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(15px)',
                transition: 'opacity 0.8s ease 0.9s, transform 0.8s ease 0.9s',
              }}
            >
              <button
                onClick={scrollToProjects}
                className="hero-btn-primary group"
              >
                <span>VIEW PROJECTS</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=13fCA6CTVu2Jo2boH2g3YKJ-fgfHNhQqy"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-outline"
              >
                RESUME
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div
            className="flex-1 lg:max-w-[42%] w-full"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? 'translateY(0) translateX(0)' : 'translateY(25px) translateX(15px)',
              transition: 'opacity 1s ease 0.6s, transform 1s ease 0.6s',
            }}
          >
            {/* Code editor card */}
            <div
              className="relative"
              style={{
                border: '1px solid #e5e5e5',
                background: '#fafafa',
                boxShadow: '4px 4px 0px #0a0a0a',
              }}
            >
              {/* Window bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: '1px solid #e5e5e5' }}
              >
                <span className="w-3 h-3 rounded-full" style={{ background: '#FF605C', border: '1px solid #d4d4d4' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#FFBD44', border: '1px solid #d4d4d4' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#00CA4E', border: '1px solid #d4d4d4' }} />
                <span
                  className="ml-3 text-xs tracking-wider uppercase"
                  style={{ color: '#282828', fontFamily: 'monospace' }}
                >
                  data_scientist.py
                </span>
              </div>

              {/* Code content */}
              <div className="px-5 py-5" style={{ fontFamily: '"Fira Code", "Courier New", monospace', fontSize: '13px', lineHeight: '1.9' }}>
                {[
                  { num: '1', code: <><span style={{ color: '#7c7c7c' }}>data_scientist</span> <span style={{ color: '#0a0a0a' }}>=</span> {'{'}</> },
                  { num: '2', code: <>&nbsp;&nbsp;name: <span style={{ color: '#555' }}>"Soham Patel"</span>,</> },
                  { num: '3', code: <>&nbsp;&nbsp;role: <span style={{ color: '#555' }}>"Data Scientist"</span>,</> },
                  { num: '4', code: <>&nbsp;&nbsp;stack: [<span style={{ color: '#555' }}>"Python"</span>, <span style={{ color: '#555' }}>"ML"</span>, <span style={{ color: '#555' }}>"GenAI"</span>],</> },
                  { num: '5', code: <>&nbsp;&nbsp;passion: <span style={{ color: '#555' }}>"Turning data into insights"</span>,</> },
                  { num: '6', code: <>{'};'}</> },
                ].map((line) => (
                  <div key={line.num} className="flex items-start gap-4">
                    <span className="select-none w-5 text-right" style={{ color: '#ccc', fontSize: '12px' }}>
                      {line.num}
                    </span>
                    <span style={{ color: '#0a0a0a' }}>{line.code}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ROTATING SCROLL BADGE ===== */}
      <div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 pointer-events-auto z-30"
        style={{
          opacity: isMounted ? 1 : 0,
          transition: 'opacity 0.8s ease 1.2s',
        }}
      >
        <div
          onClick={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"
          style={{ cursor: 'pointer' }}
        >
          {/* Rotating text */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            style={{ animation: 'spin-slow 12s linear infinite' }}
          >
            <defs>
              <path
                id="scrollCirclePath"
                d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text
              style={{
                fontSize: '10.5px',
                letterSpacing: '3.5px',
                fill: '#999',
                fontFamily: '"Rajdhani", sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              <textPath href="#scrollCirclePath">
                SCROLL DOWN · SCROLL DOWN · 
              </textPath>
            </text>
          </svg>
          {/* Center arrow */}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#0a0a0a" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>

      {/* Inline styles for hero-specific animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(34,197,94,0.5); }
          50% { opacity: 0.5; box-shadow: 0 0 12px rgba(34,197,94,0.8); }
        }
        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: #0a0a0a;
          color: #ffffff;
          font-family: "Rajdhani", sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: 2px solid #0a0a0a;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .hero-btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s ease;
        }
        .hero-btn-primary:hover::before {
          left: 100%;
        }
        .hero-btn-primary:hover {
          background: #222;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          transform: translateY(-1px);
        }
        .hero-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: transparent;
          color: #0a0a0a;
          font-family: "Rajdhani", sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: 2px dashed #ccc;
          transition: all 0.3s ease;
        }
        .hero-btn-outline:hover {
          border-color: #0a0a0a;
          border-style: solid;
          transform: translateY(-1px);
        }
      `}} />
    </section>
  );
};

export default Hero;
