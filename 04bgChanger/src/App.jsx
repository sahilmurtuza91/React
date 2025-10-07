import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setbfColor] = useState("blue")

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor:bgColor}}>
      <div className='fixed flex flex-wrap justify-center bottom-4 inset-x-0  '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl'>
          <button onClick={() => setbfColor("red")} className="outline-none px-1 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red"  }}>red</button>

          <button onClick={() => setbfColor("green")} className="outline-none px-1 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green"  }}>green</button>

          <button onClick={() => setbfColor("yellow")} className="outline-none px-1 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "yellow"  }}>yellow</button>

          <button onClick={() => setbfColor("black")} className="outline-none px-1 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "black"  }}>black</button>

          <button onClick={() => setbfColor("olive")} className="outline-none px-1 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "olive"  }}>olive</button>

          <button onClick={() => setbfColor("white")} className="outline-none px-1 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "white"  }}>white</button>

          <button onClick={() => setbfColor("fuchsia")} className="outline-none px-1 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "fuchsia"  }}>fuchsia</button>

          <button onClick={() => setbfColor("gray")} className="outline-none px-1 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "gray"  }}>gray</button>
        </div>
      </div>
    </div>
  )
}

export default App
