import React, { Component } from 'react';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      proj0: {
        title: 'To-Do-List',
        titleEdit: false,

        point0: 'A CRUD web app with functionalities to filter tasks based on tags and highlight overdue tasks',
        pointEdit0: false,

        point1: 'Developed using tools including Webpack, Lint, and Prettier node modules',
        pointEdit1: false,

        point2: 'Completed after 5 months of studying JavaScript from The Odin Project, an open-source online curriculum',
        pointEdit2: false,
      },

      proj1: {
        title: 'Math Flick',
        titleEdit: false,
  
        point0: 'A browser-based educational game built with vanilla Javascript, HTML, and CSS',
        pointEdit0: false,

        point1: 'Collaborated with a team of 3 and utilized Git and GitHub for discussion and conflicts resolution',
        pointEdit1: false,

        point2: 'Placed 2nd overall out of 37 games submitted for The Odin Project\'s first Game Jam',
        pointEdit2: false,
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

  insertProj = (obj) => {
    // convert obj to arr to filter for edit values with true
    const stateArr = Object.entries(this.state)
    
    // search this.state for anything marked for editing. Used below.
    const edit = [];
    for (let i = 0; i < stateArr.length; i += 1) {
      const arr = Object.entries(this.state[`proj${i}`]);
      arr.filter((e) => {
        const [key, value] = e;
        if (value === true) {
          return edit.push(`proj${i}`, key); 
        } else {
          return false;
        }
      });
    }

    let arr = [];
    let proj;
    for (let i = 0; i < obj.projNum; i += 1) {
      proj = (
        <div key={`proj${i}`} className={'section'}>
          <span 
            className='bold capitalize'
            onClick={() => {this.toggleEdit(`proj${i}`, 'titleEdit')}}
          >
            {this.insertEdit(
              `proj${i}`, 
              'title', 
              edit, 
              'titleEdit', 
              'input')}
          </span>
          <ul>
            <li
              key={`proj${i}li${i}`}
              onClick={() => {this.toggleEdit(`proj${i}`, 'pointEdit0')}}
            >
              {this.insertEdit(
                `proj${i}`, 
                'point0', 
                edit, 
                'pointEdit0', 
                'textarea')}
            </li>
            <li
              key={`proj${i}li${i + 1}`}
              onClick={() => {this.toggleEdit(`proj${i}`, 'pointEdit1')}}
            >
              {this.insertEdit(
                `proj${i}`, 
                'point1', 
                edit, 
                'pointEdit1', 
                'textarea')}
            </li>
            <li
              key={`proj${i}li${i + 2}`}
              onClick={() => {this.toggleEdit(`proj${i}`, 'pointEdit2')}}
            >
              {this.insertEdit(
                `proj${i}`, 
                'point2', 
                edit, 
                'pointEdit2', 
                'textarea')}
            </li>
          </ul>
        </div>
      );
      arr = [...arr, proj]
    }
    return arr;
  }

  render() {
    const { projNum } =  this.props;
    if (projNum > 0) {
      return (
        <div>
          <h1>Projects</h1>
          <this.insertProj projNum={projNum} />
        </div>
      )
    }
  }
}

export default Projects;
