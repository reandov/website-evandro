import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { NavigationBar } from '@/components/NavigationBar'
import { Resume } from '@/components/Resume'
import { Skills } from '@/components/Skills'
import { Timeline } from '@/components/Timeline'

export default function Page() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className="m-auto max-w-[22rem] lg:max-w-7xl">
        <Resume />
        <About />
        <Skills />
        <Timeline />
      </main>
      <Footer />
    </>
  )
}
