export function NavigationBar() {
  return (
    <nav className="flex flex-row justify-between items-center">
      <h1 className="text-white font-bold text-3xl font-mono">Evandro</h1>
      <button
        type="button"
        className="p-3 rounded-full border-2 border-gray-100 text-white font-bold hover:bg-gray-100 hover:text-black transition hover:-translate-y-1"
      >
        Message Me
      </button>
    </nav>
  )
}
