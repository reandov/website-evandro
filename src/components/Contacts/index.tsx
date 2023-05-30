'use client'

import {
  DiscordLogo,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react'
import Link from 'next/link'

export function Contacts() {
  return (
    <ul className="grid w-full grid-cols-2 gap-4 lg:w-1/2 lg:grid-cols-4">
      <Link
        href="https://google.com"
        rel="noopener noreferrer"
        target="_blank"
        className="flex cursor-pointer flex-col items-center gap-2"
      >
        <LinkedinLogo size={32} weight="fill" /> LinkedIn
      </Link>
      <Link
        href="https://google.com"
        rel="noopener noreferrer"
        target="_blank"
        className="flex cursor-pointer flex-col items-center gap-2"
      >
        <GithubLogo size={32} weight="fill" /> GitHub
      </Link>
      <Link
        href="https://google.com"
        rel="noopener noreferrer"
        target="_blank"
        className="flex cursor-pointer flex-col items-center gap-2"
      >
        <DiscordLogo size={32} weight="fill" /> Discord
      </Link>
      <Link
        href="https://google.com"
        rel="noopener noreferrer"
        target="_blank"
        className="flex cursor-pointer flex-col items-center gap-2"
      >
        <TwitterLogo size={32} weight="fill" /> Twitter
      </Link>
    </ul>
  )
}
