import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { firebase } from "./Global/Firebase/config";
import Main from "./Components/Main/Main";
import withFirebaseAuth from "react-with-firebase-auth";
import Login from "./Pages/Login/Login";
import Site from "./Pages/Site/Site";
import "firebase/auth";

import Form from "./Components/Form";
import Text from "./Components/InputFields";
import Button from "./Components/Button";

import "./Global/sass/global.scss";

const AddUserProfil = (props) => {
  const { user } = props;

  const onSubmit = (data) => {
    console.log(data);
    const ref = firebase.firestore().collection("Users");

    ref.doc(user.displayName).set({
      UserName: data.BrugerNavn,
      RealName: user.displayName,
      Email: user.email,
      Photo: user.photoURL,
    });
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${user.photoURL}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100px",
          height: "100px",
        }}
      />
      <p>Hej {user.displayName} hvad ønsker du dit brugernavn skal være</p>

      <Form onSubmit={onSubmit}>
        <Text name="BrugerNavn" Title="Brugernavn" placeholder="Brugernavn" />
        <Button name="button" />
      </Form>
    </div>
  );
};

function App(props) {
  const { signInWithGoogle, signOut, user } = props;
  const [UserData, SetUserData] = useState();
  console.log("App -> UserData", UserData);

  useEffect(() => {
    if (user) {
      const ref = firebase
        .firestore()
        .collection("Users")
        .doc(user.displayName);
      ref.get().then((doc) => {
        if (doc.exists) {
          SetUserData(doc.data());
        } else {
          console.log("No such document!");
        }
      });
    }
  }, [user]);

  // eslint-disable-next-line
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
