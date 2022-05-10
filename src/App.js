import React, { Component }from 'react';
import DisplayCV from './DisplayCV';
import './styles/app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'tyler phet',
      contactInfo: {
        phoneNumber: '1231231234',
        email: 'test@gmail.com',
        github: 'https://github.com/TYLPHE',
        linkedin: 'https://www.linkedin.com/in/tylphe/',
      },
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

  preventDefault(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className='app'>
        <form onSubmit={this.preventDefault}>
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
        </form>
        <DisplayCV 
          name={this.state.name}
          phoneNumber={this.state.contactInfo.phoneNumber}
          email={this.state.contactInfo.email}
        />
      </div>
    );
  }
}

export default App;
