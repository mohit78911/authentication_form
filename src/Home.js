import React, { useState } from "react";
import Welcome from "./Welcome";
import { Navigate } from "react-router-dom";

export default function Home() {
 


  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

const exitPage = ()=>{
    localStorage.clear()
    window.location.reload()
}

  const hadleSubmit = ()=>{
        {<Welcome/>}
  }
  return (
    <>
    <form onSubmit={hadleSubmit}>
    <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button>Submit</button>
    </form>
    if(email === edata && password === pdata) {
        Navigate(<Welcome/>)
    }
    <button onClick={()=>{exitPage()}}>Exit Page</button>
     
    </>
  );
}
