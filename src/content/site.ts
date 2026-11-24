import type { ProjectId } from './projects'

export const siteLinks = {
    email: 'mailto:jacobfotso1714@gmail.com',
    github: 'https://github.com/Jacobson-svg',
    linkedin: 'https://www.linkedin.com/in/jacob-brayan-fotso-986720300/',
} as const

export const projectPath = (id: ProjectId) => `/projects/${id}`
