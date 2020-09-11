import React from "react";

import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

import { firebase } from "../../../Global/Firebase/config";
import Style from "./SendMessage.module.scss";

const SendMessage = ({ user, ChannelSelection }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const ref = firebase
      .firestore()
      .collection("Channels")
      .doc(ChannelSelection)
      .collection("Messages");

    ref.doc().set({
      User: localStorage.getItem("Username"),
      Message: data.Message,
      Date: new Date(),
    });
    e.target.reset();
  };
  return (
    <div className={Style.SendMessage}>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="Message"
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
