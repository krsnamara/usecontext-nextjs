'use client'

import { useEffect } from 'react'
import { useGlobalContext } from '@/app/context/store'

export default function GrandChild() {
  const { rock, setRock, data, setData } = useGlobalContext()

  useEffect(() => {
    setRock('Limestone')
    setData([{ rock: 'Quartz' }, { rock: 'Marble' }, { rock: 'Granite' }])
  }, [setData, setRock])

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
        <form className="flex items-center gap-3">
          <label htmlFor="#rock"></label>
          <input
            className="border border-slate-400 rounded-md p-2 outline-none focus:border-slate-700"
            placeholder="Add new rock"
            type={'text'}
            id="rock"
            name="rock"
          />
          <button
            className="border border-slate-700 w-auto h-auto rounded-md hover:bg-yellow-200 hover:text-slate-700 p-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  )
}
