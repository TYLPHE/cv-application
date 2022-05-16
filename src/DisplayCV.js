import React, { Component } from "react";
import './styles/displayCV.css';
import Skills from "./CVComponents/Skills";

class DisplayCV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      editor: [],
    }
  }

  splitName(str = '') {
    let fullName = str.split(' ');
    if (str && fullName[1]) {
      return `${fullName[0]} ${fullName[1]}`;
    }
  }

  splitPhone(str = '') {
    if(str.length === 10) {
      return (
        <div>
          {`(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`}
        </div>
      );
    }
  }

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

  addProjects(num) {
    function projDiv(num) {
      let push = [];
      for(let i = 1; i <= num; i += 1) {
        let div = (
          <div key={`proj-${i}`} className={'section'}>
            <div>{`Project #${i}`}</div>
            <ul>
              <li>point 1</li>
              <li>point 2</li>
              <li>point 3</li>
            </ul>
          </div>
        )
        push = [...push, div];
      }
      return push;
    }

    let returnValue = <div>{projDiv(num)}</div>
    if (num > 0) {
      return (
        <div>
          <h1>Projects</h1>
          {returnValue}
        </div>
      )
    }
  }

  addExperience(num) {
    function expDiv(num) {
      let push = [];
      for (let i = 1; i <= num; i += 1) {
        let div = (
          <div key={`exp-${i}`} className={'section'}>
            <div>{`Job #${i}`}</div>
            <ul>
              <li>point 1</li>
              <li>point 2</li>
              <li>point 3</li>
            </ul>
          </div>
        );
        push = [...push, div];
      }
      return push;
    }

    let returnValue = <div>{expDiv(num)}</div>
    if (num > 0) {
      return (
        <div>
          <h1>Relevant Experience</h1>
          {returnValue}
        </div>
      );
    }
  }

  addEducation(num) {
    function eduDiv(num) {
      let push = [];
      for (let i = 1; i <= num; i += 1) {
        let div = (
          <div key={`edu-${i}`} className={'section'}>
            <div className="skill-bold">{`Education #${i}`}</div>
            <div>Location</div>
          </div>
        );
        push = [...push, div];
      }
      return push;
    }

    let returnValue = <div>{eduDiv(num)}</div>
    if (num > 0) {
      return (
        <div>
          <h1>Education</h1>
          {returnValue}
        </div>
      );
    }
  }

  handleSkillCallback = (childData) => {
    this.setState({ data: childData });
  }

  insertEdit = (e, boolean) => {
    // const child = e.props.children
    // console.log(e)
    return (
      <div>{ this.state.editor } test</div>
    );
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
        <this.insertEdit />
        {/* <div className="overlay">{ this.state.editor }</div> */}
        <div className="full-name">{this.splitName(name)}</div>
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
        
        <Skills 
          skillNum={skillNum} 
          handleSkillCallback={ this.handleSkillCallback } 
          insertEdit={ this.insertEdit }
        />

        {this.addProjects(projectNum)}
        {this.addExperience(experienceNum)}
        {this.addEducation(educationNum)}
      </div>
    );
  }

}

export default DisplayCV;
