// helper functions for the function components
// the class components had their own functions, which is DRY coding
function toggleEdit(setFunc) {
  setFunc((state) => ({...state, edit: !state.edit}));
}

function handleState(e, setFunc) {
  setFunc((state) => ({...state, value: e.target.value}));
}

function enterHotkey(e, setFunc) {
  if (e.key === 'Enter') {
    toggleEdit(setFunc);
    handleState(e, setFunc);
  }
}

function InsertEdit(editBool, objValue, tagType, setFunc) {
  if (editBool && tagType === 'input') {
    return (
      <input
        className="cv-input"
        type={'text'}
        defaultValue={objValue}
        onChange={(e) => {
          e.target.style = `width: ${e.target.value.length}ch`
        }}
        onBlur={(e) => {
          toggleEdit(setFunc);
          handleState(e, setFunc)
        }}
        onKeyDown={(e) => {
          enterHotkey(e, setFunc);
        }}
        style={{width: `${objValue.length}ch`}}
        onFocus={(e) => e.target.select()}
        autoFocus
      />
    )
  }
  if (editBool && tagType === 'textarea') {
    return (
      <textarea 
        className="cv-textarea"
        defaultValue={objValue}
        onBlur={(e) => {
          toggleEdit(setFunc);
          handleState(e, setFunc)
        }}
        onKeyDown={(e) => {
          enterHotkey(e, setFunc);
        }}
        onFocus={(e) => e.target.select()}
        autoFocus
      />
    )
  } else return objValue
}

export {toggleEdit, InsertEdit}
