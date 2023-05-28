'use client'

import { useState } from 'react'
import { Modal } from '../Modal'
import { ContactForm } from '../ContactForm'
import { authorName } from '@/data'

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  function navigateTo(location: string) {
    const ref = window.document.querySelector(`#${location.toLowerCase()}`)!
    ref.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="flex flex-row items-center justify-between">
      <h1 className="font-mono text-3xl font-bold text-white">{authorName}</h1>
      <div className="flex flex-row items-center justify-center gap-8">
        <ul className="flex flex-row gap-8">
          <li
            className="cursor-pointer p-2 font-mono text-xl transition hover:bg-pink-600"
            onClick={() => navigateTo('About')}
          >
            About
          </li>
          <li
            className="cursor-pointer p-2 font-mono text-xl transition hover:bg-pink-600"
            onClick={() => navigateTo('Skills')}
          >
            Skills
          </li>
          <li
            className="cursor-pointer p-2 font-mono text-xl transition hover:bg-pink-600"
            onClick={() => navigateTo('Experiences')}
          >
            Experiences
          </li>
        </ul>
        <button
          type="button"
          className="rounded-full border-2 border-gray-100 p-3 font-bold text-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-black hover:shadow-md hover:shadow-black"
          onClick={openModal}
        >
          Message Me
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ContactForm onSuccess={closeModal} />
      </Modal>
    </nav>
  )
}
