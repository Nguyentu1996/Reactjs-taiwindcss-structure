import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../core/button'

function Show(props) {
  const { t } = useTranslation()
  const close = () => {

  }
  const oke = () => {

  }
  return (
    <div className="modal fixed left-1/4 top-1/2 ">
      <h1>{t(props)}</h1>
      <div id="content">
        <p>{props.message}</p>
      </div>
      <div id="action" className="flex">
        <Button buttonName="Close" handleClick={close} />
        <Button buttonName="Oke" handleClick={oke} />
      </div>
    </div>
  )
}
class Notification {
  success(message) {
    const { color } = 'text-blue-300'
    const { type } = 'success'
    Show({ type, message, color })
  }

  warning(message) {
    const { color } = 'text-yellow-300'
    const { type } = 'warning'

    Show({ type, message, color })
  }

  error(message) {
    const { color } = 'text-red-300'
    const { type } = 'warning'

    Show({ type, message, color })
  }
}
export default Notification
