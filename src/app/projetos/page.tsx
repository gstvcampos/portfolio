import FolderBtn from '@/components/FolderBtn'
import Header from '@/components/Header'

export interface Project {
  id: number
  name: string
  deploy: string
  main: string
}

export default function Projetos() {
  return (
    <main className="h-full w-full bg-content-1 md:h-fit lg:max-w-4xl">
      <Header innerText={'../projetos'} />
      <section className="flex h-[calc(100%-48px)] flex-col overflow-auto p-4 md:flex-row">
        <FolderBtn />
      </section>
    </main>
  )
}
