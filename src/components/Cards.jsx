import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-screen-xl mx-auto py-32 flex gap-2">
        <Card
          width={"basis-1/3"}
          start={false}
          para={true}
        />
        <Card
          width={"basis-2/3"}
          start={true}
          para={false}
          hover="true"
        />
      </div>
    </div>
  );
}

export default Cards