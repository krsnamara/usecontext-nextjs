'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useRockContext } from '@/app/context/RockContext'
import { Button } from '@/components/elements/Button'

function Details({ params }: { params: { rockId: number } }) {
  const { rocks } = useRockContext()

  // console.log(rocks)

  // Find the rock with the id that matches the params.rockId
  const selectedRock = rocks.find((rock) => rock.id == params.rockId)

  // console.log(selectedRock)

  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <>
      <div>{/* <h1>Rock details about {params.rockId}</h1> */}</div>
      <div>
        {selectedRock ? (
          <div>
            <h1>Rock details about {selectedRock.name}</h1>
            <Button
              className="col-span-2 w-52 place-self-center"
              onClick={goBack}
            >
              Go Back
            </Button>

            {/* Display other details of the rock */}
          </div>
        ) : (
          <div>
            <h1>Rock not found</h1>
          </div>
        )}
      </div>
    </>
  )
}

export default Details
