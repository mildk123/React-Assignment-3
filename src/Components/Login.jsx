import React, { Component } from "react";
import firebase from "firebase";
import App from "../App";

var config = {
  apiKey: "AIzaSyAosAXgYt-gniqc-LLgZLy-bWTI4lAnGqM",
  authDomain: "react-todoapp-124be.firebaseapp.com",
  databaseURL: "https://react-todoapp-124be.firebaseio.com",
  projectId: "react-todoapp-124be",
  storageBucket: "react-todoapp-124be.appspot.com",
  messagingSenderId: "555425814855"
};
firebase.initializeApp(config);

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();
    let userEmail = this.state.email;
    let userPassword = this.state.password;
    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(function(success) {
        console.log(success);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <h2 className="display-4 col-md-6 offset-5">Login</h2>
        <form method="POST">
          <div className="form-group col-md-6 offset-3">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-6 offset-3">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button
              onClick={this.handleLogin}
              className="btn btn-info col-2 offset-5 mt-3"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
