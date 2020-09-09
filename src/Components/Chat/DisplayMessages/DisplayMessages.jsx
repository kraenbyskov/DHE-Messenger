import React from "react";
import Style from "./DisplayMessages.module.scss";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "50px",
  },
  paper: {
    width: "auto",
    padding: "8px 16px",
    display: "inline-block",
    color: theme.palette.text.secondary,
  },
}));

const Messages = ({ Photo, Message, MessageStyle }) => {
  const classes = useStyles();
  return (
    <Grid
      style={{
        padding: "8px",
        display: "flex",
        justifyContent: MessageStyle.flex,
      }}
      item
      xs={12}
    >
      <Paper
        elevation={0}
        className={classes.paper}
        style={{
          background: MessageStyle.Background,
          color: MessageStyle.Color,
        }}
      >
        <span
          className={Style.MessagePhoto}
          style={{ backgroundImage: `url("${Photo}")` }}
        />
        {Message}
      </Paper>
    </Grid>
  );
};

const DisplayMessages = ({ Data, userName }) => {
  console.log("DisplayMessages -> Data", Data);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {Data
        ? Data.Data.map(({ User, Message, Photo }) =>
            userName === User ? (
              <Messages
                MessageStyle={{
                  flex: "flex-end",
                  Background: "#3f51b5 ",
                  Color: "white",
                }}
                Message={Message}
                Photo={Photo}
              />
            ) : (
              <Messages
                Message={Message}
                Photo={Photo}
                MessageStyle={{ flex: "flex-start", Background: "#f1f0f0" }}
              />
            )
          )
        : null}
    </div>
  );
};

export default DisplayMessages;
