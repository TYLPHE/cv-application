import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exp0: {
        title: 'Instructional Designer',
        date: 'insert date',
        location: 'Insert location',

        point0: 'insert point 1',
        pointEdit0: false,

        point1: 'insert point 2',
        pointEdit1: false,

        point2: 'insert point 3',
        pointEdit2: false,
      },
      expEdit0: false,

      exp1: {
        title: 'Training Specialist',
        date: 'insert date',
        location: 'Insert location',

        point0: 'insert point 1',
        pointEdit0: false,

        point1: 'insert point 2',
        pointEdit1: false,

        point2: 'insert point 3',
        pointEdit2: false,
      },
      expEdit1: false,

    }
  }

  insertExp = (obj) => {
    console.log(obj)
    let arr = [];
    let exp;
    for (let i = 0; i < obj.experienceNum; i += 1) {
      exp = (
        <div key={`exp${i}`} className={'section'}>
          <div>{this.state[`exp${i}`].title}</div>
          <ul>
            <li key={`exp${i}li${i}`}>{this.state[`exp${i}`].point0}</li>
            <li key={`exp${i}li${i + 1}`}>{this.state[`exp${i}`].point1}</li>
            <li key={`exp${i}li${i + 2}`}>{this.state[`exp${i}`].point2}</li>
          </ul>
        </div>
      );
      arr = [...arr, exp];
    }
    return arr
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
