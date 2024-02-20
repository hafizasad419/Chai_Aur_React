import React, { useState, useContext } from 'react'
import userContext from '../../context/userContext'

function Login() {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()


  const {setUser} = useContext(userContext)


  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }

  return (
    <div className='h-[80vh] bg-amber-500'>

      <form className='text-center py-4'>

        <h2 className='text-2xl font-bold text-white'>Login</h2>

        <input onChange={(e) => setUsername(e.target.value)} className='my-2 py-2 px-4 outline-none rounded'
          type="text"
          value={username}
          placeholder='Username' />
        <br />

        <input onChange={(e) => setPassword(e.target.value)}
          value={password}
          className='my-2 py-2 px-4 outline-none rounded' type="password" placeholder='Password' />
        <br />

        <button type='submit' className='bg-amber-300 py-2 px-8 my-2 rounded hover:bg-amber-400 transition' onClick={handleSubmit}>Submit</button>


      </form>

    </div>
  )
}

export default Login