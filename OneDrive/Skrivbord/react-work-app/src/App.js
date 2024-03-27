import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import LoginData from "./components/LoginData"
import Menu from './components/Menu';
import TimeReport from './components/TimeReport';
import UpdateProjectHours from './components/UpdateProjectHours';
import ShowProjects from './components/Projects';
import FetchTime from './components/FetchTime';
import HamMenu from './components/HamburgerMenu/Menu';
function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className='App'>
      <BrowserRouter>
      <div className='showHam'>
      <HamMenu/>
      </div>

      <header>
        <Menu/>
      </header>
      <Routes>
        <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/Logga_in" element={<LoginData setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        <Route path='/Uppdatera_Projekttid' element = {<UpdateProjectHours/>}/>
        <Route path="/Visa_Projekt" element={<ShowProjects />} />
        <Route path="/Rapportera_tid" element={<TimeReport />} />
        <Route path="/Visa_Tidrapporter" element={<FetchTime/>} />
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
