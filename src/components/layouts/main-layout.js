import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Footer from './footer'
import Header from './header'
import Menu from './menu'
import Wrapper from './wrapper'
import { useSlide } from '../core/slidebar'
import Slidebar from '../core/slidebar/sildebar'
import Sidebar from './sidebar'
import CCarousel from '../core/carousel/carousel'

const MainLayout = (props) => {
  const { isSlideVisible, toggleSlidebar } = useSlide()
  const [visible, setVisible] = useState(false)

  function handleClick() {
    setVisible(true)
    toggleSlidebar(true)
  }
  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 150)

    return () => clearTimeout(id)
  }, [visible, isSlideVisible])

  return (
    <div id="app" className="w-full h-screen" aria-hidden={isSlideVisible}>
      { visible && (
        <Slidebar isSlideVisible={isSlideVisible} onSlideClose={() => toggleSlidebar(false)}>
          <Sidebar onSideClose={() => toggleSlidebar(false)} />
        </Slidebar>
      )}
      <Header />
      <Menu toogleSidebar={handleClick} />
      <CCarousel />
      <Wrapper>
        {props.children}
      </Wrapper>
      <Footer />
    </div>
  )
}
const mapStateToProps = (state) => ({
  toasts: state.toasts
})

export default connect(mapStateToProps)(MainLayout)
