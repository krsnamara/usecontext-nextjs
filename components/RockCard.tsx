import { Rock } from '@/interfaces'
import Link from 'next/link'
import React from 'react'

interface IProps {
  rock: Rock
}

export default function RockCard({ rock }: IProps) {
  return (
    <Link href={`/addRock/${rock.id}`} key={rock.id}>
      <div className="border shadow hover:shadow-md cursor-pointer transition flex flex-col items-center m-5 p-10 rounded-md bg-yellow-200">
        <p className="text-slate-600 text-center text-lg">{rock.name}</p>
        <p className="text-purple-800 text-center">{rock.lastSeen}</p>
      </div>
    </Link>
  )
}
