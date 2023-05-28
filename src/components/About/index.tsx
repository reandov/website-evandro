import { SectionTitle } from '../SectionTitle'
import { about } from '@/data'
import { ProfilePicture } from './components/ProfilePicture'

export function About() {
  return (
    <section
      id="about"
      className="grid h-[calc(100vh-10vh)] grid-cols-1 justify-items-center gap-10 lg:h-[calc(100vh-30vh)] lg:grid-cols-2 lg:justify-items-end"
    >
      <div>
        <SectionTitle title={about.roles} />
        <div className="text-md flex flex-col gap-2 text-justify md:text-lg">
          {about.text.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>
          })}
        </div>
      </div>
      <div>
        <ProfilePicture
          src="https://github.com/evnrodr.png"
          alt="Profile picture"
        />
      </div>
    </section>
  )
}
