import React from 'react'

function MenuItem({ key, item, onActiveMenu, activeMenu }) {
  const activeStyle = { color: '#FCD34D', borderBottom: '1px solid rgb(252, 211, 77)' }

  return (
    <div
      key={key}
      style={(key === activeMenu) ? activeStyle : {}}
      onClick={onActiveMenu}
      className="text-gray-50 text-sm self-center whitespace-nowrap focus:outline-none hover:text-yellow-300 px-3"
    >
      {item}
    </div>
  )
}
export default MenuItem
