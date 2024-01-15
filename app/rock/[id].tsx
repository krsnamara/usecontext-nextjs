import React from 'react'
import { useRouter } from 'next/router'

function Rock() {
  const router = useRouter()
  return <div> Rock {router.query.slug}</div>
}

export default Rock
