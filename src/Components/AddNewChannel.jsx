import React from "react";
import { firebase } from "../Global/Firebase/config";
import { Form, Text, Button } from "./InputFields/Input";

const ChannelStyle = {
  background: "green",
  position: "absolute",
  width: "200px",
  height: "auto",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  padding: "20px",
};

const AddNewChannnel = ({ setAddChannelWindow }) => {
  const onSubmit = (data) => {
    const ref = firebase.firestore().collection("Channels");

    ref.doc(data.ChannelName).set({
      ChannelName: data.ChannelName,
      Admin: "peter",
    });

    setAddChannelWindow(false);
  };

  return (
    <div style={ChannelStyle}>
      <Form onSubmit={onSubmit}>
        <h3>Channel Name</h3>
        <Text
          name="ChannelName"
          Title="ChannelName"
          placeholder="Name Your Channel"
        />
        <Button name="button" />
      </Form>
      <p onClick={() => setAddChannelWindow(false)}>close</p>
    </div>
  );
};

export default AddNewChannnel;
