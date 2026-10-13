import React, { useEffect, useState } from 'react';
import { NavLink, Routes, Route, Link } from 'react-router-dom';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, Download, Github, Mail, Menu, MonitorSmartphone, Sparkles, X, MapPin, Send, CheckCircle2 } from 'lucide-react';

const CONTACT_EMAIL = 'tsegayeteshome460@gmail.com';
const GITHUB_PROFILE = 'https://github.com/tsegayeteshome-dev';

const projects = [
  { title: 'Health Center Payment System', type: 'Full-stack application', tags: ['React', 'Node.js', 'MySQL'], color: 'mint', desc: 'A payment management workflow for recording, tracking, and reviewing patient payments.', icon: '✳', demo: '#contact', code: 'https://github.com/' },
  { title: 'Ethio Clothes Market', type: 'E-commerce concept', tags: ['React', 'CSS', 'JavaScript'], color: 'violet', desc: 'A responsive storefront concept that presents local clothing collections with a clear shopping journey.', icon: '◈', demo: '#contact', code: 'https://github.com/' },
  { title: 'Text-to-Speech Tool', type: 'Web utility', tags: ['JavaScript', 'Web APIs', 'CSS'], color: 'orange', desc: 'A simple browser-based tool for turning written text into spoken audio.', icon: '〰', demo: '#contact', code: 'https://github.com/' }
];
const skills = [
  ['Frontend', 'React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
  ['Backend', 'Node.js', 'Express.js', 'REST APIs', 'Authentication'],
  ['Database & tools', 'MySQL', 'Git & GitHub', 'VS Code', 'Figma basics']
];

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [['Home','/'],['About','/about'],['Skills','/skills'],['Projects','/projects'],['Experience','/experience'],['Contact','/contact']];
  return <header className="header"><div className="nav-wrap">
    <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">&lt;/&gt;</span><span>Teshome<span className="brand-dot">.dev</span></span></Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'}>{nav.map(([name,path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{name}</NavLink>)}</nav>
    <Link to="/contact" className="nav-cta">Let's talk <ArrowUpRight size={15}/></Link>
  </div></header>
}
function Footer() { return <footer className="footer"><div><Link to="/" className="brand"><span className="brand-mark">&lt;/&gt;</span><span>Teshome<span className="brand-dot">.dev</span></span></Link><p>Designed with purpose. Built with React.</p></div><div className="footer-right"><span>© {new Date().getFullYear()} Teshome Tsegaye</span><a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18}/></a><a href={`mailto:${CONTACT_EMAIL}`} aria-label={`Email Teshome at ${CONTACT_EMAIL}`}><Mail size={18}/></a></div></footer> }
function Layout({children}) {
  useEffect(() => {
    const sections = document.querySelectorAll('main > .section, main > .content-section, main > .page-intro, main > .cta-band, main > .trust-strip');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      sections.forEach(section => section.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

    sections.forEach(section => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return <><Header/><main>{children}</main><div className="container"><Footer/></div></>;
}
function Eyebrow({children}) { return <div className="eyebrow"><span className="eyebrow-line"/>{children}</div> }
function ProjectCard({project, index}) { return <article className="project-card"><div className={`project-art ${project.color}`}><div className="project-top"><span className="project-number">0{index+1} / FEATURED</span><span className="project-symbol">{project.icon}</span></div><div className="mock-window"><div className="mock-dots"><i/><i/><i/></div><div className="mock-content"><span/><span/><span/><b/></div></div></div><div className="project-info"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.desc}</p><div className="tag-list">{project.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-links"><a href={project.code} target="_blank" rel="noreferrer">Source code <Github size={15}/></a><a href={project.demo}>View details <ArrowUpRight size={15}/></a></div></div></article> }
function Home() { return <Layout><section className="hero container"><div className="hero-copy"><Eyebrow>HELLO, I'M</Eyebrow><h1>Teshome <span className="name-highlight">Tsegaye</span><br/><span className="role-line">Software Engineer | Full-Stack Web Developer</span></h1><p className="hero-lead">I build modern, responsive, and user-friendly web applications using React, JavaScript, Node.js, Express, and MySQL. I enjoy solving problems, learning new technologies, and transforming ideas into practical software solutions.</p><p className="hero-lead hero-second-lead">I'm eager to collaborate with innovative teams, contribute to meaningful projects, and grow as a Software Engineer.</p><p className="hero-tagline">Let's build something amazing together.</p><div className="hero-actions"><Link className="btn btn-primary" to="/contact"><Mail size={16}/> Hire Me</Link><a className="btn btn-quiet" href="/resume.pdf" download><Download size={16}/> Download CV</a></div><div className="hero-meta"><span><i className="status-dot"/> Available for opportunities</span><span><MapPin size={15}/> Ethiopia · Open to remote</span></div></div><div className="hero-visual"><div className="visual-glow"/><div className="profile-orbit orbit-one"/><div className="profile-orbit orbit-two"/><div className="profile-card"><div className="profile-card-head"><span>PORTFOLIO / 2026</span><span className="live-pill">● LIVE</span></div><div className="avatar-placeholder"><img src="/my-photo-blue.jpg" alt="Teshome Tsegaye, Software Engineer"/><span className="avatar-spark">&lt;/&gt;</span></div><div className="profile-card-bottom"><div><strong>Teshome Tsegaye</strong><span>Software Developer</span></div><div className="mini-stack"><i>R</i><i>JS</i><i>⌘</i></div></div></div><div className="float-chip chip-code"><Code2 size={16}/> Clean code</div><div className="float-chip chip-responsive"><MonitorSmartphone size={16}/> Responsive first</div><div className="float-chip chip-spark"><Sparkles size={17}/></div></div></section><section className="trust-strip"><div className="container trust-inner"><span>TOOLS I WORK WITH</span><b>React</b><b>JavaScript</b><b>Node.js</b><b>MySQL</b><b>Git & GitHub</b></div></section><section className="section container"><div className="section-heading"><div><Eyebrow>A LITTLE INTRODUCTION</Eyebrow><h2>Curious mind.<br/><span className="muted-heading">Builder's mindset.</span></h2></div><Link className="text-link" to="/about">More about me <ArrowUpRight size={17}/></Link></div><div className="intro-grid"><p className="intro-big">I turn ideas into reliable, user-friendly web experiences — from the first sketch to the final line of code.</p><div className="intro-side"><p>I enjoy solving practical problems, learning new technologies, and building products that are easy to use on any screen.</p><Link to="/skills" className="inline-link">See my toolkit <ArrowRight size={16}/></Link></div></div></section><section className="section projects-section"><div className="container"><div className="section-heading"><div><Eyebrow>SELECTED WORK</Eyebrow><h2>Projects with<br/><span className="muted-heading">a purpose.</span></h2></div><Link className="text-link" to="/projects">All projects <ArrowUpRight size={17}/></Link></div><div className="project-grid">{projects.slice(0,2).map((p,i)=><ProjectCard key={p.title} project={p} index={i}/>)}</div></div></section><section className="cta-band container"><div><Eyebrow>HAVE A ROLE OR PROJECT?</Eyebrow><h2>Let's make something<br/>meaningful together.</h2></div><Link to="/contact" className="btn btn-primary">Get in touch <ArrowUpRight size={17}/></Link></section></Layout> }
function PageIntro({eyebrow,title,highlight,description}) { return <section className="page-intro container"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}<br/><span className="gradient-text">{highlight}</span></h1><p>{description}</p></section> }
function About() { return <Layout><PageIntro eyebrow="GET TO KNOW ME" title="Developer by craft." highlight="Problem-solver by nature." description="A little about the person behind the code, the way I work, and what motivates me to build."/><section className="container content-section about-layout"><div className="about-visual"><div className="about-avatar"><Code2 size={90}/><span>HELLO, WORLD!</span></div><div className="about-note"><Sparkles size={17}/><span>Always learning.<br/>Always building.</span></div></div><div className="prose"><Eyebrow>MY STORY</Eyebrow><h2>Making technology<br/>feel more human.</h2><p>I'm an aspiring software developer who enjoys turning real-world problems into clean, useful digital solutions. I care about thoughtful design, readable code, and experiences that work well for everyone.</p><p>My current focus is building a strong foundation across frontend and backend development, then applying those skills to practical projects that demonstrate how I think and solve problems.</p><p>This portfolio is a growing record of my learning, projects, and progress. I'm excited to contribute to a team, learn from experienced developers, and create software that makes a difference.</p><Link className="btn btn-primary" to="/contact">Let's connect <ArrowUpRight size={17}/></Link></div></section><section className="section container"><div className="section-heading"><div><Eyebrow>WHAT I VALUE</Eyebrow><h2>How I approach<br/><span className="muted-heading">the work.</span></h2></div></div><div className="value-grid"><div className="value-card"><span>01</span><h3>Curiosity</h3><p>I ask questions, explore alternatives, and keep learning.</p></div><div className="value-card"><span>02</span><h3>Clarity</h3><p>I aim for readable code, straightforward interfaces, and clear communication.</p></div><div className="value-card"><span>03</span><h3>Ownership</h3><p>I take responsibility for details and work to finish what I start.</p></div></div></section></Layout> }
function Skills() { return <Layout><PageIntro eyebrow="MY TOOLKIT" title="Tools for building" highlight="great experiences." description="A practical, growing toolkit for building responsive interfaces and full-stack web applications."/><section className="container content-section skills-grid">{skills.map(([title,...items],i)=><article className="skill-card" key={title}><div className="skill-icon">{i===0?<MonitorSmartphone/>:i===1?<Code2/>:<BriefcaseBusiness/>}</div><span className="skill-index">0{i+1} / SKILLS</span><h2>{title}</h2><p>{i===0?'Creating accessible, responsive interfaces.':i===1?'Building APIs and application logic.':'Managing data and shipping code.'}</p><div className="skill-pills">{items.map(item=><span key={item}>{item}</span>)}</div></article>)}</section><section className="section container learning-box"><div><Eyebrow>CURRENTLY GROWING</Eyebrow><h2>Learning in public.<br/><span className="muted-heading">Improving every build.</span></h2></div><p>My skills are a work in progress. I prefer to demonstrate what I can do through real projects, honest descriptions, and consistent improvement rather than inflated claims.</p></section></Layout> }
function Projects() { const [filter,setFilter]=useState('All'); const categories=['All','Frontend','Full-stack','Tools']; const filtered=projects.filter(p=>filter==='All'||(filter==='Frontend'&&p.tags.includes('React'))||(filter==='Full-stack'&&p.tags.includes('Node.js'))||(filter==='Tools'&&p.tags.includes('Web APIs'))); return <Layout><PageIntro eyebrow="THINGS I'VE BUILT" title="Selected projects." highlight="Real practice. Real progress." description="A selection of learning projects and application concepts. Open the source links to explore code and replace these examples with your own finished work."/><section className="container content-section"><div className="filter-row">{categories.map(c=><button key={c} onClick={()=>setFilter(c)} className={filter===c?'filter active':'filter'}>{c}</button>)}</div><div className="project-grid">{filtered.map((p,i)=><ProjectCard key={p.title} project={p} index={i}/>)}</div><div className="note-box"><Sparkles size={18}/><p><strong>Tip for job applications:</strong> add real screenshots, a working live demo, a useful README, and a short explanation of the problem each project solves.</p></div></section></Layout> }
function Experience() { const timeline=[{date:'CURRENT',title:'Software Development Learning',place:'Independent projects',desc:'Building practical skills in React, JavaScript, Node.js, Express, and MySQL through hands-on applications.'},{date:'PROJECT WORK',title:'Health Center Payment Management',place:'Full-stack academic project',desc:'Designing a payment-focused system concept with a React interface, API backend, and relational database.'},{date:'FOUNDATION',title:'Education & Technical Growth',place:'Add your university / program',desc:'Add your real degree, institution, dates, coursework, internships, and relevant certifications here.'}]; return <Layout><PageIntro eyebrow="MY JOURNEY" title="Experience that" highlight="keeps growing." description="A transparent overview of my learning journey, project experience, and education. Update these entries with your real details before applying."/><section className="container content-section experience-layout"><div className="timeline">{timeline.map((item,i)=><article className="timeline-item" key={item.title}><div className="timeline-marker">{String(i+1).padStart(2,'0')}</div><div className="timeline-content"><span className="timeline-date">{item.date}</span><h2>{item.title}</h2><h3>{item.place}</h3><p>{item.desc}</p></div></article>)}</div><aside className="resume-card"><div className="resume-icon"><Download size={25}/></div><Eyebrow>YOUR NEXT STEP</Eyebrow><h2>Make it easy to say yes.</h2><p>Add a polished, one-page CV with your real contact information, education, skills, and project links.</p><a className="btn btn-secondary" href="/resume.pdf" download>Download CV <Download size={16}/></a><span className="small-note">Place your PDF at <code>public/resume.pdf</code>.</span></aside></section><section className="container section"><div className="note-box"><CheckCircle2 size={19}/><p>Keep your profile honest. If you're applying for your first developer job, highlight projects, coursework, teamwork, and how quickly you learn.</p></div></section></Layout> }
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    const params = new URLSearchParams({
      subject: form.subject || 'Portfolio contact',
      body: `Hi, I'm ${form.name} (${form.email}).\n\n${form.message}`
    });
    window.location.href = `mailto:${CONTACT_EMAIL}?${params.toString()}`;
  };

  return <Layout>
    <PageIntro eyebrow="LET'S TALK" title="Have an opportunity?" highlight="I'd love to hear from you." description="Looking for a junior developer, an enthusiastic collaborator, or someone to help bring an idea to life? Send a message."/>
    <section className="container content-section contact-layout">
      <div className="contact-copy">
        <div className="contact-highlight">
          <span className="contact-icon"><Mail/></span>
          <div>
            <span className="contact-label">EMAIL ME</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL} <ArrowUpRight size={14}/></a>
          </div>
        </div>
        <div className="contact-highlight">
          <span className="contact-icon"><Github/></span>
          <div>
            <span className="contact-label">GITHUB PROFILE</span>
            <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer">github.com/tsegayeteshome-dev <ArrowUpRight size={14}/></a>
          </div>
        </div>
        <div className="availability"><i className="status-dot"/> Open to entry-level roles, internships, and collaboration.</div>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <div className="form-heading"><h2>Send a message</h2><p>Fields marked * are required.</p></div>
        <label>Your name *<input required name="name" autoComplete="name" value={form.name} onChange={update} placeholder="Your name"/></label>
        <label>Email address *<input required type="email" name="email" autoComplete="email" value={form.email} onChange={update} placeholder="you@example.com"/></label>
        <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="Job opportunity / Project"/></label>
        <label>Message *<textarea required name="message" value={form.message} onChange={update} rows="5" placeholder="Tell me a little about your opportunity..."/></label>
        <button className="btn btn-primary submit-btn" type="submit">Open email app <Send size={16}/></button>
        <p className="form-hint">This opens a pre-filled email draft addressed to {CONTACT_EMAIL}. Send it from your email app. If it does not open, email me directly using the address shown here.</p>
      </form>
    </section>
  </Layout>;
}
function NotFound(){return <Layout><section className="page-intro container"><Eyebrow>404 / PAGE NOT FOUND</Eyebrow><h1>Looks like this<br/><span className="gradient-text">page wandered off.</span></h1><Link className="btn btn-primary" to="/">Back home <ArrowRight size={17}/></Link></section></Layout>}
export default function App(){return <Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/skills" element={<Skills/>}/><Route path="/projects" element={<Projects/>}/><Route path="/experience" element={<Experience/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes>}