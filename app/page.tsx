'use client'

import { useEffect } from 'react'
import { useGlobalContext } from '@/app/context/store'
import { NavBar } from '@/components/NavBar'
export default function Home() {
  const { userId, setUserId, data, setData } = useGlobalContext()

  useEffect(() => {
    setUserId('123')
    setData([
      { firstName: 'John' },
      { firstName: 'Jane' },
      { firstName: 'Joe' },
    ])
  }, [])

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>User ID: {userId}</p>
        <p>First Name:</p>
        {data.map((e, i) => (
          <p key={i}>{e.firstName}</p>
        ))}
      </main>
    </div>
  )
}
