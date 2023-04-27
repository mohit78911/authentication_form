import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Details from './Details'
import Navbar from './Navbar'

export default function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/details' element={<Details/>}/>

     </Routes>
    </div>
  )
}
