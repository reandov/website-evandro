import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full sm:h-[calc(100vh-128px)] mt-8 sm:mt-0 flex flex-col items-center justify-center">
      <section id="about">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 sm:gap-32">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Hi, I&apos;m Evandro Rodrigues 👋
            </h1>
            <h2 className="text-3xl text-muted-foreground mb-6 text-sky-500   ">
              Software Engineer
            </h2>
            <p className="text-xl mb-6">
              I craft beautiful and performant web experiences using modern
              technologies that will take your product to next level.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/reandov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-2 rounded-md bg-sky-600 transition hover:bg-sky-700 cursor-pointer">
                  <Github className="h-8 w-8" />
                  <span className="sr-only">GitHub</span>
                </button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/evnrodr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-2 rounded-md bg-sky-600 transition hover:bg-sky-700 cursor-pointer">
                  <Linkedin className="h-8 w-8" />
                  <span className="sr-only">LinkedIn</span>
                </button>
              </Link>
              <Link href="mailto:evandro.rodriguespj@gmail.com">
                <button className="p-2 rounded-md bg-sky-600 transition hover:bg-sky-700 cursor-pointer">
                  <Mail className="h-8 w-8" />
                  <span className="sr-only">Email</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 rounded-full p-1">
            <Image
              src="/pfp.jpeg"
              alt="John Doe"
              width={400}
              height={400}
              className="rounded-full border-2 border-gray-900"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
