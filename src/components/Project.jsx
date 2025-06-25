import React from 'react'
import Button from './Button'

const Project = ({val}) => {
  return (
    <div className='w-full px-60 py-20 text-zinc-100'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className='text-6xl capitalize font-regular'>{val.title}</h1>
        <div className='w-1/3'>
          <p className='mb-10'>{val.description}</p>
          <div className='flex items-center gap-5'>
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title= "Case Study" />}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Project