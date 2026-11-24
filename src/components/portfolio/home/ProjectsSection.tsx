import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projectById, type Project, type ProjectId } from '@/content/projects'
import { projectPath } from '@/content/site'
import { useLanguage } from '@/i18n/LanguageProvider'
import { WhatsAppPreview } from '@/components/portfolio/WhatsAppPreview'
import { Reveal } from '@/components/portfolio/Reveal'
import { TextLink } from './TextLink'

const featuredIds: ProjectId[] = ['kazou', 'whatasso', 'aje7', 'caa-iso-manager']
const secondaryIds: ProjectId[] = ['assoh', 'flex-engineering', 'listeo']

function resolveProjects(ids: ProjectId[]) {
    return ids.flatMap(id => {
        const project = projectById(id)
        return project ? [project] : []
    })
}

function ProjectDetails({ project }: { project: Project }) {
    const { language, t } = useLanguage()

    return (
        <div className="project-details">
            <div className="project-kicker">
                <span>
                    {project.number} / {project.category[language]}
                </span>
                {project.status && (
                    <span className="project-status">
                        {project.status[language]}
                    </span>
                )}
            </div>
            <h3 className="project-title">
                {project.name}
                <span className="period">.</span>
            </h3>
            <h4 className="project-headline">{project.title[language]}</h4>
            <p className="project-summary">{project.summary[language]}</p>
            <div className="project-contribution">
                <span className="eyebrow">{t.work.contribution}</span>
                <p>{project.contribution[language]}</p>
            </div>
            {project.stack.length > 0 && (
                <div className="project-tags" aria-label={t.detail.stack}>
                    {project.stack.map(technology => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>
            )}
            <TextLink to={projectPath(project.id)}>{t.work.case}</TextLink>
        </div>
    )
}

function FeaturedKazou({ project }: { project: Project }) {
    const { language, t } = useLanguage()

    return (
        <Reveal className="kazou-card">
            <div className="kazou-copy">
                <span className="eyebrow">{project.category[language]}</span>
                <h3>
                    {project.name}
                    <span className="period">.</span>
                </h3>
                <p className="kazou-tagline">{project.title[language]}</p>
                <p>{project.summary[language]}</p>
                <div className="kazou-contribution">
                    <span className="eyebrow">{t.work.contribution}</span>
                    <strong>{project.contribution[language]}</strong>
                </div>
                <div className="project-tags" aria-label={t.detail.stack}>
                    {project.stack.map(technology => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>
                <TextLink to={projectPath(project.id)}>
                    {t.work.case}
                </TextLink>
            </div>
            {project.image ? (
                <Link
                    className="kazou-image"
                    to={projectPath(project.id)}
                    aria-label={`${project.name}: ${t.work.case}`}
                >
                    <img
                        src={project.image}
                        alt={`${project.name} — ${t.detail.image}`}
                        loading="lazy"
                    />
                </Link>
            ) : (
                <Link
                    className="kazou-editorial-visual"
                    to={projectPath(project.id)}
                    aria-label={`${project.name}: ${t.work.case}`}
                >
                    <span>{project.name}</span>
                </Link>
            )}
        </Reveal>
    )
}

function FeaturedProject({
    project,
    reverse,
}: {
    project: Project
    reverse: boolean
}) {
    const { language, t } = useLanguage()
    const isWhatAsso = project.id === 'whatasso'

    return (
        <Reveal
            className={`feature-project${reverse ? ' feature-project--reverse' : ''}${isWhatAsso ? ' feature-project--whatasso' : ''}`}
        >
            <div className="feature-visual">
                {isWhatAsso ? (
                    <div className="whatasso-visual">
                        <WhatsAppPreview compact />
                    </div>
                ) : project.image ? (
                    <Link
                        className="feature-image"
                        to={projectPath(project.id)}
                        aria-label={`${project.name}: ${t.work.case}`}
                    >
                        <img
                            src={project.image}
                            alt={`${project.name} — ${t.detail.image}`}
                            loading="lazy"
                        />
                    </Link>
                ) : (
                    <Link
                        className="feature-editorial-visual"
                        to={projectPath(project.id)}
                    >
                        <span className="mono">{project.number}</span>
                        <strong>{project.name}</strong>
                    </Link>
                )}
            </div>
            <ProjectDetails project={project} />
        </Reveal>
    )
}

function SecondaryProject({ project }: { project: Project }) {
    const { language, t } = useLanguage()

    return (
        <article className="selected-project">
            {project.image && (
                <Link
                    className="selected-project-image"
                    to={projectPath(project.id)}
                    aria-label={`${project.name}: ${t.work.case}`}
                >
                    <img
                        src={project.image}
                        alt={`${project.name} — ${t.detail.image}`}
                        loading="lazy"
                    />
                </Link>
            )}
            <div className="selected-project-copy">
                <div className="project-kicker">
                    <span>{project.number} / {project.category[language]}</span>
                </div>
                <h3>{project.name}<span className="period">.</span></h3>
                <p className="selected-project-summary">
                    {project.summary[language]}
                </p>
                <div className="selected-project-contribution">
                    <span className="eyebrow">{t.work.contribution}</span>
                    <p>{project.contribution[language]}</p>
                </div>
                {project.stack.length > 0 && (
                    <div className="project-tags" aria-label={t.detail.stack}>
                        {project.stack.map(technology => (
                            <span key={technology}>{technology}</span>
                        ))}
                    </div>
                )}
                <Link className="selected-project-link" to={projectPath(project.id)}>
                    {t.work.case}
                    <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
            </div>
        </article>
    )
}

export function ProjectsSection() {
    const { t } = useLanguage()
    const [kazou, ...featured] = resolveProjects(featuredIds)
    const secondary = resolveProjects(secondaryIds)

    return (
        <section className="work-section" id="work" aria-labelledby="work-title">
            <div className="shell">
                <div className="section-heading">
                    <div>
                        <span className="eyebrow">{t.work.eyebrow}</span>
                        <Reveal>
                            <h2 id="work-title">
                                {t.work.headline}<span className="period">.</span>
                            </h2>
                        </Reveal>
                    </div>
                    <p>{t.work.intro}</p>
                </div>
                {kazou && <FeaturedKazou project={kazou} />}
                {featured.map((project, index) => (
                    <FeaturedProject
                        key={project.id}
                        project={project}
                        reverse={index === 0 || index === 2}
                    />
                ))}
                <div className="more-work">
                    <div className="more-intro">
                        <span className="eyebrow">/ 05—07</span>
                        <h3>{t.work.other}</h3>
                        <p>{t.work.otherIntro}</p>
                    </div>
                    <div className="selected-project-grid">
                        {secondary.map(project => (
                            <SecondaryProject key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
