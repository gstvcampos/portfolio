import FolderProjects from '@/components/FolderProjects'
import Header from '@/components/Header'

export interface Project {
  id: number
  name: string
  deploy: string
  main: string
}

export default function Projetos() {
  return (
    <main className="bg-secondary h-full w-full md:h-auto lg:max-w-4xl">
      <Header innerText={'../projetos'} />
      <section className="flex h-[calc(100%-48px)] flex-col overflow-auto p-4 md:flex-row">
        <FolderProjects />
      </section>
    </main>
  )
}
