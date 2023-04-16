import { About } from '@/components/About'
import { NavigationBar } from '@/components/NavigationBar'
import { SectionContainer } from '@/components/SectionContainer'

export default function Page() {
  return (
    <main>
      <div className="p-4 bg-[url('../assets/background_01.svg')] bg-cover">
        <SectionContainer>
          <header>
            <NavigationBar />
          </header>
        </SectionContainer>
        <SectionContainer>
          <About />
        </SectionContainer>
      </div>
    </main>
  )
}
