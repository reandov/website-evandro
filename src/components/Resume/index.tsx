'use client'

import { useState } from 'react'
import { ProfilePicture } from '../About/components/ProfilePicture'
import { Modal } from '../Modal'
import { about } from '@/data'
import { PaperPlaneTilt } from '@phosphor-icons/react'
import { ContactForm } from '../ContactForm'
import { Contacts } from '../Contacts'

export function Resume() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <section className="mt-24 flex animate-appear flex-col lg:mt-32 lg:flex-row lg:items-center lg:justify-evenly">
      <header className="drop-shadow-md">
        <h1 className="font-mono text-3xl font-bold lg:text-5xl">Hi! I am</h1>
        <h1 className="mb-4 font-mono text-3xl font-bold lg:text-5xl">
          {about.authorName}
        </h1>
        <h1 className=" text-md mb-4 font-mono font-bold delay-200 md:text-2xl">
          {about.roles}
        </h1>
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

        <Contacts />
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ContactForm onSuccess={closeModal} />
      </Modal>
    </section>
  )
}
