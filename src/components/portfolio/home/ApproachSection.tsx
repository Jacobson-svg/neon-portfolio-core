import { useLanguage } from '@/i18n/LanguageProvider'
import { Reveal } from '@/components/portfolio/Reveal'

export function ApproachSection() {
    const { t } = useLanguage()
    const principles = [
        [t.approach.a, t.approach.at],
        [t.approach.b, t.approach.bt],
        [t.approach.c, t.approach.ct],
    ] as const

    return (
        <section
            className="approach-section"
            id="approach"
            aria-labelledby="approach-title"
        >
            <div className="shell">
                <span className="eyebrow">{t.approach.eyebrow}</span>
                <div className="half-heading">
                    <Reveal>
                        <h2 id="approach-title">{t.approach.headline}</h2>
                    </Reveal>
                    <p>{t.approach.intro}</p>
                </div>
                <div className="approach-grid">
                    {principles.map(([name, description], index) => (
                        <Reveal
                            className="approach-item"
                            key={name}
                            delay={index * 0.07}
                        >
                            <span className="mono small-number">
                                0{index + 1} /
                            </span>
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
