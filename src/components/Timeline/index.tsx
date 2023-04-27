import React from 'react'
import { SectionTitle } from '../SectionTitle'

export function Timeline() {
  const experiences = [
    {
      id: 0,
      title: '#1 Company',
      date: 'May 2021 - Oct 2021',
      role: 'Internship in Web/Mobile Development',
      description:
        'Worked on creating websites and mobile apps using React and React Native.',
    },
    {
      id: 1,
      title: '#2 Company',
      date: 'Nov 2021 - Present',
      role: 'Junior Developer in Front-End Development',
      description:
        'Worked on creating websites, scripts and plugins for E-Commerces and Educational platforms using React and meta-frameworks such as NextJS and OSF.',
    },
  ]

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
        {experiences.map((experience) => {
          return (
            <div key={experience.id} className="flex items-center">
              <div className="-ml-[calc(0.8rem)]">
                <svg height="24" width="24">
                  <circle cx="12" cy="12" r="10" fill="white" />
                </svg>
              </div>
              <div className="m-4 flex flex-col rounded-md bg-white p-4  text-black">
                <h1 className="font-mono text-2xl">{experience.title}</h1>
                <span className="font-semibold">
                  {experience.role} • {experience.date}
                </span>
                <span>{experience.description}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
