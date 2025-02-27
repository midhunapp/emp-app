import React from 'react'
import styles from './loginPage.module.css'

const LoginPage = () => {
  return (
    <div >
      Hello There --- Login
      <div>
        <label>Login ID</label>
        <input type="text" placeholder="Username" />
        <label>Passoword</label>
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  )
}

export default LoginPage
