"use strict"
import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import { configureStore, DevTools } from './store';
import { ReduxAsyncConnect } from 'redux-connect';

const store = configureStore(browserHistory, {});
const history = syncHistoryWithStore(browserHistory, store);
//render={(props) => <ReduxAsyncConnect {...props}/>}
render(
    <Provider store={store} key="provider">
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

render(
    <Provider store={store}>
        <DevTools />
    </Provider>,
    document.getElementById('devtools')
)






