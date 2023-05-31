'use client'

import { about } from '@/data'
import { Contacts } from '../Contacts'

export function Footer() {
  return (
    <footer className="m-4 flex flex-col items-center gap-8 rounded-md bg-neutral-800 p-4 text-white">
      <Contacts />
      <span>
        @ Copyright, all rights reserved to <strong>{about.authorName}</strong>
      </span>
    </footer>
  )
}
