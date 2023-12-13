'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ModalBtn() {
  const [modalOpen, setModalOpen] = useState(false)

  const handleButtonClick = () => {
    setModalOpen(!modalOpen)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setModalOpen(false)
    }
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    if (modalOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [modalOpen])

  return (
    <>
      <button
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
      {modalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-bar-3 bg-opacity-75">
          <div className="bg-white w-1/2 rounded p-4 shadow-md">
            <p>Modal Content</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white mt-4 rounded px-4 py-2"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
