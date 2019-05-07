import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { MutationPage } from './2. Props Mutation';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Route path={["/", "/example-1"]} component={MutationPage} />
    </Router>
</Provider>, document.getElementById('root'));
