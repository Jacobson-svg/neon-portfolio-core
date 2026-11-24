import kazou from '@/assets/kazou_covoiturage.png'
import aje7Web from '@/assets/aje7_web.png'
import aje7Mobile from '@/assets/aje7_mobile.jpeg'
import caa from '@/assets/caa.png'
import flexEngineering from '@/assets/flex_engi.png'

export type Language = 'en' | 'fr'
export type Localized = Record<Language, string>
export type ProjectId =
    | 'kazou'
    | 'whatasso'
    | 'aje7'
    | 'caa-iso-manager'
    | 'assoh'
    | 'flex-engineering'
    | 'listeo'
export type Project = {
    id: ProjectId
    number: string
    name: string
    category: Localized
    title: Localized
    summary: Localized
    contribution: Localized
    challenge: Localized
    solution: Localized
    outcome: Localized
    stack: string[]
    image?: string
    secondaryImage?: string
    external?: string
    status?: Localized
}

export const projects: Project[] = [
    {
        id: 'kazou',
        number: '01',
        name: 'Kazou',
        category: {
            en: 'Flagship project / Mobility & delivery',
            fr: 'Projet phare / Mobilité & livraison',
        },
        title: {
            en: 'Mobility is only the beginning.',
            fr: 'La mobilité n’est que le début.',
        },
        summary: {
            en: 'A mobility ecosystem made up of several communicating backends. I focused on the NestJS delivery module and its integration into a wider system.',
            fr: 'Un écosystème de mobilité composé de plusieurs backends communicants. J’ai particulièrement travaillé sur le module de livraison NestJS et son intégration au système.',
        },
        contribution: {
            en: 'NestJS backend · Delivery module',
            fr: 'Backend NestJS · Module de livraison',
        },
        challenge: {
            en: 'Supporting delivery operations inside a platform where multiple backend services communicate through different mechanisms.',
            fr: 'Prendre en charge les opérations de livraison dans une plateforme où plusieurs backends communiquent par différents mécanismes.',
        },
        solution: {
            en: 'Contributed to the delivery backend built with NestJS and its interactions with the surrounding services. The exact internal topology is intentionally simplified here.',
            fr: 'Contribution au backend de livraison développé avec NestJS et à ses interactions avec les autres services. La topologie interne exacte est volontairement simplifiée ici.',
        },
        outcome: {
            en: 'A delivery module integrated into a broader mobility product. Production metrics are not disclosed.',
            fr: 'Un module de livraison intégré à un produit de mobilité plus large. Les métriques de production ne sont pas communiquées.',
        },
        stack: ['NestJS', 'REST APIs', 'Backend integration'],
        image: kazou,
        external: 'https://www.kazou-apps.com',
    },
    {
        id: 'whatasso',
        number: '02',
        name: 'WhatAsso',
        category: {
            en: 'Conversational commerce / Prototype',
            fr: 'Commerce conversationnel / Prototype',
        },
        title: {
            en: 'Shopping starts with a conversation.',
            fr: 'Tout commence par une conversation.',
        },
        summary: {
            en: 'A WhatsApp commerce and logistics prototype. Customers order in natural language, merchants offer products, and couriers coordinate parcel pickup and delivery through WhatsApp notifications. Payments are not connected.',
            fr: 'Un prototype de commerce et de logistique via WhatsApp. Les clients commandent en langage naturel, les commerçants proposent leurs produits et les livreurs coordonnent les retraits et livraisons grâce aux notifications WhatsApp. Le paiement n’est pas connecté.',
        },
        contribution: {
            en: 'Conversational workflows · Backend prototype',
            fr: 'Parcours conversationnels · Prototype backend',
        },
        challenge: {
            en: 'Make product discovery and delivery workflows accessible through a familiar messaging interface.',
            fr: 'Rendre l’achat et l’organisation des livraisons accessibles depuis une messagerie familière.',
        },
        solution: {
            en: 'Prototype conversational flows for customers, merchants and couriers, including order requests and delivery updates. The chat shown on this website is illustrative, not a live WhatsApp integration.',
            fr: 'Des parcours conversationnels prototypés pour les clients, commerçants et livreurs : demandes de commande et suivi de livraison. La conversation affichée sur ce site est illustrative, non connectée à WhatsApp en direct.',
        },
        outcome: {
            en: 'An exploratory prototype. Online payment integration is not implemented.',
            fr: 'Un prototype exploratoire. L’intégration du paiement en ligne n’est pas implémentée.',
        },
        stack: ['WhatsApp', 'Conversational UX', 'Backend'],
        status: {
            en: 'Prototype · No payment integration',
            fr: 'Prototype · Paiement non intégré',
        },
    },
    {
        id: 'aje7',
        number: '03',
        name: 'Aje7',
        category: {
            en: 'Web & mobile / Delivery',
            fr: 'Web & mobile / Livraison',
        },
        title: {
            en: 'A delivery ecosystem, built around real workflows.',
            fr: 'Un écosystème de livraison, pensé pour le terrain.',
        },
        summary: {
            en: 'Web and mobile applications connecting customers, businesses and delivery operators, with workflows for order management and tracking.',
            fr: 'Des applications web et mobiles reliant clients, entreprises et livreurs, avec des parcours de gestion et de suivi des commandes.',
        },
        contribution: {
            en: 'Web & mobile features · Backend APIs',
            fr: 'Fonctionnalités web et mobile · APIs backend',
        },
        challenge: {
            en: 'Coordinate orders and delivery operations across web and mobile experiences.',
            fr: 'Coordonner les commandes et les opérations de livraison entre applications web et mobile.',
        },
        solution: {
            en: 'Contributed to application features and backend services for delivery and order workflows.',
            fr: 'Contribution aux fonctionnalités applicatives et aux services backend pour les parcours de commande et livraison.',
        },
        outcome: {
            en: 'A multi-surface delivery product combining administrative and mobile experiences.',
            fr: 'Un produit de livraison combinant interfaces d’administration et expériences mobiles.',
        },
        stack: ['React', 'React Native', 'NestJS', 'PostgreSQL'],
        image: aje7Web,
        secondaryImage: aje7Mobile,
        external: 'https://aje7.com',
    },
    {
        id: 'caa-iso-manager',
        number: '04',
        name: 'CAA ISO Manager',
        category: {
            en: 'Enterprise platform / Compliance',
            fr: 'Plateforme entreprise / Conformité',
        },
        title: {
            en: 'From questionnaires to clearer decisions.',
            fr: 'Des questionnaires aux décisions éclairées.',
        },
        summary: {
            en: 'An ISO / RSE compliance assessment platform built around questionnaires, calculated indicators and dashboards for businesses and administrators.',
            fr: 'Une plateforme d’évaluation de conformité ISO / RSE avec questionnaires, indicateurs calculés et tableaux de bord pour entreprises et administrateurs.',
        },
        contribution: {
            en: 'Web interface · API integration · Assessment flows',
            fr: 'Interface web · Intégration API · Parcours d’évaluation',
        },
        challenge: {
            en: 'Make structured compliance assessments and performance indicators accessible and understandable.',
            fr: 'Rendre les évaluations structurées de conformité et les indicateurs de performance compréhensibles et accessibles.',
        },
        solution: {
            en: 'Built features for assessments, results and dashboards in a React and Django ecosystem.',
            fr: 'Développement de fonctionnalités d’évaluation, de résultats et de tableaux de bord dans un écosystème React et Django.',
        },
        outcome: {
            en: 'A platform to support companies and consulting teams in compliance assessment workflows.',
            fr: 'Une plateforme accompagnant entreprises et consultants dans leurs processus d’évaluation de conformité.',
        },
        stack: ['React', 'Django', 'PostgreSQL', 'Docker'],
        image: caa,
        external: 'https://caarse-isomanager.corporate-agency.org',
    },
    {
        id: 'assoh',
        number: '05',
        name: 'Assoh',
        category: {
            en: 'Professional experience / Software development',
            fr: 'Expérience professionnelle / Développement logiciel',
        },
        title: {
            en: 'Reliable APIs and evolving applications.',
            fr: 'Des APIs fiables et des applications évolutives.',
        },
        summary: {
            en: 'Work on REST APIs, modular backend architecture and web and mobile application features.',
            fr: 'Travail sur les APIs REST, l’architecture backend modulaire et des fonctionnalités web et mobile.',
        },
        contribution: {
            en: 'Backend APIs · Web & mobile features',
            fr: 'APIs backend · Fonctionnalités web et mobile',
        },
        challenge: {
            en: 'Support maintainable application features and backend integration.',
            fr: 'Contribuer à la maintenabilité des fonctionnalités et des intégrations backend.',
        },
        solution: {
            en: 'Developed API endpoints and application features. Specific product screenshots will be added when shareable.',
            fr: 'Développement de routes API et de fonctionnalités applicatives. Les captures seront ajoutées lorsqu’elles pourront être partagées.',
        },
        outcome: {
            en: 'Production-oriented professional experience.',
            fr: 'Une expérience professionnelle orientée production.',
        },
        stack: ['NestJS', 'Django', 'React Native'],
    },
    {
        id: 'flex-engineering',
        number: '06',
        name: 'Flex Engineering',
        category: { en: 'Corporate website', fr: 'Site vitrine professionnel' },
        title: {
            en: 'An accessible digital storefront.',
            fr: 'Une vitrine digitale accessible.',
        },
        summary: {
            en: 'A website introducing an engineering company, its services and products, with a direct path to WhatsApp inquiries.',
            fr: 'Un site présentant une entreprise d’ingénierie, ses services et ses produits, avec redirection vers WhatsApp pour les demandes.',
        },
        contribution: {
            en: 'Frontend development · Deployment',
            fr: 'Développement frontend · Déploiement',
        },
        challenge: {
            en: 'Present services clearly and make contacting the business straightforward.',
            fr: 'Présenter clairement les services et simplifier la prise de contact.',
        },
        solution: {
            en: 'Developed an organized responsive site and WhatsApp contact entry points.',
            fr: 'Développement d’un site responsive structuré et d’accès directs à WhatsApp.',
        },
        outcome: {
            en: 'A clear online showcase for the business.',
            fr: 'Une vitrine en ligne claire pour l’entreprise.',
        },
        stack: ['React', 'Tailwind CSS', 'Docker'],
        image: flexEngineering,
        external: 'https://flex-engineering-one.vercel.app/',
    },
    {
        id: 'listeo',
        number: '07',
        name: 'Listeo',
        category: {
            en: 'Freelance client project',
            fr: 'Projet client freelance',
        },
        title: {
            en: 'A client project in progress.',
            fr: 'Un projet client à documenter.',
        },
        summary: {
            en: 'Freelance project referenced in my experience. Details and visuals will be published when validated.',
            fr: 'Projet freelance mentionné dans mon parcours. Détails et visuels à publier après validation.',
        },
        contribution: {
            en: 'Project details pending confirmation',
            fr: 'Contributions à confirmer',
        },
        challenge: {
            en: 'Details to be confirmed.',
            fr: 'Détails à confirmer.',
        },
        solution: {
            en: 'Details to be confirmed.',
            fr: 'Détails à confirmer.',
        },
        outcome: { en: 'Details to be confirmed.', fr: 'Détails à confirmer.' },
        stack: [],
    },
]
export const projectById = (id?: string) => projects.find(p => p.id === id)

// Preserve the current case-study sequence while referring to projects by ID.
export const nextProjectId: Record<ProjectId, ProjectId> = {
    kazou: 'whatasso',
    whatasso: 'aje7',
    aje7: 'caa-iso-manager',
    'caa-iso-manager': 'assoh',
    assoh: 'flex-engineering',
    'flex-engineering': 'listeo',
    listeo: 'kazou',
}

export const nextProject = (id: ProjectId): Project => {
    const project = projectById(nextProjectId[id])
    if (!project) throw new Error(`Missing project ${nextProjectId[id]}`)
    return project
}
