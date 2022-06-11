import { useState } from "react";
import { toggleEdit, InsertEdit } from "./_helper"

function Skills(props) {
  const [skill0, setSkill0] = useState({
    value: 'Programming Languages',
    edit: false,
  });
  const [desc0, desc0Edit] = useState({
    value: 'React, JavaScript, HTML, CSS',
    edit: false,    
  });
  const [skill1, setSkill1] = useState({
    value: 'Technologies',
    edit: false,
  });
  const [desc1, desc1Edit] = useState({
    value: 'Git, GitHub, Node.js, Linux/Unix, JIRA',
    edit: false,
  });

  // placing states into array to iterate through user-defined number to render
  const skillArr = [skill0, skill1];
  const setSkillArr = [setSkill0, setSkill1];
  const descArr = [desc0, desc1];
  const setDescArr = [desc0Edit, desc1Edit];

  function InsertSkill() {
    const arr = [];
    for (let i = 0; i < props.skillNum; i += 1) {
      const div = (
        <div 
          key={`skill${i}`} 
          className='section'
        >
          <span 
            className='bold capitalize' 
            onClick={() => toggleEdit(setSkillArr[i])}
          >
            {InsertEdit(
              skillArr[i].edit, 
              skillArr[i].value, 
              'input', 
              setSkillArr[i]
            )}
            : &nbsp;
          </span>
          <span 
            onClick={() => toggleEdit(setDescArr[i])}
          >
            {InsertEdit(
              descArr[i].edit, 
              descArr[i].value, 
              'input', 
              setDescArr[i]
            )}
          </span>
        </div>
      );
      arr.push(div);
    }
    return arr;
  }

  if (props.skillNum > 0) {
    return (
      <div>
        <h1>Skills</h1>
        <InsertSkill />
      </div>
    );
  }
}

export default Skills;
