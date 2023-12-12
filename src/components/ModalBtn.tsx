'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ModalBtn() {
  const [modalOpen, setModalOpen] = useState(false)

  const handleButtonClick = () => {
    setModalOpen(!modalOpen)
  }

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setModalOpen(false)
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setModalOpen(false)
    }
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
        <div className="fixed inset-0 z-10" onClick={handleOutsideClick}>
          <div className="flex h-full items-end justify-center">
            <div className="mb-20 h-60 bg-txt-1">
              <button>linkdin</button>
              <button>github</button>
              <button>github</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
