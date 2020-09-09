import React from "react";

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
    padding: "4px 8px",
    display: "inline-block",
    color: theme.palette.text.secondary,
  },
}));

const Messages = ({ Photo, userName, Message, MessageStyle }) => {
  const classes = useStyles();
  return (
    <Grid
      style={{
        padding: "4px",
        display: "flex",
        justifyContent: MessageStyle.flex,
      }}
      item
      xs={12}
    >
      <div>
        <p style={{ fontSize: "10px", margin: "4px" }}>{userName}</p>
        <Paper
          elevation={0}
          className={classes.paper}
          style={{
            background: MessageStyle.Background,
            color: MessageStyle.Color,
          }}
        >
          <p style={{ margin: "4px 0px" }}>{Message}</p>
        </Paper>
      </div>
    </Grid>
  );
};

const DisplayMessages = ({ Data, userName }) => {
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
                userName={User}
              />
            ) : (
              <Messages
                Message={Message}
                Photo={Photo}
                userName={User}
                MessageStyle={{ flex: "flex-start", Background: "#f1f0f0" }}
              />
            )
          )
        : null}
    </div>
  );
};

export default DisplayMessages;
