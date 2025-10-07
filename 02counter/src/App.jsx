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
      //setCounter(counter+1); 
      //setCounter(counter+1);
      //setCounter(counter+1); //--> this will not work as expected like to increate by 3 beacause react batch the state updates for performance optimization beacause we are using direct form of state update and setCounter is async in nature
      setCounter((prevCounter)=> prevCounter + 1);
      setCounter((prevCounter)=> prevCounter + 1);
      setCounter((prevCounter)=> prevCounter + 1); // --> this will work as expected like to increase by 3 beacause we are using functional form of state update where we are using prevState and this will give the latest state value because react will call this function in order and give the latest state value act as the callback function
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
