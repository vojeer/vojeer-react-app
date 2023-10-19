import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive") 

  return (
    
      <div className="w-full h-screen" style={{backgroundColor: color}}>

        <div className='flex flex-wrap justify-center bottom-10 pt-4'>
          <div ><button className='bg-green-400' onClick={ () => setColor("green")} >Grenn</button></div>
          <div><button className='bg-blue-800 ms-3' onClick={ () => setColor("blue")}>Blue</button></div>
          <div><button className='bg-pink-800 ms-3' onClick={ () => setColor("pink")}>Pink</button></div>
          <div><button className='bg-yellow-800 ms-3' onClick={ () => setColor("yellow")}>Yellow</button></div>
          <div><button className='bg-red-800 ms-3' onClick={ () => setColor("red")}>Red</button></div>
        </div>
       
      </div>
  )
}

export default App
