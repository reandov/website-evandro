import { SocialNetworksCards } from '@/components/SocialNetworksCards'
import { homeData } from '@/data/home'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="max-w-7xl m-auto mt-8 p-12 bg-neutral-800 rounded-xl">
      <div className="flex justify-around items-center">
        <div className="w-1/2 pr-8 border-r border-neutral-700 border-spacing-8">
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
            width={300}
            height={300}
          />
        </div>
      </div>
      <hr className="my-4 border-neutral-700" />
      <SocialNetworksCards />
      <hr className="my-8 border-neutral-700" />
      <span className="block text-center">
        &#169; {new Date().getFullYear()}, Evandro Rodrigues. All rights
        reserved.
      </span>
    </main>
  )
}
