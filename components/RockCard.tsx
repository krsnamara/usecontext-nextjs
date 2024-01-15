import { Rock } from '@/interfaces'
import React from 'react'

interface IProps {
  rock: Rock
}

export default function RockCard({ rock }: IProps) {
  return (
    <div className="flex flex-col items-center border border-solid border-slate-800 m-5 p-10 rounded-md bg-teal-200">
      <p className="text-slate-600 text-center text-lg">{rock.name}</p>
      <p className="text-purple-800 text-center">{rock.lastSeen}</p>
    </div>
  )
}
