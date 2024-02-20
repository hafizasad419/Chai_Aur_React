import { useState } from 'react'
import Pricing from './components/Pricing'
import Card from './components/Card'

function App() {
  let [color, setColor] = useState("olive")


  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div
        className='fixed flex flex-wrap justify-center inset-x-0 px-3 bottom-5 '

      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg py-2 px-2 rounded-3xl"
          style={{ backgroundColor: "#faf500" }}>

          <button className='text-white px-4 py-2 bg-green-500 text-xl outline-none rounded-3xl'
            onClick={() => (setColor("red"))}
            style={{ backgroundColor: 'red' }}
          >Red</button>

          <button className='text-white px-4 py-2 text-xl outline-none rounded-3xl'
            onClick={() => (setColor("green"))}
            style={{ backgroundColor: 'green' }}
          >Green</button>

          <button className='text-white px-4 py-2 text-xl outline-none rounded-3xl'
            onClick={() => (setColor("blue"))}
            style={{ backgroundColor: 'blue' }}
          >Blue</button>

          <button className='text-white px-4 py-2 text-xl outline-none rounded-3xl'
            onClick={() => (setColor("#fb899c"))}
            style={{ backgroundColor: '#fb899c' }}
          >Pink</button>

          <button className='text-white px-4 py-2 text-xl outline-none rounded-3xl'
            onClick={function () {
              let randomColor = "#"
              const characters = "abcdef0123456789"
              for (let i = 0; i < 6; i++) {
                randomColor += characters[Math.floor(Math.random() * 16)]
              }
              // console.log(randomColor);
              setColor(randomColor)
            }}

            style={{ backgroundColor: '#ffa500' }}
          >Let See😁</button>

        </div>
      </div>
    </div >
  )
}

export default App
