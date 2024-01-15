import React from 'react'
import { useRockContext } from './context/RockContext'

function ProductContainer() {
  const { rocks } = useRockContext()
  if (rocks.length === 0) {
    return (
      <h3 className="text-center rext-red-500 p-5">
        You have to pick a rock kid...
      </h3>
    )
  }

  return <div>ProductContainer</div>
}

export default ProductContainer
