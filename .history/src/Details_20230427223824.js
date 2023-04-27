import React, { useEffect, useState } from "react";
import { useNavigate,NavLink } from "react-router-dom";

export default function Details() {
  const [inpval,setInpval]=useState({
    name:"",
    email:"",
    date:"",
    password:""
  })
 
  const [loginData,set]
  const getData = ()=>{

    const {name} =inpval
    const userName = localStorage.getItem("mohitdata")
    // console.log(userName)
    if(userName && userName.length){
      const data = JSON.parse(userName)
      const newData  = data.filter((el,k)=>{
        return el.name === name
      })
     }
  }
useEffect(()=>{
  getData()
},[])
  return (
    <><br/>
      <div>Welcome,Buddy</div><br/>
        {/* <button onClick={()=>getData()}>show</button> */}
      <NavLink className="btn btn-primary" to="/">LogOut</NavLink>
    </>
  );
}
