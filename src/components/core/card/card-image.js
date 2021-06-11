import React from 'react'

const CardImage = ({ className, src }, ref) => (
  <img ref={ref} className={className} src={src} alt="Girl in a jacket" />
)
export default CardImage
