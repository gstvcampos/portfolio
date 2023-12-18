import { Project } from '@/app/projetos/[id]/page'
import { DocumentIcon } from '@/db/Icons'
import Link from 'next/link'

export default function ProjectLink({ project }: { project: Project }) {
  return (
    <Link href={`${project.id}`}>
      <span className="flex min-w-[170px] items-center p-2 hover:bg-focus-1">
        <span className="mx-2">
          <DocumentIcon />
        </span>
        <span>{project.name}</span>
      </span>
    </Link>
  )
}
