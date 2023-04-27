import "./App.css";
import { useState } from "react";
import Home from "./Home";
import { TextField,Button } from "@mui/material";
 

function App() {
  const [edata, setEdata] = useState("");
  const [pdata, setPdata] = useState("");

  const getEmail = localStorage.getItem("EmailData");
  const getPassword = localStorage.getItem("PasswordData");

  const handleSubmit = () => {
    localStorage.setItem("EmailData", edata);
    localStorage.setItem("PasswordData", pdata);
  };
  return (
    <>
    <br/>
      {getEmail && getPassword ? (
        <Home />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <TextField className="m-3"
            label="Email"
            type="email"
              value={edata}
              onChange={(e) => setEdata(e.target.value)}/>
             
          </div>
          <div>
            <TextField label="Password" type="password"
              value={pdata}
              onChange={(e) => setPdata(e.target.value)}/>
            
          </div>
          <button>Login</button>
          <Button varient="outlined" onClick={()=>handleSubmit()}>Login</Button>
        </form>
      )}
    </>
  );
}

export default App;
