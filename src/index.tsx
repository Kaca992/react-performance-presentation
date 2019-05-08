import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { MutationPage } from './2. Props Mutation';
import { ChildrenPage } from './3. Children and pure component';
import GhostPropsContainer from './4. Ghost props';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Switch>
            <Route path={"/example-2"} component={MutationPage} />
            <Route path={"/example-3"} component={ChildrenPage} />
            <Route path={"/example-4"} component={GhostPropsContainer} />
            <Route path="/">
                <Redirect to="/example-2" />
            </Route>
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));
