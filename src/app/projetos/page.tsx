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
      className="flex max-h-full w-full flex-col overflow-hidden md:h-auto md:rounded-t-lg lg:max-w-4xl"
    >
      <WindowBar innerText="Projetos" elementId="projetos" />
      <section className="h-[calc(100%-40px)] flex-1 overflow-auto">
        <FolderProjects />
      </section>
    </main>
  )
}
