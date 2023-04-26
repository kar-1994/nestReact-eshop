import React from "react";
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import Counter from './Counter';
import Login from "./Login";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./registration/registration";
import Counter from "./Counter";




export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/home" element={<Home name="raj"/>} />
      </Routes>
    </BrowserRouter>
  );
}


