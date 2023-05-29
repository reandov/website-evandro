'use client'

import { useState } from 'react'
import { ProfilePicture } from '../About/components/ProfilePicture'
import { Modal } from '../Modal'
import { SectionTitle } from '../SectionTitle'
import { about } from '@/data'
import { PaperPlaneTilt } from '@phosphor-icons/react'
import { ContactForm } from '../ContactForm'

export function Resume() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <section className="mt-32 flex flex-col lg:flex-row lg:items-center lg:justify-evenly">
      <header className="drop-shadow-md">
        <h1 className="font-mono text-3xl font-bold lg:text-5xl">Hi! I am</h1>
        <h1 className="mb-4 font-mono text-3xl font-bold lg:text-5xl">
          Evandro Rodrigues
        </h1>
        <SectionTitle title={about.roles} />
      </header>
      <div className="flex flex-col items-center justify-center gap-8">
        <ProfilePicture
          src="https://github.com/evnrodr.png"
          alt="Profile picture"
        />
        <button
          type="button"
          className="flex flex-row items-center gap-2 rounded-md bg-neutral-800 p-4 text-white transition hover:bg-neutral-700"
          onClick={openModal}
        >
          Message me
          <PaperPlaneTilt />
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ContactForm onSuccess={closeModal} />
      </Modal>
    </section>
  )
}
