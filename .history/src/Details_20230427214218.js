import React from "react";
import { useNavigate,NavLink } from "react-router-dom";

export default function Details() {

  return (
    <><br/>
      <div>Welcome,Buddy</div><br/>
      <NavLink className="btn btn-primary" to="/">LogOut</NavLink>
    </>
  );
}
