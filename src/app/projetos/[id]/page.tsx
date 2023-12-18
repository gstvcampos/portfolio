import ProjectsModalBtn from '@/components/Buttons/ProjectsModalBtn'
import MainContainer from '@/components/Container/MainContainer'
import ProjectContainer from '@/components/Container/ProjectContainer'
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
    <MainContainer id="projetos" innerText="Projetos">
      <div className="flex h-full min-w-0">
        <div className="hidden min-w-0 flex-shrink-0 bg-content-1 text-center md:block">
          <MenuProjects />
        </div>
        <ProjectsModalBtn />
        <div className="md:min-h-[500px]">
          <ProjectContainer id={params.id} />
        </div>
      </div>
    </MainContainer>
  )
}
