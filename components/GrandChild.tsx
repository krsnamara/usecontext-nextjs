'use client'

import { useEffect } from 'react'
import { useGlobalContext } from '@/app/context/store'
import Form from './Form'

export default function GrandChild() {
  const { rock, setRock, data, setData } = useGlobalContext()

  useEffect(() => {
    setRock('Limestone')
    setData([{ rock: 'Quartz' }, { rock: 'Marble' }, { rock: 'Granite' }])
  }, [setData, setRock])

  const handleSubmit = (e: {
    preventDefault: () => void
    target: { value: any }
  }) => {
    e.preventDefault()
    setData([...data, { rock: e.target.value }])
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-8 border border-slate-600 rounded-md bg-purple-200">
      <div className="border-b-orange-600 border-b-4">GrandChild Component</div>
      <main className="flex flex-col gap-3">
        <p>Favorite: {rock}</p>
        <div>
          <p>List Rocks:</p>
          <ul>
            {data.map((e, i) => (
              <li key={i}>{e.rock}</li>
            ))}
          </ul>
        </div>
        <Form />
      </main>
    </div>
  )
}
