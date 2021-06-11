import classNames from 'classnames'
import React, { useEffect, createRef } from 'react'
import { createPortal } from 'react-dom'

function Slidebar({ children, onSlideClose, isSlideVisible }) {
  const slideRef = createRef()

  useEffect(() => {
    if (!isSlideVisible) {
      return null
    }
    function keyListener(event) {
      if (event.key === 'Escape') {
        return onSlideClose()
      }
      return null
    }
    document.addEventListener('keydown', keyListener)

    return () => document.removeEventListener('keydown', keyListener)
  })

  const sildeContainer = classNames({ 'block fixed inset-0 bg-overlay h-screen transition-all duration-300': isSlideVisible })
  const silderContent = classNames(
    'absolute top-0 left-0 w-menu shadow-md bg-gray-50 transform transition-all duration-300	'
  )
  return createPortal(
    <>
      <div className={sildeContainer} onClick={onSlideClose} />
      <div className={`${silderContent} ${isSlideVisible ? 'translate-x-0' : '-translate-x-full'} `} ref={slideRef}>
        {children}
      </div>
    </>, document.body
  )
}

export default Slidebar
