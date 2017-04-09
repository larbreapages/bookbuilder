import { computePrice } from '../../../shared/utils';

const initialState = {
    price: 0,
    priceTTC: 0,
    format: 'small',
    pages: 72,
    shippingCosts: 5,
};

export default function book(state = initialState, action) {
    switch (action.type) {
    case 'CHOOSE_PAPER': {
        state.paper = action.payload;
        const newPrice = computePrice(state);
        return { ...state, price: newPrice };
    }
    case 'CHOOSE_WIRE': {
        state.wire = action.payload;
        const newPrice = computePrice(state);
        return { ...state, price: newPrice };
    }
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
        const pages = action.payload;
        let price = state.price;
        if (typeof pages === 'number' && (pages >= 72 && pages <= 240)) {
            state.pages = pages;
            price = computePrice(state);
        }
        return { ...state, price };
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
