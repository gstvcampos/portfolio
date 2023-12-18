import ProjectLink from '@/components/Buttons/ProjectLink'
import ProjectsModalBtn from '@/components/Buttons/ProjectsModalBtn'
import ProjectContainer from '@/components/Container/ProjectContainer'
import WindowBar from '@/components/Container/WindowBar'
import { projects } from '@/db/projects'

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
        <div className="flex h-full min-w-0 flex-col md:flex-row">
          <ProjectsModalBtn />
          <div className="hidden flex-shrink-0 flex-col bg-content-1 text-center md:flex">
            <span className="bg-txt-2">Front end</span>
            {projects.map(
              (project) =>
                project.category === 'front-end' && (
                  <ProjectLink
                    key={project.id}
                    name={project.name}
                    href={project.id}
                  />
                ),
            )}
            <span className="bg-txt-2">Back end</span>
            {projects.map(
              (project) =>
                project.category === 'back-end' && (
                  <ProjectLink
                    key={project.id}
                    name={project.name}
                    href={project.id}
                  />
                ),
            )}
            <span className="bg-txt-2">Full stack</span>
            {projects.map(
              (project) =>
                project.category === 'full-stack' && (
                  <ProjectLink
                    key={project.id}
                    name={project.name}
                    href={project.id}
                  />
                ),
            )}
          </div>
          <div className="md:min-h-[500px]">
            <ProjectContainer id={params.id} />
          </div>
        </div>
      </section>
    </main>
  )
}
