'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'

export default function EncryptBtn({
  innerText,
  page,
}: {
  innerText: string
  page: string
}) {
  const chars = '!@#$%^&*():{};|,.<>/?'
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [text, setText] = useState(innerText)

  const scramble = () => {
    let pos = 0

    intervalRef.current = setInterval(() => {
      const scrambled = innerText
        .split('')
        .map((char, index) => {
          if (pos / 2 > index) return char
          const randomCharIndex = Math.floor(Math.random() * chars.length)
          const randomChar = chars[randomCharIndex]
          return randomChar
        })
        .join('')

      setText(scrambled)
      pos++

      if (pos >= innerText.length * 2) {
        stopScramble()
      }
    }, 50)
  }

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined)
    setText(innerText)
  }

  return (
    <div
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="rounded-t-md border-[1px] border-b-0 p-1"
    >
      <Link href={page} className="text-sm">
        <span>&lt; </span>
        {text}
        <span> /&gt;</span>
      </Link>
    </div>
  )
}
