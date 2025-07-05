import React, { useContext } from 'react'
import AuthContext from './AuthContext'



function Login() {
  const {details} = useContext(AuthContext)
  return (
    <div>
      <h1>Login Page</h1>
      <p><strong>Welcome: {details.name}</strong></p>
    </div>
  )
}

export default Login