'use client'

import { useEffect } from 'react'
import { useGlobalContext } from '@/app/context/store'
export default function Home() {
  const { rock, setRock, data, setData } = useGlobalContext()

  useEffect(() => {
    setRock('123')
    setData([
      { firstName: 'Quartz' },
      { firstName: 'Marble' },
      { firstName: 'Granite' },
    ])
  }, [setData, setRock])

  const handleSubmit = (e) => {
    e.preventDefault()
    setData([...data, { firstName: e.target.value }])
  }

  return (
    <div>
      <main className="">
        <p>Type of rock: {rock}</p>
        <ul>List of rocks</ul>
        {data.map((e, i) => (
          <li key={i}>{e.firstName}</li>
        ))}
        <input type="text" />
        <button onSubmit={handleSubmit}></button>
      </main>
    </div>
  )
}
