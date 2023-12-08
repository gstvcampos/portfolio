import { projects } from '@/db/projects'
import Image from 'next/image'
import { BranchIcon, DeployIcon } from './Icons'
import LinkSmall from './LinkSmall'

export default function ProjectContainer({ id }: { id: number }) {
  return (
    <div className="w-full bg-content-2 ">
      {projects.map((project) =>
        project.id === id ? (
          <div key={project.id} className="flex flex-wrap p-4 md:flex-nowrap">
            <div className="m-auto">
              <Image
                className="m-auto"
                priority={true}
                width={300}
                height={300}
                src={project.img}
                alt={'Imagem do projeto'}
              />
              <div className="mt-4 flex flex-wrap justify-center gap-4 md:flex-col">
                {project.deploy ? (
                  <LinkSmall href={project.deploy} innerText="Deploy">
                    <DeployIcon />
                  </LinkSmall>
                ) : null}
                <LinkSmall href={project.main} innerText="GitHub">
                  <BranchIcon />
                </LinkSmall>
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
