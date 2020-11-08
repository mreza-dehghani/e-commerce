import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducer} from './Redux/Reducer'
import {Provider} from 'react-redux'

// components
import App from './App'

// store
const store = createStore(reducer, applyMiddleware(thunk))

// rendering
const rootElement = document.getElementById('root');

function render() {
    ReactDom.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
    rootElement
    )
}

render()