import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NotionDataReader from './NotionDataReader'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [message, setMessage] = useState("")

  //Gets the database arrays from NotionDataReader with props
  let userEmail = props.emailadresses;
  let userPassword = props.emailPassword;
  //const navigate = useNavigate()


  const onButtonClick = () => {
    setEmailError('')
  setPasswordError('')
  // Check if the user has entered both fields correctly
  if ('' === email) {
    setEmailError('Please enter your email')
    return
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    setEmailError('Please enter a valid email')
    return
  }

  if ('' === password) {
    setPasswordError('Please enter a password')
    return
  }

  if (password.length < 7) {
    setPasswordError('The password must be 8 characters or longer')
    return
  }
  // Fix a working foreachloop!!!
  for (var p of userPassword){
  for (var e of userEmail) {
    if (e === email && p === password) {
      setMessage(`Du är nu inloggad som: ${email}`)
      return
    }
  }}

  if (p != userPassword){
    setMessage(`Fel Lösenord eller Email`)
    return
}

  }

  return (
    <div className= "mainContainer">
      <div className="titleContainer">
        <h2>Log in</h2>
      </div>
      <div className="inputContainer">
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br/>
      <div className="inputContainer">
        <input className= "inputButton" type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
       {message}
    </div>
  )
}


export default Login