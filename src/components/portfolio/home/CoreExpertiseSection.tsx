import { Code2, Server, Smartphone, Workflow } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageProvider'

const areas = [
    { key: 'web', icon: Code2 },
    { key: 'mobile', icon: Smartphone },
    { key: 'backend', icon: Server },
    { key: 'devops', icon: Workflow },
] as const

export function CoreExpertiseSection() {
    const { t } = useLanguage()

    return (
        <section
            className="expertise-section"
            id="expertise"
            aria-labelledby="expertise-title"
        >
            <div className="shell">
                <span className="eyebrow" id="expertise-title">
                    {t.expertise.eyebrow}
                </span>
                <ul className="expertise-list">
                    {areas.map(({ key, icon: Icon }, index) => (
                        <li key={key}>
                            <span className="expertise-number mono">
                                0{index + 1}
                            </span>
                            <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                            <h2>{t.expertise[key]}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
