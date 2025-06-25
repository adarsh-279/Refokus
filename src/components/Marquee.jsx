import React from 'react'

const Marquee = (imageURL) => {
  return (
      <div className='w-full bg-red-500 flex'>
      {imageURL.map((url) => (
        <img src={url} className='w-40 h-40'  />
      ))}
    </div>
  );
}

export default Marquee