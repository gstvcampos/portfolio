import { projects } from '@/db/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectContainer({ id }: { id: number }) {
  return (
    <div className="w-full overflow-hidden bg-content-2 p-4">
      {projects.map((project) =>
        project.id === id ? (
          <div key={project.id} className="">
            <div className="flex flex-col">
              <span>{project.name}</span>
              <span>{project.deploy}</span>
              <Link
                target="_blank"
                href={project.main}
                className="w-fit bg-color-2 p-2"
              >
                GitHub
              </Link>
            </div>
            <div className="max-h-96">
              <Image
                className="rounded-md"
                priority={true}
                layout="responsive"
                width={400}
                height={400}
                src={project.img}
                alt={'Imagem do projeto'}
              />
            </div>
          </div>
        ) : null,
      )}
    </div>
  )
}
