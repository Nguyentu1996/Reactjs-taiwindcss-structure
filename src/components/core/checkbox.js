import React from 'react'

function Checkbox(props) {
  return (
    <div className="w-1/2 h-full flex self-center">
      <div className="h-full pr-5 flex self-center">
        <input
          id={props.labelName}
          className={`${props?.className} `}
          style={props?.style}
          type="checkbox"
          checked={props.checked}
          onChange={props.hanbleChecked}
        />
      </div>
      <label htmlFor={props.labelName} className={props.labelClassName}> {props.labelName} </label>
    </div>
  )
}

export default Checkbox
