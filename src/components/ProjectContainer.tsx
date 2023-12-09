import { projects } from '@/db/projects'
import LinkSmall from './LinkSmall'

export default function ProjectContainer({ id }: { id: number }) {
  return (
    <div className="w-full bg-content-2 ">
      {projects.map((project) =>
        project.id === id ? (
          <div key={project.id} className="m-4 flex flex-col gap-2 p-4">
            <h2 className="mb-2 font-segoe-bold text-2xl text-text-2">
              {project.name}
            </h2>
            <p>{project.description}</p>
            <div className="flex w-fit gap-5">
              {project.deploy ? (
                <LinkSmall href={project.deploy} innerText="Deploy" />
              ) : null}
              <LinkSmall href={project.main} innerText="GitHub" />
            </div>
          </div>
        ) : null,
      )}
    </div>
  )
}
