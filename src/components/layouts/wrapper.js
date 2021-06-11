import React from 'react'

function Wrapper(props) {
  return (
    <div className="min-h-4/5 bg-bground overflow-hidden">
      {props.children}
    </div>
  )
}

export default Wrapper
