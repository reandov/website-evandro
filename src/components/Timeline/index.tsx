'use client'

import React from 'react'
import { SectionTitle } from '../SectionTitle'
import { Experience, Project } from '@/types/types'

export function Timeline() {
  const experiences = [
    {
      id: 0,
      title: '#1 Company',
      date: 'May 2021 - Oct 2021',
      role: 'Internship in Web/Mobile Development',
      description:
        'Worked on creating websites and mobile apps using React and React Native.',
      projects: [
        {
          id: 0,
          title: 'React Native app for hydromethers',
          description:
            'In this first project, I have built an app with a friend for hydromether registration for a small city here in Brazil. By the end of the project, the app was being used for dozens of employees and we have successfully gathered tons of data.',
        },
        {
          id: 1,
          title: 'React website for RFCs',
          description:
            'In the second project, I have built with other developers an website for the creation and life cycle management of RFCs.',
        },
        {
          id: 2,
          title: 'React Native app for building spections',
          description:
            'In my last project, I have built an app for a public organization focused on the inspection of buildings.',
        },
      ],
    },
    {
      id: 1,
      title: '#2 Company',
      date: 'Nov 2021 - Present',
      role: 'Mid Developer in Front-End Development',
      description:
        'Worked on creating websites, scripts and plugins for E-Commerces and Educational platforms using React and meta-frameworks such as NextJS and OSF.',
      projects: [
        {
          id: 0,
          title: 'OSF website',
          description:
            'In this project, I have create an OSF website for a famous company with the help of a wonderful team!',
        },
      ],
    },
  ]

  function showCollapsedContent(experienceId: number) {
    const element = window.document.querySelector(`#projects-${experienceId}`)!
    element.classList.toggle('hidden')
  }

  function renderProjects(experienceId: number, projects: Project[]) {
    return (
      <ul id={`projects-${experienceId}`} className="hidden">
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
              <circle cx="12" cy="12" r="10" fill="white" />
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
    <section>
      <header className="mb-8">
        <SectionTitle title="Experience" />
        <div className="text-md text-justify md:text-lg">
          <p>
            I am working professionally as a developer for about{' '}
            <strong>two years</strong> now, besides experience gathered in my
            graduation. In the timeline below you can check some of my developer
            progress!
          </p>
        </div>
      </header>
      <div className="flex flex-col border-l-2 lg:m-auto lg:max-w-[calc(100vw-90vh)]">
        {renderExperiences(experiences)}
      </div>
    </section>
  )
}
