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
      <div>
        {selectedRock ? (
          <div className="flex flex-col items-center p-10 rounded-md bg-yellow-200">
            <div className="flex flex-col justify-start mb-5 gap-3">
              <div className="flex items-center gap-4">
                <h1>Rock details about:</h1>
                <p className="text-slate-600 text-center text-2xl">
                  {selectedRock.name}
                </p>
              </div>
              <p className="text-purple-800">
                Last seen: {selectedRock.lastSeen}
              </p>
              <p className="text-purple-800">
                Description: {selectedRock.description}
              </p>
            </div>
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
