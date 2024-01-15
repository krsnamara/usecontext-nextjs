'use client'

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react'

type DataType = {
  firstName: string
}

interface ContextProps {
  rock: string
  setRock: Dispatch<SetStateAction<string>>
  data: DataType[]
  setData: Dispatch<SetStateAction<DataType[]>>
}

const GlobalContext = createContext<ContextProps>({
  rock: '',
  setRock: () => {},
  data: [],
  setData: () => {},
})

export const GlobalContextProvider = ({ children }) => {
  const [rock, setRock] = useState('')
  const [data, setData] = useState<DataType[]>([])

  return (
    <GlobalContext.Provider value={{ rock, setRock, data, setData }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
