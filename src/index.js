import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import App from './App';
import './index.css';

//Este index.js é como o main.js. Nele deve ser importado tudo o que se quer que seja renderizado na view.
ReactDOM.render(
  <Nav 
  title="Test Props" 
  linkUrl="http://www.google.com.br"

  />,
  document.getElementById('nav')
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


ReactDOM.render(
  <h1>Hello, mundão véi!</h1>,
  document.getElementById('teste')
);