'use client'

import Link from 'next/link'
import { House, MoonStars } from 'phosphor-react'

import { URLs } from '@/data/urls'
import { usePathname } from 'next/navigation'

export function NavigationBar() {
  const pathname = usePathname()

  return (
    <nav className="bg-neutral-800 p-3 ">
      <div className="m-auto flex max-w-7xl flex-row justify-between">
        <Link href="/">
          <House
            color={pathname === '/' ? '#0ea5e9' : 'white'}
            size={28}
            weight="fill"
          />
        </Link>

        <ul className="flex flex-row gap-12">
          {URLs.map((url) => {
            return (
              <Link key={url.id} href={url.href}>
                <li
                  className={`${
                    pathname === url.href &&
                    'border-b-2 border-sky-600 font-semibold text-sky-600'
                  } transition hover:text-sky-600`}
                >
                  {url.alias}
                </li>
              </Link>
            )
          })}
        </ul>

        <MoonStars color="white" size={28} weight="fill" />
      </div>
    </nav>
  )
}
