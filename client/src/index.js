import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import './css/style.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import configureStore from './store/store'

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
serviceWorker.unregister()