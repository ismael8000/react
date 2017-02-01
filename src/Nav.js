import React, { Component } from 'react';
import logo from './logo.svg';
import './Nav.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';


class Nav extends Component {
  render() {
    return (
       <nav className="navbar navbar-default">
                <div className="container">

                    <div className="navbar-header">
                        <a href={this.props.linkUrl} className="navbar-brand">{this.props.title}</a>

                    </div>
                    
                </div>
                
            </nav>
    );
  }
}

export default Nav;