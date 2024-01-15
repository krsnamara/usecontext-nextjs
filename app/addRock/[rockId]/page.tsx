'use client'
import React from 'react'
import { useRockContext } from '@/app/context/RockContext'

function Details({ params }: { params: { rockId: string } }) {
  const { rocks } = useRockContext()

  const selectedRock = rocks.find((rock) => rock.id === params.rockId)

  return (
    <>
      <div>
        <h1>Rock details about {params.rockId}</h1>
      </div>
      <div>
        {selectedRock ? (
          <div>
            <h1>Rock details about {selectedRock.name}</h1>
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
