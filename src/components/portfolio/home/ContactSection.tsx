import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageProvider'
import { siteLinks } from '@/content/site'
import { Reveal } from '@/components/portfolio/Reveal'

export function ContactSection() {
    const { t } = useLanguage()

    return (
        <section
            className="contact-section"
            id="contact"
            aria-labelledby="contact-title"
        >
            <div className="shell">
                <span className="eyebrow">{t.contact.eyebrow}</span>
                <Reveal>
                    <h2 id="contact-title">
                        {t.contact.headlineA}
                        <br />
                        <em>{t.contact.headlineB}</em>
                    </h2>
                </Reveal>
                <p>{t.contact.intro}</p>
                <a className="text-link light-link" href={siteLinks.email}>
                    {t.contact.email}
                    <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <div className="contact-notes mono">
                    <span>JACOB BRAYAN FOTSO</span>
                    <span>DOUALA, CAMEROON · EN / FR</span>
                </div>
            </div>
        </section>
    )
}
