import { projects } from '@/db/projects'
import { CloseFolderIcon, OpendedFolderIcon } from './Icons'

export default function SelectBtns() {
  return (
    <ul className="flex md:flex-col">
      {projects.map((project) => (
        <li key={project.id}>
          <button>
            <span className="flex items-center">
              <span className="w-12">
                <CloseFolderIcon />
              </span>
              <span className="hidden w-12">
                <OpendedFolderIcon />
              </span>
              <span className="ml-2">{project.name}</span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}
