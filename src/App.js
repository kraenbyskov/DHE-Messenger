import React, { useState, useEffect } from "react";
import "./Global/sass/global.scss";
import Router from "./Global/router";
import { BrowserRouter } from "react-router-dom";
import { MessageProvider } from "./Components/MessageProvider";

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
