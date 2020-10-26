import React, { useState, useEffect } from "react";
import "./Global/styles/global.css";
import "./Global/styles/_Normalize.css";
import Router from "./Global/router";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [UserData, SetUserData] = useState();

  useEffect(() => {
    if (localStorage.getItem("Username")) {
      SetUserData(localStorage.getItem("Username"));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Router UserData={UserData} />
      </BrowserRouter>
    </>
  );
}

export default App;
