import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
      <div className='w-full bg-zinc-900'>
          <div className='max-w-screen-xl mx-auto py-32 flex gap-3'>
              <Card />
              <Card />
          </div>
    </div>
  )
}

export default Cards