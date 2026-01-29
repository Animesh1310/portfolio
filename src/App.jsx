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
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Briefcase,
  CheckCircle2,
  Cpu,
  Globe,
  Layout,
  Server,
  Wrench,
  BookOpen
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedCert, setExpandedCert] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'skills', 'experience', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = {
    name: "Animesh Patel",
    location: "Niagara Falls, Ontario",
    email: "animeshpatel619@gmail.com",
    phone: "(+1) 437 985 2662",
    linkedin: "https://www.linkedin.com/in/animeshpatel",
    github: "https://github.com/Animesh1310"
  };

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      color: "bg-[#4285F4]", // Google Blue
      icon: <Code2 className="text-white" size={20} />,
      items: ["ASP.Net", "ASP.NET Core", "C#", "MVC", "Blazor", "JavaScript", "AngularJS", "Knockout JS", "HTML", "CSS", "Razor Pages", "WCF"]
    },
    {
      title: "Databases & Reporting",
      color: "bg-[#EA4335]", // Google Red
      icon: <Database className="text-white" size={20} />,
      items: ["MS SQL Server", "SQLite", "Oracle 12c", "MongoDB", "Crystal Reports", "LINQ", "ADO.NET"]
    },
    {
      title: "Tools & DevOps",
      color: "bg-[#FBBC05]", // Google Yellow
      icon: <Wrench className="text-white" size={20} />,
      items: ["Agile/Scrum", "Azure DevOps", "Git", "GitHub", "Postman", "SOAP UI", "Visual Studio/Code"]
    },
    {
      title: "Advanced Stack",
      color: "bg-[#34A853]", // Google Green
      icon: <Cpu className="text-white" size={20} />,
      items: [".NET 8", "C# 12", "Angular v18", "Microservices", "CQRS", "DDD", "Clean Architecture", "JWT", "RabbitMQ", "Docker Compose"]
    }
  ];

  const experience = [
    {
      role: "Software Engineer II",
      company: "Etraveli Group (TripStack)",
      location: "Toronto, ON (Remote)",
      period: "Dec 2024 - Present",
      description: "TripStack, part of the Etraveli Group, is a Toronto-based global travel technology company providing B2B flight booking and virtual interlining solutions through scalable, high-performance APIs.",
      tasks: [
        "Develop and maintain full-stack travel tech solutions supporting post-booking workflows for global travel agents.",
        "Build high-performance backend APIs using C# and .NET, integrating with third-party airline and OTA systems via REST and SOAP.",
        "Contribute to a Chrome extension enabling agents to manage booking updates, cancellations, and itinerary changes.",
        "Implement frontend features using JavaScript, HTML, CSS, and AngularJS.",
        "Write unit and integration tests to ensure code quality, and collaborate with CI/CD pipelines in GitHub for code review and continuous integration.",
        "Debug production issues using Postman and Fiddler, and collaborate closely with QA and product teams in an Agile/Scrum environment."
      ],
      stack: "C#, .NET, REST/SOAP APIs, JavaScript, AngularJS, SQL Server, GitHub, CI/CD, Postman, Fiddler"
    },
    {
      role: "Programmer Analyst",
      company: "E. S. Fox Limited",
      location: "Niagara Falls, ON",
      period: "June 2021 - Feb 2022, March 2024 - Nov 2024",
      description: "E.S. Fox Limited is a leading Canadian construction and engineering company specializing in general contracting, construction management, and design-build services.",
      tasks: [
        "Enhanced and modified existing applications using Oracle Developer 12c toolset (Forms, Reports, PL/SQL, SQL).",
        "Provided support for existing application modules and troubleshot production problems.",
        "Designed and developed Oracle Forms, Crystal Reports, triggers, views, PL/SQL packages and procedures.",
        "Wrote high-quality and well-documented code, performed quality testing, and tuned Oracle Forms, Reports, and PL/SQL procedures."
      ],
      stack: "Oracle Developer 12c, Forms & Reports, PL/SQL, Crystal Reports"
    },
    {
      role: "Software Developer",
      company: "PEER Group Inc",
      location: "Kitchener, ON",
      period: "FEB 2022 - FEB 2024",
      description: "PEER Group is a technology solutions provider delivering innovative SEMI compliant testing, automation, and calibration services.",
      tasks: [
        "Designed, developed, and coded application components using C#, .NET Core, Blazor Framework in Agile methodology and Azure DevOps.",
        "Enhanced and maintained existing software through modifications as needed and participated in bug fixes.",
        "Engaged in installation, implementation, and integration of software into customer systems.",
        "Responsible for unit testing and adhered to all code and documentation standards."
      ],
      stack: ".NET Core, C#, Blazor, SQL Server, Entity Framework, Azure DevOps"
    },
    {
      role: "Senior Web Developer / API Team Lead",
      company: "Technoheaven Consultancy Pvt. Ltd",
      location: "Gujarat, India",
      period: "JUN 2017 - DEC 2019",
      description: "Global IT consulting firm specializing in online travel and hospitality platforms, delivering high-performance applications.",
      tasks: [
        "Led a team of 11 members to integrate 70+ third-party hotel APIs, ensuring seamless functionality and performance.",
        "Managed and executed web API development projects, coordinating timelines, deliverables, and quality standards.",
        "Mentored junior developers, conducted code reviews, and ensured adherence to coding standards.",
        "Acted as a liaison between clients and technical teams to ensure clear communication and requirement understanding."
      ],
      stack: ".NET, C#, SQL Server, API Architecture, Team Leadership"
    },
    {
      role: "Software Developer",
      company: "Technoheaven Consultancy Pvt. Ltd",
      location: "Gujarat, India",
      period: "JAN 2015 - JUN 2017",
      tasks: [
        "Integrated 20+ third-party hotel APIs and developed APIs for mobile app consumption.",
        "Designed, developed, optimized, and supported web applications using SQL, C#, ASP.NET, CSS, HTML, AngularJS, JavaScript, Knockout JS.",
        "Created relational databases, tables, stored procedures, and functions in SQL Server.",
        "Participated in the full development life cycle: analysis, coding, debugging, documentation, testing, and deployment."
      ],
      stack: ".NET Framework, C#, ASP.NET MVC, SQL Server, AngularJS, Knockout JS"
    }
  ];

  const certifications = [
    {
      id: "azure",
      title: "Azure DevOps Fundamentals for Beginners and Professionals",
      provider: "Udemy",
      date: "May 2025",
      link: "https://www.udemy.com/certificate/UC-88a87478-8c8c-4d57-8cad-2b65b85c2ca6/",
      learned: ["CI/CD Pipelines", "YAML Workflows", "Release Management", "Self-hosted Agents", "Artifacts Management"]
    },
    {
      id: "angular",
      title: "Building an App with ASP.NET Core and Angular",
      provider: "Udemy",
      date: "Apr 2023",
      link: "https://www.udemy.com/certificate/UC-a83a0721-133e-4db0-9fff-c8122961fb9a/",
      learned: ["Full-stack Architecture", "SignalR Real-time communication", "JWT Authentication", "Entity Framework Core Integration"]
    },
    {
      id: "micro",
      title: "Microservices Architecture and Implementation on .NET 5",
      provider: "Udemy",
      date: "Aug 2022",
      link: "https://www.udemy.com/certificate/UC-90036a18-ceaf-45fc-95cc-0b1a7378c12d/",
      learned: ["CQRS & MediatR Pattern", "RabbitMQ Message Broker", "YARP Reverse Proxy", "Event-Driven Architecture"]
    }
  ];

  return (
    <div className="bg-[#F8F9FA] text-[#202124] font-['Roboto',sans-serif] min-h-screen">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="w-2 h-2 rounded-full bg-[#4285F4]"></div>
              <div className="w-2 h-2 rounded-full bg-[#EA4335]"></div>
              <div className="w-2 h-2 rounded-full bg-[#FBBC05]"></div>
              <div className="w-2 h-2 rounded-full bg-[#34A853]"></div>
            </div>
            <span className="font-medium text-xl tracking-tight">Animesh Patel</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['home', 'skills', 'experience', 'education', 'contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className={`capitalize transition-colors hover:text-[#4285F4] ${activeSection === item ? 'text-[#4285F4]' : 'text-[#5F6368]'}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 bg-white border border-[#DADCE0] rounded-full shadow-sm text-sm font-medium text-[#5F6368]">
            Software Engineer II @ Etraveli Group
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Engineering robust solutions with <br className="hidden md:block" />
            <span className="text-[#4285F4]">9+ years</span> of expertise.
          </h1>
          <p className="text-lg md:text-xl text-[#5F6368] mb-10 max-w-2xl mx-auto leading-relaxed">
            Experienced Microsoft Professional specializing in ASP.NET Core, Microservices, and Database Optimization. Delivering high-quality, maintainable software across Canada and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${contactInfo.phone}`} className="px-8 py-3 bg-[#4285F4] text-white rounded-lg font-medium shadow-lg hover:bg-[#1C3AA9] transition-all flex items-center gap-2">
              <Phone size={18} /> Call Me Now
            </a>
            <a href={`mailto:${contactInfo.email}`} className="px-8 py-3 bg-white border border-[#DADCE0] text-[#3C4043] rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center gap-2">
              <Mail size={18} /> Send Email
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Skillset</h2>
            <div className="w-16 h-1 bg-[#4285F4] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => (
              <div key={i} className="bg-[#F8F9FA] rounded-2xl p-8 border border-[#DADCE0] hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${cat.color} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold mb-6">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, j) => (
                    <span key={j} className="text-xs font-medium px-3 py-1.5 bg-white border border-[#DADCE0] rounded-md text-[#3C4043]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
            <div className="w-16 h-1 bg-[#EA4335] mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8">
            {experience.map((job, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 md:p-10 border border-[#DADCE0] shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#EA4335]"></div>
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#202124]">{job.role}</h3>
                    <p className="text-[#4285F4] font-medium flex items-center gap-2 mt-1">
                      <Briefcase size={16} /> {job.company}
                    </p>
                  </div>
                  <div className="text-right md:text-right text-sm">
                    <p className="font-bold text-[#202124] uppercase tracking-wider">{job.period}</p>
                    <p className="text-[#5F6368] flex items-center justify-end gap-1 mt-1">
                      <MapPin size={14} /> {job.location}
                    </p>
                  </div>
                </div>
                {job.description && (
                  <p className="text-[#5F6368] text-sm italic mb-6 border-l-2 border-[#EA4335]/20 pl-4">
                    {job.description}
                  </p>
                )}
                <ul className="space-y-4 mb-8">
                  {job.tasks.map((task, j) => (
                    <li key={j} className="flex gap-3 text-[#3C4043] text-[15px] leading-relaxed">
                      <CheckCircle2 size={18} className="text-[#34A853] shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
                {job.stack && (
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#5F6368] uppercase tracking-widest">
                      <Terminal size={14} /> Technology Stack: {job.stack}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Awards & Certifications</h2>
            <div className="w-16 h-1 bg-[#FBBC05] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 mb-12">
            {certifications.map((cert) => (
              <div key={cert.id} className="border border-[#DADCE0] rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-full bg-[#FBBC05]/10 flex items-center justify-center text-[#FBBC05]">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#202124]">{cert.title}</h4>
                      <p className="text-sm text-[#5F6368]">{cert.provider} • {cert.date}</p>
                    </div>
                  </div>
                  {expandedCert === cert.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedCert === cert.id && (
                  <div className="p-6 bg-[#F8F9FA] border-t border-[#DADCE0] animate-fadeIn">
                    <p className="text-xs font-bold text-[#5F6368] uppercase tracking-widest mb-4">What I Learned:</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.learned.map((item, idx) => (
                        <span key={idx} className="bg-white border border-[#DADCE0] px-3 py-1.5 rounded-lg text-sm font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                    <a href={cert.link} target="_blank" className="text-[#4285F4] text-sm font-bold flex items-center gap-1 hover:underline">
                      Verify Credential <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-[#F8F9FA] border border-[#DADCE0] rounded-2xl">
              <h4 className="text-[#FBBC05] font-black text-xs uppercase tracking-widest mb-4">Niagara College Canada</h4>
              <h3 className="text-xl font-bold mb-2">President's Honor Roll</h3>
              <p className="text-sm text-[#5F6368]">Achieved for 4 consecutive terms: Winter 2020, Spring 2020, Fall 2020, Winter 2021</p>
            </div>
            <div className="p-8 bg-[#F8F9FA] border border-[#DADCE0] rounded-2xl">
              <h4 className="text-[#FBBC05] font-black text-xs uppercase tracking-widest mb-4">Technoheaven Consultancy</h4>
              <h3 className="text-xl font-bold mb-2">Majestic Web and XML Expert</h3>
              <p className="text-sm text-[#5F6368]">Awarded in December 2021 for outstanding API integration and web performance engineering.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <div className="w-16 h-1 bg-[#34A853] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#DADCE0] shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-[#34A853]/10 flex items-center justify-center text-[#34A853] shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#34A853] uppercase tracking-widest mb-1">Post Graduate Diploma</p>
                <h3 className="text-lg font-bold mb-1">Computer Programming</h3>
                <p className="text-[#5F6368] text-sm mb-2">Niagara College Canada</p>
                <p className="text-[#9AA0A6] text-xs font-medium uppercase">Welland, Ontario • 2020-2021</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#DADCE0] shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-[#4285F4]/10 flex items-center justify-center text-[#4285F4] shrink-0">
                <BookOpen size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#4285F4] uppercase tracking-widest mb-1">Bachelor of Engineering</p>
                <h3 className="text-lg font-bold mb-1">Computer Science/Engineering</h3>
                <p className="text-[#5F6368] text-sm mb-2">Gujarat Technological University</p>
                <p className="text-[#9AA0A6] text-xs font-medium uppercase">Ahmedabad, India • 2010-2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white border-t border-[#DADCE0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's connect</h2>
          <p className="text-[#5F6368] mb-12 max-w-xl mx-auto leading-relaxed">
            I am currently available for new opportunities and collaborations in Canada. Reach out to discuss how I can help your team build scalable .NET solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a href={`mailto:${contactInfo.email}`} className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#DADCE0] hover:border-[#4285F4] transition-all group text-center">
              <Mail className="mx-auto mb-4 text-[#4285F4]" size={28} />
              <h4 className="font-bold mb-1">Email</h4>
              <p className="text-sm text-[#5F6368] truncate">{contactInfo.email}</p>
            </a>
            <a href={`tel:${contactInfo.phone}`} className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#DADCE0] hover:border-[#34A853] transition-all group text-center">
              <Phone className="mx-auto mb-4 text-[#34A853]" size={28} />
              <h4 className="font-bold mb-1">Call</h4>
              <p className="text-sm text-[#5F6368]">{contactInfo.phone}</p>
            </a>
            <a href={contactInfo.linkedin} target="_blank" className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#DADCE0] hover:border-[#4285F4] transition-all group text-center">
              <Linkedin className="mx-auto mb-4 text-[#4285F4]" size={28} />
              <h4 className="font-bold mb-1">LinkedIn</h4>
              <p className="text-sm text-[#5F6368]">Connect on LinkedIn</p>
            </a>
          </div>

          <div className="pt-12 border-t border-[#DADCE0] flex flex-col md:flex-row justify-between items-center gap-6 text-[#5F6368] text-sm font-medium">
            <p>© {new Date().getFullYear()} {contactInfo.name}. All rights reserved.</p>
            <div className="flex gap-8">
              <a href={contactInfo.github} target="_blank" className="hover:text-[#202124]">GitHub</a>
              <a href={contactInfo.linkedin} target="_blank" className="hover:text-[#202124]">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
        
        html { scroll-behavior: smooth; }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #DADCE0;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #9AA0A6;
        }
      `}} />
    </div>
  );
};

export default App;