import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Counter from './Counter';
import Login from "./Login";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Clock/>} /> */}
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}


