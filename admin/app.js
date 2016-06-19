"use strict"
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHistory } from 'history';
import routes from './routes';
import reducer from './reducer';
import DevTools from './components/DevTools';

var initialState = {
    books: [
        {name: 'zxc'}
    ]
}

const store = createStore(
    reducer,
    initialState,
    DevTools.instrument()
)
const history = syncHistoryWithStore(browserHistory, store)

const Root = () => (
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
)

render(
    <Root />,
    document.getElementById('app')
)


