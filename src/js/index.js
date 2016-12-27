import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';
import Routes from './routes';

const persistedState = loadState();
const store = createStore(
    reducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState({ book: store.getState().book });
    console.log('store changed', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <Router routes={Routes} history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);
