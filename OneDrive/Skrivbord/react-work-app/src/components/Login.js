import React, { useState } from 'react'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [message, setMessage] = useState("")

  //Gets the database arrays from NotionDataReader with props
  let userEmail = props.Email;
  let userID;

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

    if (password.length < 5) {
      setPasswordError('The password must be 6 characters or longer')
      return
    }
// checks if the input is valid with both username and password. Also checks if they gave a special ID.
    for (var p of userEmail) {
      if (p.properties.Email.rich_text[0]?.plain_text === email) {
        userID = p.id
        console.log(userID)

        if (p.id === userID && p.properties.Password.rich_text[0]?.plain_text === password) {
          console.log(p.properties.Name.title[0]?.plain_text)
          localStorage.setItem("userName", p.properties.Name.title[0]?.plain_text)
          localStorage.setItem("userID", JSON.stringify(userID))
          localStorage.setItem("loggedIn", "true")

          if (p.properties.UserID.rich_text[0]?.plain_text === "chef")
          {
            localStorage.setItem("bossFunctions", "true")
          }
          if (p.properties.UserID.rich_text[0]?.plain_text === "projektledare")
          {
            localStorage.setItem("projectleaderFunctions", "true")

          }
          window.location.reload()
          return
        }

      }
    }
    if (p.properties.Password.rich_text[0]?.plain_text !== password) {
      setMessage(`Fel Lösenord eller Email`)
      return
    }


  }

  return (
    <div className="login-container">
        <h2 className="login-text">Logga in</h2>
      <section className="login-input">
        <input
          value={email}
          placeholder="Skriv din mejladress"
          onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{emailError}</label>
      </section>
      <br />
      <section className="login-input">
        <input
          type="password"
          value={password}
          placeholder="Skriv ditt lösenord"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </section>
      <br />
      <section className="login-input">
        <input className="inputButton" type="button" onClick={onButtonClick} value={'LOGGA IN'}/>
      </section>
      {message}
    </div>
  )

}




export default Login