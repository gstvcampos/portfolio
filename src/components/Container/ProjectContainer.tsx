import { BranchIcon, LiveIcon } from '@/db/Icons'
import { projects } from '@/db/projects'
import LinkSM from '../Buttons/LinkSM'

export default function ProjectContainer({ id }: { id: string }) {
  return (
    <>
      {projects.map(
        (project) =>
          project.id === id && (
            <div
              key={project.id}
              className="px-4 pb-24 pt-8 text-justify md:pb-0"
            >
              <div className="overflow-auto bg-content-2">
                <div className="flex flex-col gap-4">
                  <h3 className="font-segoe-bold text-lg">## {project.name}</h3>
                  <div className="flex flex-col gap-3">
                    {project.description.split('\n').map((paragraph, index) => {
                      return <p key={index}>- {paragraph}</p>
                    })}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, index) => (
                      <p
                        className="rounded-xl border-2 px-2 text-sm"
                        key={index}
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.deploy && (
                      <LinkSM
                        href={project.deploy}
                        icon={<LiveIcon />}
                        label="live"
                      />
                    )}
                    <LinkSM
                      href={project.main}
                      icon={<BranchIcon />}
                      label="branch"
                    />
                  </div>
                </div>
              </div>
            </div>
          ),
      )}
    </>
  )
}
