import { projects } from '@/db/projects'

export default function ProjectContainer() {
  return (
    <ul>
      {projects.map((project) => {
        return (
          <li key={project.id}>
            <h3>{project.name}</h3>
          </li>
        )
      })}
    </ul>
  )
}
