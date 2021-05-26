import React from 'react'

function Wrapper(props) {
  return (
    <div className="h-wrapper">
      {props.children}
    </div>
  )
}

export default Wrapper
