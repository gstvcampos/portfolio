import { DocumentIcon } from '@/db/Icons'
import { projects } from '@/db/projects'
import ProjectLink from './Buttons/ProjectLink'

export default function MenuProjects() {
  return (
    <>
      <span className="flex min-w-[170px] items-center p-2">
        <span className="mr-2">
          <DocumentIcon />
        </span>
        <span>Front end</span>
      </span>
      {projects.map(
        (project) =>
          project.category === 'front-end' && (
            <ProjectLink
              key={project.id}
              name={project.name}
              href={project.id}
            />
          ),
      )}
      <span className="flex min-w-[170px] items-center p-2">
        <span className="mr-2">
          <DocumentIcon />
        </span>
        <span>Back end</span>
      </span>
      {projects.map(
        (project) =>
          project.category === 'back-end' && (
            <ProjectLink
              key={project.id}
              name={project.name}
              href={project.id}
            />
          ),
      )}
      <span className="flex min-w-[170px] items-center p-2">
        <span className="mr-2">
          <DocumentIcon />
        </span>
        <span>Full stack</span>
      </span>
      {projects.map(
        (project) =>
          project.category === 'full-stack' && (
            <ProjectLink
              key={project.id}
              name={project.name}
              href={project.id}
            />
          ),
      )}
    </>
  )
}
