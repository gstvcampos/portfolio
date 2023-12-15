'use client'

import { useEffect, useState } from 'react'

export default function Clock() {
  const [time, setTime] = useState<string | undefined>()

  useEffect(() => {
    setTime(
      new Date().toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    )

    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      )
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <span>{time}</span>
}
