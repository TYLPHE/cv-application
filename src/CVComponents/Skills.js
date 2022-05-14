import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill0: 'Programming Languages',
      desc0: 'React, Javascript, HTML, CSS',

      skill1: 'Technologies',
      desc1: 'Git, GitHub, Node.js, Linux/Unix, JIRA',
    }
  }

  render() {
    const { skillNum, handleSkillCallback } = this.props;
    console.log(this.props);
    let arr = [];
    for (let i = 0; i < skillNum; i += 1) {
      let div = (
        <div key={`skill-${i}`} className={'section'} >
          <span className="skill-bold" onClick={() => handleSkillCallback('data back from child')}>{ this.state[`skill${i}`] }: </span>
          <span>{ this.state[`desc${i}`] }</span>
        </div>
      );
      arr = [...arr, div];
    }

    if (skillNum > 0) {
      return (
        <div>
          <h1>Skills</h1>
          { arr }
        </div>
      )
    }
  }
}

export default Skills;
