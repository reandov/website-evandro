import { URLs } from '@/data/urls'
import Link from 'next/link'
import { List } from 'phosphor-react'
import { useState, useRef, useEffect, useCallback } from 'react'

export function LinksDropdown() {
  const [isDropdownActive, setIsDropdownActive] = useState(false)

  const screenRef = useRef(null)

  function handleDropdownVisibility() {
    setIsDropdownActive(!isDropdownActive)
  }

  const closeDropdown = useCallback(
    (event: MouseEvent) => {
      const element = event.target as Element
      if (
        element.id !== 'menu' &&
        !document.getElementById('links-dropdown') &&
        isDropdownActive
      ) {
        setIsDropdownActive(false)
      }
    },
    [isDropdownActive]
  )

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown)

    return () => {
      document.removeEventListener('mousedown', closeDropdown)
    }
  }, [closeDropdown])

  return (
    <div className="flex flex-col items-center gap-2" ref={screenRef}>
      <button
        className="rounded-md"
        type="button"
        onClick={handleDropdownVisibility}
      >
        <List color="white" size={28} id="menu" />
      </button>
      {isDropdownActive && (
        <div
          id="links-dropdown"
          className="absolute top-12 z-50 w-44 divide-y divide-gray-100 rounded-lg bg-neutral-600 shadow"
        >
          <ul className="py-2 text-sm text-gray-700">
            {URLs.map((url) => {
              return (
                <Link
                  key={url.id}
                  href={url.href}
                  onClick={handleDropdownVisibility}
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-white hover:bg-neutral-700"
                    >
                      <span className="inline-flex items-center">
                        {url.alias}
                      </span>
                    </button>
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
