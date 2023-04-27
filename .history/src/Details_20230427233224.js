import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export default function Details() {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [loginData, setLoginData] = useState([]);
  console.log(loginData);
  var todayDate = new Date().toISOString().slice(0, 10);
  // console.log(todayDate);

  const getDetails = () => {
    const getUser = localStorage.getItem("mohitdata");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLoginData(user);

      // const userBirth = loginData.map((el, k) => {
      //   return el.date === todayDate;
      // });
      //   if (userBirth) {
      //     setTimeout(() => {
      //       alert("Happy Birthday");
      //     }, 3000);
      //   }
    }
  };
  useEffect(() => {
    getDetails();
  });
  return (
    <>
      <br />
      <div>Welcome,Buddy</div>
      {loginData.length === 0 ? "error" : <h3>{loginData[0].name}</h3>}
      <br />
      <NavLink className="btn btn-primary" to="/">
        LogOut
      </NavLink>
    </>
  );
}
