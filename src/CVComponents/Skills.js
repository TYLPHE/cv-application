import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill0: 'Programming Languages',
      editSkill0: false,

      desc0: 'React, JavaScript, HTML, CSS',
      editDesc0: false,

      skill1: 'Technologies',
      editSkill1: false,
      
      desc1: 'Git, GitHub, Node.js, Linux/Unix, JIRA',
      editDesc1: false,
    }
  }
  
  // update states
  changeSkill = (e, id) => this.setState({...this.state, [`skill${id}`]: e.target.value});
  changeDesc = (e, id) => this.setState({...this.state, [`desc${id}`]: e.target.value});


  // switches between editing <input> and <span>
  toggleEditSkill = (id) => this.setState({...this.state, [`editSkill${id}`]: !this.state[`editSkill${id}`]});
  toggleEditDesc = (id) => this.setState({...this.state, [`editDesc${id}`]: !this.state[`editDesc${id}`]});


  // user can press 'enter' key to switch away from <input>
  editKey = (e, id) => {if (e.key === 'Enter') this.toggleEditSkill(id)};
  descKey = (e, id) => {if (e.key === 'Enter') this.toggleEditDesc(id)};

  insertSkill = (obj) => {
    let arr = [];
    let skill;
    for (let i = 0; i < obj.skillNum; i += 1) {
      if (this.state[`editSkill${i}`]) {
        skill = (
          <div className="section" key={`editInput${i}`}>
            <input 
              className="cv-input"
              type={'text'}
              defaultValue={this.state[`skill${i}`]}
              onChange={(e) => this.changeSkill(e, i)}
              onBlur={() => this.toggleEditSkill(i)}
              onKeyDown={(e) => this.editKey(e, i)}
              style={{width: `${this.state[`skill${i}`].length}ch`}}
              onFocus={(e) => e.target.select()}
              autoFocus
            />
            <span key={`spandesc${i}`}>{ this.state[`desc${i}`] }</span>
          </div>
        );
      } else if (this.state[`editDesc${i}`]) {
        skill = (
          <div className="section" key={`editDesc${i}`}>
            <span className="bold">{ `${this.state[`skill${i}`]}: `}</span>
            <input 
              className="cv-input"
              type={'text'}
              defaultValue={this.state[`desc${i}`]}
              onChange={(e) => this.changeDesc(e, i)}
              onBlur={() => this.toggleEditDesc(i)}
              onKeyDown={(e) => this.descKey(e, i)}
              onFocus={(e) => e.target.select()}
              autoFocus
            />
          </div>
        );
      } else {
        skill = (
          <div className="section" key={`skillDiv${i}`}>
            <span 
              className="bold"
              onClick={ () => this.toggleEditSkill(i) }
            >
              { `${this.state[`skill${i}`]}: ` }
            </span>

            <span onClick={ () => this.toggleEditDesc(i) }>
              { this.state[`desc${i}`] }
            </span>
          </div>
        )
      }
      arr = [...arr, skill]
    }

    return arr;
  }

  render() {
    const { skillNum } = this.props;

    if (skillNum > 0) {
      return (
        <div>
          <h1>Skills</h1>
          <this.insertSkill skillNum={skillNum} />
        </div>
      )
    }
  }
}

export default Skills;
