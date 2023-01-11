import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import About from './Pages/AboutUs/Aboutus';
import Jobs from './Pages/Jobs/Jobs';
import Contact from './Pages/Contact/Contact';
import React from 'react';


function App() {
  return(
    <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/Home" element={<Home/>}/>
    <Route exact path="/About" element={<About/>}/>
    <Route exact path="/Jobs" element={<Jobs/>}/>
    <Route exact path="/Contact" element={<Contact/>}/>
    </Routes>

  )

}

export default App;
