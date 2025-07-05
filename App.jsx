import React, { useState } from 'react'
import AuthContext from './Files/AuthContext'
import Login from './Files/Login'

function App() {
  
  const[details, setDetails] = useState({
    name: '',
    password: ''
  })
  function handleInput(e) {
    setDetails((prevObj)=> {
      return {
        ...prevObj, [e.target.name] : e.target.value
      }
    })
  }
  function handleSubmit() {
    console.log(details);
  }
  return (
    <AuthContext value={{details, setDetails}}>
    <div>
      <div className="content" style={{textAlign: 'center', padding: '20px', margin: '10px', border: '2px solid blue',
  borderRadius: '1%', backgroundColor: 'rgb(169, 170, 170)'}}>
      <Login/>
      <input className='border-2 border-black' type='text' name='name' onChange={handleInput} placeholder='Enter Your Name' value={details.name} style={{background: 'white', width:'20vw'}}/>
      <br /> <br />
      <input className='border-2 border-black' type='password' name='password' onChange={handleInput} placeholder='Enter Your Password' value={details.password} style={{background: 'white', width:'20vw'}}/>
      <br /> <br />
      <button className='border-3 border-black' onClick={handleSubmit} disabled={!details.name || !details.password}>Submit</button>
      </div>
      </div>
      </AuthContext>
  )
}

export default App