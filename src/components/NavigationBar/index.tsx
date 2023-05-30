'use client'

export function NavigationBar() {
  function navigateTo(location: string) {
    const ref = window.document.querySelector(`#${location.toLowerCase()}`)!
    ref.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="m-auto my-4 w-fit rounded-md bg-neutral-800 px-6 py-2 text-white">
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
