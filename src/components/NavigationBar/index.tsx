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

  return (
    <nav className="flex flex-row items-center justify-between">
      <h1 className="font-mono text-3xl font-bold text-white">{authorName}</h1>
      <button
        type="button"
        className="rounded-full border-2 border-gray-100 p-3 font-bold text-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-black hover:shadow-md hover:shadow-black"
        onClick={openModal}
      >
        Message Me
      </button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ContactForm onSuccess={closeModal} />
      </Modal>
    </nav>
  )
}
