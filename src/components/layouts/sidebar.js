/* eslint-disable max-len */
import React from 'react'
import Icons from '../icons'

export default function Sidebar(props) {
  return (
    <>
      <div className={props.slideIn
        ? 'flex absolute top-0 left-0 min-h-full bg-gray-50 transition-opacity transition duration-300 slide-in w-4/6 z-50 xl:w-3/12 max-w-xs md:w-4/12 sm:w-5/12'
        : 'flex absolute top-0 -left-2/3 min-h-full bg-gray-50 transition-opacity w-4/6 slide-out z-50 xl:w-3/12 flex absolute top-0 max-w-xs md:w-4/12 flex absolute top-0 -left-1/3 sm:w-5/12 -left-1/2'}
      >
        <div className="w-full p-2">
          <div id="top-bar" className="block">
            <a href="/" className="inline-lock float-left self-center text-lg cursor-pointer whitespace-nowrap">React & TailwindCss</a>
            <Icons.Close className="float-right" close={props.close} />
          </div>
        </div>
      </div>
    </>
  )
}
