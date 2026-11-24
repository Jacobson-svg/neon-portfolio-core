import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/i18n/LanguageProvider'
import { siteLinks } from '@/content/site'
import { Reveal } from '@/components/portfolio/Reveal'
import profile from '@/assets/profile.jpg'

export function HeroSection() {
    const { t } = useLanguage()

    return (
        <section className="hero" id="top" aria-labelledby="hero-title">
            <div className="shell">
                <div className="hero-topline mono">
                    <span>{t.hero.eyebrow}</span>
                    <span>{t.hero.edition}</span>
                </div>
                <div className="hero-layout">
                    <div className="hero-copy">
                        <Reveal>
                            <h1 className="hero-title" id="hero-title">
                                {t.hero.name}
                            </h1>
                        </Reveal>
                        <p className="hero-role">{t.hero.role}</p>
                        <p className="hero-slogan">
                            {t.hero.sloganLead}{' '}
                            <em>{t.hero.sloganAccent}</em>
                        </p>
                        <p className="hero-description-text">
                            {t.hero.description}
                        </p>
                        <div className="hero-actions">
                            <Link className="hero-cta" to="/#work">
                                {t.hero.cta}
                                <ArrowRight size={17} aria-hidden="true" />
                            </Link>
                            <div
                                className="hero-socials"
                                aria-label={t.hero.socialLinks}
                            >
                                <a
                                    href={siteLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <Github size={18} aria-hidden="true" />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href={siteLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={18} aria-hidden="true" />
                                    <span>LinkedIn</span>
                                </a>
                                <Link to="/#contact" aria-label={t.nav.contact}>
                                    <Mail size={18} aria-hidden="true" />
                                    <span>{t.nav.contact}</span>
                                </Link>
                            </div>
                        </div>
                        <div className="hero-info mono">
                            <span>
                                <i className="available-dot" aria-hidden="true" />
                                {t.hero.available}
                            </span>
                            <span>{t.hero.location}</span>
                        </div>
                    </div>
                    <Reveal className="hero-portrait-wrap">
                        <img
                            className="hero-portrait"
                            src={profile}
                            alt={t.hero.name}
                            loading="eager"
                            fetchPriority="high"
                        />
                    </Reveal>
                </div>
                <div className="hero-bottom mono">
                    <span>JBF / ©2026</span>
                    <a href="#expertise">
                        {t.hero.scroll} <ArrowDown size={13} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    )
}
