import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Sahilmurtuza91",
    age:20,
  }
  let myArr=[1,2,3,4,5]
  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-2xl">Tailwind test</h1>
     < Card  username="Devian" btnText="click here" mystr="Explore the profile of Devian, a passionate developer."/>
     <Card username="Solomon" btnText="view profile" mystr="Explore the profile of Solomon, a talented developer."/>
    </>
  )
}

export default App
