import React, { useState } from "react";
import "./styles/App.css";
import Login from "./Login";
import Home from "./Home";

const App = () => {
  const [logedUser, setLogedUser] = useState(false);

  const onLogin = (username, password) => {
    if (username === "sameer" && password === "sameer@khan") setLogedUser(true);
    else alert("Please Enter Correct UserNmae PassWord!");
  };
  return (
    <div id="main">
      {!logedUser && <Login onLogin={onLogin} />}
      {logedUser && <Home />}
    </div>
  );
};

export default App;

