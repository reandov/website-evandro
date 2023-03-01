'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { House, MoonStars } from 'phosphor-react'

import { URLs } from '@/data/urls'

export function NavigationBar() {
  return (
    <nav className="p-3 bg-neutral-800 ">
      <div className="max-w-7xl m-auto flex flex-row justify-between">
        <Link href="/">
          <House color="white" size={28} weight="fill" />
        </Link>

        <ul className="flex flex-row gap-12">
          {URLs.map((url) => {
            return (
              <Link key={url.id} href={url.href}>
                <li className="transition hover:text-sky-600">{url.alias}</li>
              </Link>
            )
          })}
        </ul>

        <MoonStars color="white" size={28} weight="fill" />
      </div>
    </nav>
  )
}
