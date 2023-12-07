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
              <div className="max-h-[200px] min-h-[200px] min-w-[200px] max-w-[200px]">
                <Image
                  className=""
                  priority={true}
                  layout="responsive"
                  width={400}
                  height={400}
                  src={project.img}
                  style={{
                    maxHeight: '100%',
                    minHeight: '100%',
                    minWidth: '100%',
                    maxWidth: '100%',
                  }}
                  alt={'Imagem do projeto'}
                />
              </div>
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
