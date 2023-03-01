'use client'

import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  TwitterLogo,
  SpotifyLogo,
} from 'phosphor-react'

import { homeData } from '@/data/home'
import Link from 'next/link'

export function SocialNetworksCards() {
  const { github, linkedin, instagram, spotify, twitter } =
    homeData.socialNetworks

  return (
    <ul className="mt-8 flex flex-wrap gap-2 justify-center">
      <Link href={github.href}>
        <li>
          <div className="w-50 flex gap-4 border-2 rounded-xl p-4 transition hover:border-neutral-500 hover:bg-neutral-500">
            <GithubLogo color="white" size={30} weight="fill" />
            <span>GitHub</span>
          </div>
        </li>
      </Link>
      <Link href={linkedin.href}>
        <li>
          <div className="w-50 flex gap-4 border-2 rounded-xl p-4 transition hover:border-sky-700 hover:bg-sky-700">
            <LinkedinLogo color="white" size={30} weight="fill" />
            <span>LinkedIn</span>
          </div>
        </li>
      </Link>
      <Link href={instagram.href}>
        <li>
          <div className="w-50 flex gap-4 border-2 rounded-xl p-4 transition hover:border-pink-700 hover:bg-pink-700">
            <InstagramLogo color="white" size={30} weight="fill" />
            <span>Instagram</span>
          </div>
        </li>
      </Link>
      <Link href={twitter.href}>
        <li>
          <div className="w-50 flex gap-4 border-2 rounded-xl p-4 transition hover:border-sky-500 hover:bg-sky-500">
            <TwitterLogo color="white" size={30} weight="fill" />
            <span>Twitter</span>
          </div>
        </li>
      </Link>
      <Link href={spotify.href}>
        <li>
          <div className="w-50 flex gap-4 border-2 rounded-xl p-4 transition hover:border-green-500 hover:bg-green-500">
            <SpotifyLogo color="white" size={30} weight="fill" />
            <span>Spotify</span>
          </div>
        </li>
      </Link>
    </ul>
  )
}
