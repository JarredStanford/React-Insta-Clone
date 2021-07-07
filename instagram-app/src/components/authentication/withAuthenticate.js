import React from "react";

const withAuthenticate = Component => Component2 =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("username")) {
        this.setState({ loggedIn: false });
      } else this.setState({ loggedIn: true });
    }
    render() {
      if (this.state.loggedIn === true) {
        return <Component />;
      } else return <Component2 />;
    }
  };

export default withAuthenticate;
