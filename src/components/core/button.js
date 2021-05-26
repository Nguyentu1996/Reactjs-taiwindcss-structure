import React from 'react'

const Button = (props) => (
  <button
    type={props.type}
    className={props.className}
  >{props.buttonName}
  </button>
)

export default Button
