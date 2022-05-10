import React, { Component } from "react";
import './styles/displayCV.css';

class DisplayCV extends Component {
  splitName(str = '') {
    let fullName = str.split(' ');
    if (str && fullName[1]) {
      return `${fullName[0]} ${fullName[1]}`;
    }
  }

  splitPhone(str = '') {
    if(str.length === 10) {
      return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`
    }
  }
  render() {
    return (
      <div className="display-cv">
        <div className="full-name">{this.splitName(this.props.name)}</div>

        <div className="contact-info">
          <div>{this.splitPhone(this.props.phoneNumber)}</div>
          &nbsp; | &nbsp;
          <div>{this.props.email}</div>
        </div>
      </div>
    );
  }
}

export default DisplayCV;
