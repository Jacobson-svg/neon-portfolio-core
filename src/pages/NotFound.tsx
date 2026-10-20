import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
export default function NotFound(){const {t}=useLanguage();return <><Header/><main className="not-found shell"><span className="eyebrow">404</span><h1>{t.notFound.title}</h1><p>{t.notFound.text}</p><Link className="text-link" to="/">{t.notFound.back}<ArrowUpRight size={18}/></Link></main><Footer/></>}
