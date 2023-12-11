import FolderProjects from '@/components/FolderProjects'

export interface Project {
  id: number
  name: string
  deploy: string
  main: string
}

export default function Projetos() {
  return (
    <main className="h-full w-full bg-secondary md:h-auto lg:max-w-4xl">
      <h1 className="h-12 bg-primary p-3 text-title">../projetos</h1>
      <section className="flex h-[calc(100%-48px)] flex-col overflow-auto p-4 md:flex-row">
        <FolderProjects />
      </section>
    </main>
  )
}
