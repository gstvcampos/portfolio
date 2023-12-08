import { projects } from '@/db/projects'
import LinkSmall from './LinkSmall'

export default function ProjectContainer({ id }: { id: number }) {
  return (
    <div className="w-full bg-content-2 ">
      {projects.map((project) =>
        project.id === id ? (
          <div key={project.id} className="flex flex-wrap p-4 md:flex-nowrap">
            <div className="m-4 flex max-w-full flex-col gap-6">
              <h2 className="font-segoe-bold text-2xl">{project.name}</h2>
              <p>{project.description}</p>
              <div className="flex w-fit gap-5">
                {project.deploy ? (
                  <LinkSmall href={project.deploy} innerText="Deploy" />
                ) : null}
                <LinkSmall href={project.main} innerText="GitHub" />
              </div>
            </div>
          </div>
        ) : null,
      )}
    </div>
  )
}
