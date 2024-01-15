'use client'
import React, { useState } from 'react'
import { TextBox } from './elements/TextBox'
import { Button } from '@/components/elements/Button'
import { useRockContext } from '../app/context/RockContext'
import { redirect } from 'next/navigation'

function Add() {
  const [name, setName] = useState('')
  const [lastSeen, setlastSeen] = useState('')
  const [description, setDescription] = useState('')

  // pull in addRock function from the context
  const { addRock } = useRockContext()

  // Better to create with React Hook Form or Formik
  // For this project I am focusing on useContext functionality

  const add = () => {
    addRock({ name, lastSeen, description })
    setName('')
    setlastSeen('')
    setDescription('')
    // TODO redirect to home page
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
        <TextBox
          labelText="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button className="col-span-2 w-52 place-self-center" onClick={add}>
          Add
        </Button>
      </div>
    </div>
  )
}

export default Add
