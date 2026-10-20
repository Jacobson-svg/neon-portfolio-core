import { useLanguage } from '@/i18n/LanguageProvider';
export function Footer() {
 const {language}=useLanguage();
 return <footer className="site-footer"><div className="shell footer-content"><span>© {new Date().getFullYear()} Jacob Brayan Fotso — {language==='en'?'Designed with intention':'Conçu avec intention'}</span><div><a href="mailto:jacobfotso1714@gmail.com">Email ↗</a><a href="https://github.com/Jacobson-svg" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/jacob-brayan-fotso-986720300/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div></footer>;
}
