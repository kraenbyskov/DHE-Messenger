import React from "react";
import { firebase } from "../../Global/Firebase/config";
import { Button, TextField, ListItem } from "@material-ui/core";
import { useForm } from "react-hook-form";

const AddNewChannnel = ({ setAddChannelWindow }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("onSubmit -> data", data);
    const ref = firebase.firestore().collection("Channels");

    ref.doc(data.ChannelName).set({
      ChannelName: data.ChannelName,
      Admin: "peter",
    });
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
