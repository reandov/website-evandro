import { about } from '@/data'

export function About() {
  return (
    <section
      id="about"
      className="m-auto mt-24 self-center rounded-md bg-neutral-800 p-4 text-white drop-shadow-md lg:w-3/4"
    >
      <header>
        <h1 className="font-mono text-3xl font-bold">About me</h1>
      </header>
      <div className="text-md mt-4 flex flex-col gap-4 text-justify md:text-lg ">
        {about.text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })}
      </div>
    </section>
  )
}
