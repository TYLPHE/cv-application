import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { skills } = this.props;
    return (
      <div>
        skills goes here
        &nbsp;
        {skills}
        {/* <button onClick={() => props.setValue('test')}>click to change value</button> */}
      </div>
    );
  }
}

export default Skills;
