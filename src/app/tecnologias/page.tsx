import WindowBar from '@/components/WindowBar'
import { technologies } from '@/db/technologies'
import Link from 'next/link'

export default function Tecnologias() {
  return (
    <main className="h-full w-full bg-bar-2 md:h-auto lg:max-w-4xl">
      <WindowBar innerText="Tecnologias" />
      <section className="h-[calc(100%-48px)] overflow-auto bg-content-2 p-4">
        <ul className="grid w-full grid-cols-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((tech, index) => (
            <li key={index}>
              <Link
                target="_blank"
                href={tech.documentationLink}
                className="group relative box-border flex w-full flex-col items-center text-center"
              >
                <span className="mb-1 rounded-3xl bg-content-1 p-6 transition duration-500 ease-in-out group-hover:rounded-full group-hover:bg-focus">
                  <span className="block h-12 w-12 transition duration-1000 ease-in-out group-hover:scale-125">
                    {tech.icon}
                  </span>
                </span>
                <span className="font-segoe-bold">{tech.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
