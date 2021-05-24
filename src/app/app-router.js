import React, { Suspense, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// import MainLayout from '../components/layouts/main-layout';

const DetailPage = lazy(() => import('../pages/detail/detail'))
const HomePage = lazy(() => import('../pages/home/home'))
const LoginPage = lazy(() => import('../pages/login/login'))

function Routes() {
  return (
    <Suspense fallback={<span>Page loading</span>}>
      <Switch component="">
        {/* <MainLayout> */}
        {/* <Switch component=""> */}
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/detail" component={DetailPage} />
        <Redirect exact path="*" to="/" />
        {/* </Switch> */}
        {/* </MainLayout> */}
      </Switch>
    </Suspense>
  )
}
export default Routes
