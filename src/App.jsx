import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='w-full h-screen font-["Satoshi Variable"] bg-zinc-900'>
      <Navbar />
      <Work /> 
      <Stripes />
      <Projects />
    </div>
  )
}

export default App