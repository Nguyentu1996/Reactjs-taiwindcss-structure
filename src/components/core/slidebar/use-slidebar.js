import { useState, useEffect } from 'react'

const useSlide = () => {
  const [isSlideVisible, setIsSlideVisible] = useState(false)
  useEffect(() => {
    let id
    if (isSlideVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      id = setTimeout(() => {
        document.body.style.overflow = 'auto'
      }, 0)
    }

    return () => clearTimeout(id)
  }, [isSlideVisible])

  function toggleSlidebar(isVisible) {
    setIsSlideVisible(isVisible)
  }

  return {
    isSlideVisible,
    toggleSlidebar
  }
}

export default useSlide
