"use strict"

import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import { routerMiddleware } from 'react-router-redux'
import reducer from '../reducer';
import fetchApi from '../middlewares/fetchApi';

export const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
)

export function configureStore(history, initialState) {
    //for isomorphic app
    //let devTools = [];
    //if (typeof document !== 'undefined') {
    //    devTools = [ DevTools.instrument() ]
    //}

    const createStoreWithMiddleware = compose(
        applyMiddleware(
            routerMiddleware(history),
            fetchApi
        ),
        DevTools.instrument() //...devTools
        //window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);


    const store = createStoreWithMiddleware(reducer, initialState);

    return store
}



