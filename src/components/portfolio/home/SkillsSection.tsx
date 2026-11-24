import { useLanguage } from '@/i18n/LanguageProvider'
import { skillGroups, type Technology } from '@/content/skills'
import { Reveal } from '@/components/portfolio/Reveal'
import { TextLink } from './TextLink'

function TechnologyItem({ technology }: { technology: Technology }) {
    return (
        <li className="technology-item">
            <span className="technology-logo" aria-hidden="true">
                {technology.logo ? (
                    <img
                        src={`/tech-logos/${technology.logo}.svg`}
                        alt=""
                        loading="lazy"
                    />
                ) : (
                    <span className="technology-mark">
                        {technology.mark ?? technology.name.slice(0, 2)}
                    </span>
                )}
            </span>
            <span className="technology-name">{technology.name}</span>
        </li>
    )
}

export function SkillsSection() {
    const { language, t } = useLanguage()

    return (
        <section className="skills-section" id="skills" aria-labelledby="skills-title">
            <div className="shell">
                <span className="eyebrow">{t.skills.eyebrow}</span>
                <div className="half-heading skills-heading">
                    <Reveal>
                        <h2 id="skills-title">
                            {t.skills.headlineA}
                            <br />
                            <em>{t.skills.headlineB}</em>
                        </h2>
                    </Reveal>
                    <p>{t.skills.intro}</p>
                </div>
                <div className="skills-grid">
                    {skillGroups.map(group => (
                        <Reveal key={group.id} className="skill-entry">
                            <span className="mono small-number">
                                {group.number} /
                            </span>
                            <h3>{group.title[language]}</h3>
                            <ul className="technology-list">
                                {group.items.map(technology => (
                                    <TechnologyItem
                                        key={technology.id}
                                        technology={technology}
                                    />
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
                <div className="skills-foot mono">
                    <span>{t.skills.note}</span>
                    <TextLink to="/#work">
                        {language === 'fr' ? 'Voir les projets' : 'See the projects'}
                    </TextLink>
                </div>
            </div>
        </section>
    )
}
