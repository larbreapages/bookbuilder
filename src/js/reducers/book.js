const initialState = {
    bookbinding: 'traditional',
    color: 'black',
    format: 'A5',
    pages: 40,
    gilding: 'Put your text...',
};

export default function book(state = initialState, action) {
    switch (action.type) {
    case 'CHOOSE_BOOKBINDING':
        state.bookbinding = action.payload;
        return state;
    case 'CHOOSE_COLOR':
        state.color = action.payload;
        return state;
    case 'CHOOSE_PAGES_NUMBER':
        state.pages = action.payload;
        return state;
    case 'CHOOSE_GILDING':
        state.gilding = action.payload;
        return state;
    case 'CHOOSE_FORMAT':
        state.format = action.payload;
        return state;
    default:
        return state;
    }
}
