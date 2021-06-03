import React, { Suspense, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// import MainLayout from '../components/layouts/main-layout';

const DetailPage = lazy(() => import('../pages/detail/detail'))
const HomePage = lazy(() => import('../pages/home/home'))
const LoginPage = lazy(() => import('../pages/login/login'))
const NotFoundPage = lazy(() => import('../pages/not-found/not-found'))

function Routes() {
  return (
    <Suspense fallback={<span>Page loading</span>}>
      <Switch component="">
        {/* <MainLayout> */}
        {/* <Switch component=""> */}
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/detail" component={DetailPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect exact path="*" to="/404" />
        {/* </Switch> */}
        {/* </MainLayout> */}
      </Switch>
    </Suspense>
  )
}
export default Routes
