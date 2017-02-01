import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components são como tags html com conteúdo. É um pedaço de uma DOM com conteúdo e classe de estilo.
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bem-vindo ao React do Ismael</h2>
          <h3>Estou dentro do component App</h3>
          &nbsp;
          <hr/>

        </div>

        <p className="App-intro">

         Para iniciar, edite <code>src/App.js</code>, depois salve para recarregar.
        </p>
      </div>
    );
  }
}

//O export torna o component acessível para ser importado pela index.js.
export default App;