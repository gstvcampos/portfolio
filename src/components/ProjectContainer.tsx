import { projects } from '@/db/projects'
import Image from 'next/image'

export default function ProjectContainer({ category }: { category: string }) {
  return (
    <div className="col-start-2 col-end-7 flex min-h-[520px] w-full flex-wrap">
      {projects.map(
        (project) =>
          (!category || project.category === category) && (
            <button
              key={project.id}
              className="m-1 flex h-32 w-32 flex-col items-center gap-2 rounded-lg p-4 hover:bg-focus-1"
            >
              <Image
                priority={true}
                src="/folder.svg"
                width={48}
                height={48}
                alt={'icone de pasta'}
              />
              <span>{project.name}</span>
            </button>
          ),
      )}
    </div>
  )
}
