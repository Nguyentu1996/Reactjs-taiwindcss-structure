import React, { useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'

function Modal({ isShowing, children, hide }) {
  const modalRef = useRef()
  modalRef.current = hide

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        return modalRef.current()
      }
      return null
    },
    [],
  )

  return (isShowing ? createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog" onKeyDown={(event) => handleKeyDown(event)}>
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </>, document.body
  ) : null)
}

export default Modal
