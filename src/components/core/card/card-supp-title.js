import React from 'react'

const CardSuppTitle = ({ children, className, ...rest }, ref) => (
  <p ref={ref} className={className} {...rest}>
    {children}
  </p>
)

export default CardSuppTitle
