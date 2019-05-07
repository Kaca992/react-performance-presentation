import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { MutationPage } from './2. Props Mutation';
import { ChildrenPage } from './3. Children and pure component';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Switch>
            <Route path={"/example-1"} component={MutationPage} />
            <Route path={"/example-2"} component={ChildrenPage} />
            <Route path="/">
                <Redirect to="/example-1" />
            </Route>
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));
