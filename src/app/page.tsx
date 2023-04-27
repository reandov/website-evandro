import { About } from '@/components/About'
import { NavigationBar } from '@/components/NavigationBar'
import { SectionContainer } from '@/components/SectionContainer'
import { Skills } from '@/components/Skills'
import { Timeline } from '@/components/Timeline'

export default function Page() {
  return (
    <main>
      <div className="bg-[url('../assets/background-01.svg')] bg-cover bg-bottom p-4">
        <SectionContainer>
          <header>
            <NavigationBar />
          </header>
        </SectionContainer>
        <SectionContainer>
          <About />
        </SectionContainer>
      </div>
      <div className="bg-gradient-to-b from-indigo-950 to-indigo-900 p-4 pb-8">
        <SectionContainer>
          <Skills />
        </SectionContainer>
      </div>
      <div className="bg-[url('../assets/background-02.svg')] bg-cover bg-top p-4 pt-64">
        <SectionContainer>
          <Timeline />
        </SectionContainer>
      </div>
    </main>
  )
}
