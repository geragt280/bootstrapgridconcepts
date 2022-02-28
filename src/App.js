import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AuthenticationScreen from './screens/AuthenticationScreen';
import HomeScreen from './screens/HomeScreen';
import { useSelector } from 'react-redux';

export default function App() {

  const loginstatus = useSelector(state => state.auth);

  function About() {
    return <div className='container d-flex justify-content-center align-items-center vh-100 main-container'>
        <h2 className='row' >About</h2>
        <p className='row'>Made By Muhammad Bilal Khan</p>
    </div>;
  }


  return (
    <div className='App'>
      <Router>
        <div>
          <ul className='m-1 p-2 text-uppercase list-unstyled nav-bar'>
            {loginstatus==='loggedout' ?<li>
              <Link className='p-2 text-decoration-none link' to="/">Login</Link>
            </li> : null}
            {loginstatus==='login' ? <li>
              <Link className='p-2 text-decoration-none link' to="/users">Home</Link>
            </li> : null }
            {loginstatus==='login' ?<li>
              <Link className='p-2 text-decoration-none link' to="/about">About</Link>
            </li> : null }
          </ul>

          <Routes>
            <Route path="/" element={<AuthenticationScreen/>} />
            <Route path="/users" element={<HomeScreen/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
