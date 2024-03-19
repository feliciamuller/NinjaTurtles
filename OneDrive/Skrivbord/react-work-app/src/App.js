import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import LoginData from "./components/LoginData"
import Menu from './components/Menu';
import TimeReport from './components/TimeReport';
import UserPage from './components/UserPage';
import UserData from './components/UserData';
import ShowProjects from './components/Projects';
function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className = 'App'>
      <BrowserRouter>
      <header>
        <Menu/>
      </header>
      <Routes>
        <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/Login" element={<LoginData setLoggedIn={setLoggedIn} setEmail={setEmail} />} />

        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/UserData" element={<UserData />} />
        <Route path="/Projects" element={<ShowProjects />} />
        <Route path="/TimeReport" element={<TimeReport />} />

      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
