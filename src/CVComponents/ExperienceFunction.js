import { useState } from 'react';
import { toggleEdit, InsertEdit } from './_helper'

function Li(props) {
  const { expNum } = props;
}

function InsertExp(props) {
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
          <span>

          </span>

          {/* date */}
          <span>

          </span>
        </div>
        {/* location */}
        <div>

        </div>
        {/* list of experiences */}
        <ul>
          <Li expNum={i} />
        </ul>
      </div>
    )
  }
}

function Experience(props) { 
  return (
    <div>
      <h1>Relevant Experience</h1>
      <InsertExp experienceNum={props.experienceNum} />
    </div>
  )
}

export default Experience;
