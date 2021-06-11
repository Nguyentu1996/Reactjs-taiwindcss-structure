import React from 'react'
// import PropTypes from 'prop-types'

const CardBody = ({ children, className, ...rest }, ref) => (
  <div ref={ref} className={className} {...rest}>
    {children}
  </div>
)

// CardBody.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string.isRequired
// }
export default CardBody
