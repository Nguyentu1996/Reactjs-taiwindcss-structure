import React from 'react'

const CardText = ({ children, className, ...rest }, ref) => (
  <p ref={ref} className={className} {...rest}>
    {children}
  </p>
)

export default CardText
