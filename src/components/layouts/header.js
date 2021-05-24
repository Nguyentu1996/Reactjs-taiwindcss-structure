import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../core/input-field'
import Icons from '../icons'

function Header() {
  const onclickInHeader = () => {
  }
  return (
    <div className="flex bg-default z-40">
      <div className="container mx-auto pt-1">
        <div className="h-15 sm:h-10 flex flex-wrap content-center">
          <div
            id="nav-left"
            className="text-gray-50 flex content-center self-center pl-2 h-5/6 w-4/12 xl:w-2/12 md:w-3/12 sm:w-3/12"
          >
            <a
              href="/"
              className="flex self-center text-lg cursor-pointer whitespace-nowrap px-10 xl:px-0 md:px-0 sm:px-0"
            >
              React & TailwindCss
            </a>
          </div>
          <div className="flex w-full flex-row xl:w-10/12 md:w-9/12 sm:w-9/12">
            <div id="nav-filter" className="text-gray-50 flex self-center pl-2 w-11/12 xl:w-9/12 md:w-8/12 sm:w-8/12">
              <InputField className="text-base pr-10" type="text" />
            </div>
            <div
              id="nav-right"
              // eslint-disable-next-line max-len
              className="text-gray-50 flex justify-center self-center cursor-pointer w-4/12 xl:w-3/12 md:w-4/12 sm:w-4/12"
            >
              <div className="flex px-2 hover:text-yellow-300">
                <Icons.ShoppingCart clickMe={onclickInHeader} className="flex self-center text-orange-300" />
                <p className="flex self-end text-xs">Cart</p>
              </div>
              <div className="flex self-center absolute top-0 right-0 sm:static flex justify-end self-center ">
                <p className="mt-2 mx-2 text-sm hover:text-yellow-300">VN</p>
                <p className="mt-2 mx-2 text-sm hover:text-yellow-300"><Link to="/login">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
