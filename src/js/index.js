import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState, removeState } from './localStorage';
import { computeTVA } from './utils';
import reducers from './reducers';
import App from './components/App';

const persistedState = loadState();
const store = createStore(
    reducers,
    persistedState,
);

const round = (value, decimals) => Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
store.subscribe(() => {
    saveState({ book: store.getState().book, steps: store.getState().steps });
    store.getState().book.tva = computeTVA(store.getState().book.price);
    store.getState().book.priceTTC = round(store.getState().book.tva + store.getState().book.price, 2);
    store.getState().book.total = round(store.getState().book.priceTTC + store.getState().book.shippingCosts, 2);
    if (store.getState().steps.reset) {
        removeState();
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('bookbuilder'),
);
