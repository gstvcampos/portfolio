'use client'

import { Project } from '@/app/projetos/page'
import { projects } from '@/db/projects'
import { CategoryContext } from '@/providers/CategoryContext'
import { useContext, useState } from 'react'
import CustomImage from '../CustomImage'
import FileProjectModal from '../Modals/FileProjectModal'

export default function ProjectContainer() {
  const { category } = useContext(CategoryContext)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setModalOpen] = useState(false)

  function handleOpenModal(project: Project) {
    setSelectedProject(project)
    setModalOpen(true)
  }

  function handleCloseModal() {
    setSelectedProject(null)
    setModalOpen(false)
  }

  return (
    <div className="flex flex-wrap">
      {projects.map(
        (project) =>
          (!category || project.category === category) && (
            <li key={project.id} className="m-4 list-none">
              <button
                className="flex w-24 flex-col items-center rounded-lg p-2 hover:bg-focus-1"
                onClick={() => handleOpenModal(project)}
              >
                <CustomImage src="/file.svg" alt="icone de arquivo" />
                <span>{project.name}</span>
              </button>
            </li>
          ),
      )}
      {isModalOpen && <FileProjectModal project={selectedProject!} />}
    </div>
  )
}
