import React, { useEffect, useState } from "react";
import { useNavigate,NavLink } from "react-router-dom";

export default function Details() {
  const [inpval,setInpval]=useState({
    name:"",
    email:"",
    date:"",
    password:""
  })
 
  const [loginData,setLoginData]=useState([])
  var todayDate = new Date().toISOString().slice(0,10)

  const birthday

useEffect(()=>{

},[])
  return (
    <><br/>
      <div>Welcome,Buddy</div><br/>
        {/* <button onClick={()=>getData()}>show</button> */}
      <NavLink className="btn btn-primary" to="/">LogOut</NavLink>
    </>
  );
}