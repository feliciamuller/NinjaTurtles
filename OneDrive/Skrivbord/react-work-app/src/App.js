import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import LoginData from "./components/LoginData"
import Menu from './components/Menu';
import TimeReport from './components/TimeReport';
import ShowProjects from './components/Projects';
import UpdateProjectHours from './components/UpdateProjectHours';
function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  // let login = <Route path="/Login" element={<LoginData setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
  // if (localStorage.getItem("loggedIn") === "true") {
  //   login = <Route path="/LogOut" element={<LogOut />} />;
  // }
  return (
    <div className='App'>
      <BrowserRouter>
      <header>
        <Menu/>
      </header>
      <Routes>
        <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/Login" element={<LoginData setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        <Route path="/Projects" element={<ShowProjects />} />
        <Route path="/TimeReport" element={<TimeReport />} />
        <Route path='/ProjectHours' element = {<UpdateProjectHours/>}/>
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
