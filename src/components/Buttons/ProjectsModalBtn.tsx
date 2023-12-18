'use client'

import { MenuIcon } from '@/db/Icons'
import { useModalClose } from '@/hooks/useModalClose'
import { useRef, useState } from 'react'
import MenuProjectsModal from '../Modals/MenuProjectsModal'

export default function ProjectsModalBtn() {
  const [modalOpen, setModalOpen] = useState(false)
  const buttonRef = useRef(null)

  const handleButtonClick = () => {
    setModalOpen(!modalOpen)
  }

  const modalRef = useModalClose('Escape', () => setModalOpen(false), buttonRef)

  return (
    <div className="absolute md:hidden">
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className="m-1 rounded-md bg-content-1 p-1"
      >
        <MenuIcon className="h-5 w-5" />
      </button>
      {modalOpen && <MenuProjectsModal modalRef={modalRef} />}
    </div>
  )
}
