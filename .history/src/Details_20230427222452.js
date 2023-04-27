import React, { useState } from "react";
import { useNavigate,NavLink } from "react-router-dom";

export default function Details() {
  const [inpval,setInpval]=useState({
    name:"",
    email:""
  })

  return (
    <><br/>
      <div>Welcome,Buddy</div><br/>
      <NavLink className="btn btn-primary" to="/">LogOut</NavLink>
    </>
  );
}
