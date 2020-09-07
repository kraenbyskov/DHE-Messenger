import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";

import { firebase } from "../../Global/Firebase/config";
import "firebase/auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const GetUsers = async () => {
  return new Promise((resolve, reject) => {
    const ref = firebase.firestore().collection("Users");
    const onCollection = (querySnapshot) => {
      const Data = [];
      querySnapshot.forEach((doc) => {
        const { Email, Password } = doc.data();
        Data.push({
          id: doc.id,
          Email,
          Password,
        });
        resolve({ Data });
      });
    };

    ref.onSnapshot(onCollection);
  });
};

const CheckUsers = (GetAllUsers, data) => {
  return new Promise((resolve, reject) => {
    GetAllUsers.Data.forEach((User) => {
      if (User.Email === data.email) {
        if (User.Password === data.password) {
          console.log("the Password is the same");
        } else {
          console.log("Wrong password");
        }
      } else {
        console.log("there is no users with that email");
      }
    });
    resolve({ GetAllUsers, data });
  });
};

export default function SignIn() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const GetAllUsers = await GetUsers();
    const UserValidation = await CheckUsers(GetAllUsers, data);
    console.log("onSubmit -> GetAllUsers", UserValidation);
  };

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            inputRef={register}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            inputRef={register}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
