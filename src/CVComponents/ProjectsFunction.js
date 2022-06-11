import { useState } from 'react';
import { toggleEdit, InsertEdit } from './_helper';

function Projects(props) {
  const [proj0Title, setProj0Title] = useState({
    value: 'To-Do-List',
    edit: false,
  });
  const [proj0Point0, setProj0Point0] = useState({
    value: 'A CRUD web app with functionalities to filter tasks based on tags and highlight overdue tasks',
    edit: false,
  });
  const [proj0Point1, setProj0Point1] = useState({
    value: 'Developed using tools including Webpack, Lint, and Prettier node modules',
    edit: false,
  });
  const [proj0Point2, setProj0Point2] = useState({
    value: 'Completed after 5 months of studying JavaScript from The Odin Project, an open-source online curriculum',
    edit: false,
  });

  const [proj1Title, setProj1Title] = useState({
    value: 'Math Flick',
    edit: false,
  });
  const [proj1Point0, setProj1Point0] = useState({
    value: 'A browser-based educational game built with vanilla Javascript, HTML, and CSS',
    edit: false,
  });
  const [proj1Point1, setProj1Point1] = useState({
    value: 'Collaborated with a team of 3 and utilized Git and GitHub for discussion and conflicts resolution',
    edit: false,
  });
  const [proj1Point2, setProj1Point2] = useState({
    value: 'Placed 2nd overall out of 37 games submitted for The Odin Project\'s first Game Jam',
    edit: false,
  });

  // combine states to iterate through for-loops
  const projTitleArr = [proj0Title, proj1Title];
  const setProjTitleArr = [setProj0Title, setProj1Title];
  const proj0PointArr = [proj0Point0, proj0Point1, proj0Point2];
  const setProj0PointArr = [setProj0Point0, setProj0Point1, setProj0Point2];
  const proj1PointArr = [proj1Point0, proj1Point1, proj1Point2];
  const setProj1PointArr = [setProj1Point0, setProj1Point1, setProj1Point2];
  
  // combine above arrays for iterating through for-loops
  const projPointArr = [proj0PointArr, proj1PointArr];
  const setProjPointArr = [setProj0PointArr, setProj1PointArr];

  function Li(props) {
    const { titleNum } = props;
    const arr = [];
    for (let i = 0; i < projPointArr[titleNum].length; i += 1) {
      const li = (
        <li
          key={`li${i}`}
          onClick={() => toggleEdit(setProjPointArr[titleNum][i])}
        >
          {InsertEdit(
            projPointArr[titleNum][i].edit,
            projPointArr[titleNum][i].value,
            'input',
            setProjPointArr[titleNum][i],
          )}
        </li>
      )
      arr.push(li);
    }
    return arr;
  }

  function InsertProj() {
    const arr = [];
    for (let i = 0; i < props.projectNum; i += 1) {
      const div = (
        <div 
          className='section'
          key={`proj${i}`}
        >
          <span
            className='bold capitalize'
            onClick={() => toggleEdit(setProjTitleArr[i])}
          >
            {InsertEdit(
              projTitleArr[i].edit,
              projTitleArr[i].value,
              'input',
              setProjTitleArr[i],
            )}
          </span>
          <ul>
            <Li titleNum={i}/>
          </ul>
        </div>
      );
      arr.push(div);
    }
    return arr;
  }

  return (
    <div>
      <h1>Projects</h1>
      <InsertProj />
    </div>
  )
} 

export default Projects;
