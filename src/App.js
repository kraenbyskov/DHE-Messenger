import React, { useState, useEffect } from "react";
import "./Global/sass/global.scss";
import Router from "./Global/router";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  const [UserData, SetUserData] = useState();

  useEffect(() => {
    if (localStorage.getItem("Username")) {
      SetUserData(localStorage.getItem("Username"));
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Router UserData={UserData} />
      </BrowserRouter>
    </div>
  );
}

export default App;
