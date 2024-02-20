import { useState, useEffect, useRef, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()"
    }

    for (let i = 0; i < length; i++) {

      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='wrapper w-full max-w-md mx-auto rounded-xl px-4 my-8 text-yellow-500 bg-gray-500 py-10'>

        <h1 className='text-4xl text-center'>Password Generator</h1>
        <div className='flex rounded-xl overflow-hidden mb-4 mt-2'>

          <input type="text" value={password} className='outline-none w-full h-[10vh] py-1 px-3' placeholder='Password' readOnly />

          <button className='btn text-lg bg-blue-600 w-[8vw] transition-all hover:scale-125 hover:transition-[2s] hover:text-xl'
            onClick={copyPassword}
          >Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">

          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
              ref={passwordRef}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />

            <label htmlFor="numberInput">Numbers</label>
          </div>


          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />

            <label htmlFor="characterInput">Character</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
