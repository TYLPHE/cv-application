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
    const { skillNum, insertEdit, handleSkillCallback } = this.props;
    // console.log(this.props);
    let arr = [];
    for (let i = 0; i < skillNum; i += 1) {
      let title = (<span className="skill-bold" onClick={ () => insertEdit(title, true) }>{ this.state[`skill${i}`] }: </span>);
      let div = (
        <div key={`skill-${i}`} className={'section'}>
          {/* <span className="skill-bold" onClick={ () => insertEdit() }>{ this.state[`skill${i}`] }: </span> */}
          {title}
          <span onClick={ () => handleSkillCallback("testing") }>{ this.state[`desc${i}`] }</span>
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
