import React from "react";
import { firebase } from "../../Global/Firebase/config";

import Form from "../InputFields/Form";
import Text from "../InputFields/InputFields";
import Button from "../InputFields/Button";

const AddUserProfil = (props) => {
  const onSubmit = (data) => {
    console.log(data);
    const ref = firebase.firestore().collection("Users");

    ref.doc("hans").set({
      UserName: "username",
      RealName: "RealName",
      Email: "Email",
    });
  };

  return (
    <div>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100px",
          height: "100px",
        }}
      />
      <p>Hej hvad ønsker du dit brugernavn skal være</p>

      <Form onSubmit={onSubmit}>
        <Text name="BrugerNavn" Title="Brugernavn" placeholder="Brugernavn" />
        <Button name="button" />
      </Form>
    </div>
  );
};

export default AddUserProfil;
