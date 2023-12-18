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
    <div className="md:hidden">
      <button ref={buttonRef} onClick={handleButtonClick}>
        <MenuIcon />
      </button>
      {modalOpen && <MenuProjectsModal modalRef={modalRef} />}
    </div>
  )
}
