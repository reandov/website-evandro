import Image from 'next/image'
import { SectionTitle } from '../SectionTitle'

import coding from '@/assets/human_coding.svg'
import { skills } from '@/data'

export function Skills() {
  return (
    <section className="snap-y">
      <header className="mb-8">
        <SectionTitle title="Skills" />
        <div className="text-md text-justify md:text-lg">
          <p>{skills.text}</p>
        </div>
      </header>
      <main className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start">
        <ul className="grid grid-cols-3 gap-5 lg:grid-cols-5">
          {skills.techs.map((tech) => {
            return (
              <li
                key={tech.id}
                className="flex h-fit flex-col items-center gap-2 rounded-md border bg-gray-100 p-2"
              >
                <Image
                  src={tech.src}
                  alt={`${tech.name}'s icon`}
                  height={64}
                  width={64}
                />
                <hr className="w-full border-spacing-1 border-gray-300" />
                <span className="font-mono text-black">{tech.name}</span>
              </li>
            )
          })}
        </ul>
        <div className="block w-72 overflow-hidden rounded-full bg-white">
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
