import React from "react";

//styles
import { Paper, TextField, Button } from "@material-ui/core";

const LoginBox = props => {
  return (
    <Paper className="login2">
      <img
        src="https://i.imgur.com/24NDDNh.jpg"
        alt="logo"
        className="login-img"
      />
      <form onSubmit={props.login} className="login-form">
        <TextField
          id="outlined-name"
          placeholder="Username i.e Allison"
          onChange={props.handle}
          name="username"
          margin="normal"
          variant="outlined"
          value={props.username}
        />
        <TextField
          id="outlined-name"
          placeholder="Password i.e. Allison"
          onChange={props.handle}
          name="password"
          margin="normal"
          variant="outlined"
          value={props.password}
        />
        <Button
          className="button"
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default LoginBox;
