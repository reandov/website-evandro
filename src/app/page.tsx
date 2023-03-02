import { SocialNetworksCards } from '@/components/SocialNetworksCards'
import { homeData } from '@/data/home'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="m-auto mt-8 max-w-7xl rounded-t-3xl bg-neutral-800 p-4 lg:mt-28 lg:rounded-xl lg:p-12">
      <div className="flex flex-col items-center justify-around lg:flex-row">
        <div className="border-spacing-8 border-neutral-700 lg:w-1/2 lg:border-r lg:pr-8">
          <div className="mb-4">
            <h1 className="text-2xl lg:text-4xl">
              Hello, I&apos;m{' '}
              <span className="animate-text bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text font-extrabold text-transparent">
                {homeData.name}
              </span>{' '}
              👋
            </h1>

            <span className="lg:text-md text-sm text-slate-400">
              {homeData.roles}
            </span>
          </div>

          <div className="flex flex-col gap-3 text-justify text-sm leading-relaxed lg:text-lg">
            {homeData.about.map((paragraph) => {
              return <p key={paragraph.id}>{paragraph.text}</p>
            })}
          </div>
        </div>
        <div>
          <Image
            src="https://github.com/evnrodr.png"
            alt={`${homeData.name}'s profile picture`}
            className="my-8 animate-smoothBounce rounded-full lg:my-0"
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
