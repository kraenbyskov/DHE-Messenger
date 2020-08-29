import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { firebase } from "./Global/Firebase/config";
import Main from "./Components/Main/Main";
import withFirebaseAuth from "react-with-firebase-auth";
import Login from "./Pages/Login/Login";
import Site from "./Pages/Site/Site";
import "firebase/auth";
import AddUserProfil from "./Components/AddUserProfil/AddUserProfil";
import GetUserData from "./Components/GetUserData";

import "./Global/sass/global.scss";

function App(props) {
  const { signInWithGoogle, signOut, user } = props;
  const [UserData, SetUserData] = useState("hans");

  useEffect(() => {
    GetUserData(user, SetUserData);
  }, [user]);

  console.log(UserData);

  return (
    <BrowserRouter>
      <Main signOut={signOut} user={user} signInWithGoogle={signInWithGoogle}>
        {user && UserData ? (
          user.displayName === UserData.RealName ? (
            <Site />
          ) : (
            <AddUserProfil user={user} SetUserData={SetUserData} />
          )
        ) : (
          <Login />
        )}
      </Main>
    </BrowserRouter>
  );
}

const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
