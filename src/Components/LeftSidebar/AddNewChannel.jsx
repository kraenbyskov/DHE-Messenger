import React from "react";
import { firebase } from "../../Global/Firebase/config";
import { Button, TextField, ListItem } from "@material-ui/core";
import { useForm } from "react-hook-form";

const AddNewChannnel = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const ref = firebase.firestore().collection("Channels");
    if (data.ChannelName) {
      ref.doc(data.ChannelName).set({
        ChannelName: data.ChannelName,
        Admin: localStorage.getItem("Username"),
      });

      ref
        .doc(data.ChannelName)
        .collection("Messages")
        .doc()
        .set({
          NewChannelMessage: `Welcome to ${data.ChannelName} write the first message`,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });

      e.target.reset();
    } else {
      console.log("no data");
    }
  };

  return (
    <ListItem>
      <form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <TextField
          inputRef={register}
          required
          id="Channel"
          name="ChannelName"
          label="Add new Channel"
        />
        <Button
          style={{ marginTop: "10px" }}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Add Channel
        </Button>
      </form>
    </ListItem>
  );
};

export default AddNewChannnel;
