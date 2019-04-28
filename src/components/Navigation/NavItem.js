import React, { Component } from 'react'


export default class NavItem extends Component {
  render() {
    return (
        <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#services">{this.props.text}</a>
    </li>
    )
  }
}
