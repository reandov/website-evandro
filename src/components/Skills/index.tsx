import Image from 'next/image'
import { SectionTitle } from '../SectionTitle'

import coding from '@/assets/human_coding.svg'
import { skills } from '@/data'
import { Techs } from './components/Techs'

export function Skills() {
  return (
    <section id="skills">
      <header className="mb-8">
        <SectionTitle title="Skills" />
        <div className="text-md text-justify md:text-lg">
          <p>{skills.text}</p>
        </div>
      </header>
      <main className="flex flex-col items-center justify-evenly gap-12 lg:flex-row lg:items-start">
        <Techs techs={skills.techs} />
        <div className="block w-72 animate-smoothBounce overflow-hidden rounded-full bg-white">
          <Image
            src={coding}
            alt="Human with a notebook"
            className="h-full w-full object-cover"
            height={300}
            width={300}
          />
        </div>
      </main>
    </section>
  )
}
