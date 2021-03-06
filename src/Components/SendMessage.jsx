import React from "react";

import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

import { firebase } from "../Global/Firebase/config";
import styled from "styled-components";

import { useContext } from "react";
import { MessageContext } from "../Global/MessageProvider";

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
  const { GetData } = useContext(MessageContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const ref = firebase
      .firestore()
      .collection("Channels")
      .doc(ChannelSelection);

    ref.update({
      channelLength: GetData.length,
    });

    ref
      .collection("Messages")
      .doc()
      .set({
        User: localStorage.getItem("Username"),
        Message: data.Message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
