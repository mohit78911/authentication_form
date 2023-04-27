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
  console.log(loginData)
  var todayDate = new Date().toISOString().slice(0, 10);
  // console.log(todayDate);

  const birthday = () => {
    const getUser = localStorage.getItem("mohitdata");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLoginData(user);

      const userBirth = loginData.map((el, k) => {
        return el.date === todayDate;
      });
      if (userBirth) {
        setTimeout(() => {
          alert("Happy Birthday");
        }, 3000);
      }
    }
  };

  useEffect(() => {
    birthday();
  }, []);
  return (
    <>
      <br />
      <div>Welcome,Buddy</div>
      { loginData
      <h3>{loginData[0].name}</h3>
      }
      <br />
      {/* <button onClick={()=>getData()}>show</button> */}
      <NavLink className="btn btn-primary" to="/">
        LogOut
      </NavLink>
      
    </>
  );
}
