import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { projects } from '@/content/projects';
import { skillGroups } from '@/content/skills';
import { WhatsAppPreview } from '@/components/portfolio/WhatsAppPreview';
import { Reveal } from '@/components/portfolio/Reveal';
import profile from '@/assets/profile.jpg';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

function LinkArrow({children,to}:{children:React.ReactNode,to:string}){return <Link to={to} className="text-link">{children}<ArrowUpRight size={18}/></Link>}
function ProjectHeading({id}:{id:typeof projects[number]['id']}) {
 const {language,t}=useLanguage();const p=projects.find(x=>x.id===id)!;
 return <><div className="project-kicker"><span>{p.number} / {p.category[language].toUpperCase()}</span></div><h3 className="project-title">{p.name}<span className="period">.</span></h3><h4 className="project-headline">{p.title[language]}</h4><p className="project-summary">{p.summary[language]}</p><div className="project-tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div><LinkArrow to={`/projects/${p.id}`}>{t.work.case}</LinkArrow></>;
}
export default function Home() {
 const {language,t}=useLanguage();
 const kazou=projects[0],aje7=projects[2],caa=projects[3],others=[projects[4],projects[5],projects[6]];
 return <><Header/><main>
   <section className="hero" id="top"><div className="shell">
     <div className="hero-topline mono"><span>{t.hero.eyebrow}</span><span>{t.hero.edition}</span></div>
     <Reveal><h1 className="hero-title">{t.hero.lead}<br/><em>{t.hero.accent}</em></h1></Reveal>
     <div className="hero-under"><Reveal className="hero-description"><p>{t.hero.description}</p><LinkArrow to="/#work">{t.hero.cta}</LinkArrow></Reveal><div className="hero-info mono"><span><i className="available-dot"/>{t.hero.available}</span><span>{t.hero.location}</span></div><img className="hero-portrait" src={profile} alt="Jacob Brayan Fotso" loading="eager" /></div>
     <div className="hero-bottom mono"><span>JBF / ©2026</span><span>{t.hero.scroll} <ArrowDown size={13}/></span></div>
   </div></section>
   <section className="work-section" id="work"><div className="shell">
      <div className="section-heading reveal-heading"><div><span className="eyebrow">{t.work.eyebrow}</span><Reveal><h2>{t.work.headline}<span className="period">.</span></h2></Reveal></div><p>{t.work.intro}</p></div>
      <Reveal className="kazou-card"><div className="kazou-copy"><span className="eyebrow">01 / {language==='fr'?'PROJET PHARE':'FLAGSHIP PROJECT'}</span><h3>Kazou<span className="period">.</span></h3><p className="kazou-tagline">{kazou.title[language]}</p><p>{kazou.summary[language]}</p><div className="kazou-contribution"><span className="eyebrow">{t.work.contribution}</span><strong>{kazou.contribution[language]}</strong></div><LinkArrow to="/projects/kazou">{t.work.case}</LinkArrow></div><Link className="kazou-image" to="/projects/kazou" aria-label={`Kazou: ${t.work.case}`}><img src={kazou.image} alt="Kazou mobile application interface"/></Link></Reveal>
      <Reveal className="feature-project split-whatasso"><div className="whatasso-visual"><WhatsAppPreview compact/></div><div className="feature-copy"><ProjectHeading id="whatasso"/></div></Reveal>
      <Reveal className="feature-project"><Link className="feature-image" to="/projects/aje7"><img src={aje7.image} alt="Aje7 web administration interface" loading="lazy"/></Link><div className="feature-copy"><ProjectHeading id="aje7"/></div></Reveal>
      <Reveal className="feature-project"><Link className="feature-image" to="/projects/caa-iso-manager"><img src={caa.image} alt="CAA ISO Manager platform interface" loading="lazy"/></Link><div className="feature-copy"><ProjectHeading id="caa-iso-manager"/></div></Reveal>
      <div className="more-work"><div className="more-intro"><span className="eyebrow">/ 05—07</span><h3>{t.work.other}</h3><p>{t.work.otherIntro}</p></div><div className="more-items">{others.map(p=><Link key={p.id} to={`/projects/${p.id}`} className="more-item"><span>{p.number}</span><strong>{p.name}</strong><small>{p.category[language]}</small><ArrowUpRight size={19}/></Link>)}</div></div>
   </div></section>
   <section className="approach-section" id="approach"><div className="shell"><span className="eyebrow">{t.approach.eyebrow}</span><div className="half-heading"><Reveal><h2>{t.approach.headline}</h2></Reveal><p>{t.approach.intro}</p></div><div className="approach-grid">{([[t.approach.a,t.approach.at],[t.approach.b,t.approach.bt],[t.approach.c,t.approach.ct]] as const).map(([name,desc],i)=><Reveal className="approach-item" key={name} delay={i*.07}><span className="mono small-number">0{i+1} /</span><h3>{name}</h3><p>{desc}</p></Reveal>)}</div></div></section>
   <section className="skills-section" id="skills"><div className="shell"><span className="eyebrow">{t.skills.eyebrow}</span><div className="half-heading skills-heading"><Reveal><h2>{t.skills.headlineA}<br/><em>{t.skills.headlineB}</em></h2></Reveal><p>{t.skills.intro}</p></div><div className="skills-grid">{skillGroups.map(g=><Reveal key={g.number} className="skill-entry"><span className="mono small-number">{g.number} /</span><h3>{g.title[language]}</h3><p>{g.items.join(' · ')}</p></Reveal>)}</div><div className="skills-foot mono"><span>{t.skills.note}</span><Link to="/#work">{language==='fr'?'Voir les projets':'See the projects'} <ArrowUpRight size={13}/></Link></div></div></section>
   <section className="experience-section" id="experience"><div className="shell"><div className="experience-header"><span className="eyebrow">{t.experience.eyebrow}</span><Reveal><h2>{t.experience.headline}</h2></Reveal></div><div className="timeline"><div className="timeline-row"><span className="mono">01/2025 — {t.experience.present}</span><div><h3>{t.experience.freelance}</h3><p>{t.experience.freelanceText}</p></div><b className="mono">01</b></div><div className="timeline-row"><span className="mono">06/2025 — 06/2026</span><div><h3>{t.experience.assoh}</h3><p>{t.experience.assohText}</p></div><b className="mono">02</b></div><div className="timeline-row"><span className="mono">2025 — 2026</span><div><h3>{t.experience.education}</h3><p>{t.experience.educationText}</p></div><b className="mono">03</b></div></div></div></section>
   <section className="about-section" id="about"><div className="shell about-layout"><Reveal><img src={profile} loading="lazy" alt="Portrait of Jacob Brayan Fotso"/></Reveal><div><span className="eyebrow">{t.about.eyebrow}</span><Reveal><h2>{t.about.headlineA}<br/>{t.about.headlineB}</h2></Reveal><p>{t.about.description}</p><a className="text-link" href="https://github.com/Jacobson-svg" target="_blank" rel="noopener noreferrer">{t.about.github}<ArrowUpRight size={18}/></a></div></div></section>
   <section className="contact-section" id="contact"><div className="shell"><span className="eyebrow">{t.contact.eyebrow}</span><Reveal><h2>{t.contact.headlineA}<br/><em>{t.contact.headlineB}</em></h2></Reveal><p>{t.contact.intro}</p><a className="text-link light-link" href="mailto:jacobfotso1714@gmail.com">{t.contact.email}<ArrowUpRight size={18}/></a><div className="contact-notes mono"><span>JACOB BRAYAN FOTSO</span><span>DOUALA, CAMEROON · EN / FR</span></div></div></section>
 </main><Footer/></>;
}
