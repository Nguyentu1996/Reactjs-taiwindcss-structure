import { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
const DetailPage = lazy(() => import('../pages/detail/detail'));
const HomePage = lazy(() => import('../pages/home/home'));

function Routes() {
    return (
        <Suspense fallback={<span>Page loading</span>}>
            <Switch component="">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/detail" component={DetailPage} />
                <Redirect exact path="**" to="/" />

            </Switch>
        </Suspense>

    );
}
export default Routes;