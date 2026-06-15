import React, { useState, useEffect } from 'react';

function App() {
  const [projectFilter, setProjectFilter] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Scroll Reveal Effect Hook
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Check if the element is entering the viewport
      if (entry.isIntersecting) {
        // Change classes to trigger the CSS transition
        entry.target.classList.replace('opacity-0', 'opacity-100');
        entry.target.classList.replace('translate-y-8', 'translate-y-0');
        
        // Unobserve so it only happens once
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.15, // Trigger when 15% of the section is visible
    rootMargin: '0px 0px -50px 0px' // Starts trigger slightly earlier
  });

  const elements = document.querySelectorAll('.reveal-section');
  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  const skillCategories = [
    { title: "Data & Analytics", skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Data Modeling"] },
    { title: "Web Interfaces", skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "HTML5", "JavaScript (ES6+)"] },
    { title: "Databases & Tools", skills: ["MongoDB", "Mongoose", "SQL", "Git", "GitHub", "REST APIs"] },
    { title: "Problem Solving", skills: ["Data Structures", "Algorithms (DSA)", "C / C++", "Java"] }
  ];

  const projects = [
    {
      title: "AI Based Smart Safety System",
      subtitle: "Project Lead & Engineer (LDRP-ITR)",
      timeline: "Dec 2025 - Jan 2026",
      category: "Data Science",
      desc: "Coordinated a development team to design an AI-driven safety system processing real-time threat variables to protect hazardous machinery operators. Awarded a ₹40,000 research grant based on project architecture and safety data pipeline viability.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "AI Models"],
      link: "https://codevortex.in",
      highlight: "Research Grant Winner"
    },
    {
      title: "Industrial AI-Safety Web Portal",
      subtitle: "Data Streaming & Metric Logging Portal",
      timeline: "Production Deployment",
      category: "Full-Stack",
      desc: "Engineered responsive tracking panels to stream, process, and log event data from industrial safety detection pipelines. Created server-side REST APIs to safely store structured pipeline telemetry data.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB Atlas", "REST APIs"],
      link: "https://codevortex.in",
      highlight: "Live Platform"
    },
    {
      title: "Vendor Bridge System",
      subtitle: "Backend Architecture & Database Modeling",
      timeline: "Independent Project",
      category: "Full-Stack",
      desc: "Developed a secure application designed to manage, structure, and query profiles and transactions between corporate entities and independent vendors utilizing complex Mongoose database schemas.",
      tech: ["Node.js", "MongoDB", "Mongoose", "Express.js", "Backend Design"],
      link: "#"
    },
    {
      title: "Data Processing Portfolio Apps",
      subtitle: "Logic & Interface Design",
      timeline: "Utility Applications",
      category: "Data Science",
      desc: "Built a responsive, state-driven Quiz Application that processes multi-format inputs and computes real-time performance metrics alongside a local storage-backed CRUD task manager.",
      tech: ["JavaScript", "Client-Side Architecture", "Browser Storage", "React State"],
      link: "#"
    }
  ];

  const certifications = [
    { title: "Python for Data Science & Data Analysis", issuer: "Coursera" },
    { title: "Full-Stack Development Specialization", issuer: "Coursera" },
    { title: "Python Programming Certification", issuer: "NPTEL" }
  ];

  const filteredProjects = projectFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === projectFilter);



  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 scroll-smooth">
      
      {/* BRAND HEADER & NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/60 px-6 py-4 flex justify-between items-center">
        <p className="text-xl font-mono font-bold text-cyan-400 transition-transform tracking-tight">Portfolio Dashboard</p>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-cyan-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Nav Links */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-slate-950 md:bg-transparent p-6 md:p-0 gap-6 text-sm font-medium border-b border-slate-900 md:border-0 shadow-xl md:shadow-none`}>
          {['About', 'Skills', 'Portfolio', 'Education', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-6 w-full">

        {/* HERO ENTRY ZONE */}
        <section className="min-h-[75vh] flex flex-col justify-center items-start pt-6 relative overflow-hidden">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <p className="text-cyan-400 font-mono tracking-wider mb-2 text-sm">Hi, my name is</p>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-slate-100">
            Adil Patel.
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-400 mb-6 max-w-3xl leading-tight">
            Full-Stack Developer transitioning into Data Science, building intelligent, data-powered applications.
          </h2>
          <p className="max-w-xl text-slate-400 mb-8 text-sm sm:text-base leading-relaxed">
            I am a Computer Engineering student at LDRP-ITR and an aspiring Data Science Engineer. I specialize in data-driven architectures, machine monitoring, and building robust enterprise backend layers.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="px-5 py-3 border-2 border-cyan-400 text-cyan-400 text-sm font-semibold rounded-md hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              Explore Portfolio
            </a>
            <a href="mailto:adilp4534@gmail.com" className="px-5 py-3 bg-slate-900 border border-slate-800 text-slate-300 text-sm font-semibold rounded-md hover:bg-slate-800 hover:text-white transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </section>

        {/* 01. EXECUTIVE SUMMARY SECTION */}
        <section 
          id="about" 
          className="reveal-section opacity-0 translate-y-8 transition-all duration-700 py-16 border-t border-slate-900/60 scroll-mt-20 group"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3 text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">
            <span className="text-cyan-400 font-mono text-lg">01.</span> Executive Summary
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-slate-400 text-sm sm:text-base leading-relaxed">
            <div className="md:col-span-2 space-y-4">
              <p>
                I am a focused Computer Engineering student with hands-on technical experience building data-driven systems, executing processing pipelines, and creating multi-format responsive user interfaces.
              </p>
              <p>
                As a project lead, I align technical objectives, establish persistent database systems, and design analytical streaming architectures capable of processing variables within hazardous environments.
              </p>
            </div>
            
            <div className="bg-slate-900/30 border border-slate-900/80 rounded-xl p-5 grid grid-cols-2 lg:grid-cols-1 gap-4 text-left">
              <div>
                <div className="text-cyan-400 text-2xl font-bold font-mono">120+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">DSA Solved</div>
              </div>
              <div>
                <div className="text-cyan-400 text-2xl font-bold font-mono">4th</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Rank / 72</div>
              </div>
              <div>
                <div className="text-cyan-400 text-2xl font-bold font-mono">₹40k</div>
                <div className="text-[10px] text-slate-500 tracking-wider font-semibold uppercase">Research Grant</div>
              </div>
              <div>
                <div className="text-cyan-400 text-2xl font-bold font-mono">8.56</div>
                <div className="text-[10px] text-slate-500 tracking-wider font-semibold uppercase">Cumulative CPI</div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. TECHNICAL SKILL ECOSYSTEM */}
       <section id="skills" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 py-16 border-t border-slate-900/60 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3 text-slate-200">
            <span className="text-cyan-400 font-mono text-lg">02.</span> Skill Ecosystem
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((cat, index) => (
              <div key={index} className="bg-slate-900/20 p-5 rounded-xl border border-slate-900/60 hover:border-slate-800 hover:bg-slate-900/40 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xs font-mono text-cyan-400 font-bold mb-3 uppercase tracking-widest">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-slate-300 text-sm flex items-center gap-2 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 transition-all duration-300 group-hover/item:bg-cyan-400 group-hover/item:scale-125"></span> 
                      <span className="transition-colors duration-200 group-hover/item:text-white">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 03. INTERACTIVE PORTFOLIO PROJECTS */}
        <section id="portfolio" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 py-16 border-t border-slate-900/60 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
            <div>
              <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-1">My Finished Engineering Artifacts</p>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-100 tracking-tight">
                   <span className="text-cyan-400 font-mono text-lg">03.</span> Portfolio
              </h2>
            </div>
            
            <div className="flex bg-slate-900/80 p-1 rounded-lg border border-slate-800/80 text-xs font-mono self-start shadow-inner">
              {['All', 'Data Science', 'Full-Stack'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-3 py-1.5 rounded-md transition-all duration-300 cursor-pointer ${projectFilter === cat ? 'bg-cyan-500/20 text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {filteredProjects.map((proj, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/20 p-5 rounded-xl border border-slate-900/80 hover:-translate-y-1.5 hover:border-cyan-500/30 hover:bg-slate-900/50 hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">{proj.title}</h3>
                    {proj.highlight && (
                      <span className="text-[9px] font-mono bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-500/20">{proj.highlight}</span>
                    )}
                  </div>
                  <h4 className="text-xs font-mono text-slate-400 mb-1">{proj.subtitle}</h4>
                  <div className="flex justify-between text-[10px] text-slate-500 mb-3 font-mono">
                    <span>{proj.timeline}</span>
                    <span className="text-cyan-500/40 font-bold">#{proj.category}</span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed group-hover:text-slate-300">{proj.desc}</p>
                </div>
                <div>
                  <div className="flex gap-1.5 flex-wrap mb-4">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono bg-slate-950 px-2 py-0.5 rounded text-slate-400 border border-slate-900/80">{t}</span>
                    ))}
                  </div>
                  {proj.link !== "#" ? (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="text-xs font-bold text-cyan-400/90 hover:text-cyan-400 flex items-center gap-1 transition-transform group-hover:translate-x-1 duration-300">
                      Live Project Link &rarr;
                    </a>
                  ) : (
                    <span className="text-xs font-bold text-slate-600 font-mono">Secure Architecture Sandbox</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04. CREDENTIALS MATRIX */}
        <section className="reveal-section opacity-0 translate-y-8 transition-all duration-700 py-16 border-t border-slate-900/60">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3 text-slate-200">
            <span className="text-cyan-400 font-mono text-lg">04.</span> Professional Credentials
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-900/20 p-4 rounded-xl border border-slate-900/80 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/40 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xs sm:text-sm font-semibold text-slate-200 mb-2 leading-snug">{cert.title}</h3>
                <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-900/20 self-start">{cert.issuer}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 05. ACADEMICS & RECOGNITION */}
        <section id="education" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 py-16 border-t border-slate-900/60 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3 text-slate-200">
            <span className="text-cyan-400 font-mono text-lg">05.</span> Background & Honors
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-900/10 p-5 rounded-xl border border-slate-900/80 flex flex-col md:flex-row md:justify-between md:items-start gap-4 hover:border-slate-800 transition-colors duration-300">
              <div>
                <h3 className="text-lg font-bold text-slate-200">B.E. in Computer Engineering</h3>
                <p className="text-slate-400 text-xs sm:text-sm">LDRP Institute of Technology and Research, Gandhinagar</p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs font-mono">
                  <span className="bg-slate-950 text-slate-400 px-2.5 py-1 rounded border border-slate-900">CPI: 8.56 / 10.00</span>
                  <span className="bg-slate-950 text-slate-400 px-2.5 py-1 rounded border border-slate-900">Batch Rank: 4th / 72</span>
                </div>
              </div>
              <div className="text-right text-xs font-mono text-slate-500 whitespace-nowrap">Expected April 2028</div>
            </div>

            <div className="bg-gradient-to-r from-slate-900/30 to-slate-950 p-5 rounded-xl border border-cyan-500/10 flex flex-col md:flex-row md:justify-between md:items-center gap-4 hover:border-cyan-500/30 transition-all duration-500 group/hackathon">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20">Hackathon Victory</span>
                <h3 className="text-base font-bold text-slate-200 mt-1.5 group-hover/hackathon:text-cyan-400 transition-colors">Impactthon Hackathon Runner Up</h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Secured runner-up positioning over technical challenges alongside team CODE VORTEX.</p>
              </div>
              <div className="text-right flex flex-col items-start md:items-end gap-0.5">
                <span className="text-cyan-400 font-bold text-base tracking-tight">₹80,000 Cash Prize</span>
                <span className="text-[10px] font-mono text-slate-500">January 31, 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* 06. COMMUNICATION GATEWAY */}
        <section id="contact" className="reveal-section opacity-0 translate-y-8 transition-all duration-700 py-16 border-t border-slate-900/60 text-center max-w-xl mx-auto scroll-mt-20">
          <h2 className="text-xs font-mono text-cyan-400 mb-2 tracking-widest uppercase">06. Get In Touch</h2>
          <h3 className="text-3xl font-bold mb-3 text-slate-100">Let's Connect</h3>
          <p className="text-slate-400 mb-6 text-xs sm:text-sm leading-relaxed">
            I am always seeking systemic database optimizations, algorithmic assignments, and technical engineering partnerships. Drop a line if you're looking to collaborate!
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:adilp4534@gmail.com" className="px-5 py-2.5 border-2 border-cyan-400 text-cyan-400 font-semibold text-sm rounded-md hover:bg-cyan-400/10 hover:shadow-xl transition-all duration-300">
              Email Me
            </a>
            <a href="https://linkedin.com/in/adilpatel9106" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-sm rounded-md hover:bg-slate-800 transition-all duration-300">
              LinkedIn
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900/80 py-8 text-center text-xs font-mono text-slate-600">
        Designed & Built by Adil Patel © 2026
      </footer>
    </div>
  );
}

export default App;