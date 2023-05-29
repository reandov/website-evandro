import Image from 'next/image'

interface TechsProps {
  techs: {
    id: number
    src: string
    name: string
  }[]
}

export function Techs({ techs }: TechsProps) {
  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-5">
      {techs.map((tech) => {
        return (
          <li
            key={tech.id}
            className="flex h-fit flex-col items-center gap-2 rounded-md border bg-gray-100 p-2 transition hover:scale-110"
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
  )
}
