import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  // let counter=15;
  const addValue=()=>{
    // counter++;
    // console.log("add vaue", Math.random());
    // console.log("counter", counter);
    if(counter <20){
      setCounter(++counter); 
    }
    else{
      alert("Counter value cannot be more than 20");
    }
  }

  const removeValue=()=>{
    if(counter > 0){
      setCounter(--counter);
    }
    else{
      alert("Counter value cannot be less than 0");
    }
  }
  return (
    <>
      <h1>This is sahil coding</h1>
      <h2>The counter value is {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <footer>Counter: {counter}</footer>
    </>
  )
}

export default App
