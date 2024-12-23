import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Navbar from './components/navbar/navbar';
import Leftbar from './components/leftbar/leftbar';
import Rightbar from './components/rightbar/rightbar';
import Profile from './components/profile/profile';
import Home from './components/home/home'
import { createBrowserRouter } from 'react-router-dom';
import './components/home/home.css'

function App() {

  // console.log("App rendered fine")
  return(
    <BrowserRouter>
      <Routes>
        <Route path= '/' element= {<Login/>}/>
        <Route path= '/login' element= {<Login/>}/>
        <Route path= '/register' element= {<Register/>}/>
        <Route path= '/home' element= {<Home/>}/>
        <Route path= '/profile' element= {<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
