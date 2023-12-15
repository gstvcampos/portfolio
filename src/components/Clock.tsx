'use client'

import { useEffect, useState } from 'react'

export default function Clock() {
  const [time, setTime] = useState<string | undefined>()

  useEffect(() => {
    const formatDateTime = () => {
      const date = new Date()
      const time = date.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })
      const dayMonth = date.toLocaleString('pt-BR', {
        month: 'short',
        day: '2-digit',
      })
      return `${dayMonth} ${time}`
    }

    setTime(formatDateTime())

    const timer = setInterval(() => {
      setTime(formatDateTime())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <span className="text-sm">{time}</span>
}
