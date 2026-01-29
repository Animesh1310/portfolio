import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  Code2, 
  Database, 
  Terminal,
  GraduationCap,
  Award,
  Github,
  CheckCircle2,
  Cpu,
  Settings,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expandedCert, setExpandedCert] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contactInfo = {
    email: "animeshpatel619@gmail.com",
    phone: "4379852662",
    linkedin: "https://www.linkedin.com/in/animeshpatel/",
    github: "https://github.com/Animesh1310"
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'skills', 'experience', 'awards', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    const el = document.createElement('textarea');
    el.value = contactInfo.email;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const skillGroups = [
    { 
      title: "Backend & Frameworks", 
      icon: <Code2 size={24} />,
      items: ["ASP.NET Core", "C#", ".NET 8", "MVC", "Blazor", "Web API", "WCF", "Microservices", "CQRS"] 
    },
    { 
      title: "Databases & Cloud", 
      icon: <Database size={24} />,
      items: ["SQL Server", "Oracle 12c", "PostgreSQL", "MongoDB", "Entity Framework", "LINQ", "Azure DevOps"] 
    },
    { 
      title: "Frontend & Web", 
      icon: <Settings size={24} />,
      items: ["AngularJS", "Knockout JS", "JavaScript", "HTML5", "CSS3", "Razor Pages", "Chrome Extensions"] 
    },
    { 
      title: "Architecture & Ops", 
      icon: <Cpu size={24} />,
      items: ["N-tier", "DDD", "Unit Testing", "CI/CD", "Git/GitHub", "Agile/Scrum", "Postman", "Fiddler"] 
    }
  ];

  const experience = [
    {
      role: "Software Engineer II",
      company: "Etraveli Group (TripStack)",
      location: "Toronto, ON (Remote)",
      period: "DEC 2024 – PRESENT",
      summary: "Driving post-booking workflow innovations for a global travel tech leader, managing high-performance APIs and virtual interlining solutions.",
      tasks: [
        "Architecting full-stack travel tech solutions for complex post-booking workflows.",
        "Developing high-throughput REST/SOAP APIs for airline and OTA system synchronization.",
        "Engineered Chrome extensions to streamline internal itinerary management.",
        "Optimizing CI/CD pipelines in GitHub with robust unit and integration testing.",
        "Troubleshooting production environments using Postman and Fiddler within Agile sprints."
      ],
      env: "C#, .NET, SQL Server, AngularJS, GitHub, REST/SOAP"
    },
    {
      role: "Programmer Analyst",
      company: "E. S. Fox Limited",
      location: "Niagara Falls, ON",
      period: "JUN 2021 – NOV 2024",
      summary: "Spearheaded Oracle-based enterprise solutions for a premier Canadian engineering firm.",
      tasks: [
        "Modernized construction management modules using Oracle Developer 12c.",
        "Designed and optimized PL/SQL packages, triggers, and Crystal Reports for real-time tracking.",
        "Performed rigorous performance tuning on large-scale Oracle procedures.",
        "Supported mission-critical enterprise systems through full-cycle software maintenance."
      ],
      env: "Oracle 12c, Forms & Reports, PL/SQL, Crystal Reports"
    },
    {
      role: "Software Developer",
      company: "PEER Group Inc",
      location: "Kitchener, ON",
      period: "FEB 2022 – FEB 2024",
      summary: "Developed automation and testing software for global semiconductor manufacturing clients.",
      tasks: [
        "Built scalable automation components using C#, .NET Core, and Blazor.",
        "Collaborated on on-site installations and custom client integrations.",
        "Maintained strict quality standards via automated unit testing and technical documentation.",
        "Utilized Azure DevOps for lifecycle management and task orchestration."
      ],
      env: ".NET Core, C#, Blazor, EF Core, Azure DevOps, Git"
    },
    {
      role: "Senior Web Developer / API Team Lead",
      company: "Technoheaven Consultancy",
      location: "Gujarat, India",
      period: "JUN 2017 – DEC 2019",
      summary: "Led a cross-functional team of 11 to deliver complex hotel API integrations for international markets.",
      tasks: [
        "Managed the full SDLC for 70+ third-party hotel API integrations.",
        "Mentored a development team of 11, implementing code reviews and design standards.",
        "Engineered custom API layers to facilitate seamless cross-selling for high-traffic travel portals.",
        "Directly advised clients on technical feasibility and architectural strategy."
      ],
      env: ".NET, C#, SQL Server, API Architecture, Leadership"
    },
    {
      role: "Software Developer",
      company: "Technoheaven Consultancy",
      location: "Gujarat, India",
      period: "JAN 2015 – JUN 2017",
      summary: "Specialized in hotel distribution APIs and relational database architecture.",
      tasks: [
        "Successfully integrated 20+ global hotel APIs and developed mobile-first backend services.",
        "Optimized relational database schemas and complex stored procedures in SQL Server.",
        "Collaborated with UX teams to deliver responsive travel search interfaces."
      ],
      env: ".NET, MVC, SQL Server, Knockout JS, Web API"
    }
  ];

  const achievements = [
    { 
      id: 'azure-devops',
      type: 'cert', 
      title: "Azure DevOps Fundamentals", 
      provider: "Udemy", 
      date: "May 2025", 
      link: "https://www.udemy.com/certificate/UC-88a87478-8c8c-4d57-8cad-2b65b85c2ca6/",
      curriculum: ["CI/CD Pipelines", "YAML Workflows", "Release Management", "Self-hosted Agents", "Artifacts"]
    },
    { 
      id: 'dotnet-angular',
      type: 'cert', 
      title: "ASP.NET Core and Angular", 
      provider: "Udemy", 
      date: "Apr 2023", 
      link: "https://www.udemy.com/certificate/UC-a83a0721-133e-4db0-9fff-c8122961fb9a/",
      curriculum: ["Full-stack Architecture", "SignalR", "JWT Auth", "Entity Framework Core"]
    },
    { 
      id: 'microservices',
      type: 'cert', 
      title: "Microservices Architecture", 
      provider: "Udemy", 
      date: "Aug 2022", 
      link: "https://www.udemy.com/certificate/UC-90036a18-ceaf-45fc-95cc-0b1a7378c12d/",
      curriculum: ["CQRS & MediatR", "RabbitMQ Messaging", "Yarp Gateway", "Event-Driven Design"]
    },
    { type: 'award', title: "Majestic Web and XML Expert", provider: "Technoheaven", date: "2021" },
    { type: 'award', title: "President’s Honor Roll", provider: "Niagara College Canada", date: "4x Terms" }
  ];

  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-blue-600/50 min-h-screen">
      {/* Premium Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <a href="#home" className="text-xl font-black tracking-tighter hover:text-blue-500 transition-colors">
            ANIMESH<span className="text-blue-600">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.25em] text-neutral-500">
            {['skills', 'experience', 'awards', 'contact'].map(id => (
              <a key={id} href={`#${id}`} className={`hover:text-white transition-all ${activeSection === id ? 'text-white' : ''}`}>
                {id}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-[90] transition-transform duration-500 p-12 flex flex-col justify-center ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {['skills', 'experience', 'awards', 'contact'].map(id => (
          <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)} className="text-6xl font-black tracking-tighter mb-8 hover:text-blue-600 uppercase">
            {id}
          </a>
        ))}
      </div>

      <main>
        {/* Refined Hero */}
        <section id="home" className="min-h-screen flex items-center justify-center px-8 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1d4ed815,transparent_50%)]" />
          <div className="max-w-5xl w-full relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-widest text-blue-400 mb-12">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Software Engineer II @ TripStack
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tightest leading-[0.85] mb-12">
              BUILDING <br />
              <span className="text-neutral-700">ROBUST APIS.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-16 leading-relaxed">
              9+ years of engineering high-scale .NET ecosystems, specializing in travel technology, microservices architecture, and legacy system modernization.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <a href={contactInfo.github} target="_blank" className="p-4 rounded-full bg-neutral-900 border border-white/5 hover:border-white/20 transition-all"><Github size={20} /></a>
                <a href={contactInfo.linkedin} target="_blank" className="p-4 rounded-full bg-neutral-900 border border-white/5 hover:border-white/20 transition-all"><Linkedin size={20} /></a>
                <a href={`tel:${contactInfo.phone}`} className="h-14 flex items-center gap-3 px-8 rounded-full bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] hover:bg-blue-500 transition-all">
                  <Phone size={16} /> Call Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="py-32 px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-600 mb-20 text-center">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillGroups.map((group, i) => (
                <div key={i} className="p-12 rounded-[2rem] bg-neutral-900/30 border border-white/5 hover:border-blue-600/30 transition-all group">
                  <div className="text-blue-600 mb-8 group-hover:scale-110 transition-transform">{group.icon}</div>
                  <h3 className="text-sm font-black uppercase tracking-widest mb-8">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, j) => (
                      <span key={j} className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded border border-white/5">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive Experience */}
        <section id="experience" className="py-32 px-8 bg-neutral-900/10">
          <div className="max-w-5xl mx-auto">
             <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-600 mb-20">Work History</h2>
             <div className="space-y-4">
               {experience.map((job, i) => (
                 <div key={i} className="p-10 md:p-16 rounded-[3rem] bg-black border border-white/5 hover:border-blue-600/20 transition-all group">
                   <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                     <div>
                       <p className="text-blue-500 font-black text-[10px] tracking-widest uppercase mb-4">{job.period}</p>
                       <h3 className="text-4xl font-black tracking-tighter mb-2 group-hover:text-blue-500 transition-colors">{job.role}</h3>
                       <div className="flex items-center gap-4 text-neutral-500 font-bold uppercase tracking-widest text-xs">
                         <span>{job.company}</span>
                         <span className="w-1 h-1 rounded-full bg-neutral-800" />
                         <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                       </div>
                     </div>
                   </div>
                   <p className="text-neutral-400 text-lg leading-relaxed mb-10 pb-10 border-b border-white/5 italic">"{job.summary}"</p>
                   <ul className="space-y-4">
                     {job.tasks.map((task, j) => (
                       <li key={j} className="flex gap-4 text-sm text-neutral-400 leading-relaxed group/item">
                         <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                         <span>{task}</span>
                       </li>
                     ))}
                   </ul>
                   <div className="mt-12 flex items-center gap-4 pt-8 border-t border-white/5">
                      <Terminal size={14} className="text-blue-600" />
                      <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-tighter">{job.env}</span>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Awards & Certs */}
        <section id="awards" className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
               <div>
                  <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-600 mb-16">Recognition & Certifications</h2>
                  <div className="space-y-4">
                    {achievements.map((item, i) => (
                      <div key={i} className="group">
                        <div 
                          onClick={() => item.type === 'cert' && setExpandedCert(expandedCert === item.id ? null : item.id)}
                          className={`p-8 rounded-3xl border transition-all cursor-pointer flex justify-between items-center ${expandedCert === item.id ? 'bg-blue-600 border-blue-500 text-white' : 'bg-neutral-900/50 border-white/5 hover:border-white/20'}`}
                        >
                          <div>
                            <h4 className="font-black text-sm tracking-tight">{item.title}</h4>
                            <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${expandedCert === item.id ? 'text-white/70' : 'text-neutral-500'}`}>{item.provider} • {item.date}</p>
                          </div>
                          {item.type === 'cert' ? <ChevronRight size={16} className={`transition-transform ${expandedCert === item.id ? 'rotate-90' : ''}`} /> : <Award size={16} className="text-blue-500" />}
                        </div>
                        {expandedCert === item.id && (
                          <div className="p-8 bg-neutral-900/50 border-x border-b border-white/5 rounded-b-3xl mt-[-2px] animate-in slide-in-from-top-4 duration-300">
                             <div className="flex flex-wrap gap-2 mb-6">
                               {item.curriculum.map((c, idx) => (
                                 <span key={idx} className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded border border-white/10">{c}</span>
                               ))}
                             </div>
                             <a href={item.link} target="_blank" className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-blue-500 hover:text-white transition-colors">
                               Verify Credential <ArrowUpRight size={14} />
                             </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
               </div>
               <div>
                  <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-600 mb-16">Academic Foundation</h2>
                  <div className="space-y-6">
                    <div className="p-12 rounded-[2.5rem] bg-neutral-900/30 border border-white/5">
                      <GraduationCap className="text-blue-600 mb-8" size={32} />
                      <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2 block">Post Graduate</span>
                      <h3 className="text-2xl font-black mb-1">Computer Programming</h3>
                      <p className="text-neutral-500 text-sm mb-6">Niagara College Canada</p>
                      <div className="inline-block px-4 py-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-[10px] font-black text-blue-400">
                        President’s Honor Roll: 4 Consecutive Terms
                      </div>
                    </div>
                    <div className="p-12 rounded-[2.5rem] bg-neutral-900/30 border border-white/5">
                      <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2 block">Bachelor of Engineering</span>
                      <h3 className="text-2xl font-black mb-1">Computer Science</h3>
                      <p className="text-neutral-500 text-sm">Gujarat Technological University</p>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </section>

        {/* Contact Final Section */}
        <section id="contact" className="py-40 px-8 bg-blue-600 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
           <div className="max-w-5xl mx-auto text-center relative z-10">
              <h2 className="text-7xl md:text-9xl font-black tracking-tightest mb-12">CONNECT.</h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                 <a href={`tel:${contactInfo.phone}`} className="h-20 flex items-center gap-4 px-12 rounded-full bg-white text-black font-black uppercase tracking-widest text-sm hover:scale-105 transition-all">
                    <Phone size={20} /> Call Now
                 </a>
                 <a href={contactInfo.linkedin} target="_blank" className="h-20 flex items-center gap-4 px-12 rounded-full bg-black text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all">
                    <Linkedin size={20} /> LinkedIn
                 </a>
              </div>
           </div>
        </section>
      </main>

      {/* Footer with Mail Button */}
      <footer className="py-32 px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-3xl font-black tracking-tighter mb-12">ANIMESH PATEL<span className="text-blue-600">.</span></h2>
           
           <button 
              onClick={copyEmail}
              className="group relative inline-flex flex-col items-center mb-24"
           >
              <div className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600 mb-4 group-hover:text-blue-500 transition-colors">Direct Inquiry</div>
              <div className="text-2xl md:text-4xl font-black tracking-tight hover:text-blue-500 transition-all border-b-2 border-white/5 pb-2">
                 {contactInfo.email}
              </div>
              <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-[10px] font-black uppercase rounded transition-all ${copySuccess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                Copied to Clipboard
              </div>
           </button>

           <div className="flex justify-center gap-16 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#experience" className="hover:text-white transition-colors">Work</a>
              <a href="#awards" className="hover:text-white transition-colors">Honors</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
           </div>
           
           <p className="mt-32 text-[10px] text-neutral-800 font-bold uppercase tracking-widest">
             © {new Date().getFullYear()} — Engineered in Ontario, Canada.
           </p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; background: #050505; color: white; -webkit-font-smoothing: antialiased; }
        .tracking-tightest { letter-spacing: -0.05em; }
        ::selection { background: #2563eb; color: white; }
      `}} />
    </div>
  );
};

export default App;