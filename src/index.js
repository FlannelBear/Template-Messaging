import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux and Saga imports
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './redux/reducers';
import rootSaga from './redux/sagas';

const preloadedState = {};
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));