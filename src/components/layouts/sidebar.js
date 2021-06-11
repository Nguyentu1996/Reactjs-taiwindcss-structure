/* eslint-disable max-len */
import React from 'react'
// import { Link } from 'react-router-dom'
import Icons from '../core/icons'

export default function Sidebar({ onSideClose }) {
  return (
    <>
      <div id="header-menu" className="block relative">
        <h1>
          React & Tailwindcss
        </h1>
        <button className="absolute top-0 right-0 focus:outline-none" onClick={onSideClose}>
          <Icons.Close />
        </button>
      </div>

      <div className="text-gray-700 px-2 pt-5 w-full h-screen overflow-auto">
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
      </div>
    </>
  )
}
