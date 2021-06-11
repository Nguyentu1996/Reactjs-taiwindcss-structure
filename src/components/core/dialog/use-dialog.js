import { useState, useEffect } from 'react'

const useDialog = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  useEffect(() => {
    let id
    if (isDialogVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      id = setTimeout(() => {
        document.body.style.overflow = 'auto'
      }, 150)
    }

    return () => clearTimeout(id)
  }, [isDialogVisible])

  function toggleDialog(isVisible) {
    setIsDialogVisible(isVisible)
  }

  return {
    isDialogVisible,
    toggleDialog
  }
}

export default useDialog
