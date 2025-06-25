import React from 'react'
import Button from './Button'

const Project = () => {
  return (
    <div className='w-full py-20 text-zinc-100'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className='text-6xl capitalize font-semibold'>Project name</h1>
        <div className='w-1/3'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus dignissimos rem perferendis tempore quo eos iste nobis enim vitae?</p>
          <Button />
        </div>
        </div>
    </div>
  )
}

export default Project