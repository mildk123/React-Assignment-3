import React, { Component } from 'react';
import Header from './Components/Header';
import AdToDo from './Components/AdToDo';
import ShowToDo from './Components/ShowToDo';
import Login from './Components/Login';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userLoggedIn : false
    }
  }

  renderLogin(){
    return <Login />
  }



  render() {
    return (
        this.state.userLoggedIn ? this.renderApp() : this.renderLogin()
    );
  }
}

export default App;

