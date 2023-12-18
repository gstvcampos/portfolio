import ProjectsModalBtn from '@/components/Buttons/ProjectsModalBtn'
import ProjectContainer from '@/components/Container/ProjectContainer'
import WindowBar from '@/components/Container/WindowBar'
import MenuProjects from '@/components/MenuProjects'

export interface Project {
  id: string
  category: string
  name: string
  description: string
  deploy?: string
  technologies: string[]
  main: string
}

interface ProjectProps {
  params: {
    id: string
  }
}

export default function Projetos({ params }: ProjectProps) {
  return (
    <main
      id="projetos"
      className="flex max-h-full min-h-full min-w-full max-w-full flex-col overflow-hidden md:min-h-0 md:rounded-lg lg:max-h-[calc(100%-16px)] lg:min-w-[900px] lg:max-w-[900px]"
    >
      <WindowBar innerText="Projetos" elementId="projetos" />
      <section className="h-[calc(100%-40px)] flex-1 overflow-auto bg-content-2">
        <div className="flex h-full min-w-0">
          <div className="hidden min-w-0 flex-shrink-0 bg-content-1 text-center md:block">
            <MenuProjects />
          </div>
          <ProjectsModalBtn />
          <div className="md:min-h-[500px]">
            <ProjectContainer id={params.id} />
          </div>
        </div>
      </section>
    </main>
  )
}
