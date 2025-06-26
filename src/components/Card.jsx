import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';

const Card = () => {
  return (
    <div className="w-1/2 p-5 rounded-xl text-zinc-100 bg-zinc-800">
      <div className="w-full">
        <div className="w-full flex justify-between">
          <h1>Heading</h1>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Heading 2</h1>
      </div>
      
    </div>
  );
}

export default Card