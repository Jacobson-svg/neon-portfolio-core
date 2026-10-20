import type { Localized } from './projects';
export const skillGroups: { number: string; title: Localized; items: string[] }[] = [
 { number:'01', title:{en:'Frontend & mobile',fr:'Frontend & mobile'}, items:['React','Vue 3','React Native','TypeScript','HTML / CSS'] },
 { number:'02', title:{en:'Backend & APIs',fr:'Backend & APIs'}, items:['NestJS','Node.js','Django','Python','REST APIs'] },
 { number:'03', title:{en:'Data & ORM',fr:'Données & ORM'}, items:['PostgreSQL','MongoDB','Redis','Prisma ORM'] },
 { number:'04', title:{en:'DevOps & infrastructure',fr:'DevOps & infrastructure'}, items:['Docker','Docker Compose','Nginx','Linux / VPS','GitHub Actions'] },
 { number:'05', title:{en:'Quality & observability',fr:'Qualité & observabilité'}, items:['Jest','Vitest','Pytest','Sentry','Prometheus','Grafana'] },
 { number:'06', title:{en:'Cloud & workflow',fr:'Cloud & workflow'}, items:['Azure','DigitalOcean','Git','GitHub'] }
];
