"use strict"
import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHistory } from 'history';
import routes from './routes';
import reducer from './reducer';
import DevTools from './components/DevTools';
import my from './middlewares/my';
import promiseMiddleware from 'redux-promise';

const createStoreWithMiddleware = compose(
    applyMiddleware(promiseMiddleware),
    DevTools.instrument()
)(createStore);

let initial = {
    books: [
        {name: 'hello'}
    ]
}

const store = createStoreWithMiddleware(reducer, initial);
const history = syncHistoryWithStore(browserHistory, store)

const Root = () => (
    <Provider store={store}>
        <div>
            <Router history={history} routes={routes} />
            <DevTools />
        </div>
    </Provider>
)

render(
    <Root />,
    document.getElementById('app')
)


