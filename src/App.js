import React, { Component }from 'react';
import DisplayCV from './DisplayCV';
import './styles/app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'tyl phe',
      contactInfo: {
        phoneNumber: '1231231234',
        email: 'test@gmail.com',
        github: 'https://github.com/TYLPHE',
        linkedin: 'https://www.linkedin.com/in/tylphe/',
      },
      skills: 2,
      projects: 2,
      experience: 2,
      education: 3,
    }

  }
  
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handlePhoneChange = (e) => {
    let state = this.state;
    state.contactInfo.phoneNumber = e.target.value;
    this.setState(state);
  }

  handleEmailChange = (e) => {
    let state = this.state;
    state.contactInfo.email = e.target.value;
    this.setState(state);
  }

  handleGithubChange = (e) => {
    let state = this.state;
    state.contactInfo.github = e.target.value;
    this.setState(state);
  }

  handleLinkedinChange = (e) => {
    let state = this.state;
    state.contactInfo.linkedin = e.target.value;
    this.setState(state);
  }

  handleProjectsChange = (e) => {
    let state = this.state;
    state.projects = e.target.value;
    this.setState(state);
  }

  handleSkillsChange = (e) => {
    let state = this.state;
    state.skills = e.target.value;
    this.setState(state);
  }

  handleExperienceChange = (e) => {
    let state = this.state;
    state.experience = e.target.value;
    this.setState(state);
  }

  handleEducationChange = (e) => {
    let state = this.state;
    state.education = e.target.value;
    this.setState(state);
  }

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
              onChange={this.handleNameChange} 
            />
          </label>

          <label>
            Phone Number:
            <input 
              type={'tel'}
              pattern={'[0-9]{3}-[0-9]{3}-[0-9]{4}'}
              maxLength={10}
              onChange={this.handlePhoneChange} 
            />
          </label>

          <label>
            Email: 
            <input
              type={'email'}
              onChange={this.handleEmailChange}
            />
          </label>

          <label>
            GitHub Link: 
            <input
              type={'url'}
              onChange={this.handleGithubChange}
            />
          </label>

          <label>
            LinkedIn Link: 
            <input
              type={'url'}
              onChange={this.handleLinkedinChange}
            />
          </label>

          <div className='section-title'>Skills</div>
          <label>
            # of skills: 
            <select onChange={this.handleSkillsChange} defaultValue={2}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </label>

          <div className='section-title'>Relevant Projects</div>
          <label>
            # of Relevant Projects: 
            <select onChange={this.handleProjectsChange} defaultValue={2}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </label>

          <div className='section-title'>Relevant Experience</div>
          <label>
            # of Relevant Experience: 
            <select onChange={this.handleExperienceChange} defaultValue={2}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </label>

          <div className='section-title'>Relevant Education</div>
          <label>
            # of Relevant Education: 
            <select onChange={this.handleEducationChange} defaultValue={3}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </label>
        </form>
        <DisplayCV 
          name={this.state.name}
          phoneNumber={this.state.contactInfo.phoneNumber}
          email={this.state.contactInfo.email}
          github={this.state.contactInfo.github}
          linkedin={this.state.contactInfo.linkedin}
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
