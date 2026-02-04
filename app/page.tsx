import { Navbar } from '@/components/navbar (1)'
import { Hero } from '@/components/hero (1)'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer (1)'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <AboutSection />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
}
