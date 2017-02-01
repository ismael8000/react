import React, { Component } from 'react';
import logo from './logo.svg';
import './Nav.css';


class Nav extends Component {
  render() {
    return (
       <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a href={this.props.linkUrl} className="navbar-brand">{this.props.title}</a>

                    </div>

                </div>
                {this.props.texto}
            </nav>
    );
  }
}

export default Nav;