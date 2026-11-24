import { Link } from 'react-router-dom'
import { useLanguage } from '@/i18n/LanguageProvider'
import { siteLinks } from '@/content/site'

const footerItems = [
    'expertise',
    'work',
    'skills',
    'experience',
    'approach',
    'about',
    'contact',
] as const

export function Footer() {
    const { language, t } = useLanguage()
    const isFrench = language === 'fr'

    return (
        <footer className="site-footer">
            <div className="shell footer-shell">
                <nav
                    className="footer-nav"
                    aria-label={isFrench ? 'Navigation de pied de page' : 'Footer navigation'}
                >
                    {footerItems.map(item => (
                        <Link key={item} to={`/#${item}`}>
                            {t.nav[item]}
                        </Link>
                    ))}
                </nav>
                <div className="footer-content">
                    <span>
                        © {new Date().getFullYear()} Jacob Brayan Fotso —{' '}
                        {isFrench ? 'Conçu avec intention' : 'Designed with intention'}
                    </span>
                    <div className="footer-socials">
                        <a href={siteLinks.email}>{t.contact.email}</a>
                        <a
                            href={siteLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href={siteLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
