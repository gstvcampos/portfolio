import SelectBtns from '@/components/SelectBtn'

export interface Project {
  id: number
  name: string
  deploy: string
  main: string
}

export default function Projects() {
  return (
    <main className="h-full w-full bg-content-1 md:h-fit md:max-h-[calc(100%-16px)] lg:max-w-4xl">
      <header className="flex h-12 bg-content-2 p-3">../projetos</header>
      <section className="flex h-[calc(100%-48px)] flex-col overflow-auto p-4 md:flex-row">
        <SelectBtns />
      </section>
    </main>
  )
}
