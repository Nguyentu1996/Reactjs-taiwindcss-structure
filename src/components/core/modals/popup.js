import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../button'

function Notification(props) {
  const { t } = useTranslation()
  const [message, setMessage] = useState('')
  const [modal, setModal] = useState({ isOpen: false })

  const close = () => {
    setModal({ isOpen: false })
  }
  // eslint-disable-next-line no-unused-vars
  const open = (mess) => (e) => {
    e.preventDefault()
    if (mess) setMessage(message)
    setModal({ isOpen: true })
  }

  return (
    <div className={modal.isOpen ? 'fixed left-1/4 top-1/2 w-4/6 h-20' : 'hidden'}>
      <h1>{t(props.message)}</h1>
      <div id="content">
        <p>content</p>
        <p>{props.message}</p>
      </div>
      <div id="action" className="flex">
        <Button buttonName="Close" handleClick={close} />
      </div>
    </div>
  )
}

export default Notification
