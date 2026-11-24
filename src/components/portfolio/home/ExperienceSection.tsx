import { useLanguage } from '@/i18n/LanguageProvider'
import { Reveal } from '@/components/portfolio/Reveal'

export function ExperienceSection() {
    const { t } = useLanguage()
    const roles = [
        {
            date: `01/2025 — ${t.experience.present}`,
            title: t.experience.freelance,
            description: t.experience.freelanceText,
        },
        {
            date: '06/2025 — 06/2026',
            title: t.experience.assoh,
            description: t.experience.assohText,
        },
    ]

    return (
        <section
            className="experience-section"
            id="experience"
            aria-labelledby="experience-title"
        >
            <div className="shell">
                <div className="experience-header">
                    <span className="eyebrow">{t.experience.eyebrow}</span>
                    <Reveal>
                        <h2 id="experience-title">{t.experience.headline}</h2>
                    </Reveal>
                </div>
                <div className="timeline-group">
                    <h3 className="timeline-group-title">
                        {t.experience.professional}
                    </h3>
                    <div className="timeline">
                        {roles.map((role, index) => (
                            <article className="timeline-row" key={role.title}>
                                <span className="mono">{role.date}</span>
                                <div>
                                    <h4>{role.title}</h4>
                                    <p>{role.description}</p>
                                </div>
                                <b className="mono">0{index + 1}</b>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="timeline-group education-group">
                    <h3 className="timeline-group-title">
                        {t.experience.educationGroup}
                    </h3>
                    <div className="timeline">
                        <article className="timeline-row">
                            <span className="mono">2025 — 2026</span>
                            <div>
                                <h4>{t.experience.education}</h4>
                                <p>{t.experience.educationText}</p>
                            </div>
                            <b className="mono">01</b>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
