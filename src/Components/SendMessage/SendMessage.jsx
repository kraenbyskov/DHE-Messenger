import React from "react";
import { Form, Textarea, Button } from "../InputFields/Input";
import { firebase } from "../../Global/Firebase/config";

const SendMessage = ({ userName, ChannelSelection }) => {
  const onSubmit = (data) => {
    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    const ref = firebase
      .firestore()
      .collection("Channels")
      .doc(ChannelSelection)
      .collection("Messages");

    ref.doc().set({
      User: userName,
      Message: data.Message,
      Date: date + " " + time,
    });
  };
  return (
    <Form onSubmit={onSubmit}>
      <Textarea name="Message" placeholder="Message" />
      <Button name="button" />
    </Form>
  );
};

export default SendMessage;
