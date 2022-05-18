import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edu0: {
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
      eduEdit0: false,

      edu1: {
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
      eduEdit1: false,

      edu2: {
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
      eduEdit2: false,
    }
  }

  insertEdu = (obj) => {
    console.log(obj)
    let arr = [];
    let edu;
    for (let i = 0; i < obj.educationNum; i += 1) {
      edu = (
        <div key={`edu${i}`} className={'section'}>
          <div>{this.state[`edu${i}`].title}</div>
          <ul>
            <li key={`edu${i}li${i}`}>{this.state[`edu${i}`].point0}</li>
            <li key={`edu${i}li${i + 1}`}>{this.state[`edu${i}`].point1}</li>
            <li key={`edu${i}li${i + 2}`}>{this.state[`edu${i}`].point2}</li>
          </ul>
        </div>
      );
      arr = [...arr, edu];
    }
    return arr
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
