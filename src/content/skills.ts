import type { Localized } from './projects'

export type Technology = {
    id: string
    name: string
    logo?: string
    mark?: string
}

export type SkillGroup = {
    id: string
    number: string
    title: Localized
    items: Technology[]
}

export const skillGroups: SkillGroup[] = [
    {
        id: 'frontend-mobile',
        number: '01',
        title: { en: 'Frontend & mobile', fr: 'Frontend & mobile' },
        items: [
            { id: 'react', name: 'React', logo: 'react' },
            { id: 'vue-3', name: 'Vue 3', logo: 'vuedotjs' },
            { id: 'react-native', name: 'React Native', logo: 'react' },
            { id: 'typescript', name: 'TypeScript', logo: 'typescript' },
            { id: 'html-css', name: 'HTML / CSS', mark: '</>' },
        ],
    },
    {
        id: 'backend-apis',
        number: '02',
        title: { en: 'Backend & APIs', fr: 'Backend & APIs' },
        items: [
            { id: 'nestjs', name: 'NestJS', logo: 'nestjs' },
            { id: 'nodejs', name: 'Node.js', logo: 'nodedotjs' },
            { id: 'django', name: 'Django', logo: 'django' },
            { id: 'python', name: 'Python', logo: 'python' },
            { id: 'rest-apis', name: 'REST APIs', mark: 'API' },
        ],
    },
    {
        id: 'data-orm',
        number: '03',
        title: { en: 'Data & ORM', fr: 'Données & ORM' },
        items: [
            { id: 'postgresql', name: 'PostgreSQL', logo: 'postgresql' },
            { id: 'mongodb', name: 'MongoDB', logo: 'mongodb' },
            { id: 'redis', name: 'Redis', logo: 'redis' },
            { id: 'prisma-orm', name: 'Prisma ORM', logo: 'prisma' },
        ],
    },
    {
        id: 'devops-infrastructure',
        number: '04',
        title: { en: 'DevOps & infrastructure', fr: 'DevOps & infrastructure' },
        items: [
            { id: 'docker', name: 'Docker', logo: 'docker' },
            { id: 'docker-compose', name: 'Docker Compose', logo: 'docker' },
            { id: 'nginx', name: 'Nginx', logo: 'nginx' },
            { id: 'linux-vps', name: 'Linux / VPS', logo: 'linux' },
            { id: 'github-actions', name: 'GitHub Actions', logo: 'githubactions' },
        ],
    },
    {
        id: 'quality-observability',
        number: '05',
        title: { en: 'Quality & observability', fr: 'Qualité & observabilité' },
        items: [
            { id: 'jest', name: 'Jest', logo: 'jest' },
            { id: 'vitest', name: 'Vitest', logo: 'vitest' },
            { id: 'pytest', name: 'Pytest', logo: 'pytest' },
            { id: 'sentry', name: 'Sentry', logo: 'sentry' },
            { id: 'prometheus', name: 'Prometheus', logo: 'prometheus' },
            { id: 'grafana', name: 'Grafana', logo: 'grafana' },
        ],
    },
    {
        id: 'cloud-workflow',
        number: '06',
        title: { en: 'Cloud & workflow', fr: 'Cloud & workflow' },
        items: [
            { id: 'azure', name: 'Azure', mark: 'AZ' },
            { id: 'digitalocean', name: 'DigitalOcean', logo: 'digitalocean' },
            { id: 'git', name: 'Git', logo: 'git' },
            { id: 'github', name: 'GitHub', logo: 'github' },
        ],
    },
]
