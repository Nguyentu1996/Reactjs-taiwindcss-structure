import React from 'react'

const InputText = (props) => (
  <div className="w-full h-full self-center">
    <label htmlFor={props.labelName} className="block"> {props.labelName} </label>
    <input
      id={props.labelName}
      className={`${props?.className} w-full h-8 rounded-sm border-2 focus:outline-none focus:ring-2 text-gray-800 px-2`}
      style={props?.style}
      type={props?.type}
    />
  </div>
)

export default InputText
