import { URLs } from '@/data/urls'
import Link from 'next/link'
import { List } from 'phosphor-react'

export function LinksDropdown() {
  return (
    <div className="flex flex-col items-center gap-2">
      <button className="rounded-md" type="button">
        <List color="white" size={28} />
      </button>
      <div className="z-50 w-44 divide-y divide-gray-100 rounded-lg bg-gray-700 shadow">
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="states-button"
        >
          {URLs.map((url) => {
            return (
              <Link key={url.id} href={url.href}>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <div className="inline-flex items-center">{url.alias}</div>
                  </button>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
