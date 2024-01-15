'use client'
import { Rock } from '@/interfaces'
import { RockContext } from './RockContext'
import React, { ReactNode, useState } from 'react'

interface IProps {
  children: ReactNode
}

function RockContextProvider({ children }: IProps) {
  const [rocks, setRocks] = useState<Rock[]>([])
  const addRock = (rock: Rock) => {
    ;(rock.id = rocks.length), setRocks([...rocks, rock])
  }

  return (
    <RockContext.Provider
      value={{
        rocks,
        addRock,
      }}
    >
      {children}
    </RockContext.Provider>
  )
}

export default RockContextProvider
