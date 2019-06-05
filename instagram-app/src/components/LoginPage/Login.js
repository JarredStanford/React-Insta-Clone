import React from "react";

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
  };

  render() {
    return (
      <div>
        <h1>Welcome to LambdaGram</h1>
        <form onSubmit={this.loginHere}>
          <input
            placeholder="Username i.e Allison"
            onChange={this.handleChanges}
            name="username"
          />
          <input
            placeholder="Password i.e. Allison"
            onChange={this.handleChanges}
            name="password"
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
export default Login;
