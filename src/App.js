import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bem-vindo ao React do Ismael</h2>
        </div>
        <p className="App-intro">
         Para iniciar, edite <code>src/App.js</code>, depois salve para recarregar.
        </p>
      </div>
    );
  }
}


export default App;