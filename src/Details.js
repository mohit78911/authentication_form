import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Details() {

  const location = useNavigate()
  
  const [loginData, setLoginData] = useState([]);
  console.log(loginData);

  const getDetails = () => {
    const getUser = localStorage.getItem("mohitdata");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLoginData(user);
    }
  };

  const logOut = ()=>{
    localStorage.removeItem("mohitdata")
  }
  useEffect(() => {
    getDetails();
  },[]);
  return (
    <>
      <br />
      <div>Welcome,Buddy</div>
      {loginData.length === 0 ? "error" : <h3>{loginData[0].name}</h3>}
      <br />
      <NavLink className="btn btn-primary" onClick={()=>logOut()} to="/login" >
        LogOut
      </NavLink>
    </>
  );
}
