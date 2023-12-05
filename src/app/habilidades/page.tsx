import { technologies } from '@/db/technologies'
import Link from 'next/link'

export default function Habilidades() {
  return (
    <main className="h-full w-full overflow-hidden bg-content-1 md:h-fit md:max-h-[calc(100%-16px)] lg:max-w-4xl">
      <header className="flex h-12 bg-content-2 p-3">../habilidades</header>
      <section className="flex flex-col gap-4 overflow-auto p-4 md:flex-row">
        <div className="min-h-[400px] w-full bg-content-2 py-4">
          <ul className="grid min-h-[400px] grid-cols-3 gap-y-8 py-4 md:grid-cols-4 lg:grid-cols-5">
            {technologies.map((tech, index) => (
              <li key={index}>
                <Link
                  target="_blank"
                  href={tech.documentationLink}
                  className="flex h-full flex-col items-center justify-between"
                >
                  <span className="h-auto w-16 p-2">{tech.icon}</span>
                  <span>{tech.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
