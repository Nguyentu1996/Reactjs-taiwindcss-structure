/* eslint-disable func-names */
import React, { createContext, useContext, useEffect, createRef } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icons from '../icons'

const modalContext = createContext()

function Dialog({ children, onModalClose, visible }) {
  const modalRef = createRef()
  const handleTabKey = (e) => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    )
    const firstElement = focusableModalElements[0]
    const lastElement = focusableModalElements[focusableModalElements.length - 1]

    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus()
      return e.preventDefault()
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus()
      e.preventDefault()
    }
    return null
  }
  const modalContainer = classNames('block fixed overflow-auto inset-0 bg-overlay')
  const modalContent = classNames(
    'absolute top-10 left-1/2 transform -translate-x-1/2 min-w-5/6 shadow-md bg-gray-50 rounded md:min-w-3/4 xl:min-w-1/2 top-20'
  )

  const keyListenersMap = new Map([[27, onModalClose], [9, handleTabKey]])
  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode)
      return listener && listener(e)
    }
    document.addEventListener('keydown', keyListener)

    return () => document.removeEventListener('keydown', keyListener)
  })
  return createPortal(
    <CSSTransition in={visible} classNames="alert" timeout={300} onExit={onModalClose} unmountOnExit>
      <div className={modalContainer} role="dialog" aria-modal="true">
        <div className={modalContent} ref={modalRef}>
          <modalContext.Provider value={{ onModalClose }}>
            {children}
          </modalContext.Provider>
        </div>
      </div>
    </CSSTransition>,
    document.body
  )
}

Dialog.Header = function ModalHeader(props) {
  const { onModalClose } = useContext(modalContext)

  return (
    <div className="relative px-5 pt-2">
      {props.children}
      <button className="absolute top-2 right-2" title="close modal" onClick={onModalClose}>
        <Icons.Close />
      </button>
    </div>
  )
}

Dialog.Body = function ModalBody(props) {
  return <div className="p-5">{props.children}</div>
}

Dialog.Footer = function ModalFooter(props) {
  return <div className="flex justify-end items-end px-5 py-2">{props.children}</div>
}

Dialog.Footer.CloseBtn = function CloseBtn(props) {
  const { onModalClose } = useContext(modalContext)
  return (
    <button
      {...props}
      className="w-20	close-btn text-gray-50 bg-orange-300 py-1"
      title="close modal"
      onClick={onModalClose}
    />
  )
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired
}

export default Dialog
