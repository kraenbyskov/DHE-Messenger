import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  username: {
    fontSize: "10px",
    margin: "4px",
  },
  message: {
    margin: "4px 0px",
    textAlign: "left",
  },
  grid: {
    padding: "4px",
    display: "flex",
    justifyContent: "flex-start",
  },

  paper: {
    width: "auto",
    padding: "4px 8px",
    display: "inline-block",
    color: theme.palette.text.secondary,
    background: "#f1f0f0",
  },
}));

const Messages = ({ userName, Message }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid} item xs={12}>
      <div>
        <Typography className={classes.username} component="p" variant="body1">
          {userName}
        </Typography>
        <Paper elevation={0} className={classes.paper}>
          <Typography className={classes.message} component="p" variant="body1">
            {Message}
          </Typography>
        </Paper>
      </div>
    </Grid>
  );
};

export default Messages;
