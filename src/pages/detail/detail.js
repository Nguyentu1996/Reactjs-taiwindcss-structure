import React from 'react'
import { useModal } from '../../components/core/modal'
import Modal from '../../components/core/modal/modal'

export default function DetailPage() {
  const { isShowing, toggle } = useModal()

  return (
    <div className="container">
      <h1>Detail page</h1>
      <p>
        Hello world
      </p>
      <button onClick={toggle}>Show</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      >VAI CA HANG
      </Modal>
    </div>
  )
}
