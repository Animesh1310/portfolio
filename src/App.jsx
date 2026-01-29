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
    // Inject Tailwind CDN if not already present
    if (!document.getElementById('tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'tailwind-cdn';
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'skills', 'experience', 'awards'];
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
      link: "https://www.udemy.com/certificate/UC-88a87478-8c8c-4d57-8cad-2b65b85c2ca6/?utm_campaign=email&utm_medium=email",
      curriculum: [
        "Opening Azure Devops Account & understanding 8 model diagram",
        "Mastering Boards, Repositories, Pipelines, Test Plans, Artifacts, and Agents",
        "Managing Azure DevOps lifecycle and Code check-in to Azure Repos",
        "Configuring Hosted parallelism, Self-hosted Agents, and Agent pools",
        "Writing YAML pipelines: Steps, Tasks, and Project settings",
        "Deploying to IIS via Release pipelines and Deployment groups",
        "Implementing YAML variables, Variable groups, and Multi-scalar execution",
        "Building CI (Continuous Integration/Development) workflows",
        "Unit testing in pipelines: Pass/Fail scenarios and coverage",
        "Structuring Stages, Jobs, Tasks & Steps with advanced dependencies",
        "Implementing Parallelism using agents: Best practices and Dos & Don'ts"
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
        "Full-stack development using .NET 8, EF Core, and Angular (v18)",
        "Advanced Angular structuring and best practices",
        "Integration of 3rd party components into Angular ecosystem",
        "Optimized workflow using Visual Studio Code",
        "Data transformation using AutoMapper",
        "Cloud-integrated drag-and-drop photo upload systems",
        "Private messaging and real-time notification systems (SignalR)",
        "Complex filtering, sorting, and paging implementation",
        "Secure Authentication using JWT tokens",
        "Global error handling for both API and SPA",
        "Data persistence using Entity Framework Core"
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
        "Microservices development using ASP.NET Core 8 Web API",
        "Implementation of Vertical Slice Architecture with Feature folders",
        "CQRS pattern using MediatR and FluentValidation",
        "Transactional Document DB on PostgreSQL via Marten library",
        "Distributed Caching with Redis for high performance",
        "Implementation of Proxy, Decorator, and Cache-aside patterns",
        "Sync & Async inter-service communication (gRPC & RabbitMQ)",
        "MassTransit abstraction for robust message-broker systems",
        "API Gateway implementation using Yarp Reverse Proxy",
        "Advanced Docker environments: Dockerfile and docker-compose",
        "Domain-Driven Design (DDD): Entities, Value Objects, Aggregates",
        "Global Exception Handling and Health Checks implementation"
      ]
    },
    { type: 'award', title: "Majestic Web and XML Expert", provider: "Technoheaven Consultancy", date: "Dec 2021" },
    { type: 'award', title: "President’s Honor Roll", provider: "Niagara College Canada", date: "Winter 2021" },
    { type: 'award', title: "President’s Honor Roll", provider: "Niagara College Canada", date: "Fall 2020" },
    { type: 'award', title: "President’s Honor Roll", provider: "Niagara College Canada", date: "Spring 2020" },
    { type: 'award', title: "President’s Honor Roll", provider: "Niagara College Canada", date: "Winter 2020" }
  ];

  const navLinks = [
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Awards', id: 'awards' }
  ];

  return (
    <div className="bg-[#000] text-[#f5f5f7] font-sans selection:bg-blue-500/30 min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 w-full flex justify-between items-center">
          <a href="#home" className="text-xl font-bold tracking-tight">Animesh<span className="text-blue-500">.</span></a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-10 text-[12px] font-medium tracking-wide uppercase text-neutral-400">
            {navLinks.map(link => (
              <a key={link.id} href={`#${link.id}`} className={`hover:text-white transition-colors ${activeSection === link.id ? 'text-white' : ''}`}>{link.name}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
             <div className="hidden sm:flex gap-3">
               <button onClick={copyEmail} className="relative bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-[10px] font-bold hover:bg-white/10 transition-all flex items-center gap-2 shrink-0">
                 {copySuccess ? 'Copied!' : 'Email'} <Copy size={12} />
               </button>
               <a href={`tel:${contactInfo.phone}`} className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-neutral-200 transition-all flex items-center gap-2 shrink-0">
                 Call <Phone size={12} />
               </a>
             </div>
             
             {/* Mobile Menu Button */}
             <button 
              className="lg:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
               {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`lg:hidden fixed inset-0 top-[64px] bg-black z-[-1] transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col p-8 gap-8">
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
              <button onClick={copyEmail} className="w-full justify-center bg-white/5 border border-white/10 text-white px-6 py-4 rounded-2xl font-bold flex items-center gap-2">
                 {copySuccess ? 'Copied Email!' : 'Copy Email'} <Copy size={18} />
              </button>
              <a href={`tel:${contactInfo.phone}`} className="w-full justify-center bg-white text-black px-6 py-4 rounded-2xl font-bold flex items-center gap-2 text-center">
                 Call Now <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center px-6 pt-20 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
        <div className="text-center w-full max-w-4xl relative z-10 mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-blue-400 animate-fade-in">
            Active in Ontario Tech
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 animate-slide-up">
            Software Engineer <br />
            <span className="text-neutral-500">9+ Years Experience.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-delayed">
            Microsoft Professional specializing in .NET Core, Microservices, and Database Optimization for global enterprises.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-delayed-more">
            <a href="#experience" className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-white/5">
              View Journey <ArrowUpRight size={16} />
            </a>
            <div className="flex gap-3">
              <a href={contactInfo.linkedin} target="_blank" className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors bg-white/5">
                <Linkedin size={20} />
              </a>
              <a href={contactInfo.github} target="_blank" className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors bg-white/5">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 md:py-32 px-6 w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 tracking-tight text-center sm:text-left">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-neutral-900/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{group.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.items.map((item, j) => (
                  <span key={j} className="text-[10px] font-bold px-3 py-1 bg-white/5 text-neutral-400 rounded-full border border-white/5 transition-colors group-hover:text-white group-hover:border-white/20">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 md:py-32 px-6 bg-neutral-900/20 w-full flex flex-col items-center">
        <div className="max-w-6xl w-full mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Experience</h2>
            <p className="text-neutral-500 text-base md:text-lg max-w-sm">9+ years of engineering robust solutions across diverse industries.</p>
          </div>

          <div className="space-y-12 w-full">
            {experience.map((job, i) => (
              <div key={i} className="relative bg-neutral-900/60 border border-white/5 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 hover:bg-neutral-900/80 transition-all duration-700 w-full overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <span className="text-blue-500 font-black text-[10px] tracking-[0.3em] uppercase block mb-3">{job.period}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{job.role}</h3>
                    <p className="text-lg text-neutral-400 font-medium mb-4">{job.company}</p>
                    <div className="flex items-center gap-2 text-neutral-500 text-sm italic">
                      <MapPin size={14} /> {job.location}
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8 italic">"{job.summary}"</p>
                    <ul className="space-y-4 mb-8">
                      {job.tasks.map((task, j) => (
                        <li key={j} className="flex gap-4 text-sm text-neutral-400">
                          <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2 items-center">
                      <Terminal size={14} className="text-blue-500" />
                      <span className="text-[11px] font-mono text-neutral-600 uppercase tracking-widest break-all">{job.env}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="awards" className="py-24 md:py-32 px-6 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-12 tracking-tight flex items-center gap-4 text-white">
              <Award className="text-blue-500" /> Certifications & Awards
            </h2>
            <div className="space-y-4 w-full">
              {achievements.map((item, i) => (
                <div key={i} className="flex flex-col w-full">
                  <div className={`p-6 rounded-2xl sm:rounded-3xl border transition-all flex justify-between items-center group cursor-pointer ${item.type === 'cert' ? 'bg-neutral-900 border-white/5 hover:bg-neutral-800' : 'bg-blue-600/5 border-blue-500/20'} ${expandedCert === item.id ? 'rounded-b-none border-b-transparent' : ''}`}
                       onClick={() => item.type === 'cert' && setExpandedCert(expandedCert === item.id ? null : item.id)}>
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2">
                        <h4 className={`font-bold text-sm md:text-base ${item.type === 'award' ? 'text-blue-400 italic' : 'text-white'}`}>{item.title}</h4>
                        {item.type === 'cert' && <Info size={14} className={`transition-colors ${expandedCert === item.id ? 'text-blue-500' : 'text-neutral-600'}`} />}
                      </div>
                      <p className="text-xs text-neutral-500 mt-1">{item.provider}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="hidden sm:inline text-[10px] font-bold text-neutral-600 uppercase">{item.date}</span>
                      {item.type === 'cert' && (
                        <div className="flex items-center gap-3">
                            <a href={item.link} target="_blank" onClick={(e) => e.stopPropagation()} className="p-2 bg-white/5 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                                <LinkIcon size={14} />
                            </a>
                            <ChevronRight size={14} className={`text-neutral-700 transition-transform duration-300 ${expandedCert === item.id ? 'rotate-90 text-blue-500' : ''}`} />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {item.type === 'cert' && expandedCert === item.id && (
                    <div className="bg-neutral-800/40 border-x border-b border-white/5 rounded-b-3xl p-6 sm:p-8 space-y-4 animate-slide-down w-full overflow-hidden">
                      <p className="text-[10px] font-black uppercase tracking-widest text-blue-500/60 mb-4">Core Curriculum & Mastery</p>
                      <ul className="grid grid-cols-1 gap-3">
                        {item.curriculum.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[12px] text-neutral-400 leading-relaxed">
                            <div className="w-1 h-1 rounded-full bg-blue-500/50 mt-2 shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 mt-4 border-t border-white/5">
                        <a href={item.link} target="_blank" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 text-xs font-bold text-blue-500 hover:text-blue-400">
                          Verify Official Certificate <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="self-start w-full">
            <h2 className="text-3xl font-bold mb-12 tracking-tight flex items-center gap-4 text-white">
              <GraduationCap className="text-blue-500" /> Academic Background
            </h2>
            <div className="space-y-6 w-full">
              <div className="p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-neutral-900 border border-white/5 w-full">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-2">Post Graduate Diploma</span>
                <h3 className="text-xl font-bold text-white mb-1">Computer Programming</h3>
                <div className="flex justify-between items-start mb-4">
                    <p className="text-neutral-400">Niagara College Canada</p>
                    <span className="text-[10px] font-bold text-neutral-600 uppercase">2020-2021</span>
                </div>
                <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-neutral-500 leading-relaxed italic">President’s Honor Roll: 4 Consecutive Terms</p>
                </div>
              </div>
              <div className="p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-neutral-900 border border-white/5 w-full">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-2">Bachelor of Engineering</span>
                <h3 className="text-xl font-bold text-white mb-1">Computer Science/Engineering</h3>
                <div className="flex justify-between items-start">
                    <p className="text-neutral-400">Gujarat Technological University</p>
                    <span className="text-[10px] font-bold text-neutral-600 uppercase">2010-2014</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 text-center w-full bg-black">
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-neutral-400 text-sm mb-2 font-bold uppercase tracking-widest">Animesh Patel</p>
          <p className="text-neutral-600 text-xs mb-8">{contactInfo.phone}</p>
          <div className="flex justify-center flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-500 transition-colors">Email</a>
            <a href={contactInfo.linkedin} target="_blank" className="hover:text-blue-500 transition-colors">LinkedIn</a>
            <a href={contactInfo.github} target="_blank" className="hover:text-blue-500 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-down { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1.5s ease forwards; }
        .animate-slide-up { animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-down { animation: slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-delayed { animation: fade-in 1.5s ease 0.5s forwards; opacity: 0; }
        .animate-fade-in-delayed-more { animation: fade-in 1.5s ease 1s forwards; opacity: 0; }
        html { scroll-behavior: smooth; overflow-x: hidden; width: 100%; }
        body { background: black !important; margin: 0; padding: 0; width: 100%; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        * { box-sizing: border-box; }
      `}} />
    </div>
  );
};

export default App;