import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Login from './components/Login';
import NotionDataReader from "./components/NotionDataReader"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className = 'App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/Login" element={<NotionDataReader setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        <Route path="/ogin" element={<NotionDataReader />} />
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
