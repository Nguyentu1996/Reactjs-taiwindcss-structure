import React from 'react'
import MainLayout from '../components/layouts/main-layout'
import Routes from './app-router'
import Store from '../store'

function App() {
  return (
    <Store>
      <MainLayout>
        <Routes />
      </MainLayout>
    </Store>
  )
}

export default App
