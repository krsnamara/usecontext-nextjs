import React from 'react'
import Link from 'next/link'
import RockContainer from './RockContainer'
import { Button } from '@/components/elements/Button'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <RockContainer />
      <Link href="/addRock">
        <Button className="col-span-2 w-52 place-self-center">
          Add a Rock
        </Button>
      </Link>
    </div>
  )
}
