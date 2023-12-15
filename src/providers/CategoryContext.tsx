'use client'

import { createContext, useState } from 'react'
export interface ICategoryContext {
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

export const CategoryContext = createContext({} as ICategoryContext)

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [category, setCategory] = useState('')

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}
