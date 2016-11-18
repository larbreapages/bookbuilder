const initialState = [
    {
        text: 'Bookbinding',
        isActive: true,
        isDone: false,
    },
    {
        text: 'Colors',
        isActive: false,
        isDone: false,
    },
    {
        text: 'Format',
        isActive: false,
        isDone: false,
    },
    {
        text: 'Pages',
        isActive: false,
        isDone: false,
    },
];

export default function steps(state = initialState, action) {
    switch (action.type) {
    // @FIX: http://redux.js.org/docs/Troubleshooting.html
    case 'NEXT_STEP':
        return state.map((step, index) => {
            if (index === action.payload) {
                return { ...step, isActive: false, isDone: true };
            }
            return step;
        });
    default:
        return state;
    }
}
