import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store';
import { Provider } from 'react-redux';
import { App } from './components/app/app';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
