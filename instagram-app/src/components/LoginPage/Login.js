import React from "react";

//components
import LoginBox from "./LoginBox";

//styles
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  loginHere = e => {
    e.preventDefault();
    window.location.reload();
    localStorage.setItem("username", this.state.username);
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.username);
  };

  render() {
    return (
      <div className="login">
        <LoginBox
          login={this.loginHere}
          handle={this.handleChanges}
          username={this.state.username}
          password={this.state.password}
        />
      </div>
    );
  }
}
export default Login;
