import { useEffect, useState } from "react";
import {Routes, Route, Outlet, Navigate} from 'react-router-dom'

import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";

import Loader from "./components/Loader";
import Safety from "./components/Safety";

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="app">
      {loading ? (<Loader/>) : (
        <Routes>
          <Route element={<Navigate to="/home"/>} path="/" exact></Route>
         
          <Route element={<About/>} path="/about"></Route>
          <Route element={<Contacts/>} path='/contacts'></Route>
          
          <Route element={<Safety/>} path="/safety"></Route>
          <Route element={<Home/>} path="/home"></Route>
        </Routes>
      )}
     
    </div>
  );
}

export default App;
