import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill0: {
        skill: 'Programming Languages',
        skillEdit: false,

        desc: 'React, JavaScript, HTML, CSS',
        descEdit: false,
      },
      skill1: {
        skill: 'Technologies',
        skillEdit: false,
        
        desc: 'Git, GitHub, Node.js, Linux/Unix, JIRA',
        descEdit: false,
      }
    }
  }
  
  // updates state to target value
  updateState = (e, objNum, key) => {
    const newState = Object.assign({}, this.state);
    newState[objNum][key] = e.target.value;
    this.setState(newState);
  }

  // toggles edit fields between true and false
  toggleEdit = (objNum, editName) => {
    const newState = Object.assign({}, this.state);
    newState[objNum][editName] = !newState[objNum][editName];
    this.setState(newState);
  }

  // inserts an input field when edit state is true
  insertEdit = (section, key, edit, editMatch, inputType) => {
    const [sectionMatch, editKey] = edit;
    if (sectionMatch === section && editKey === editMatch) {
      if (inputType === 'input') {
        return (
          <input
            className="cv-input"
            type={'text'}
            defaultValue={this.state[sectionMatch][key]}
            onChange={(e) => this.updateState(e, sectionMatch, key)}
            onBlur={() => this.toggleEdit(sectionMatch, editKey)}
            onKeyDown={(e) => this.enterHotkey(e, sectionMatch, editKey)}
            style={{width: `${this.state[sectionMatch][key].length}ch`}}
            onFocus={(e) => e.target.select()}
            autoFocus
          />
        )
      }
      else if (inputType === 'textarea') {
        return (
          <textarea
            className="cv-textarea"
            type={'text'}
            defaultValue={this.state[sectionMatch][key]}
            onChange={(e) => this.updateState(e, sectionMatch, key)}
            onBlur={() => this.toggleEdit(sectionMatch, editKey)}
            onKeyDown={(e) => this.enterHotkey(e, sectionMatch, editKey)}
            onFocus={(e) => e.target.select()}
            autoFocus
          />
        )
      }
    } else return this.state[section][key];
  }

  // user can press 'Enter' key to exit editing mode
  enterHotkey = (e, objNum, editName) => {
    if (e.key === 'Enter') {
      this.toggleEdit(objNum, editName)
    }
  }

  insertSkill = (obj) => {
    // convert obj to arr to filter for edit values with true
    const stateArr = Object.entries(this.state)

    // search this.state for anything marked for editing. Used below.
    const edit = [];
    for (let i = 0; i < stateArr.length; i += 1) {
      const arr = Object.entries(this.state[`skill${i}`]);
      arr.filter((e) => {
        const [key, value] = e;
        if (value === true) {
          return edit.push(`skill${i}`, key); 
        } else {
          return false;
        }
      });
    }

    let arr = [];
    let skill;
    for (let i = 0; i < obj.skillNum; i += 1) {
      skill = (
        <div key={`skill${i}`} className='section'>
          <span
            className="bold capitalize"
            onClick={() => this.toggleEdit(`skill${i}`, 'skillEdit')}
          >
            {this.insertEdit(
              `skill${i}`,
              `skill`,
              edit,
              `skillEdit`,
              'input'
            )}: &nbsp;
          </span>
          <span
            onClick={() => this.toggleEdit(`skill${i}`, 'descEdit')}
          >
            {this.insertEdit(
              `skill${i}`,
              'desc',
              edit,
              'descEdit',
              'input'
            )}
          </span>
        </div>
      );
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
