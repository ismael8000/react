import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import App from './App';
import './index.css';


ReactDOM.render(
  <Nav 
  title="Test Props" 
  linkUrl="http://www.google.com.br"
  texto="olá mundão!!"
  />,
  document.getElementById('nav')
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
