import { homeData } from '@/data/home'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="max-w-7xl m-auto mt-8 px-20 flex justify-between items-center">
      <div className="w-1/2">
        <div className="mb-4">
          <h1 className="text-4xl ">
            Hello, I&apos;m{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 animate-text">
              {homeData.name}
            </span>{' '}
            👋
          </h1>

          <span className="text-md text-slate-400">{homeData.roles}</span>
        </div>

        <div className="flex flex-col gap-3 leading-relaxed text-justify">
          {homeData.about.map((paragraph) => {
            return <p key={paragraph.id}>{paragraph.text}</p>
          })}
        </div>
      </div>
      <div>
        <Image
          src="https://github.com/evnrodr.png"
          alt={`${homeData.name}'s profile picture`}
          className="rounded-full animate-smoothBounce"
          width={400}
          height={400}
        />
      </div>
    </main>
  )
}
