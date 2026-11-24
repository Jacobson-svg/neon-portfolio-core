import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function TextLink({
    children,
    to,
    className = '',
}: {
    children: ReactNode
    to: string
    className?: string
}) {
    return (
        <Link to={to} className={`text-link ${className}`.trim()}>
            {children}
            <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
    )
}
