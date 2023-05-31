import { contacts } from '@/data'
import {
  LinkedinLogo,
  GithubLogo,
  DiscordLogo,
  TwitterLogo,
} from '@phosphor-icons/react'
import Link from 'next/link'

export function Contacts() {
  return (
    <ul className="flex gap-8">
      <li className="transition hover:text-teal-700">
        <Link
          href={contacts.linkedin}
          rel="noopener noreferrer"
          target="_blank"
          className="flex cursor-pointer flex-col items-center gap-2 font-semibold"
        >
          <LinkedinLogo size={32} weight="fill" /> LinkedIn
        </Link>
      </li>
      <li className="transition hover:text-teal-700">
        <Link
          href={contacts.github}
          rel="noopener noreferrer"
          target="_blank"
          className="flex cursor-pointer flex-col items-center gap-2 font-semibold"
        >
          <GithubLogo size={32} weight="fill" /> GitHub
        </Link>
      </li>
      <li className="transition hover:text-teal-700">
        <Link
          href={contacts.discord}
          rel="noopener noreferrer"
          target="_blank"
          className="flex cursor-pointer flex-col items-center gap-2 font-semibold"
        >
          <DiscordLogo size={32} weight="fill" /> Discord
        </Link>
      </li>
      <li className="transition hover:text-teal-700">
        <Link
          href={contacts.twitter}
          rel="noopener noreferrer"
          target="_blank"
          className="flex cursor-pointer flex-col items-center gap-2 font-semibold"
        >
          <TwitterLogo size={32} weight="fill" /> Twitter
        </Link>
      </li>
    </ul>
  )
}
