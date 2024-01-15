'use client'

import { useEffect } from 'react'
import { useGlobalContext } from '@/app/Context/store'
export default function Home() {
  const { userId, setUserId, data, setData } = useGlobalContext()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Here is some content</h1>
    </main>
  )
}
