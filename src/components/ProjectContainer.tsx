import { projects } from '@/db/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectContainer({ id }: { id: number }) {
  return (
    <div className="bg-content-2">
      {projects.map((project) =>
        project.id === id ? (
          <div
            key={project.id}
            className="flex h-full w-full flex-wrap justify-center"
          >
            <div className="flex flex-col md:w-2/3">
              <h2 className="font-segoe-bold p-4">{project.name}</h2>
              <div className="px-4">
                <span>{project.description}</span>
                <div className="my-7 flex gap-4">
                  {project.deploy ? (
                    <Link
                      target="_blank"
                      href={project.deploy}
                      className="font-segoe-bold rounded-lg bg-content-1 p-2"
                    >
                      Deploy
                    </Link>
                  ) : (
                    ''
                  )}
                  <Link
                    target="_blank"
                    href={project.main}
                    className="font-segoe-bold rounded-lg bg-content-1 p-2"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 text-center md:w-1/3">
              <Image
                className=""
                priority={true}
                layout="responsive"
                width={400}
                height={400}
                src={project.img}
                alt={'Imagem do projeto'}
              />
              <span>image{project.id}.png</span>
            </div>
          </div>
        ) : null,
      )}
    </div>
  )
}
