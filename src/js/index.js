import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import { loadState, saveState, removeState } from './localStorage';
import { computeTVA } from './pricing';
import Routes from './routes';

const persistedState = loadState();
const store = createStore(
    reducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState({ book: store.getState().book });
    store.getState().book.tva = computeTVA(store.getState().book.price);
    if (store.getState().steps.reset) {
        removeState();
    }
    console.log('store changed', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <Router routes={Routes} history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);
