import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
  <button
    type={props.type}
    className={props.className}
    onClick={props.handleClick}
  >{props.buttonName}
  </button>
)
Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired
}

export default Button
