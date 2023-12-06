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
            <li
              key={index}
              className="flex flex-col items-center justify-between"
            >
              <Link target="_blank" href={tech.documentationLink}>
                <span className="flex h-20 w-20">{tech.icon}</span>
              </Link>
              <span className="font-segoe-bold text-center">{tech.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
