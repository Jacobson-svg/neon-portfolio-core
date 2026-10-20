import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { projectById, projects } from '@/content/projects'
import { useLanguage } from '@/i18n/LanguageProvider'
import { Header } from '@/layout/Header'
import { Footer } from '@/layout/Footer'
import { Reveal } from '@/components/portfolio/Reveal'
import { WhatsAppPreview } from '@/components/portfolio/WhatsAppPreview'

function KazouArchitecture() {
    const { language } = useLanguage()
    return (
        <div className="arch-diagram">
            <div className="arch-note mono">
                {language === 'fr'
                    ? 'Vue conceptuelle / Topologie simplifiée'
                    : 'Conceptual view / Simplified topology'}
            </div>
            <div className="arch-flow">
                <div className="arch-node">
                    {language === 'fr'
                        ? 'Applications clientes'
                        : 'Client applications'}
                </div>
                <span className="arch-arrow">↔</span>
                <div className="arch-network">
                    <div className="arch-node arch-strong">
                        NestJS{' '}
                        <small>
                            {language === 'fr'
                                ? 'Module de livraison'
                                : 'Delivery module'}
                        </small>
                    </div>
                    <div className="arch-node">
                        {language === 'fr'
                            ? 'Autres backends'
                            : 'Other backend services'}
                    </div>
                </div>
            </div>
            <p className="arch-disclaimer">
                {language === 'fr'
                    ? 'Les mécanismes de communication sont multiples. Les protocoles et composants internes ne sont pas détaillés publiquement.'
                    : 'Several communication mechanisms are used. Internal protocols and components are not presented as an exact public architecture.'}
            </p>
        </div>
    )
}
export default function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>()
    const { language, t } = useLanguage()
    const p = projectById(slug)
    if (!p)
        return (
            <>
                <Header />
                <main className="not-found shell">
                    <span className="eyebrow">404</span>
                    <h1>{t.notFound.title}</h1>
                    <p>{t.notFound.text}</p>
                    <Link className="text-link" to="/">
                        {t.notFound.back}
                        <ArrowUpRight size={18} />
                    </Link>
                </main>
                <Footer />
            </>
        )
    const index = projects.findIndex(x => x.id === p.id),
        next = projects[(index + 1) % projects.length]
    return (
        <>
            <Header />
            <main className="case-main">
                <div className="shell">
                    <div className="case-breadcrumb">
                        <Link to="/#work">
                            <ArrowLeft size={15} />
                            {t.detail.back}
                        </Link>
                        <span className="mono">CASE STUDY / {p.number}—07</span>
                    </div>
                    <header className="case-heading">
                        <span className="eyebrow">{p.category[language]}</span>
                        <Reveal>
                            <h1>
                                {p.name}
                                <span className="period">.</span>
                            </h1>
                        </Reveal>
                        <div className="case-sub">
                            <h2>{p.title[language]}</h2>
                            <p>{p.summary[language]}</p>
                        </div>
                    </header>
                    <Reveal
                        className={`case-hero-image ${p.image ? 'has-image' : 'is-text'}`}
                    >
                        {p.image ? (
                            <img
                                src={p.image}
                                alt={`${p.name} — ${t.detail.image}`}
                            />
                        ) : p.id === 'whatasso' ? (
                            <WhatsAppPreview compact />
                        ) : (
                            <div className="case-placeholder">
                                <span>{p.name}</span>
                                <small>{p.category[language]}</small>
                            </div>
                        )}
                    </Reveal>
                    <section className="case-overview">
                        <div>
                            <span className="eyebrow">
                                / {t.detail.overview}
                            </span>
                            <h2>
                                {p.name}
                                <span className="period">.</span>
                            </h2>
                        </div>
                        <div>
                            <p>{p.summary[language]}</p>
                            <div className="project-tags detail-tags">
                                {p.stack.map(s => (
                                    <span key={s}>{s}</span>
                                ))}
                            </div>
                            {p.status && (
                                <p className="status-note">
                                    {p.status[language]}
                                </p>
                            )}
                            {p.external && (
                                <a
                                    className="text-link"
                                    href={p.external}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t.detail.open}
                                    <ArrowUpRight size={18} />
                                </a>
                            )}
                        </div>
                    </section>
                    <section className="case-narrative">
                        <Reveal>
                            <span className="mono small-number">
                                01 / {t.detail.challenge}
                            </span>
                            <h3>{p.challenge[language]}</h3>
                        </Reveal>
                        <Reveal>
                            <span className="mono small-number">
                                02 / {t.detail.solution}
                            </span>
                            <h3>{p.solution[language]}</h3>
                        </Reveal>
                        <Reveal>
                            <span className="mono small-number">
                                03 / {t.detail.outcome}
                            </span>
                            <h3>{p.outcome[language]}</h3>
                        </Reveal>
                    </section>
                    {p.id === 'kazou' && (
                        <section className="case-special">
                            <span className="eyebrow">
                                / Backend architecture
                            </span>
                            <h2>
                                {language === 'fr'
                                    ? 'Un module au sein d’un système plus large.'
                                    : 'One module inside a larger system.'}
                            </h2>
                            <KazouArchitecture />
                        </section>
                    )}
                    {p.id === 'whatasso' && (
                        <section className="case-special">
                            <span className="eyebrow">/ {t.detail.flow}</span>
                            <h2>
                                {language === 'fr'
                                    ? 'Trois rôles. Une même conversation.'
                                    : 'Three roles. One familiar interface.'}
                            </h2>
                            <p className="case-special-intro">
                                {language === 'fr'
                                    ? 'Démo éditoriale des parcours de commande, de catalogue et de livraison. Aucun paiement n’est connecté.'
                                    : 'Editorial demonstration of ordering, catalog and delivery interactions. No payment integration is connected.'}
                            </p>
                            <div className="special-phone">
                                <WhatsAppPreview showSelector />
                            </div>
                        </section>
                    )}
                    {p.secondaryImage && (
                        <section className="case-special">
                            <span className="eyebrow">/ Mobile</span>
                            <h2>
                                {language === 'fr'
                                    ? 'Du web au mobile.'
                                    : 'From web to mobile.'}
                            </h2>
                            <div className="case-secondary-image">
                                <img
                                    src={p.secondaryImage}
                                    alt="Aje7 mobile application"
                                    loading="lazy"
                                />
                            </div>
                        </section>
                    )}
                    <div className="case-next">
                        <span className="eyebrow">{t.detail.next}</span>
                        <Link to={`/projects/${next.id}`}>
                            {next.name}
                            <ArrowRight size={35} />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
