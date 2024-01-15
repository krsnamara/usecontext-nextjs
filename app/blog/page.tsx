'use client'
import { useGlobalContext } from '@/app/context/store'
import { Child } from '@/components/Child'

export default function Blog() {
  const rocks = useGlobalContext()

  return (
    <div className="flex flex-col items-center border border-solid border-slate-800 m-5 p-10 rounded-md bg-teal-200">
      <div className="text-3xl font-bold mb-4 border-b-4 border-slate-600">
        Blog Tree
      </div>
      <div className="border-b-orange-600 border-b-4">Parent Component</div>
      <div className="text-3xl font-bold mb-4"> Context Value:{rocks.rock}</div>
      <div>
        <Child />
      </div>
    </div>
  )
}
