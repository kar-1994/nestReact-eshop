import React, { useState } from 'react'
import Navbar from './Navbar';
import Display from './Display';
import Clock from './clock';
import { useSelector } from 'react-redux';


export default function Home() {
  const [dtype, setDtype] = useState("Analog")
  function displayType(data) {
    setDtype(data.type)
  }
  const token = useSelector((state) =>{
   return state.user.token
})

  return (
    <div>
      <p>{token}</p>
      <Navbar></Navbar>
      <Display displayType={displayType} />
      <Clock ctype={dtype} />
    </div>
  )
}
