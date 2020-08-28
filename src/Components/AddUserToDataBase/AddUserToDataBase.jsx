import { useState } from "react";
import { firebase } from "../../Global/Firebase/config";

const AddUserToDataBase = () => {
  const ref = firebase.firestore().collection("Artboard");

  ref.doc().set({
    ArtboardName: "peter",
    BackgroundColor: "#FFFFFF",
    Heught: 500,
    Width: 500,
    Users: ["hans"],
    LayerOrder: [0, 1],
  });
};

export default AddUserToDataBase;
