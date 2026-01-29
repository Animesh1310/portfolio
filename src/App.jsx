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
  ArrowUpRight,
  Cpu,
  Settings,
  Info,
  ChevronRight,
  Copy,
  Menu,
  X,
  ExternalLink as LinkIcon
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
      title: "Languages & Frameworks", 
      icon: <Code2 size={20} />,
      items: ["ASP.NET Core", "C#", ".NET Framework", "MVC", "Blazor", "AngularJS", "Knockout JS", "Web API", "WCF", "Razor Pages", "HTML", "CSS", "JavaScript"] 
    },
    { 
      title: "Databases & Reporting", 
      icon: <Database size={20} />,
      items: ["MS SQL Server", "Oracle 12c", "PostgreSQL", "MongoDB", "SQLite", "Crystal Reports", "LINQ", "ADO.NET", "Entity Framework Core"] 
    },
    { 
      title: "Tools & DevOps", 
      icon: <Settings size={20} />,
      items: ["Agile/Scrum", "Azure DevOps", "Git", "GitHub", "Postman", "SOAP UI", "Fiddler", "IIS", "Visual Studio", "CI/CD"] 
    },
    { 
      title: "Additional Skills", 
      icon: <Cpu size={20} />,
      items: ["Object Oriented Design", "N-tier Architecture", "Microservices", "CQRS", "DDD", "Unit Testing", "Mentorship", "Code Reviews", "Requirement Analysis"] 
    }
  ];

  const experience = [
    {
      role: "Software Engineer II",
      company: "Etraveli Group (TripStack)",
      location: "Toronto, ON (Remote)",
      period: "DEC 2024 – PRESENT",
      summary: "TripStack is a global travel technology leader providing B2B flight booking and virtual interlining solutions through high-performance APIs.",
      tasks: [
        "Develop full-stack travel tech solutions for post-booking workflows.",
        "Build high-performance backend APIs integrating with airline and OTA systems via REST/SOAP.",
        "Contribute to a Chrome extension for booking updates and itinerary changes.",
        "Write unit and integration tests for CI/CD pipelines in GitHub.",
        "Debug production issues using Postman and Fiddler in an Agile environment."
      ],
      env: "C#, .NET, REST/SOAP, JavaScript, AngularJS, SQL Server, GitHub, CI/CD"
    },
    {
      role: "Programmer Analyst",
      company: "E. S. Fox Limited",
      location: "Niagara Falls, ON",
      period: "JUN 2021 – FEB 2022 | MAR 2024 – NOV 2024",
      summary: "A leading Canadian construction and engineering company specializing in design-build services.",
      tasks: [
        "Enhanced applications using Oracle Developer 12c (Forms, Reports, PL/SQL).",
        "Designed Oracle Forms, Crystal Reports, triggers, and PL/SQL packages.",
        "Tuned Oracle procedures and performed quality testing for production modules.",
        "Provided support for enterprise construction management modules."
      ],
      env: "Oracle Developer 12c, Oracle Forms & Reports, PL/SQL, Crystal Reports"
    },
    {
      role: "Software Developer",
      company: "PEER Group Inc",
      location: "Kitchener, ON",
      period: "FEB 2022 – FEB 2024",
      summary: "Delivering innovative SEMI compliant testing and automation services for manufacturing clients.",
      tasks: [
        "Coded application components using C#, .NET Core, and Blazor Framework.",
        "Participated in installation and integration of software into customer systems.",
        "Adhered to documentation standards and performed rigorous unit testing.",
        "Managed software enhancements through Agile methodology and Azure DevOps."
      ],
      env: ".NET Core, C#, Blazor, SQL Server, Entity Framework, Azure DevOps, Git"
    },
    {
      role: "Senior Web Developer / API Team Lead",
      company: "Technoheaven Consultancy Pvt. Ltd",
      location: "Gujarat, India",
      period: "JUN 2017 – DEC 2019",
      summary: "Led a team of 11 members to integrate 70+ third-party hotel APIs for a global IT consulting firm.",
      tasks: [
        "Managed and executed web API development projects, coordinating timelines and quality standards.",
        "Mentored junior developers, conducted code reviews, and ensured adherence to coding standards.",
        "Designed and implemented APIs for client websites to enable cross-selling of hotel bookings.",
        "Acted as a liaison between clients and technical teams to ensure clear communication."
      ],
      env: ".NET, C#, SQL Server, API Integration, Mentorship, Project Management"
    },
    {
      role: "Software Developer",
      company: "Technoheaven Consultancy Pvt. Ltd",
      location: "Gujarat, India",
      period: "JAN 2015 – JUN 2017",
      summary: "Foundational role focusing on hotel API integration and full-cycle web development.",
      tasks: [
        "Integrated 20+ third-party hotel APIs and developed APIs for mobile consumption.",
        "Optimized internal systems, stored procedures, and SQL Server databases.",
        "Created relational databases, tables, stored procedures, and functions.",
        "Participated in the full development life cycle: analysis, coding, debugging, and testing."
      ],
      env: ".NET Framework, C#, ASP.NET MVC, Web API, SQL Server, AngularJS, Knockout JS"
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
      curriculum: [
        "Mastering Boards, Repositories, Pipelines, Test Plans, and Artifacts",
        "Configuring Self-hosted Agents and Agent pools",
        "Writing YAML pipelines for CI/CD workflows",
        "Deploying to IIS via Release pipelines",
        "Unit testing in pipelines and coverage reporting"
      ]
    },
    { 
      id: 'dotnet-angular',
      type: 'cert', 
      title: "ASP.NET Core and Angular", 
      provider: "Udemy", 
      date: "Apr 2023", 
      link: "https://www.udemy.com/certificate/UC-a83a0721-133e-4db0-9fff-c8122961fb9a/",
      curriculum: [
        "Full-stack development using .NET 8 and Angular",
        "SignalR for real-time notifications",
        "Entity Framework Core persistence",
        "JWT Authentication and Global Exception Handling"
      ]
    },
    { 
      id: 'microservices',
      type: 'cert', 
      title: "Microservices Architecture on .NET", 
      provider: "Udemy", 
      date: "Aug 2022", 
      link: "https://www.udemy.com/certificate/UC-90036a18-ceaf-45fc-95cc-0b1a7378c12d/",
      curriculum: [
        "CQRS pattern with MediatR",
        "Marten for PostgreSQL Document DB",
        "MassTransit for RabbitMQ messaging",
        "API Gateway with Yarp Reverse Proxy"
      ]
    },
    { type: 'award', title: "Majestic Web and XML Expert", provider: "Technoheaven Consultancy", date: "Dec 2021" },
    { type: 'award', title: "President’s Honor Roll", provider: "Niagara College Canada", date: "Multiple Terms" }
  ];

  const navLinks = [
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Awards', id: 'awards' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className="bg-black text-white font-sans selection:bg-blue-500/30 w-full min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-black tracking-tighter">ANIMESH<span className="text-blue-600">.</span></a>
          
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400">
            {navLinks.map(link => (
              <a key={link.id} href={`#${link.id}`} className={`hover:text-white transition-colors ${activeSection === link.id ? 'text-white' : ''}`}>{link.name}</a>
            ))}
          </div>

          <button 
            className="lg:hidden p-2.5 bg-white/5 rounded-xl border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 top-[72px] bg-black z-50 transition-all duration-500 flex flex-col ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className="flex flex-col p-8 gap-6">
                {navLinks.map(link => (
                    <a key={link.id} href={`#${link.id}`} onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black tracking-tighter hover:text-blue-500">{link.name}</a>
                ))}
            </div>
        </div>
      </nav>

      <main className="w-full">
        {/* Hero */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-5xl w-full text-center z-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-blue-500">
                Software Engineer II @ TripStack
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              ENGINEERING <br />
              <span className="text-neutral-600">SCALABLE SYSTEMS.</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              9+ years building high-performance .NET applications, microservices, and complex API integrations for the global travel industry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#experience" className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-transform">
                Browse Experience
              </a>
              <div className="flex gap-2">
                <a href={contactInfo.github} target="_blank" className="p-5 rounded-full bg-neutral-900 border border-white/5 hover:border-blue-500/50 transition-all"><Github size={20} /></a>
                <a href={`tel:${contactInfo.phone}`} className="p-5 rounded-full bg-blue-600 text-white border border-blue-500/50 hover:bg-blue-500 transition-all flex items-center gap-2 px-8">
                  <Phone size={18} /> <span className="text-[11px] font-black uppercase tracking-widest">Call Me</span>
                </a>
                <a href={contactInfo.linkedin} target="_blank" className="p-5 rounded-full bg-neutral-900 border border-white/5 hover:border-blue-500/50 transition-all"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">TECHNOLOGICAL STACK</h2>
                <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillGroups.map((group, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/5 hover:border-white/20 transition-all group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                    {group.icon}
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-neutral-400 group-hover:text-white transition-colors">{group.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {group.items.map((item, j) => (
                      <span key={j} className="text-[10px] font-bold px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 whitespace-nowrap">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-32 px-6 bg-neutral-900/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-20 text-center">SELECTED WORKS</h2>
            <div className="space-y-6">
              {experience.map((job, i) => (
                <div key={i} className="p-8 md:p-14 rounded-[3rem] bg-black border border-white/5 hover:border-blue-500/30 transition-all">
                  <div className="flex flex-col lg:flex-row justify-between gap-12">
                    <div className="lg:w-1/3">
                      <span className="text-blue-500 font-black text-[10px] tracking-widest uppercase mb-4 block">{job.period}</span>
                      <h3 className="text-3xl font-black tracking-tighter mb-2">{job.role}</h3>
                      <p className="text-neutral-500 font-bold text-sm uppercase tracking-widest mb-6">{job.company}</p>
                      <div className="flex items-center gap-2 text-neutral-600 text-xs font-bold uppercase tracking-widest">
                        <MapPin size={12} /> {job.location}
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <p className="text-neutral-300 text-lg leading-relaxed mb-8 italic border-l-2 border-blue-600 pl-6">"{job.summary}"</p>
                      <ul className="space-y-4 mb-10">
                        {job.tasks.map((task, j) => (
                          <li key={j} className="flex gap-4 text-sm text-neutral-400 leading-relaxed">
                            <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-8 border-t border-white/5 flex flex-wrap gap-3 items-center opacity-60">
                        <Terminal size={14} className="text-blue-500" />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-tighter break-all">{job.env}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards/Education */}
        <section id="awards" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-3xl font-black tracking-tighter mb-12 flex items-center gap-4">
                  <Award className="text-blue-600" /> RECOGNITIONS
                </h2>
                <div className="space-y-4">
                  {achievements.map((item, i) => (
                    <div key={i} className="group">
                      <div 
                        className={`p-6 rounded-3xl border transition-all cursor-pointer flex justify-between items-center ${expandedCert === item.id ? 'bg-neutral-900 border-blue-500/50' : 'bg-neutral-900/50 border-white/5 hover:border-white/20'}`}
                        onClick={() => item.type === 'cert' && setExpandedCert(expandedCert === item.id ? null : item.id)}
                      >
                        <div>
                          <h4 className={`font-bold text-sm ${item.type === 'award' ? 'text-blue-400' : 'text-white'}`}>{item.title}</h4>
                          <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mt-1">{item.provider}</p>
                        </div>
                        {item.type === 'cert' && <ChevronRight size={16} className={`transition-transform ${expandedCert === item.id ? 'rotate-90 text-blue-500' : 'text-neutral-700'}`} />}
                      </div>
                      {expandedCert === item.id && (
                        <div className="p-8 bg-neutral-900/30 border-x border-b border-white/10 rounded-b-3xl mt-[-20px] pt-[30px] animate-in fade-in slide-in-from-top-2 duration-300">
                           <ul className="space-y-3">
                              {item.curriculum.map((c, idx) => (
                                <li key={idx} className="text-xs text-neutral-400 flex items-start gap-3">
                                  <div className="w-1 h-1 rounded-full bg-blue-600 mt-1.5 shrink-0" /> {c}
                                </li>
                              ))}
                           </ul>
                           <a href={item.link} target="_blank" className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-blue-500 mt-6 hover:underline">
                              Verify Certificate <ExternalLink size={12} />
                           </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tighter mb-12 flex items-center gap-4">
                  <GraduationCap className="text-blue-600" /> EDUCATION
                </h2>
                <div className="space-y-6">
                  <div className="p-10 rounded-[3rem] bg-neutral-900/50 border border-white/5">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">Post Graduate</span>
                    <h3 className="text-2xl font-black tracking-tight mb-1">Computer Programming</h3>
                    <p className="text-neutral-400 text-sm mb-6">Niagara College Canada</p>
                    <div className="p-4 rounded-xl bg-blue-600/5 border border-blue-500/20 text-[11px] font-bold text-blue-400 italic">
                      President’s Honor Roll: 4 Consecutive Terms
                    </div>
                  </div>
                  <div className="p-10 rounded-[3rem] bg-neutral-900/50 border border-white/5">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">Bachelor of Engineering</span>
                    <h3 className="text-2xl font-black tracking-tight mb-1">Computer Science</h3>
                    <p className="text-neutral-400 text-sm">Gujarat Technological University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-blue-600 text-white overflow-hidden relative">
           <div className="max-w-5xl mx-auto text-center relative z-10">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12">GET IN TOUCH.</h2>
              <p className="text-xl md:text-2xl font-medium opacity-80 mb-16 max-w-2xl mx-auto">
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <button 
                    onClick={copyEmail}
                    className="group bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-[12px] flex items-center gap-4 hover:scale-105 transition-all"
                  >
                    {copySuccess ? 'COPIED TO CLIPBOARD' : 'SEND AN EMAIL'} 
                    <Mail size={18} className="group-hover:rotate-12 transition-transform" />
                  </button>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-[12px] flex items-center gap-4 hover:scale-105 transition-all"
                  >
                    CALL DIRECT <Phone size={18} />
                  </a>
              </div>
           </div>
           {/* Decorative background text */}
           <div className="absolute bottom-[-10%] left-[-5%] text-[20vw] font-black opacity-[0.03] select-none pointer-events-none">HELLO</div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-black tracking-tighter mb-2">ANIMESH PATEL</h2>
            <p className="text-neutral-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-12">Software Engineer • Ontario, Canada</p>
            
            <div className="flex justify-center gap-6 mb-20">
                <a href={contactInfo.linkedin} target="_blank" className="p-4 rounded-full border border-white/5 hover:bg-blue-600 hover:border-blue-600 transition-all"><Linkedin size={20} /></a>
                <a href={contactInfo.github} target="_blank" className="p-4 rounded-full border border-white/5 hover:bg-neutral-800 transition-all"><Github size={20} /></a>
            </div>

            <div className="flex justify-center flex-wrap gap-12 text-[11px] font-black uppercase tracking-widest text-neutral-500">
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#awards" className="hover:text-white transition-colors">Awards</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="mt-20 flex flex-col items-center gap-4">
                <button onClick={copyEmail} className="text-[10px] text-blue-500 font-black uppercase tracking-widest flex items-center gap-2 hover:opacity-70">
                    <Mail size={12} /> {contactInfo.email}
                </button>
                <div className="text-[10px] text-neutral-800 font-bold uppercase tracking-widest">
                    © {new Date().getFullYear()} — Engineering since 2015.
                </div>
            </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; overflow-x: hidden; width: 100%; background: black; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: black; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #2a2a2a; }
      `}} />
    </div>
  );
};

// Helper for Missing Icon
const ExternalLink = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

export default App;