import FilterCategoryBtn from '@/components/Buttons/FilterCategoryBtn'
import ProjectContainer from '@/components/Container/ProjectContainer'
import WindowBar from '@/components/Container/WindowBar'
import { CategoryProvider } from '@/providers/CategoryContext'

export interface Project {
  id: number
  category: string
  name: string
  description: string
  deploy?: string
  technologies: string[]
  main: string
}

export default function Projetos() {
  return (
    <main
      id="projetos"
      className="flex max-h-full min-h-full min-w-full max-w-full flex-col overflow-hidden border-txt-2 md:min-h-0 md:rounded-lg md:border-[1px] lg:max-h-[calc(100%-16px)] lg:min-w-[900px] lg:max-w-[900px]"
    >
      <WindowBar innerText="Projetos" elementId="projetos" />
      <section className="h-[calc(100%-40px)] flex-1 overflow-auto bg-content-2">
        <div className="flex h-full min-w-0 flex-col md:flex-row">
          <CategoryProvider>
            <div className="hidden flex-shrink-0 flex-col bg-content-1 text-center md:flex">
              <FilterCategoryBtn innerText="Todos projetos" filter="" />
              <FilterCategoryBtn
                innerText="Front end"
                filter="front-end"
                className="pl-4"
              />
              <FilterCategoryBtn
                innerText="Back end"
                filter="back-end"
                className="pl-4"
              />
              <FilterCategoryBtn
                innerText="Full stack"
                filter="full-stack"
                className="pl-4"
              />
            </div>
            <div className="md:min-h-[500px]">
              <ProjectContainer />
            </div>
          </CategoryProvider>
        </div>
      </section>
    </main>
  )
}
