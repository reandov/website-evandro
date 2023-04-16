import Image from 'next/image'

export function About() {
  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-0">
      <div className="">
        <h1 className="text-md md:text-2xl font-bold font-mono">
          Web Developer | Computer Scientist
        </h1>
        <p className="text-md md:text-lg text-justify w-full md:w-3/4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias minus
          consequatur delectus quas officiis quasi dolore praesentium vero
          doloremque aperiam aut vel dicta quibusdam, tenetur incidunt eveniet
          sapiente quisquam quae!
        </p>
      </div>
      <div>
        <Image
          src="https://github.com/evnrodr.png"
          className="rounded-3xl"
          alt="Evandro's Profile Picture"
          width={850}
          height={850}
        />
      </div>
    </section>
  )
}
