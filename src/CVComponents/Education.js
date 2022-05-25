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

  insertEdu = (obj) => {
    let arr = [];
    let edu;
    for (let i = 0; i < obj.educationNum; i += 1) {
      edu = (
        <div key={`edu${i}`} className={'section'}>
          <div className='job-date'>
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
