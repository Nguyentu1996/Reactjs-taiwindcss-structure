import React from 'react'

const InputText = (props) => (
  <div className="w-full h-full self-center">
    <label htmlFor={props?.labelName} className="block"> {props?.labelName} </label>
    <input
      id={props?.labelName}
      className={`${props?.className} rounded-md w-full h-8 border focus:outline-none text-gray-800 px-2`}
      style={props?.style}
      type={props?.type}
      name={props?.name}
      value={props?.value}
      onChange={props.hanbleChanges}
    />
  </div>
)

export default InputText
