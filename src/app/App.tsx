import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './components/ui/sheet';
import {
  ChevronDown,
  ExternalLink,
  Menu,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Code2,
  Database,
  Globe,
  Smartphone,
  ShoppingCart,
  Server,
  Layout,
  Cpu,
  ArrowRight,
  Send,
  Download,
  Sparkles,
} from 'lucide-react';
import profileImage from '../imports/ChatGPT_Image_Sep_24__2026__05_03_21_PM.png';
import cvFile from '../imports/Dharshan_A4_CV.pdf';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const skillCategories = [
  { label: 'Languages', icon: Code2, skills: ['Python', 'Java', 'C Basics', 'JavaScript'] },
  { label: 'Frontend',  icon: Layout, skills: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { label: 'Backend',   icon: Server, skills: ['Django', 'Python'] },
  { label: 'Database',  icon: Database, skills: ['MySQL'] },
  { label: 'Tools & Platforms', icon: Cpu, skills: ['AI Tools', 'Hostinger', 'Vibe Coding'] },
];

const projects = [
  {
    name: 'MensHub',
    type: 'E-commerce Website',
    role: 'Full Stack Developer',
    url: 'https://menshub64.in',
    description:
      'A full-featured e-commerce platform for a menswear business — clean product catalog, smooth shopping experience, and a complete checkout flow.',
    tech: ['React', 'Django', 'MySQL', 'Hostinger'],
  },
  {
    name: 'ATCAYAM TEXTILE',
    type: 'Textile E-commerce Website',
    role: 'Full Stack Developer',
    url: 'https://atcayamtextile.in',
    description:
      'Professional web presence and e-commerce solution for a textile business — product listings, responsive design, and a modern shopping interface.',
    tech: ['React', 'Django', 'MySQL', 'Hostinger'],
  },
];

const services = [
  { icon: Globe,        title: 'Full Stack Web Development',     description: 'End-to-end web apps using React, Django, and MySQL — from database to UI.' },
  { icon: ShoppingCart, title: 'E-commerce Development',         description: 'Custom online stores with product catalogs, carts, and checkout flows.' },
  { icon: Smartphone,   title: 'Responsive Website Development', description: 'Websites that look and work great on every device — mobile, tablet, desktop.' },
  { icon: Layout,       title: 'Frontend Development',           description: 'Clean, interactive UIs with React and modern JavaScript — fast and accessible.' },
  { icon: Server,       title: 'Backend Development',            description: 'Robust server-side logic and REST APIs built with Python and Django.' },
  { icon: Cpu,          title: 'Website Deployment',             description: 'Production-ready deployment on Hostinger with domain setup and configuration.' },
];

/* ── Shared label ── */
function SectionLabel({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="text-center">
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-400/70">{eyebrow}</span>
      <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white tracking-tight">{title}</h2>
      {sub && <p className="text-white/35 mt-4 max-w-lg mx-auto text-sm leading-relaxed">{sub}</p>}
    </div>
  );
}

/* ── Typewriter ── */
function TypewriterText({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIdx > 0) {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else {
        setDeleting(false);
        setIdx(i => (i + 1) % texts.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx, texts]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-red-400">|</span>
    </span>
  );
}

/* ── Contact form — sends to WhatsApp ── */
function ContactForm() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `*New Message from Portfolio*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Subject:* ${subject}\n\n` +
      `*Message:*\n${message}`;
    window.open(`https://wa.me/919840777526?text=${encodeURIComponent(text)}`, '_blank');
  };

  const inputCls =
    'w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 ' +
    'focus:border-red-500/50 focus:bg-white/[0.06] focus:outline-none transition-all text-sm';

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-56 h-56 bg-red-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      <h3 className="text-base font-semibold text-white mb-6 flex items-center gap-2">
        <span className="w-6 h-6 rounded-lg bg-red-600/25 border border-red-500/30 flex items-center justify-center">
          <Send className="w-3 h-3 text-red-400" />
        </span>
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">Name</label>
            <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className={inputCls} />
          </div>
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className={inputCls} />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">Subject</label>
          <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Project Inquiry" className={inputCls} />
        </div>
        <div>
          <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">Message</label>
          <textarea rows={5} required value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell me about your project..." className={`${inputCls} resize-none`} />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-red-600/25 active:scale-[0.98]"
        >
          <Send className="w-4 h-4" />
          Send via WhatsApp
        </button>
        <p className="text-[11px] text-white/20 text-center">Opens WhatsApp with your message pre-filled.</p>
      </form>
    </div>
  );
}

/* ── Main App ── */
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen]       = useState(false);
  const [scrolled, setScrolled]           = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const found = navLinks.find(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 120 && bottom >= 120;
      });
      if (found) setActiveSection(found.id);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white dark" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* ══ HEADER ══ */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#080808]/85 backdrop-blur-2xl border-b border-white/[0.06]' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-red-500/40 ring-offset-1 ring-offset-[#080808] group-hover:ring-red-400/70 transition-all">
              <img src={profileImage} alt="Dharshan" className="w-full h-full object-cover object-top" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/80 group-hover:text-white transition-colors">Dharshan</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === id ? 'text-white bg-white/8' : 'text-white/35 hover:text-white/70 hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger className="md:hidden p-2 rounded-lg hover:bg-white/8 transition-colors">
              <Menu className="h-5 w-5 text-white/60" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-[#0c0c0c] border-l border-white/8">
              <div className="flex flex-col gap-1 mt-10">
                {navLinks.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSection === id ? 'bg-red-600/15 text-red-300 border border-red-500/20' : 'text-white/45 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* ══ HERO ══ */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/50 to-[#080808] pointer-events-none" />
        {/* Glows */}
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-red-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              {/* Status pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/6 text-red-300/80 text-xs font-medium mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                Available for Freelance Projects
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-5 leading-[1.05] tracking-tight text-white">
                Dharshan
              </h1>

              <div className="text-xl md:text-2xl font-medium mb-6 h-9 text-red-400">
                <TypewriterText texts={['Full Stack Developer', 'Web Developer', 'Freelancer']} />
              </div>

              <p className="text-white/40 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                Building modern web experiences with clean design, scalable development and practical
                solutions — from React frontends to Django backends.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-red-600/25 active:scale-[0.98]"
                >
                  View My Work <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98]"
                >
                  Contact Me
                </button>
                <a
                  href={cvFile}
                  download="Dharshan_CV.pdf"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-red-500/25 text-red-300/70 hover:text-red-300 hover:bg-red-500/8 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" /> Download CV
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-10 mt-12 justify-center lg:justify-start">
                {[
                  { value: '2+',    label: 'Live Projects' },
                  { value: 'B.Tech', label: 'IT Student'   },
                  { value: '2028',  label: 'Graduating'    },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-[11px] text-white/25 mt-0.5 tracking-wide">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-6 bg-gradient-to-br from-red-600/15 to-transparent rounded-[2.5rem] blur-2xl" />
              <div className="relative w-60 h-72 lg:w-72 lg:h-[22rem] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src={profileImage} alt="Dharshan" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-5 -left-5 bg-[#111] border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-sm shadow-xl">
                <div className="text-[9px] text-white/25 uppercase tracking-widest mb-1">Based in</div>
                <div className="text-xs font-medium flex items-center gap-1.5 text-white/70">
                  <MapPin className="w-3 h-3 text-red-400 flex-shrink-0" /> Salem, Tamil Nadu
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-[#111] border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-sm shadow-xl">
                <div className="text-[9px] text-white/25 uppercase tracking-widest mb-1">Stack</div>
                <div className="text-xs font-medium text-white/70">React · Django</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/20 text-[11px]">
          <span className="tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0e0e0e] to-[#080808] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <SectionLabel eyebrow="Who I Am" title="About Me" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-16">
            <div>
              <p className="text-white/70 text-lg leading-relaxed mb-5">
                I'm <span className="text-white font-semibold">Dharshan</span>, a B.Tech Information Technology
                student at <span className="text-red-300 font-medium">Nandha Engineering College</span> and a
                freelance Full Stack Developer based in Salem, Tamil Nadu.
              </p>
              <p className="text-white/40 leading-relaxed mb-8">
                I focus on building real-world web applications and e-commerce websites using React,
                Django, Python, and MySQL — turning ideas into functional products that solve actual
                problems for clients.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Django', 'Python', 'JavaScript', 'MySQL', 'HTML', 'CSS'].map(tech => (
                  <span key={tech} className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-red-500/20 bg-red-500/6 text-red-300/80 tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎓', title: 'Education',  content: 'B.Tech Information Technology\nNandha Engineering College · 2028' },
                { icon: '💻', title: 'Approach',   content: 'Practical, clean code. Built for real users, not just demos.' },
                { icon: '🚀', title: 'Focus',      content: 'Full Stack and e-commerce web development with modern frameworks.' },
                { icon: '🤝', title: 'Freelance',  content: 'Open to client projects — from concept to deployed product.' },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-white/14 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-white text-sm font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-white/35 text-xs leading-relaxed whitespace-pre-line">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section id="skills" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel eyebrow="What I Know" title="Technical Skills" sub="A focused stack for building modern full-stack web applications and e-commerce platforms." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {skillCategories.map(({ label, icon: Icon, skills }) => (
              <div key={label} className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-red-500/20 hover:bg-white/[0.035] transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl border border-red-500/20 bg-red-500/8 flex items-center justify-center group-hover:bg-red-500/14 transition-colors">
                    <Icon className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-sm font-semibold text-white/75">{label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/8 text-white/45 hover:text-white/65 hover:border-white/14 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══ */}
      <section id="projects" className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0e0e0e] to-[#080808] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <SectionLabel eyebrow="What I've Built" title="Client Projects" sub="Real projects delivered for real clients — live and in production." />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
            {projects.map((project, i) => (
              <div key={i} className="group relative rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden hover:border-white/14 transition-all duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
                {/* Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-red-600/6 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors pointer-events-none" />

                {/* Browser bar */}
                <div className="px-5 pt-5 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/30" />
                    </div>
                    <div className="flex-1 ml-2 bg-white/4 rounded-md px-3 py-1 text-[11px] text-white/20 font-mono">
                      {project.url.replace('https://', '')}
                    </div>
                  </div>
                </div>

                <div className="p-6 relative">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-red-400/70 border border-red-500/15 bg-red-500/6 px-2.5 py-1 rounded-full mb-3">
                    {project.type}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
                  <p className="text-[11px] text-white/25 tracking-wide mb-4">Role: {project.role}</p>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 text-[11px] rounded-lg bg-white/4 border border-white/8 text-white/35 font-medium">{t}</span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-red-600 hover:border-red-600 text-white/60 hover:text-white text-sm font-semibold transition-all duration-300 group/btn"
                  >
                    View Live Website
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel eyebrow="What I Do" title="Services" sub="End-to-end development — from initial design to live deployment." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {services.map(({ icon: Icon, title, description }, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-red-500/20 hover:bg-white/[0.035] transition-all duration-300 cursor-default">
                <div className="w-11 h-11 rounded-2xl border border-red-500/15 bg-red-500/6 flex items-center justify-center mb-5 group-hover:bg-red-500/12 group-hover:border-red-500/25 transition-all">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-white text-sm font-semibold mb-2">{title}</h3>
                <p className="text-white/35 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0e0e0e] to-[#080808] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <SectionLabel eyebrow="Get In Touch" title="Let's Work Together" sub="Have a project in mind? Send me a message and let's talk." />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
            {/* Left — info */}
            <div className="flex flex-col gap-5">
              {/* Email */}
              <a
                href="mailto:sivadharshan385@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-white/14 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl border border-red-500/15 bg-red-500/6 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/12 transition-colors">
                  <Mail className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-[10px] text-white/25 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white/65 text-sm font-medium group-hover:text-white transition-colors">sivadharshan385@gmail.com</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.02]">
                <div className="w-11 h-11 rounded-xl border border-red-500/15 bg-red-500/6 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-[10px] text-white/25 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white/65 text-sm font-medium">Salem, Tamil Nadu, India</p>
                </div>
              </div>

              {/* Social links */}
              <div className="p-5 rounded-2xl border border-white/8 bg-white/[0.02]">
                <p className="text-[10px] text-white/25 uppercase tracking-widest mb-4">Find Me On</p>
                <div className="flex gap-3">
                  {[
                    { href: 'mailto:sivadharshan385@gmail.com',                    icon: Mail,      label: 'Gmail'     },
                    { href: 'https://www.linkedin.com/in/dharshan-g112706',         icon: Linkedin,  label: 'LinkedIn'  },
                    { href: 'https://www.instagram.com/itz_.dharshan._02',          icon: Instagram, label: 'Instagram' },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      className="group w-11 h-11 rounded-xl border border-white/8 bg-white/4 flex items-center justify-center hover:border-red-500/25 hover:bg-red-500/8 transition-all"
                    >
                      <Icon className="w-4 h-4 text-white/25 group-hover:text-red-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="relative p-5 rounded-2xl border border-red-500/12 bg-red-500/4 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/35 to-transparent" />
                <Sparkles className="w-4 h-4 text-red-400/50 mb-3" />
                <p className="text-white/45 text-sm leading-relaxed italic">
                  "Available for freelance projects. Whether a website, e-commerce platform, or a
                  full-stack application — let's build something great together."
                </p>
                <p className="text-red-400/60 text-xs font-medium mt-3">— Dharshan</p>
              </div>
            </div>

            {/* Right — form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="border-t border-white/5 py-8 bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-white/75 font-semibold text-sm">Dharshan</span>
            <span className="text-white/20 ml-2 text-sm">· Full Stack Developer</span>
          </div>
          <p className="text-white/18 text-xs">&copy; {new Date().getFullYear()} Dharshan. All rights reserved.</p>
          <div className="flex gap-1">
            {navLinks.slice(0, 4).map(({ id, label }) => (
              <button key={id} onClick={() => scrollToSection(id)} className="px-3 py-1.5 text-xs text-white/22 hover:text-white/55 transition-colors rounded-lg hover:bg-white/5">
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
