import React, { useState } from "react";
import {
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  IconButton,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import { Redirect } from "react-router-dom";

import GetUsers from "./GetUsers";
import CheckUsers from "./CheckUsers";

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

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const [Error, SetError] = useState();

  const onSubmit = async (data) => {
    const GetAllUsers = await GetUsers("Users");
    const UserValidation = await CheckUsers(GetAllUsers, data);
    SetError(UserValidation);
  };

  const classes = useStyles();
  return (
    <>
      {!localStorage.getItem("Username") ? (
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
                onClick={() => {
                  SetError(false);
                }}
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
                onClick={() => {
                  SetError(false);
                }}
              />
              {Error ? (
                <Alert
                  style={{ padding: "0px 16px", marginTop: "10px" }}
                  variant="filled"
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        SetError(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  {Error}
                </Alert>
              ) : null}

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
                <Grid item>
                  <RouterLink to={`/signUp`}>
                    <Link variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </RouterLink>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
