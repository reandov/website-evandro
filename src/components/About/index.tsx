import Image from 'next/image'
import { SectionTitle } from '../SectionTitle'
import { about } from '@/data'

export function About() {
  return (
    <section className="grid h-[calc(100vh-10vh)] grid-cols-1 justify-items-center gap-10 lg:h-[calc(100vh-30vh)] lg:grid-cols-2 lg:justify-items-end">
      <div>
        <SectionTitle title={about.roles} />
        <div className="text-md flex flex-col gap-2 text-justify md:text-lg">
          {about.text.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>
          })}
        </div>
      </div>
      <div>
        <Image
          src="https://github.com/evnrodr.png"
          className="w-52 rounded-3xl lg:w-96"
          alt="Profile picture"
          width={850}
          height={850}
        />
      </div>
    </section>
  )
}
