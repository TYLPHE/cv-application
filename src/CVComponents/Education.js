import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edu0: {
        degree: 'The Odin Project Full Stack JavaScript Curriculum',
        degreeEdit: false,

        date: 'Jul 2022',
        dateEdit: false,

        location: 'Online',
        locationEdit: false,
      },

      edu1: {
        degree: 'MBA Human Resource Management',
        degreeEdit: false,

        date: 'Aug 2015',
        dateEdit: false,

        location: 'University of Aberdeen',
        locationEdit: false,
      },

      edu2: {
        degree: 'BS Management',
        degreeEdit: false,

        date: 'May 2011',
        dateEdit: false,

        location: 'University of Utah',
        locationEdit: false,
      },
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

  insertEdu = (obj) => {
    // convert obj to arr to filter for edit values with true
    const stateArr = Object.entries(this.state)

    // search this.state for anything marked for editing. Used below.
    const edit = [];
    for (let i = 0; i < stateArr.length; i += 1) {
      const arr = Object.entries(this.state[`edu${i}`]);
      arr.filter((e) => {
        const [key, value] = e;
        if (value === true) {
          return edit.push(`edu${i}`, key); 
        } else {
          return false;
        }
      });
    }
  
    let arr = [];
    let edu;
    for (let i = 0; i < obj.educationNum; i += 1) {
      edu = (
        <div key={`edu${i}`} className={'section'}>
          <div className='job-date space-between'>
            <span className='bold'>{this.state[`edu${i}`].degree}</span>
            <span>{this.state[`edu${i}`].date}</span>
          </div>
          <div>{this.state[`edu${i}`].location}</div>
        </div>
      );
      arr = [...arr, edu];
    }
    return arr;
  }

  render() {
    const { educationNum } = this.props;
    if (educationNum > 0) {
      return (
        <div>
          <h1>Education</h1>
          <this.insertEdu educationNum={educationNum} /> 
        </div>
      );
    }
  }
}

export default Education;
