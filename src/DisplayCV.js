import React, { Component } from "react";
import './styles/displayCV.css';

class DisplayCV extends Component {
  constructor() {
    super();
    this.state = {
      window: [],
      skill: [
        'Skill #1: ',
        'Skill #2: ',
      ]
    }

    this.editor = this.editor.bind(this);
  }

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

  createWindow = (e, window) => {
    console.log(e, window);
    let state = this.state;
    state.window = <div>test</div>
    this.setState(state);
    console.log(state)
    // return (window)
  }

  addSkills = (num) => {
    function skillDiv(num, obj) {
      let push = [];
      for (let i = 0; i < num; i += 1) {
        let div = (
          <div key={`skill-${i}`} className='section'>
            <span className="skill-bold" onClick={(e) => obj.createWindow(e, window)}>{obj.state.skill[i]}</span>
            <span>Skill description</span>
            {obj.window}
          </div>
        );
        push = [...push, div];
      }
      return push;
    }
    let returnValue = <div>{skillDiv(num, this)}</div>
    if (num > 0) {
      return (
        <div>
          <h1>Skills</h1>
          {returnValue}
        </div>
      )
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

  editor(e) {
    console.log(e.target.innerText);
    const value = e.target.innerText;
    // e.target.remove();
    return (
      <input type={'text'} value={value} />
    )
  }

  render() {
    const { 
      name, 
      email, 
      phoneNumber, 
      github, 
      linkedin,
      projects,
      skills,
      experience,
      education,
    } = this.props;
    return (
      <div className="display-cv">
        <div className="full-name">{this.splitName(name)}</div>
        <div className="contact-info">
          <div>{this.splitPhone(phoneNumber)}</div>

          &nbsp;
          {this.splitter(email, phoneNumber)}
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
        {this.addSkills(skills)}
        {this.addProjects(projects)}
        {this.addExperience(experience)}
        {this.addEducation(education)}
      </div>
    );
  }

}


export default DisplayCV;
