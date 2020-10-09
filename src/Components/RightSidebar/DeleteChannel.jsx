import React from "react";
import { firebase } from "../../Global/Firebase/config";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const DeleteChannel = ({ Channel }) => {
  const DeleteChannel = () => {
    firebase
      .firestore()
      .collection("Channels")
      .doc(Channel)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <ListItem button onClick={() => DeleteChannel()}>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary={"Delete Channel"} />
    </ListItem>
  );
};

export default DeleteChannel;
