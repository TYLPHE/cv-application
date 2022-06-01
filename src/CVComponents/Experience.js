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

        point0: 'Collaborated with Epic (hospital charting software) subjet matter experts to implement new workflows of over 1,400 physicians and 5,000 health care professionals',
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
        pointEdit0: false,

        point1: 'Trained 21 different classes of 1 - 20 hospital employees throughout various Epic applications on a weekly basis',
        pointEdit1: false,

        point2: 'Maintained records of training activities using an online learning management system',
        pointEdit2: false,
      },
    }
  }

  // toggles edit fields between true and false
  toggleEdit = (expName, editName) => {
    this.setState((state) => {
      return {
        [expName]: {
          [editName]: !state[expName][editName],
        }
      };
    });
  }

  insertExp = (obj) => {
    // convert obj to arr
    const stateArr = Object.entries(this.state)

    // search this.state for anything marked for editing
    let edit = [];
    for (let i = 0; i < stateArr.length; i += 1) {
      const arr = Object.entries(this.state[`exp${i}`]);
      arr.filter((e) => {
        const [key, value] = e;
        if (value === true) {
          return edit.push(key); 
        } else {
          return false;
        }
      });
    }
    console.log(edit)

    let arr = [];
    let exp;
    for (let i = 0; i < obj.experienceNum; i += 1) {
      if (edit.length > 0) {
        console.log('something to edit');
        exp = (
          <div key={`exp${i}`} className={'section'}>
            <div>
              <div className='job-date'>
                <span 
                  className='bold' 
                  onClick={ () => this.toggleEdit(`exp${i}`, 'titleEdit')}
                >
                  {this.state[`exp${i}`].title}
                </span>
                <span>{this.state[`exp${i}`].date}</span>
              </div>
              <div>{this.state[`exp${i}`].location}</div>
            </div>
            <ul>
              <li key={`exp${i}li${i}`}>{this.state[`exp${i}`].point0}</li>
              <li key={`exp${i}li${i + 1}`}>{this.state[`exp${i}`].point1}</li>
              <li key={`exp${i}li${i + 2}`}>{this.state[`exp${i}`].point2}</li>
            </ul>
          </div>
        );
      } else {
        exp = (
          <div key={`exp${i}`} className={'section'}>
            <div>
              <div className='job-date'>
                <span 
                  className='bold' 
                  onClick={ () => this.toggleEdit(`exp${i}`, 'titleEdit')}
                >
                  {this.state[`exp${i}`].title}
                </span>
                <span>{this.state[`exp${i}`].date}</span>
              </div>
              <div>{this.state[`exp${i}`].location}</div>
            </div>
            <ul>
              <li key={`exp${i}li${i}`}>{this.state[`exp${i}`].point0}</li>
              <li key={`exp${i}li${i + 1}`}>{this.state[`exp${i}`].point1}</li>
              <li key={`exp${i}li${i + 2}`}>{this.state[`exp${i}`].point2}</li>
            </ul>
          </div>
        );
      }
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
