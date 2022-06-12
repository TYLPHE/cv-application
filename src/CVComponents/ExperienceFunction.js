import { useState } from 'react';
import { toggleEdit, InsertEdit } from './_helper'

function Experience(props) {
  // exp0 initial states
  const [exp0Title, setExp0Title] = useState({
    value: 'Instructional Designer',
    edit: false,
  });
  const [exp0Date, setExp0Date] = useState({
    value: 'Feb 2018 - Dec 2021',
    edit: false,
  });
  const [exp0Location, setExp0Location] = useState({
    value: 'Salt Lake City, UT',
    edit: false,
  });
  const [exp0Point0, setExp0Point0] = useState({
    value: 'Collaborated with Epic (hospital charting software) subject matter experts to implement new workflows of over 1,400 physicians and 5,000 health care professionals',
    edit: false,
  });
  const [exp0Point1, setExp0Point1] = useState({
    value: 'Planned, designed, developed, and conducted training and educational programs (in-person and online) for an external hospital',
    edit: false,
  });
  const [exp0Point2, setExp0Point2] = useState({
    value: 'Delivered instruction to individuals and groups in a variety of formats, including printed and pre-recorded/live video media.',
    edit: false,
  });

  // exp1 initial states
  const [exp1Title, setExp1Title] = useState({
    value: 'Training Specialist',
    edit: false,
  });
  const [exp1Date, setExp1Date] = useState({
    value: 'Dec 2015 - Feb 2018',
    edit: false,
  });
  const [exp1Location, setExp1Location] = useState({
    value: 'Salt Lake City, UT',
    edit: false, 
  });
  const [exp1Point0, setExp1Point0] = useState({
    value: 'Provided technical support to providers, nurses, analysts, informaticists, and clinic managers in areas including error diagnosis, proper charting, and creating various tip sheets',
    edit: false,
  });
  const [exp1Point1, setExp1Point1] = useState({
    value: 'Trained 21 different classes of 1 - 20 hospital employees throughout various Epic applications on a weekly basis',
    edit: false,
  });
  const [exp1Point2, setExp1Point2] = useState({
    value: 'Maintained records of training activities using an online learning management system',
    edit: false,
  });

  // exp2 initial states
  const [exp2Title, setExp2Title] = useState({
    value: '<Position>',
    edit: false,
  });
  const [exp2Date, setExp2Date] = useState({
    value: '<Date>',
    edit: false,
  });
  const [exp2Location, setExp2Location] = useState({
    value: '<Location>',
    edit: false, 
  });
  const [exp2Point0, setExp2Point0] = useState({
    value: '<Point 1>',
    edit: false,
  });
  const [exp2Point1, setExp2Point1] = useState({
    value: '<Point 2>',
    edit: false,
  });
  const [exp2Point2, setExp2Point2] = useState({
    value: '<Point 3>',
    edit: false,
  });

  // combine states to iterate through for-loops
  const expTitleArr = [exp0Title, exp1Title, exp2Title];
  const setExpTitleArr = [setExp0Title, setExp1Title, setExp2Title];
  const expDateArr = [exp0Date, exp1Date, exp2Date];
  const setExpDateArr = [setExp0Date, setExp1Date, setExp2Date];
  const expLocationArr = [exp0Location, exp1Location, exp2Location];
  const setExpLocationArr = [setExp0Location, setExp1Location, setExp2Location];
  const expPoint0Arr = [exp0Point0, exp1Point0, exp2Point0];
  const setExpPoint0Arr = [setExp0Point0, setExp1Point0, setExp2Point0];
  const expPoint1Arr = [exp0Point1, exp1Point1, exp2Point1];
  const setExpPoint1Arr = [setExp0Point1, setExp1Point1, setExp2Point1];
  const expPoint2Arr = [exp0Point2, exp1Point2, exp2Point2];
  const setExpPoint2Arr = [setExp0Point2, setExp1Point2, setExp2Point2];

  const expPointArr = [expPoint0Arr, expPoint1Arr, expPoint2Arr];
  const setExpPointArr = [setExpPoint0Arr, setExpPoint1Arr, setExpPoint2Arr];
  
  function Li(props) {
    const { expNum } = props;
    let arr = [];
    for (let i = 0; i < expPointArr.length; i += 1) {
      const li = (
        <li
          key={`li${i}`}
          onClick={() => toggleEdit(setExpPointArr[i][expNum])}
        >
          {InsertEdit(
            expPointArr[i][expNum].edit,
            expPointArr[i][expNum].value,
            'textarea',
            setExpPointArr[i][expNum],
          )}
        </li>
      );
      arr.push(li)
    }
    return arr;
  }
  
  function InsertExp() {
    let arr = [];
    for (let i = 0; i < props.experienceNum; i += 1) {
      const exp = (
        <div
          key={`exp${i}`}
          className={'section'}
        >
          {/* job title and date section */}
          <div
            className='space-between'
          >
            {/* job title */}
            <span
              className='bold capitalize'
              onClick={() => toggleEdit(setExpTitleArr[i])}
            >
              {InsertEdit(
                expTitleArr[i].edit,
                expTitleArr[i].value,
                'input',
                setExpTitleArr[i]
              )}
            </span>
  
            {/* date */}
            <span
              className='capitalize'
              onClick={() => toggleEdit(setExpDateArr[i])}
            >
              {InsertEdit(
                expDateArr[i].edit,
                expDateArr[i].value,
                'input',
                setExpDateArr[i]
              )}
            </span>
          </div>
          {/* location */}
          <span
            className='capitalize'
            onClick={() => toggleEdit(setExpLocationArr[i])}
          >
            {InsertEdit(
              expLocationArr[i].edit,
              expLocationArr[i].value,
              'input',
              setExpLocationArr[i],
            )}
          </span>
          {/* list of experiences */}
          <ul>
            <Li expNum={i} />
          </ul>
        </div>
      )
      arr.push(exp);
    }
    return arr;
  }

  return (
    <div>
      <h1>Relevant Experience</h1>
      <InsertExp />
    </div>
  )
}

export default Experience;
