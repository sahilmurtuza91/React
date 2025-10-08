import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length, setlength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[characterAllowed, setCharacterAllowed] = useState(false);
  const[password, setPassword] =useState("")

  const passwordGenerator = useCallback(fn, []) => {}
  return (
    <>
      <h1 className='text-4xl font-bold text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
