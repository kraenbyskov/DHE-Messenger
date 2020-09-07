import React from "react";
import { Form, Textarea, Button } from "../../InputFields/Input";
import { firebase } from "../../../Global/Firebase/config";
import Style from "./SendMessage.module.scss";

const SendMessage = ({ user, ChannelSelection }) => {
  console.log("SendMessage -> user", user);
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
      User: "hans",
      Message: data.Message,
      Date: date + " " + time,
    });
  };
  return (
    <div className={Style.SendMessage}>
      <Form onSubmit={onSubmit}>
        <Textarea name="Message" placeholder="Message" />
        <Button name="button" />
      </Form>
    </div>
  );
};

export default SendMessage;
