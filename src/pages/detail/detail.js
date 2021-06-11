import React from 'react'
import Dialog from '../../components/core/dialog/dialog'
import { useDialog } from '../../components/core/dialog'

export default function DetailPage() {
  const { isDialogVisible, toggleDialog } = useDialog()

  return (
    <div className="container">
      <h1>Detail page</h1>
      <p>
        Hello world
      </p>
      <button onClick={() => toggleDialog(true)}>open modal</button>
      <Dialog visible={isDialogVisible} onModalClose={() => toggleDialog(false)}>
        <Dialog.Header>Header</Dialog.Header>
        <Dialog.Body>Body</Dialog.Body>
        <Dialog.Footer>
          <Dialog.Footer.CloseBtn>Close</Dialog.Footer.CloseBtn>
        </Dialog.Footer>
      </Dialog>
    </div>
  )
}
