import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ArrowUpRight, Menu, X } from 'lucide-react';
const items = ['work','approach','skills','experience','about','contact'] as const;
export function Header() {
 const {language,setLanguage,t} = useLanguage();
 const [menuOpen,setMenuOpen] = useState(false);
 const [progress,setProgress] = useState(0);
 const location = useLocation();
 useEffect(()=>setMenuOpen(false),[location.pathname]);
 useEffect(()=>{
   const onScroll=()=>{const doc=document.documentElement; const max=doc.scrollHeight-window.innerHeight; setProgress(max<=0?0:100*window.scrollY/max);};
   window.addEventListener('scroll',onScroll,{passive:true}); onScroll(); return ()=>window.removeEventListener('scroll',onScroll);
 },[location.pathname]);
 return <><div className="reading-progress" style={{width:`${progress}%`}} />
   <header className="site-header"><div className="shell header-inner">
    <Link className="brand" to="/" aria-label="Jacob Brayan Fotso — home">JBF<span>.</span></Link>
    <nav className={`site-nav ${menuOpen?'open':''}`} aria-label={language==='fr'?'Navigation principale':'Main navigation'}>
      {items.map(item=><Link key={item} to={`/#${item}`} onClick={()=>setMenuOpen(false)}>{t.nav[item]}</Link>)}
    </nav>
    <div className="header-right">
      <div className="language-switch" role="group" aria-label="Language / Langue"><button onClick={()=>setLanguage('en')} className={language==='en'?'on':''} aria-pressed={language==='en'}>EN</button><span>/</span><button onClick={()=>setLanguage('fr')} className={language==='fr'?'on':''} aria-pressed={language==='fr'}>FR</button></div>
      <a className="header-contact" href="mailto:jacobfotso1714@gmail.com">{t.nav.touch}<ArrowUpRight size={15}/></a>
      <button className="mobile-menu" type="button" aria-expanded={menuOpen} aria-label={menuOpen?'Close menu':'Open menu'} onClick={()=>setMenuOpen(o=>!o)}>{menuOpen?<X size={22}/>:<Menu size={22}/>}</button>
    </div>
   </div></header></>;
}
