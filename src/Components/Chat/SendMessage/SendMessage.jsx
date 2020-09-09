import React from "react";

import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

import { firebase } from "../../../Global/Firebase/config";
import Style from "./SendMessage.module.scss";

const SendMessage = ({ user, ChannelSelection }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    var today = new Date();
    var time =
      today.getHours() +
      ":" +
      (today.getMinutes() < 10 ? "0" : "") +
      today.getMinutes() +
      ":" +
      (today.getSeconds() < 10 ? "0" : "") +
      today.getSeconds();
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
      User: localStorage.getItem("Username"),
      Message: data.Message,
      Date: date + "-" + time,
    });
  };
  return (
    <div className={Style.SendMessage}>
      <form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="Message"
          autoComplete={false}
          placeholder="Message"
          name="Message"
          inputRef={register}
        />
        <Button type="submit" variant="text" color="primary">
          Send
        </Button>
      </form>
    </div>
  );
};

export default SendMessage;
