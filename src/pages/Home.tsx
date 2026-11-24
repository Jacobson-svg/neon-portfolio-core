import { AboutSection } from '@/components/portfolio/home/AboutSection'
import { ApproachSection } from '@/components/portfolio/home/ApproachSection'
import { ContactSection } from '@/components/portfolio/home/ContactSection'
import { CoreExpertiseSection } from '@/components/portfolio/home/CoreExpertiseSection'
import { ExperienceSection } from '@/components/portfolio/home/ExperienceSection'
import { HeroSection } from '@/components/portfolio/home/HeroSection'
import { ProjectsSection } from '@/components/portfolio/home/ProjectsSection'
import { SkillsSection } from '@/components/portfolio/home/SkillsSection'
import { Footer } from '@/layout/Footer'
import { Header } from '@/layout/Header'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <CoreExpertiseSection />
                <ProjectsSection />
                <SkillsSection />
                <ExperienceSection />
                <ApproachSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
