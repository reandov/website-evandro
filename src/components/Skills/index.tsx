import Image from 'next/image'

import coding from '@/assets/human_coding.svg'
import { skills } from '@/data'
import { Techs } from './components/Techs'

export function Skills() {
  return (
    <section id="skills" className="mt-24">
      <header className="mb-8">
        <h1 className="font-mono text-3xl font-bold">My skills</h1>
        <p className="mt-4 text-justify">{skills.text}</p>
      </header>
      <div className="mt-4 lg:grid lg:grid-cols-2">
        <Techs techs={skills.techs} />
        <div className="flex animate-smoothBounce justify-center">
          <Image
            src={coding}
            alt="Human with a notebook"
            height={300}
            width={300}
          />
        </div>
      </div>
    </section>
  )
}
