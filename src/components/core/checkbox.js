import React from 'react'

function Checkbox(props) {
  return (
    <div className="w-1/2 h-full flex self-center">
      <div className="h-full pr-2 flex self-center md:pr-5">
        <input
          id={props.labelName}
          className={`${props?.className} `}
          style={props?.style}
          type="checkbox"
          checked={props.checked}
          onChange={props.hanbleChecked}
          name={props.name}
          value={props.value}
        />
      </div>
      <label htmlFor={props.labelName} className={props.labelClassName}> {props.labelName} </label>
    </div>
  )
}

export default Checkbox
