import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10);
  const addValue = () => {
    if(counter < 20){
      setCounter(++counter);
    }
  }
  const removeValue = () =>{
    if(counter > 0){
      setCounter(--counter);
    }
  }
  return (
    
    <>
      <h1>Here we are going to use the hooks in react</h1>
      <h2>The value of Counter: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <footer>this is the footer of this app & the value of counter is {counter}</footer>
    </>
  )
}

export default App
