import WindowBar from '@/components/WindowBar'
import { technologies } from '@/db/technologies'
import Image from 'next/image'
import Link from 'next/link'

export default function Tecnologias() {
  return (
    <main
      id="tecnologias"
      className="flex h-full max-h-full w-full flex-col overflow-hidden md:h-auto md:rounded-t-lg lg:max-w-4xl"
    >
      <WindowBar innerText="Tecnologias" elementId="tecnologias" />
      <section className="h-[calc(100%-40px)] flex-1 overflow-auto bg-content-2 p-4">
        <ul className="grid w-full grid-cols-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((tech, index) => (
            <li key={index}>
              <Link
                target="_blank"
                href={tech.documentationLink}
                className="group relative box-border flex w-full flex-col items-center text-center"
              >
                <span className="rounded-3xl bg-content-1 p-6 transition duration-500 ease-in-out group-hover:rounded-full group-hover:bg-focus-2">
                  <Image
                    className="h-12 transition duration-1000 ease-in-out group-hover:scale-125"
                    priority={true}
                    src={tech.icon}
                    width={48}
                    height={48}
                    alt={'icone profile'}
                  />
                </span>
                <span className="font-segoe-bold group-hover:text-txt-3">
                  {tech.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
