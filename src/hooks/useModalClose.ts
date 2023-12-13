'use client'

import { useEffect, useRef } from 'react'

export const useModalClose = (
  keyId: string,
  callback: () => void,
  buttonRef: React.RefObject<HTMLButtonElement>,
) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleUseKeydown = (event: KeyboardEvent) => {
      if (event.key === keyId) {
        if (callback) callback()
      }
    }

    const handleOutclick = (event: MouseEvent) => {
      if (
        !ref.current?.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        if (callback) callback()
      }
    }

    window.addEventListener('keydown', handleUseKeydown)
    window.addEventListener('mousedown', handleOutclick)

    return () => {
      window.removeEventListener('keydown', handleUseKeydown)
      window.removeEventListener('mousedown', handleOutclick)
    }
  }, [keyId, callback, buttonRef])

  return ref
}
