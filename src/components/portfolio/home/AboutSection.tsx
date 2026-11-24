import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageProvider'
import { siteLinks } from '@/content/site'
import { Reveal } from '@/components/portfolio/Reveal'

export function AboutSection() {
    const { t } = useLanguage()

    return (
        <section className="about-section" id="about" aria-labelledby="about-title">
            <div className="shell about-layout">
                <div className="about-heading">
                    <span className="eyebrow">{t.about.eyebrow}</span>
                    <Reveal>
                        <h2 id="about-title">
                            {t.about.headlineA}
                            <br />
                            {t.about.headlineB}
                        </h2>
                    </Reveal>
                </div>
                <div className="about-copy">
                    <p>{t.about.description}</p>
                    <a
                        className="text-link"
                        href={siteLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t.about.github}
                        <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    )
}
