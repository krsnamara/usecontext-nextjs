import { Rock } from '@/interfaces'
import { createContext, useContext } from 'react'

interface IRockContext {
  rocks: Rock[]
  addRock: (rock: Rock) => void
}

export const RockContext = createContext<IRockContext>({
  rocks: [],
  addRock(rock) {},
})

export const useRockContext = () => useContext(RockContext)
