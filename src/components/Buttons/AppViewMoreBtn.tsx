'use client'

import { useModalClose } from '@/hooks/useModalClose'
import { useRef, useState } from 'react'
import CustomImage from '../CustomImage'
import AppModal from '../Modals/AppModal'

export default function AppViewMoreBtn() {
  const [modalOpen, setModalOpen] = useState(false)
  const buttonRef = useRef(null)

  const handleButtonClick = () => {
    setModalOpen(!modalOpen)
  }

  const modalRef = useModalClose('Escape', () => setModalOpen(false), buttonRef)

  return (
    <>
      <button
        ref={buttonRef}
        className="rounded-xl p-2 hover:bg-content-1 hover:bg-opacity-60"
        onClick={handleButtonClick}
      >
        <CustomImage src="/apps.svg" alt="icone apps" />
      </button>
      {modalOpen && <AppModal modalRef={modalRef} />}
    </>
  )
}
