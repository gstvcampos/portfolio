import { projects } from '@/db/projects'
import Image from 'next/image'

export default function ProjectContainer({ id }: { id: number }) {
  return (
    <div>
      {projects.map((project) =>
        project.id === id ? (
          <div key={project.id}>
            <Image
              className="m-auto"
              priority={true}
              src={project.img}
              width={250}
              height={250}
              alt={'Imagem do autor'}
            />
            <span>{project.name}</span>
          </div>
        ) : null,
      )}
    </div>
  )
}
