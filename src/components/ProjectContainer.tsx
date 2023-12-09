import { projects } from '@/db/projects'
import LinkSmall from './LinkSmall'

export default function ProjectContainer({ id }: { id: number }) {
  return (
    <div className="bg-content w-full md:min-h-[600px]">
      {projects.map((project) =>
        project.id === id ? (
          <div key={project.id} className="m-4 flex flex-col gap-2 p-4">
            <h2 className="mb-2 font-segoe-bold text-3xl">{project.name}</h2>
            {project.description.split('\n').map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>
            })}
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
