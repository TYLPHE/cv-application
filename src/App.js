import React, { Component }from 'react';
import DisplayCV from './DisplayCV';
import './styles/app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'tyl phe',
      phone: '1231231234',
      email: 'test@gmail.com',
      github: 'https://github.com/TYLPHE',
      linkedin: 'https://www.linkedin.com/in/tylphe/',
      skills: 2,
      projects: 2,
      experience: 2,
      education: 3,
    }
  }
  
  changeName = e => this.setState({ ...this.state, name: e.target.value });
  changePhone = e => this.setState({ ...this.state, phone: e.target.value });
  changeEmail = e => this.setState({...this.state, email: e.target.value });
  changeGithub = e => this.setState({ ...this.state, github: e.target.value });
  changeLinkedin = e => this.setState({ ...this.state, linkedin: e.target.value });
  changeProjects = e => this.setState({ ...this.state, projects: e.target.value });
  changeSkills = e => this.setState({ ...this.state, skills: e.target.value });
  changeExperience = e => this.setState({ ...this.state, experience: e.target.value });
  changeEducation = e => this.setState({ ...this.state, education: e.target.value });

  preventDefault(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className='app'>
        <form onSubmit={this.preventDefault}>
          <div className='section-title'>Contact Information</div>
          <label>
            First & Last Name:
            <input 
              type={'text'} 
              onChange={this.changeName} 
            />
          </label>

          <label>
            Phone Number:
            <input 
              type={'tel'}
              pattern={'[0-9]{3}-[0-9]{3}-[0-9]{4}'}
              maxLength={10}
              onChange={this.changePhone} 
            />
          </label>

          <label>
            Email: 
            <input
              type={'email'}
              onChange={this.changeEmail}
            />
          </label>

          <label>
            GitHub Link: (Must have https://) 
            <input
              type={'url'}
              onChange={this.changeGithub}
            />
          </label>

          <label>
            LinkedIn Link: (Must have https://)
            <input
              type={'url'}
              onChange={this.changeLinkedin}
            />
          </label>

          <div className='section-title'>Skills</div>
          <label>
            # of skills: 
            <select onChange={this.changeSkills} defaultValue={2}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </label>

          <div className='section-title'>Relevant Projects</div>
          <label>
            # of Relevant Projects: 
            <select onChange={this.changeProjects} defaultValue={2}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </label>

          <div className='section-title'>Relevant Experience</div>
          <label>
            # of Relevant Experience: 
            <select onChange={this.changeExperience} defaultValue={2}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </label>

          <div className='section-title'>Relevant Education</div>
          <label>
            # of Relevant Education: 
            <select onChange={this.changeEducation} defaultValue={3}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </label>
        </form>
        <DisplayCV 
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email}
          github={this.state.github}
          linkedin={this.state.linkedin}
          projects={this.state.projects}
          skills={this.state.skills}
          experience={this.state.experience}
          education={this.state.education}
        />
      </div>
    );
  }
}

export default App;
