"use client"
import React from 'react'
import { useCounterStore  } from '@/store/store'

const page = () => {
  const {count,increment,decrement} = useCounterStore ()
  return (
    <div>
      <button onClick={()=>increment(5)}>Increment</button>
      <h1>count: {count}</h1>
      <button onClick={()=>decrement(5)}>decrement</button>
    </div>
  )
}

export default page
