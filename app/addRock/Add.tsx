'use client'
import React, { useState } from 'react'
import { TextBox } from '../../components/elements/TextBox'
import { Button } from '@/components/elements/Button'
import { useRockContext } from '../context/RockContext'

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

  return (
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
  )
}

export default Add
