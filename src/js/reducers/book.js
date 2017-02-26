import { computePrice, computeTVA, shippingCosts } from '../utils';

const initialState = {
    bookbinding: 'modern',
    paper: 1,
    wire: 1,
    format: 'small',
    pages: 72,
    gilding: '',
    shippingCosts,
};

initialState.price = computePrice(initialState);
initialState.tva = computeTVA(initialState.price);
initialState.priceTTC = initialState.price + initialState.tva;
initialState.total = initialState.priceTTC + initialState.shippingCosts;

export default function book(state = initialState, action) {
    switch (action.type) {
    case 'CHOOSE_PAPER':
        state.paper = action.payload;
        return state;
    case 'CHOOSE_WIRE':
        state.wire = action.payload;
        return state;
    case 'CHOOSE_BOOKBINDING': {
        state.bookbinding = action.payload;
        const newPrice = computePrice(state);
        return { ...state, price: newPrice };
    }
    case 'CHOOSE_GILDING': {
        state.gilding = action.payload;
        const newPrice = computePrice(state);
        return { ...state, price: newPrice };
    }
    case 'CHOOSE_PAGES_NUMBER': {
        state.pages = action.payload;
        const newPrice = computePrice(state);
        return { ...state, price: newPrice };
    }
    case 'CHOOSE_FORMAT': {
        state.format = action.payload;
        const newPrice = computePrice(state);
        return { ...state, price: newPrice };
    }
    default:
        return state;
    }
}
