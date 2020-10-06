import React from "react";

import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

import { firebase } from "../Global/Firebase/config";
import styled from "styled-components";

import { MessageContext } from "./MessageProvider";
import { useContext } from "react";

const SendMessageContainer = styled.div`
  width: 60%;
  position: fixed;
  bottom: 10px;
  background: white;

  form {
    display: grid;
    grid-template-columns: 70% 20%;
    gap: 20px;
  }
`;

const SendMessage = ({ ChannelSelection }) => {
  const [GetData] = useContext(MessageContext);
  console.log("SendMessage -> GetData", GetData);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const ref = firebase
      .firestore()
      .collection("Channels")
      .doc(ChannelSelection);

    ref.update({
      channelLength: GetData.Data.length,
    });

    ref
      .collection("Messages")
      .doc()
      .set({
        User: localStorage.getItem("Username"),
        Message: data.Message,
        Date: new Date(),
      });
    e.target.reset();
  };
  return (
    <SendMessageContainer>
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
    </SendMessageContainer>
  );
};

export default SendMessage;
