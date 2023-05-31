'use client'

export function NavigationBar() {
  function navigateTo(location: string) {
    const ref = window.document.querySelector(`#${location.toLowerCase()}`)!
    ref.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed left-[calc(50vw-362px/2)] top-2 z-50 m-auto w-fit animate-appear rounded-md bg-neutral-800 px-6 py-2 text-white lg:top-5">
      <ul className="flex flex-row justify-center gap-6">
        <li
          className="cursor-pointer p-2 font-mono underline-offset-4 hover:underline"
          onClick={() => navigateTo('About')}
        >
          About
        </li>
        <li
          className="cursor-pointer p-2 font-mono underline-offset-4 hover:underline"
          onClick={() => navigateTo('Skills')}
        >
          Skills
        </li>
        <li
          className="cursor-pointer p-2 font-mono underline-offset-4 hover:underline"
          onClick={() => navigateTo('Experiences')}
        >
          Experiences
        </li>
      </ul>
    </nav>
  )
}
