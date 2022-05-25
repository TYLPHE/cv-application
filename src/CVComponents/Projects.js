import React, { Component } from 'react';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      proj0: {
        title: 'To-Do-List',

        point0: 'A CRUD web app with functionalities to filter tasks based on tags and highlight overdue tasks',
        pointEdit0: false,

        point1: 'Developed using tools including Webpack, Lint, and Prettier node modules',
        pointEdit1: false,

        point2: 'Completed after 5 months of studying JavaScript from The Odin Project, an open-source online curriculum',
        pointEdit2: false,
      },
      projEdit0: false,

      proj1: {
        title: 'Math Flick',
  
        point0: 'A browser-based educational game built with vanilla Javascript, HTML, and CSS',
        pointEdit0: false,

        point1: 'Collaborated with a team of 3 and utilized Git and GitHub for discussion and conflicts resolution',
        pointEdit1: false,

        point2: 'Placed 2nd overall out of 37 games submitted for The Odin Project\'s first Game Jam',
        pointEdit2: false,
      },
      projEdit1: false,

    }
  }
  // highlights text in input field
  handleFocus = (e) => e.target.select();

  // update states
  changeProj = (e, id) => this.setState({...this.setState, [`proj${id}`]: e.target.value});
  changeDesc = (e, id) => this.setState({...this.setState, [`desc${id}`]: e.target.value});

  // switches between editing <input> and <span>
  toggleEditProj = (id) => this.setState({...this.state, [`editProj${id}`]: !this.state[`editProj${id}`]});
  toggleEditDesc = (id) => this.setState({...this.state, [`editDesc${id}`]: !this.state[`editDesc${id}`]});


  // user can press 'enter' key to switch away from <input>
  editKey = (e, id) => {if (e.key === 'Enter') this.toggleEditProj(id)};
  descKey = (e, id) => {if (e.key === 'Enter') this.toggleEditDesc(id)};
  
  insertProj = (obj) => {
    let arr = [];
    let proj;
    for (let i = 0; i < obj.projNum; i += 1) {
      proj = (
        <div key={`proj${i}`} className={'section'}>
          <div className='bold'>{this.state[`proj${i}`].title}</div>
          <ul>
            <li key={`proj${i}li${i}`}>{this.state[`proj${i}`].point0}</li>
            <li key={`proj${i}li${i + 1}`}>{this.state[`proj${i}`].point1}</li>
            <li key={`proj${i}li${i + 2}`}>{this.state[`proj${i}`].point2}</li>
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
