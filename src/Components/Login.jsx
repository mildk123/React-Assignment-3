import React, { Component } from "react";
import swal from "sweetalert";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Dashboard";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      orignalUsername: "jokerz123",
      orignalPassword: "123456",
      isLoggedIn: false      
    };
    // this.cancel = this.cancel.bind(this);
    // console.log(this.state.isLoggedIn);
  }

  render() {
    return this.renderDash();
    // !this.state.isLoggedIn ? : this.renderLogin() 
  }

 

 




  renderLogin() {
    return (
      <div className="container">
        <h3 className="display-4 mb-3 text-center">Login</h3>

        <div className="form-group">
          <input
            value={this.state.username}
            type="text"
            className="form-control"
            name="username"
            placeholder="JhonDoe123"
            onChange={this.handleUsername}
          />
        </div>
        <div className="form-group">
          <input
            value={this.state.password}
            type="password"
            name="password"
            className="form-control"
            id="password1"
            placeholder="********"
            onChange={this.handlePassword}
          />
        </div>
        <button className="btn btn-primary" onClick={this.HandleLogin}>
          Login
        </button>
      </div>
    );
  }

  renderDash(){
    return <Dashboard />
    console.log("working")
  }

  handleUsername = username => {
    this.setState({
      username: username.target.value
    });
  };

  handlePassword = password => {
    this.setState({
      password: password.target.value
    });
  };

  HandleLogin = () => {
    if (
      this.state.username === this.state.orignalUsername &&
      this.state.password === this.state.orignalPassword
    ) {
      swal("Success", "Logged In", "success").then(val => {
        this.setState({
          isLoggedIn: true
        });
      });

      // return <Counter />;
    } else {
      swal("Error", "Try Again", "error");
    }
  };
}

export default Login;



// WEBPACK FOOTER //
// ./src/Components/Login.jsx