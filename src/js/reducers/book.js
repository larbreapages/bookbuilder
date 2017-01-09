import computePrice from '../pricing';

const initialState = {
    bookbinding: 'modern',
    color: 'black',
    format: 'small',
    pages: 72,
    gilding: '',
    price: 0,
};

initialState.price = computePrice(initialState.bookbinding, initialState.format, initialState.pages, initialState.gilding);

export default function book(state = initialState, action) {
    switch (action.type) {
    case 'CHOOSE_COLOR':
        state.color = action.payload;
        return state;
    case 'CHOOSE_BOOKBINDING': {
        state.bookbinding = action.payload;
        const newPrice = computePrice(state.bookbinding, state.format, state.pages, state.gilding);
        return { ...state, price: newPrice };
    }
    case 'CHOOSE_GILDING': {
        state.gilding = action.payload;
        const newPrice = computePrice(state.bookbinding, state.format, state.pages, state.gilding);
        return { ...state, price: newPrice };
    }
    case 'CHOOSE_PAGES_NUMBER': {
        state.pages = action.payload;
        const newPrice = computePrice(state.bookbinding, state.format, state.pages, state.gilding);
        return { ...state, price: newPrice };
    }
    case 'CHOOSE_FORMAT': {
        state.format = action.payload;
        const newPrice = computePrice(state.bookbinding, state.format, state.pages, state.gilding);
        return { ...state, price: newPrice };
    }
    default:
        return state;
    }
}
