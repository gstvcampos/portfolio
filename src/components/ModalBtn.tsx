'use client'

import { useModalClose } from '@/hooks/useModalClose'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function ModalBtn() {
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
        className="focus:focus rounded-xl p-2 hover:bg-focus"
        onClick={handleButtonClick}
      >
        <Image
          priority={true}
          src="/apps.svg"
          width={48}
          height={48}
          alt={'icone apps'}
        />
      </button>
      {modalOpen ? (
        <div className="absolute bottom-20 z-10" ref={modalRef}>
          <div className="bg-txt-3">
            <p>Modal Content</p>
            <p>Modal Content</p>
            <p>Modal Content</p>
            <p>Modal Content</p>
            <p>Modal Content</p>
            <p>Modal Content</p>
          </div>
        </div>
      ) : null}
    </>
  )
}
