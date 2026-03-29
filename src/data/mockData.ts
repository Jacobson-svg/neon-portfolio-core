import aje7_web from "@/assets/aje7_web.png";
import aje7_mobile from "@/assets/aje7_mobile.jpeg";
import flex_engi from "@/assets/flex_engi.png";
import caa from "@/assets/caa.png";
import kazou_covoiturage from "@/assets/kazou_covoiturage.png";


export const personalInfo = {
  name: "JACOB BRAYAN FOTSO",
  role: "Full-stack Developer",
  bio: "Passionate full-stack developer crafting cutting-edge digital experiences with a focus on innovation and scalability. I transform complex challenges into elegant, high-performance solutions that push the boundaries of modern web development.",
  about: "With a deep passion for technology and innovation, I specialize in building robust, scalable applications that deliver exceptional user experiences. My journey in software development has equipped me with a diverse skill set spanning frontend elegance to backend efficiency. I thrive on solving complex problems and continuously exploring emerging technologies to stay at the forefront of the industry.",
};

export const skills = [
  { name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Node.js", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "Tailwind", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Express", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" }, // Note: Express original is usually dark text, handle with care on dark mode
  { name: "Nest.js", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
  { name: "Docker", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "AWS", category: "Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Git", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "REST API", category: "API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" }, // Utilisation de l'icône FastAPI pour représenter l'API
];

export const projects = [
  {
    id: 1,
    title: "Aje7 Web",
    description: "A web-based admin platform that enables businesses and administrators to manage orders, configure commissions, monitor performance, and oversee delivery operations in real time. It provides dashboards, role-based access, and efficient tools for handling users, services, and transactions.",
    technologies: ["React", "TypeScript", "Nest Js", "PostgreSQL", "TailwindCSS"],
    image: aje7_web,
    github: "",
    demo: "https://aje7.com",
  },
  {
    id: 2,
    title: "Aje7 Mobile",
    description: "A mobile application that allows customers to browse services, place orders, and track deliveries in real time. It offers a smooth user experience with instant notifications, live updates, and secure interactions with businesses and delivery agents.",
    technologies: ["React native", "PostgresSQL", "Typescript", "Nativewind"],
    image: aje7_mobile,
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.benito2000.Aje7",
  },
  {
    id: 3,
    title: "Flex engineering",
    description: "A web platform designed to showcase an engineering company, its services, and its range of products. The site provides a structured and user-friendly interface for presenting offerings, with a direct redirection to WhatsApp for seamless customer inquiries and order placement.",
    technologies: ["React", "TailwindCSS", "Docker"],
    image: flex_engi,
    github: "",
    demo: "https://flex-engineering-one.vercel.app/",
  },
  {
    id: 4,
    title: "CAA - RSE Manager",
    description: "A digital platform designed to help companies perform audits and monitor compliance with ISO standards. Businesses can assess their performance by answering KPI-based questionnaires and automatically calculate their ISO scores. The application includes a company interface for completing assessments and tracking scores, as well as an admin dashboard for professionals to supervise, monitor progress, and manage multiple companies efficiently.",
    technologies: ["React", "Django", "PostgreSQL", "Redis", "Docker"],
    image: caa,
    github: "",
    demo: "https://caarse-isomanager.corporate-agency.org",
  },
  {
    id: 5,
    title: "Kazou covoiturage",
    description: "A mobile application that connects drivers and passengers for shared rides, making transportation more affordable and efficient. Users can offer or find trips, manage bookings, and communicate easily within the platform, with a focus on simplicity, real-time coordination, and a smooth user experience.",
    technologies: ["React Native", "Nativewind", "Laravel"],
    image: kazou_covoiturage,
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.kazou.kazou",
  },
  // {
  //   id: 6,
  //   title: "ConnectHub Social",
  //   description: "Modern social networking platform featuring real-time messaging, content sharing, and community building tools with advanced privacy controls.",
  //   technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
  //   image: project6,
  //   github: "https://github.com",
  //   demo: "https://example.com",
  // },
  // {
  //   id: 7,
  //   title: "TaskFlow Manager",
  //   description: "Collaborative project management tool with kanban boards, time tracking, team collaboration features, and automated workflow optimization for agile teams.",
  //   technologies: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
  //   image: project7,
  //   github: "https://github.com",
  //   demo: "https://example.com",
  // },
  // {
  //   id: 8,
  //   title: "SmartHome Hub",
  //   description: "Unified IoT control center managing smart devices, automation rules, energy monitoring, and security systems through an intuitive interface.",
  //   technologies: ["React", "Python", "MQTT", "InfluxDB"],
  //   image: project8,
  //   github: "https://github.com",
  //   demo: "https://example.com",
  // },
];

export const contact = {
  email: "jacobfotso1714@gmail.com",
  github: "https://github.com/Jacobson-svg",
  linkedin: "https://www.linkedin.com/in/jacob-brayan-fotso-986720300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};
