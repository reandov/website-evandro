'use client'

import React from 'react'
import { Experience, Project } from '@/types/types'
import { experiences } from '@/data'

export function Timeline() {
  function showCollapsedContent(experienceId: number) {
    const element = window.document.querySelector(`#projects-${experienceId}`)!
    element.classList.toggle('hidden')
  }

  function renderProjects(experienceId: number, projects: Project[]) {
    return (
      <ul id={`projects-${experienceId}`} className="mt-4 hidden">
        {projects.map((project, index) => {
          return (
            <li key={project.id} className="mb-4">
              <h2 className="font-medium">
                Project #{`${index + 1}`}: {project.title}
              </h2>
              <p>{project.description}</p>
            </li>
          )
        })}
      </ul>
    )
  }

  function renderExperiences(experiences: Experience[]) {
    return experiences.map((experience) => {
      return (
        <div key={experience.id} className="flex items-center">
          <div className="-ml-[calc(0.8rem)]">
            <svg height="24" width="24">
              <circle cx="12" cy="12" r="10" fill="black" />
            </svg>
          </div>

          <div className="m-4 flex flex-col rounded-md bg-white p-4 text-black">
            <h1 className="font-mono text-2xl">{experience.title}</h1>
            <span className="font-semibold">
              {experience.role} • {experience.date}
            </span>
            <span>{experience.description}</span>

            <div className="mt-4">
              <button
                className="text-md bg-gray-800 font-mono font-medium text-white"
                onClick={() => showCollapsedContent(experience.id)}
              >
                [View Projects]
              </button>
              {renderProjects(experience.id, experience.projects)}
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <section id="experiences" className="mt-24 scroll-mt-24">
      <header className="mb-8">
        <h1 className="font-mono text-3xl font-bold">My experience</h1>
        <p className="mt-4 text-justify">{experiences.text}</p>
      </header>
      <div className="lg:max-w-[calc(100vw-90vh)] mt-4 flex flex-col border-l-2 border-neutral-800 lg:m-auto">
        {renderExperiences(experiences.companies)}
      </div>
    </section>
  )
}
