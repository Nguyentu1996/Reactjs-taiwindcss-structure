import React from 'react'
import imagename from '../../resources/images/logo192.png'

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        <img alt="logo name" src={imagename} />
      </p>
    </div>
  )
}
