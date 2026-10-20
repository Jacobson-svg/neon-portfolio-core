import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { copy, normalizeLang } from './translations';
import type { Language } from '@/content/projects';

type ContextValue = { language: Language; setLanguage: (lang: Language) => void; t: typeof copy.en | typeof copy.fr };
const LanguageContext = createContext<ContextValue | null>(null);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem('jbf-language');
    return normalizeLang(stored || window.navigator.language);
  });
  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('jbf-language', language);
    document.title = language === 'fr' ? 'Jacob Brayan Fotso — Développeur Full-Stack' : 'Jacob Brayan Fotso — Full-Stack Software Engineer';
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', language === 'fr'
      ? 'Portfolio de Jacob Brayan Fotso, développeur Full-Stack : Kazou, WhatAsso, Aje7, ISO Manager et ingénierie backend.'
      : 'Portfolio of Jacob Brayan Fotso, full-stack software engineer. Kazou, WhatAsso, Aje7, ISO Manager and backend engineering.');
  }, [language]);
  const value = useMemo<ContextValue>(() => ({ language, setLanguage, t: copy[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider');
  return value;
}
