import { useEffect, useState } from "react";
import {Routes, Route, Outlet, Navigate} from 'react-router-dom'
import Team from "./components/Team";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Loader from "./components/Loader";

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
          <Route element={<Projects/>} path="/projects"></Route>
          <Route element={<About/>} path="/about"></Route>
          <Route element={<Contacts/>} path='/contacts'></Route>
          <Route element={<Team/>} path="/team"></Route>
          <Route element={<Home/>} path="/home"></Route>
        </Routes>
      )}
     
    </div>
  );
}

export default App;
