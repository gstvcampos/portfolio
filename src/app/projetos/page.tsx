import FolderProjects from '@/components/FolderProjects'
import WindowBar from '@/components/WindowBar'

export interface Project {
  id: number
  name: string
  deploy: string
  main: string
}

export default function Projetos() {
  return (
    <main className="h-full w-full bg-bar-2 md:h-auto lg:max-w-4xl">
      <WindowBar innerText="Projetos" />
      <section className="flex h-[calc(100%-48px)] flex-col overflow-auto md:flex-row">
        <FolderProjects />
      </section>
    </main>
  )
}
