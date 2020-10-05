import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { firebase } from "../Global/Firebase/config";

const useStyles = makeStyles((theme) => ({
  username: {
    fontSize: "10px",
    margin: "4px",
  },
  message: {
    margin: "4px 0px",
    textAlign: "right",
  },
  grid: {
    padding: "4px",
    display: "flex",
    justifyContent: "flex-end",
  },
  paper: {
    width: "auto",
    padding: "4px 8px",
    display: "inline-block",
    background: "#3f51b5",
    color: "white",
  },
}));

const MyMessages = ({ userName, Message, id, Channel }) => {
  const [ShowDeleteButton, setShowDeleteButton] = useState(false);
  const ref = firebase
    .firestore()
    .collection("Channels")
    .doc(Channel)
    .collection("Messages")
    .doc(id);

  const DeleteMessage = () => {
    ref.delete();
    console.log("error");
  };

  const classes = useStyles();
  return (
    <Grid className={classes.grid} item xs={12}>
      <div>
        <Typography className={classes.username} component="p" variant="body1">
          {userName}
        </Typography>
        <Paper
          onClick={() => setShowDeleteButton(ShowDeleteButton ? false : true)}
          elevation={0}
          className={classes.paper}
        >
          <Typography className={classes.message} component="p" variant="body1">
            {Message}
          </Typography>
        </Paper>
        {ShowDeleteButton ? (
          <IconButton onClick={() => DeleteMessage()} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        ) : null}
      </div>
    </Grid>
  );
};

export default MyMessages;
