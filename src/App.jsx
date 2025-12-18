import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar className="w-full"/>
      <Hero className ="w-full"/>
    </>
  )
}

export default App
