import React from 'react'
import classNames from 'classnames'

const Card = ({ children, className }) => {
  const classNameCard = classNames('block bg-white shadow p-2 min-h-250 md:max-w-md md:min-h-420 max-h-420', className)
  return (
    <div className={classNameCard}>
      {children}
    </div>
  )
}

export default Card
