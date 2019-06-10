import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

console.log(logo);
class App extends Component {
  render() {
    return (
      <div className="App">
        <img src="/blockchain.jpg" width="1300px" height="500px" />
        <div class="centered">
          <h3>Block~Chain Developer</h3>
          <h5>Total~Experience: 7 month</h5>
          <h4>Working at KrypC Technology</h4>
        </div>
        <div> <p>Details</p></div>
        <div class="border1">JAVA PROGRAMS</div>
        <div class="border1">SINGLE PAGE APPLICATION</div>
        <div class="border1">MOBILE APP</div>
        <div class="border1">SoT:- SOURCE OF TRANSACTION</div>
        <div class="border1">CLIENT NODE</div>
        <div class="border1">BATON PASSING</div>
        <div class="column">
          <h2>CONTACT INFORMATION </h2>
        </div>
      </div>

    );
  }
}

export default App;
