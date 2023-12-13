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
    <main
      id="projetos"
      className="h-full w-full md:h-auto md:rounded-t-lg lg:max-w-4xl"
    >
      <WindowBar innerText="Projetos" elementId="projetos" />
      <section className="flex h-[calc(100%-40px)] flex-col overflow-auto bg-content-1 md:flex-row">
        <FolderProjects />
      </section>
    </main>
  )
}
