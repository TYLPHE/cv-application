import React, { Component } from "react";
import Skills from "./CVComponents/Skills";
import Projects from "./CVComponents/Projects";
import Experience from "./CVComponents/Experience";
import Education from "./CVComponents/Education";
import './styles/displayCV.css';

class DisplayCV extends Component {
  splitName(str = '') {
    let fullName = str.split(' ');
    if (str && fullName[1]) {
      return `${fullName[0]} ${fullName[1]}`;
    }
  }

  // formats phone number to readable format
  splitPhone(str = '') {
    if(str.length === 10) {
      return (
        <div>
          {`(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`}
        </div>
      );
    }
  }

  // adds '|' between contents under the name
  splitter(info1, info2){
    if (info1 && info2) {
      return ` | `;
    }    
  }
  
  addHyperlink(hyperlink, str) {
    if(hyperlink && str) {
      return (
        <div>
          <a href={hyperlink} target='_blank' rel="noreferrer">{str}</a>
        </div>
      );
    }
  }

  render() {
    const { 
      name, 
      email, 
      phone, 
      github, 
      linkedin,
      projectNum,
      skillNum,
      experienceNum,
      educationNum,
    } = this.props;

    return (
      <div className="display-cv">
        <div className="full-name capitalize">{this.splitName(name)}</div>
        <div className="contact-info">
          {this.splitPhone(phone)}

          &nbsp;
          {this.splitter(email, phone)}
          &nbsp;

          {email}

          &nbsp;
          {this.splitter(email, github)}
          &nbsp;

          {this.addHyperlink(github, 'GitHub')}

          &nbsp;
          {this.splitter(github, linkedin)}
          &nbsp;

          {this.addHyperlink(linkedin, 'LinkedIn')}
        </div>
        
        <Skills skillNum={skillNum} />
        <Projects projNum={projectNum} />
        <Experience experienceNum={experienceNum} />
        <Education educationNum={educationNum} />
      </div>
    );
  }
}

export default DisplayCV;
