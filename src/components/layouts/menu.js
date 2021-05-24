import React, { useState } from 'react'
import Icons from '../icons'

export default function Menu(props) {
  const activeStyle = { color: '#FCD34D', borderBottom: '1px solid rgb(252, 211, 77)' }
  const menuArray = ['Sell', 'Today', 'Most viewed', 'Sell', 'Today', 'Most viewed', 'Sell', 'Today', 'Most viewed']
  const [activeMenu, setActiveMenu] = useState(null)
  let menuListElement = []

  const active = (index) => {
    setActiveMenu(index)
  }

  menuArray.map((item, index) => menuListElement.push(
    <div
      key={index}
      style={(index === activeMenu) ? activeStyle : {}}
      onClick={() => active(index)}
      className="text-gray-50 text-sm self-center whitespace-nowrap focus:outline-none hover:text-yellow-300 px-3"
    >
      {item}
    </div>
  ))

  return (
    <div className="flex bg-default h-11 overflow-x-scroll hide-scroll sm:overflow-hidden">
      <div className="flex self-center cursor-pointer pr-2 md:container mx-auto sm:container mx-auto">
        <div
          id="menu"
          className="flex absolute top-2 left-0 ml-2 xl:static m-0 md:static m-0 sm:flex static m-0"
          onClick={props.toogleSidebar}
        >
          <Icons.Menu className="text-gray-50 focus:outline-none hover:text-yellow-300 h-3/5" />
          <p className="text-gray-50 hidden text-sm self-center focus:outline-none pr-3 xl:inline-flex md:inline-flex sm:inline-flex">
            All
          </p>
        </div>
        {menuListElement}
      </div>
    </div>
  )
}
