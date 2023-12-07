import Header from '@/components/Header'
import { technologies } from '@/db/technologies'
import Link from 'next/link'

export default function Tecnologias() {
  return (
    <main className="h-full w-full bg-content-1 md:h-fit lg:max-w-4xl">
      <Header innerText={'../tecnologias'} />
      <section className="flex h-[calc(100%-48px)] flex-col gap-4 overflow-auto p-4 md:flex-row">
        <ul className="grid w-full grid-cols-3 gap-4 bg-content-2 p-4 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((tech, index) => (
            <li key={index}>
              <Link
                target="_blank"
                href={tech.documentationLink}
                className="group relative box-border flex w-full flex-col items-center text-center"
              >
                <span className="mb-1 rounded-3xl bg-color-3 p-6 transition duration-500 ease-in-out group-hover:rounded-full group-hover:bg-color-2">
                  <span className="block h-12 w-12 transition duration-1000 ease-in-out group-hover:scale-125">
                    {tech.icon}
                  </span>
                </span>
                <span className="font-segoe-bold group-hover:text-color-2">
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
