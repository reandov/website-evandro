import Image from 'next/image'
import { SectionTitle } from '../SectionTitle'

import coding from '@/assets/human_coding.svg'

export function Skills() {
  return (
    <section className="snap-y">
      <header className="mb-8">
        <SectionTitle title="Skills" />
        <div className="text-md text-justify md:text-lg">
          <p>
            I currently work with <strong>web development</strong>, so my
            expertise relies mostly with front-end stuff, but I also have
            experience with other areas in technology as previously stated. Here
            is some of my skills:
          </p>
        </div>
      </header>
      <main className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start">
        <ul className="grid grid-cols-3 gap-5 lg:grid-cols-5">
          {techs.map((tech) => {
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

const techs = [
  {
    id: 0,
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
    name: 'HTML',
  },
  {
    id: 1,
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
    name: 'CSS',
  },
  {
    id: 2,
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    name: 'JavaScript',
  },
  {
    id: 3,
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    name: 'React',
  },
  {
    id: 4,
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
    name: 'NextJS',
  },
  {
    id: 5,
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    name: 'TypeScript',
  },
  {
    id: 6,
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    name: 'Firebase',
  },
  {
    id: 7,
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    name: 'VS Code',
  },
  {
    id: 8,
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    name: 'Python',
  },
  {
    id: 9,
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    name: 'Git',
  },
]
