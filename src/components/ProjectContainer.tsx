import { projects } from '@/db/projects'
import Image from 'next/image'

export default function ProjectContainer({ category }: { category: string }) {
  return (
    <div className="md:min-h-[500px]">
      <div className="flex flex-wrap">
        {projects.map(
          (project) =>
            (!category || project.category === category) && (
              <li key={project.id} className="m-4 list-none">
                <button className="flex w-24 flex-col items-center rounded-lg p-2 hover:bg-focus-1">
                  <Image
                    priority={true}
                    src="/folder.svg"
                    width={48}
                    height={48}
                    alt={'icone de pasta'}
                  />
                  <span>{project.name}</span>
                </button>
              </li>
            ),
        )}
      </div>
    </div>
  )
}
