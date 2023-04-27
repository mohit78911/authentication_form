import React from "react";

export default function Welcome() {

    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
      };
  return (
    <>
      <div>Welcome, Buddy </div>
      <button className="btn btn-primary m-2" onClick={() => handleClick()}>
        LogOut
      </button>
    </>
  );
}
