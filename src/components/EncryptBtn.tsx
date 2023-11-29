'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'

export default function EncryptBtn({
  innerText,
  toElement,
}: {
  innerText: string
  toElement: string
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
      className="border-green hover:bg-green2 rounded-lg border-[1px] px-4 py-2"
    >
      <Link href={toElement} className="text-sm">
        <span className="text-green">&lt; </span>
        {text}
        <span className="text-green"> /&gt;</span>
      </Link>
    </div>
  )
}
