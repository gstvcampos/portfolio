import ProjectContainer from '@/components/ProjectContainer'
import SelectBtns from '@/components/SelectBtn'

export interface Project {
  id: number
  name: string
  deploy: string
  main: string
}

export default function Projects() {
  return (
    <main className="h-full w-full overflow-hidden bg-content-1 md:h-fit md:max-h-[calc(100%-16px)] lg:max-w-4xl">
      <header className="flex h-12 bg-content-2 p-3">../projetos</header>
      <section className="flex flex-col gap-4 overflow-auto p-4 md:flex-row">
        <div className="mt-4 flex flex-wrap gap-4 md:flex-col">
          <SelectBtns />
        </div>
        <div className="min-h-full w-full bg-content-2 px-6 py-4">
          <ProjectContainer />
        </div>
      </section>
    </main>
  )
}
