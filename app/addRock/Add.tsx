'use client'
import React, { useState } from 'react'
import { TextBox } from '../../components/elements/TextBox'
import { Button } from '@/components/elements/Button'
import { useRockContext } from '../context/RockContext'
import RockCard from '@/components/RockCard'

function Add() {
  const [name, setName] = useState('')
  const [lastSeen, setlastSeen] = useState('')

  // pull in addRock function from the context
  const { addRock } = useRockContext()

  // Better to create with React Hook Form or Formik
  // For this project I am focusing on useContext functionality

  const add = () => {
    addRock({ name, lastSeen })
    setName('')
    setlastSeen('')
  }

  const { rocks } = useRockContext()
  if (rocks.length === 0) {
    return (
      <h3 className=" border border-solid border-slate-800 m-5 rounded-md bg-teal-200 text-center rext-red-500 p-10">
        You have to pick a rock kid...
      </h3>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 p-2">
        <TextBox
          labelText="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextBox
          labelText="Last Seen"
          value={lastSeen}
          onChange={(e) => setlastSeen(e.target.value)}
        />
        <Button className="col-span-2 w-52 place-self-center" onClick={add}>
          Add
        </Button>
      </div>
      <div>
        <h1>Rocks In State</h1>
        <div className="flex flex-wrap gap-3 p-5 ">
          {rocks.map((rock) => (
            <RockCard rock={rock} key={rock.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Add
