import React from 'react'

const Stripe = ({val}) => { 
  return (
    <div className="w-1/6 px-10 py-5 border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] text-zinc-100 border-zinc-600 flex items-center justify-between">
        <img src={val.url} alt="" />
        <span className='font-semibold ml-5'>{val.number}</span>
    </div>
  );
}

export default Stripe