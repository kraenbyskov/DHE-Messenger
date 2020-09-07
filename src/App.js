import React, { useState, useEffect } from "react";
import "./Global/sass/global.scss";
import Router from "./Global/router";
import SignIn from "./Pages/SignIn/SignIn";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  // const [UserData, SetUserData] = useState("hans");

  useEffect(() => {}, []);

  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
