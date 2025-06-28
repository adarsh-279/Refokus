import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-zinc-900 text-zinc-100">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-30 pb-10 ">
        <div className="w-1/2">
          <h1 className="text-9xl font-semibold">refokus.</h1>
        </div>
        <div className="w-1/2 flex">
          <div className="opacity-40 w-1/3">
            <h1 className="mb-10">Socials</h1>
            {["Instagram", "Twitter", "Linkedin"].map((item, index) => (
              <a key={index} className="block mt-2" href="">
                {item}
              </a>
            ))}
          </div>
          <div className="opacity-40 w-1/3">
            <h1 className="mb-10">Sitemaps</h1>
            {["Home", "Work", "Career", "Contacts"].map((item, index) => (
              <a key={index} className="block mt-2" href="">
                {item}
              </a>
            ))}
          </div>
          <div className="w-1/4">
            <h1 className="mb-10 text-right">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </h1>
            <img
              className="border-2 border-blue-600 px-3 py-2 bg-blue-600 ml-8"
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer