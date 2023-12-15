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
      className="flex max-h-full min-h-full min-w-full max-w-full flex-col overflow-hidden md:min-h-0 lg:max-h-[calc(100%-16px)] lg:min-w-[900px] lg:max-w-[900px]"
    >
      <WindowBar innerText="Projetos" elementId="projetos" />
      <section className="flex-1 overflow-auto bg-content-2">
        <FolderProjects />
      </section>
    </main>
  )
}
