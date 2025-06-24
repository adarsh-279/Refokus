import React from 'react'

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center bg-zinc-800">
      <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="links flex gap-15 ml-10 items-center">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span className='w-[2px] h-7 bg-zinc-900'></span>
          ) : (
            <a className="text-white flex items-center gap-1.5" href="#">
              {index === 1 ? (
                <span
                  style={{ boxShadow: "0 0 0.45em #00FF19" }}
                  className="inline-block w-1 h-1 rounded-full bg-green-500"
                ></span>
              ) : null}
              {elem}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar