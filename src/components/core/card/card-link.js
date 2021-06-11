import React from 'react'
import { Link } from 'react-router-dom'

const CardLink = ({ children, className, ...rest }, ref) => (
  <Link ref={ref} className={className} {...rest}>
    {children}
  </Link>
)

export default CardLink
