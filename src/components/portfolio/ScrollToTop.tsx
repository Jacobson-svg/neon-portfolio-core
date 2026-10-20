import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export function ScrollToTop() {
    const { pathname, hash } = useLocation()
    useEffect(() => {
        if (hash) {
            const id = decodeURIComponent(hash.slice(1))
            const handle = window.setTimeout(
                () =>
                    document
                        .getElementById(id)
                        ?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        }),
                70
            )
            return () => clearTimeout(handle)
        }
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [pathname, hash])
    return null
}
