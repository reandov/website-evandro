import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { NavigationBar } from '@/components/NavigationBar'
import { Resume } from '@/components/Resume'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import { Skills } from '@/components/Skills'
import { Timeline } from '@/components/Timeline'

export default function Page() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className="m-auto max-w-[22rem] lg:max-w-7xl">
        <ScrollAnimation>
          <Resume />
        </ScrollAnimation>
        <ScrollAnimation>
          <About />
        </ScrollAnimation>
        <ScrollAnimation>
          <Skills />
        </ScrollAnimation>
        <ScrollAnimation>
          <Timeline />
        </ScrollAnimation>
      </main>
      <Footer />
    </>
  )
}
