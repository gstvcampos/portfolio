import { projects } from '@/db/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectContainer({ id }: { id: number }) {
  return (
    <div className="grid grid-cols-1 bg-content-2 md:grid-cols-2">
      {projects.map((project) =>
        project.id === id ? (
          <div key={project.id} className="h-full w-full md:col-span-2">
            <h2 className="p-4">{project.name}</h2>
            <div className="flex flex-col md:flex-row">
              <div className="p-4 md:w-2/3">
                <span>{project.description}</span>
                <span>{project.deploy}</span>
                {project.deploy ? (
                  <Link target="_blank" href={project.deploy}>
                    Deploy
                  </Link>
                ) : (
                  ''
                )}
                <Link target="_blank" href={project.main}>
                  GitHub
                </Link>
              </div>
              <div className="md:w-1/3">
                <Image
                  className=""
                  priority={true}
                  layout="responsive"
                  width={400}
                  height={400}
                  src={project.img}
                  alt={'Imagem do projeto'}
                />
              </div>
            </div>
          </div>
        ) : null,
      )}
    </div>
  )
}
