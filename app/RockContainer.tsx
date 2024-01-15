'use client'

import React from 'react'
import { useRockContext } from './context/RockContext'
import RockCard from '@/components/RockCard'

function RockContainer() {
  const { rocks } = useRockContext()
  if (rocks.length === 0) {
    return (
      <h3 className=" border border-solid border-slate-800 m-5 rounded-md bg-teal-200 text-center rext-red-500 p-10">
        You have to pick a rock kid...
      </h3>
    )
  }

  return (
    <div className="flex flex-wrap gap-3 p-5">
      {rocks.map((rock) => (
        <RockCard rock={rock} key={rock.id} />
      ))}
    </div>
  )
}

export default RockContainer
