import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./component/card"
function App() {
  const [count, setCount] = useState(0)
  let username=["JohnDoe","JaneSmith","AliceJohnson","BobBrown","CharlieDavis",'EveWhite',"FrankBlack","GraceGreen"]

  return (
    <>
      <h1 className='bg-green-500 p-4 rounded-b-4xl text-blue '>Testing of tailwindcss</h1>
      <p className='bg-green-500 p-4 rounded-t-4xl text-white'>This is a simple card component using Tailwind CSS.</p>
          <div className='grid-cols-2 gap-4 md:grid'>
            {username.map((user,index)=>(
            <Card key={index} username={user} />
          ))}
          </div>
    </>
  )
}

export default App
