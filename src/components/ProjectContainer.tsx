import { projects } from '@/db/projects'
import Image from 'next/image'
import Link from 'next/link'
import { BranchIcon, DeployIcon } from './Icons'

export default function ProjectContainer({ id }: { id: number }) {
  return (
    <div className="w-full bg-content-2 ">
      {projects.map((project) =>
        project.id === id ? (
          <div key={project.id} className="flex flex-wrap p-4 md:flex-nowrap">
            <div className="m-auto">
              <Image
                className=""
                priority={true}
                width={300}
                height={300}
                src={project.img}
                alt={'Imagem do projeto'}
              />
              <div className="mt-4 flex flex-wrap justify-center gap-4 md:flex-col">
                {project.deploy ? (
                  <Link
                    target="_blank"
                    href={project.deploy}
                    className="min-w-[150px] border-b-4 border-color-3 bg-content-2 md:w-full"
                  >
                    <span className="flex items-center">
                      <span className="border-r-[1px] border-color-3 px-3 py-1">
                        <span className="flex w-6">
                          <DeployIcon />
                        </span>
                      </span>
                      <span className="px-4 py-3">Deploy</span>
                    </span>
                  </Link>
                ) : null}
                <Link
                  target="_blank"
                  href={project.main}
                  className="min-w-[150px] border-b-4 border-color-3 bg-content-2 md:w-full"
                >
                  <span className="flex items-center">
                    <span className="border-r-[1px] border-color-3 px-3 py-1">
                      <span className="flex w-6">
                        <BranchIcon />
                      </span>
                    </span>
                    <span className="px-4 py-3">GitHub</span>
                  </span>
                </Link>
              </div>
            </div>

            <div className="m-4 flex max-w-full flex-col gap-6">
              <h2 className="font-segoe-bold">{project.name}</h2>
              <p className="">{project.description}</p>
            </div>
          </div>
        ) : null,
      )}
    </div>
  )
}
