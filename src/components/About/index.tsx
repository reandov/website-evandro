import Image from 'next/image'
import { SectionTitle } from '../SectionTitle'

export function About() {
  return (
    <section className="grid h-[calc(100vh-10vh)] grid-cols-1 justify-items-center gap-10 lg:h-[calc(100vh-30vh)] lg:grid-cols-2 lg:justify-items-end">
      <div>
        <SectionTitle title="Web Developer | Computer Scientist" />
        <div className="text-md flex flex-col gap-2 text-justify md:text-lg">
          <p>
            Hi, my name is Evandro Rodrigues, nice to met you! I am a front-end
            developer from Brazil. I am also graduating myself in Computer
            Science by the Federal University of Ceará. I LOVE working with
            technology in general, so much that front-end is not enough to
            fulfil my spectations, therefore, I have experience with a lot of
            development areas such as front-end, back-end, machine learning,
            data science, game development and others.
          </p>
          <p>
            Currently I am working in a tech company as a Front-End developer
            using React with meta-frameworks such as NextJS and Oracle OpenStore
            Framework. I am also working with technologies such as TypeScript,
            Styled Components and others.
          </p>
        </div>
      </div>
      <div>
        <Image
          src="https://github.com/evnrodr.png"
          className="w-52 rounded-3xl lg:w-96"
          alt="Evandro's Profile Picture"
          width={850}
          height={850}
        />
      </div>
    </section>
  )
}
