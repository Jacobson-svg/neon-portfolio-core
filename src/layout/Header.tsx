import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageProvider'
import { useTheme } from '@/hooks/useTheme'
import { siteLinks } from '@/content/site'

const items = [
    'expertise',
    'work',
    'skills',
    'experience',
    'approach',
    'about',
    'contact',
] as const

type NavItem = (typeof items)[number]

export function Header() {
    const { language, setLanguage, t } = useLanguage()
    const { theme, toggleTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)
    const [progress, setProgress] = useState(0)
    const [activeItem, setActiveItem] = useState<NavItem | null>(null)
    const location = useLocation()

    useEffect(() => setMenuOpen(false), [location.pathname])

    useEffect(() => {
        const onScroll = () => {
            const doc = document.documentElement
            const max = doc.scrollHeight - window.innerHeight
            setProgress(max <= 0 ? 0 : (100 * window.scrollY) / max)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [location.pathname])

    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveItem(null)
            return
        }

        const sections = items
            .map(id => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null)
        if (!sections.length) return

        const observer = new IntersectionObserver(
            entries => {
                const current = entries
                    .filter(entry => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    )[0]
                if (current) setActiveItem(current.target.id as NavItem)
            },
            { rootMargin: '-22% 0px -68% 0px', threshold: 0 }
        )
        sections.forEach(section => observer.observe(section))
        return () => observer.disconnect()
    }, [location.pathname])

    useEffect(() => {
        if (!menuOpen) return
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMenuOpen(false)
        }
        window.addEventListener('keydown', closeOnEscape)
        return () => window.removeEventListener('keydown', closeOnEscape)
    }, [menuOpen])

    const isFrench = language === 'fr'

    return (
        <>
            <div
                className="reading-progress"
                style={{ width: `${progress}%` }}
                aria-hidden="true"
            />
            <header className="site-header">
                <div className="shell header-inner">
                    <Link
                        className="brand"
                        to="/"
                        aria-label="Jacob Brayan Fotso — home"
                    >
                        JBF<span>.</span>
                    </Link>
                    <nav
                        className={`site-nav ${menuOpen ? 'open' : ''}`}
                        id="primary-navigation"
                        aria-label={isFrench ? 'Navigation principale' : 'Main navigation'}
                    >
                        {items.map(item => (
                            <Link
                                key={item}
                                to={`/#${item}`}
                                className={activeItem === item ? 'active' : ''}
                                aria-current={activeItem === item ? 'location' : undefined}
                                onClick={() => setMenuOpen(false)}
                            >
                                {t.nav[item]}
                            </Link>
                        ))}
                    </nav>
                    <div className="header-right">
                        <button
                            className="theme-toggle"
                            type="button"
                            onClick={toggleTheme}
                            aria-pressed={theme === 'dark'}
                            aria-label={isFrench
                                ? `Activer le thème ${theme === 'dark' ? 'clair' : 'sombre'}`
                                : `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                            title={isFrench
                                ? `Thème ${theme === 'dark' ? 'clair' : 'sombre'}`
                                : `${theme === 'dark' ? 'Light' : 'Dark'} theme`}
                        >
                            {theme === 'dark' ? (
                                <Sun size={18} aria-hidden="true" />
                            ) : (
                                <Moon size={18} aria-hidden="true" />
                            )}
                        </button>
                        <div
                            className="language-switch"
                            role="group"
                            aria-label={isFrench ? 'Choisir la langue' : 'Choose language'}
                        >
                            <button
                                type="button"
                                onClick={() => setLanguage('en')}
                                className={language === 'en' ? 'on' : ''}
                                aria-pressed={language === 'en'}
                            >
                                EN
                            </button>
                            <span aria-hidden="true">/</span>
                            <button
                                type="button"
                                onClick={() => setLanguage('fr')}
                                className={language === 'fr' ? 'on' : ''}
                                aria-pressed={language === 'fr'}
                            >
                                FR
                            </button>
                        </div>
                        <a className="header-contact" href={siteLinks.email}>
                            {t.nav.touch}
                            <ArrowUpRight size={15} aria-hidden="true" />
                        </a>
                        <button
                            className="mobile-menu"
                            type="button"
                            aria-expanded={menuOpen}
                            aria-controls="primary-navigation"
                            aria-label={menuOpen
                                ? (isFrench ? 'Fermer le menu' : 'Close menu')
                                : (isFrench ? 'Ouvrir le menu' : 'Open menu')}
                            onClick={() => setMenuOpen(open => !open)}
                        >
                            {menuOpen ? (
                                <X size={22} aria-hidden="true" />
                            ) : (
                                <Menu size={22} aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
