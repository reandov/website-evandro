'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { List } from 'phosphor-react'
import { URLs } from '@/data/urls'
import Link from 'next/link'

export function SelectMobile() {
  return (
    window && (
      <div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild aria-label="Other links">
            <List color="white" size={28} />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="animate-opacity rounded-md bg-zinc-700 p-2 shadow-lg">
              {URLs.map((url) => {
                return (
                  <Link key={url.id} href={url.href}>
                    <DropdownMenu.Item className="rounded-md p-2 text-white outline-0 hover:bg-sky-500">
                      {url.alias}
                    </DropdownMenu.Item>
                  </Link>
                )
              })}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    )
  )
}
