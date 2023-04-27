import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Details() {
  const [loginData, setLoginData] = useState([]);
  console.log(loginData);

  const getDetails = () => {
    const getUser = localStorage.getItem("mohitdata");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLoginData(user);
    }
  };
  useEffect(() => {
    getDetails();
  });
  return (
    <>
      <br />
      <div>Welcome,Buddy</div>
      {loginData.length === 0 ? "error" : <h3>{loginData[1].name}</h3>}
      <br />
      <NavLink className="btn btn-primary" to="/">
        LogOut
      </NavLink>
    </>
  );
}
