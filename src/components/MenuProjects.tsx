import { DocumentIcon } from '@/db/Icons'
import { projects } from '@/db/projects'
import ProjectLink from './Buttons/ProjectLink'

export default function MenuProjects() {
  const categories = ['front-end', 'back-end', 'full-stack']

  return (
    <>
      {categories.map((category) => (
        <>
          <span className="flex min-w-[170px] items-center p-2">
            <span className="mr-2">
              <DocumentIcon />
            </span>
            <span>{category}</span>
          </span>
          {projects.map(
            (project) =>
              project.category === category && (
                <ProjectLink
                  key={project.id}
                  name={project.name}
                  href={project.id}
                />
              ),
          )}
        </>
      ))}
    </>
  )
}
