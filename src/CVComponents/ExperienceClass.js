import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exp0: {
        title: 'Instructional Designer',
        titleEdit: false,

        date: 'Feb 2018 - Dec 2021',
        dateEdit: false,
    
        location: 'Salt Lake City, UT',
        locationEdit: false,

        point0: 'Collaborated with Epic (hospital charting software) subject matter experts to implement new workflows of over 1,400 physicians and 5,000 health care professionals',
        pointEdit0: false,

        point1: 'Planned, designed, developed, and conducted training and educational programs (in-person and online) for an external hospital',
        pointEdit1: false,

        point2: 'Delivered instruction to individuals and groups in a variety of formats, including printed and pre-recorded/live video media.',
        pointEdit2: false,
      },

      exp1: {
        title: 'Training Specialist',
        titleEdit: false,

        date: 'Dec 2015 - Feb 2018',
        dateEdit: false,

        location: 'Salt Lake City, UT',
        locationEdit: false, 

        point0: 'Provided technical support to providers, nurses, analysts, informaticists, and clinic managers in areas including error diagnosis, proper charting, and creating various tip sheets',
        point0Edit: false,

        point1: 'Trained 21 different classes of 1 - 20 hospital employees throughout various Epic applications on a weekly basis',
        point1Edit: false,

        point2: 'Maintained records of training activities using an online learning management system',
        point2Edit: false,
      },

      exp2: {
        title: '<Position>',
        titleEdit: false,

        date: '<Date>',
        dateEdit: false,

        location: '<Location>',
        locationEdit: false, 

        point0: '<Point 1>',
        point0Edit: false,

        point1: '<Point 2>',
        point1Edit: false,

        point2: '<Point 3>',
        point2Edit: false,
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

  // populates state on screen
  insertExp = (obj) => {
    // convert obj to arr to filter for edit values with true
    const stateArr = Object.entries(this.state)
    
    // search this.state for anything marked for editing. Used below.
    const edit = [];
    for (let i = 0; i < stateArr.length; i += 1) {
      const arr = Object.entries(this.state[`exp${i}`]);
      arr.filter((e) => {
        const [key, value] = e;
        if (value === true) {
          return edit.push(`exp${i}`, key); 
        } else {
          return false;
        }
      });
    }

    let arr = [];
    let exp;
    for (let i = 0; i < obj.experienceNum; i += 1) {
      exp = (
        <div key={`exp${i}`} className={'section'}>
          {/* job title and date section */}
          <div>
            <div className='space-between'>
              {/* job title */}
              <span 
                className='bold capitalize' 
                onClick={() => this.toggleEdit(`exp${i}`, 'titleEdit')}
              >
                {this.insertEdit(
                  `exp${i}`, 
                  'title', 
                  edit, 
                  'titleEdit', 
                  'input')}
              </span>
              
              {/* date */}
              <span
                className='capitalize'
                onClick={() => this.toggleEdit(`exp${i}`, 'dateEdit')}
              >
                {this.insertEdit(
                  `exp${i}`, 
                  'date', 
                  edit, 
                  'dateEdit', 
                  'input')}
              </span>
            </div>

            {/* location */}
            <span
              className='capitalize'
              onClick={() => this.toggleEdit(`exp${i}`, 'locationEdit')}
            >
              {this.insertEdit(
                `exp${i}`, 
                'location', 
                edit, 
                'locationEdit', 
                'input')}
            </span>
          </div>

          {/* experience bullet points */}
          <ul>
            <li 
              key={`exp${i}li${i}`}
              onClick={() => this.toggleEdit(`exp${i}`, 'point0Edit')}
            >
              {this.insertEdit(
                `exp${i}`, 
                'point0', 
                edit, 
                'point0Edit', 
                'textarea')}
            </li>
            <li
              key={`exp${i}li${i + 1}`}
              onClick={() => this.toggleEdit(`exp${i}`, 'point1Edit')}
            >
              {this.insertEdit(
                `exp${i}`, 
                'point1', 
                edit, 
                'point1Edit', 
                'textarea')}
            </li>
            <li
              key={`exp${i}li${i + 2}`}
              onClick={() => this.toggleEdit(`exp${i}`, 'point2Edit')}
            >
              {this.insertEdit(
                `exp${i}`, 
                'point2', 
                edit, 
                'point2Edit', 
                'textarea')}
            </li>
          </ul>
        </div>
      );
      arr = [...arr, exp];
    }
    return arr;
  }

  render() {
    const { experienceNum } = this.props;
    if (experienceNum > 0) {
      return (
        <div>
          <h1>Relevant Experience</h1>
          <this.insertExp experienceNum={experienceNum} /> 
        </div>
      );
    }
  }
}

export default Experience;
