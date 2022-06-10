import React, { useEffect, useState } from "react";

function Skills(props) {
  const [skill0, setSkill0] = useState({
    skill: 'Programming Languages',
    edit: false,
  });
  const [desc0, desc0Edit] = useState({
    desc: 'React, JavaScript, HTML, CSS',
    edit: false,    
  });
  const [skill1, setSkill1] = useState({
    skill: 'Technologies',
    edit: false,
  });
  const [desc1, desc1Edit] = useState({
    desc: 'Git, GitHub, Node.js, Linux/Unix, JIRA',
    edit: false,
  });

  const skillArr = [skill0, skill1];
  const setSkillArr = [setSkill0, setSkill1];
  const descArr = [desc0, desc1];
  const setDescArr = [desc0Edit, desc1Edit];

  function toggleEdit(setFunc) {
    setFunc((state) => ({...state, edit: !state.edit}));
  }

  function handleState(e, objKey, setFunc) {
    setFunc((state) => ({...state, [objKey]: e.target.value}));
  }

  function InsertEdit({ edit, objKey, tag, setFunc }) {
    if (edit && tag === 'input') {
      return (
        <input
          className="cv-input"
          type={'text'}
          defaultValue={objKey}
          onChange={(e) => handleState(e, objKey, setFunc)}
          onBlur={() => toggleEdit(setFunc)}
          // onKeyDown={(e) => this.enterHotkey(e, sectionMatch, editKey)}
          style={{width: `${objKey.length}ch`}}
          onFocus={(e) => e.target.select()}
          autoFocus
        />
      )
    }
    if (edit && tag === 'textarea') {
      return (
        <textarea defaultValue={'textarea'}>
        </textarea>
      )
    } else return <>{objKey}</>
  }

  function InsertSkill() {
    const arr = [];
    for (let i = 0; i < props.skillNum; i += 1) {
      const div = (
        <div key={`skill${i}`} className='section'>
          <span className="bold" onClick={() => toggleEdit(setSkillArr[i])}>
            <InsertEdit edit={skillArr[i].edit} objKey={skillArr[i].skill} tag={'input'} setFunc={setSkillArr[i]}/>: &nbsp;
          </span>
          <span onClick={() => toggleEdit(setDescArr[i])}>
            <InsertEdit edit={descArr[i].edit} objKey={descArr[i].desc} tag={'input'} setFunc={setDescArr[i]}/>
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
        <InsertSkill skillNum={props.skillNum} />
      </div>
    );
  }
}
  
//   // updates state to target value
//   updateState = (e, objNum, key) => {
//     const prevState = Object.assign({}, this.state);
//     prevState[objNum][key] = e.target.value;
//     this.setState(prevState);
//   }

//   // toggles edit fields between true and false
//   toggleEdit = (objNum, editName) => {
//     const prevState = Object.assign({}, this.state);
//     prevState[objNum][editName] = !prevState[objNum][editName];
//     this.setState(prevState);
//   }

//   // inserts an input field when edit state is true
//   insertEdit = (section, key, edit, editMatch, inputType) => {
//     const [sectionMatch, editKey] = edit;
//     if (sectionMatch === section && editKey === editMatch) {
//       if (inputType === 'input') {
//         return (
//           <input
//             className="cv-input"
//             type={'text'}
//             defaultValue={this.state[sectionMatch][key]}
//             onChange={(e) => this.updateState(e, sectionMatch, key)}
//             onBlur={() => this.toggleEdit(sectionMatch, editKey)}
//             onKeyDown={(e) => this.enterHotkey(e, sectionMatch, editKey)}
//             style={{width: `${this.state[sectionMatch][key].length}ch`}}
//             onFocus={(e) => e.target.select()}
//             autoFocus
//           />
//         )
//       }
//       else if (inputType === 'textarea') {
//         return (
//           <textarea
//             className="cv-textarea"
//             type={'text'}
//             defaultValue={this.state[sectionMatch][key]}
//             onChange={(e) => this.updateState(e, sectionMatch, key)}
//             onBlur={() => this.toggleEdit(sectionMatch, editKey)}
//             onKeyDown={(e) => this.enterHotkey(e, sectionMatch, editKey)}
//             onFocus={(e) => e.target.select()}
//             autoFocus
//           />
//         )
//       }
//     } else return this.state[section][key];
//   }

//   // user can press 'Enter' key to exit editing mode
//   enterHotkey = (e, objNum, editName) => {
//     if (e.key === 'Enter') {
//       this.toggleEdit(objNum, editName)
//     }
//   }

//   insertSkill = (obj) => {
//     // convert obj to arr to filter for edit values with true
//     const stateArr = Object.entries(this.state)

//     // search this.state for anything marked for editing. Used below.
//     const edit = [];
//     for (let i = 0; i < stateArr.length; i += 1) {
//       const arr = Object.entries(this.state[`skill${i}`]);
//       arr.filter((e) => {
//         const [key, value] = e;
//         if (value === true) {
//           return edit.push(`skill${i}`, key); 
//         } else {
//           return false;
//         }
//       });
//     }

//     let arr = [];
//     let skill;
//     for (let i = 0; i < obj.skillNum; i += 1) {
//       skill = (
//         <div key={`skill${i}`} className='section'>
//           <span
//             className="bold capitalize"
//             onClick={() => this.toggleEdit(`skill${i}`, 'edit')}
//           >
//             {this.insertEdit(
//               `skill${i}`,
//               `skill`,
//               edit,
//               `edit`,
//               'input'
//             )}: &nbsp;
//           </span>
//           <span
//             onClick={() => this.toggleEdit(`skill${i}`, 'edit')}
//           >
//             {this.insertEdit(
//               `skill${i}`,
//               'desc',
//               edit,
//               'edit',
//               'input'
//             )}
//           </span>
//         </div>
//       );
//       arr = [...arr, skill]
//     }
//     return arr;
//   }

//   render() {
//     const { skillNum } = this.props;

//     if (skillNum > 0) {
//       return (
//         <div>
//           <h1>Skills</h1>
//           <this.insertSkill skillNum={skillNum} />
//         </div>
//       )
//     }
//   }
// }

export default Skills;
