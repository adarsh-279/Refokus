import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Projects from './components/Projects'
import Marquees from './components/Marquees'

const App = () => {
  return (
    <div className='w-full h-screen font-["Satoshi Variable"] bg-zinc-900'>
      <Navbar />
      <Work /> 
      <Stripes />
      <Projects />
      <Marquees />
    </div>
  )
}

export default App