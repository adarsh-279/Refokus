import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Projects from './components/Projects'
import Marquees from './components/Marquees'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='w-full h-screen font-["Satoshi Variable"] bg-zinc-900'>
      <Navbar />
      <Work /> 
      <Stripes />
      <Projects />
      <Marquees />
      <Cards />
    </div>
  )
}

export default App