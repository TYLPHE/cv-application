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

  //TODO: fix setstate here
  toggleEdit = (expName, editName) => {
    console.log(expName, editName)
    console.log(this.state[expName][editName])
    this.setState({...this.state, [editName]: !this.state[expName][editName]})
  }

  insertExp = (obj) => {
    let arr = [];
    let exp;

    // convert obj to arr
    const testArr = Object.entries(this.state['exp0']);
    
    // find any edits that equal true and update user interface
    const newArr = testArr.filter(( [key ,value] ) => value === true);
    console.log(newArr)

    for (let i = 0; i < obj.experienceNum; i += 1) {
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
          <div>

          </div>
          <ul>
            <li key={`exp${i}li${i}`}>{this.state[`exp${i}`].point0}</li>
            <li key={`exp${i}li${i + 1}`}>{this.state[`exp${i}`].point1}</li>
            <li key={`exp${i}li${i + 2}`}>{this.state[`exp${i}`].point2}</li>
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
