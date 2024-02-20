import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  // let counter = 5;
  function addValue() {
    if (counter < 20) {
      setCounter(counter + 1);

      //to repeat the same action multiple times
      // setCounter((prevCounter) => (prevCounter + 1))
      //setCounter also accepts a callback.

    }

  }

  function removeValue() {
    if (counter > 0) {

      setCounter(counter - 1);

    }
  }

  const [color, setColor] = useState("#ffa500")

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <br />
      <button
        onClick={removeValue}
      >Decrease Value</button>

    </>
  )
}

export default App
