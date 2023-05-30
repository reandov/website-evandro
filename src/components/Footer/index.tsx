import { Contacts } from '../Contacts'

export function Footer() {
  return (
    <footer className="mt-16 flex flex-col items-center gap-8 bg-neutral-800 p-4 text-white">
      <Contacts />
      <span>
        @ Copyright, all rights reserved to{' '}
        <strong>Evandro Rodrigues de Paula Junior</strong>
      </span>
    </footer>
  )
}
