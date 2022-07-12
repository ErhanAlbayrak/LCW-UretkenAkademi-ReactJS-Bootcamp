import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import Footer from './components/Footer';
import data from './data';  
import {useState} from 'react';
import Login from './components/Login';
import Reset from './components/Reset';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from './components/About';
import Dashboard from './components/Dashboard';


function App() {
 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
