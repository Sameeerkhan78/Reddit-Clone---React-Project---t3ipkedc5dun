import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <>
     <div style={{margin:'25px'}}>
      <h4>Enter Name : sameer </h4> 
      <h4>Enter Password : sameer@khan</h4>
     </div>
      <div className="login">
        <div
          className="add-new-post"
          style={{ textAlign: "center", color: "brown" }}
        >
          Login
        </div>
        <input
          placeholder="Enter Name"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br />
        <input
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => onLogin(username, password)}
            className="primaryBtn"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;

