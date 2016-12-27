const initialState = {
    currentStep: 0,
    acceptConditions: false,
    steps: [
        {
            title: 'Bookbinding',
        },
        {
            title: 'Colors',
        },
        {
            title: 'Format',
        },
        {
            title: 'Summary',
        },
    ],
};

export default function steps(state = initialState, action) {
    switch (action.type) {
    case 'NEXT_STEP': {
        if (state.currentStep >= state.steps.length) {
            return state;
        }

        return { ...state, currentStep: state.currentStep + 1 };
    }
    case 'PREVIOUS_STEP': {
        if (state.currentStep === 0) {
            return state;
        }

        return { ...state, currentStep: state.currentStep - 1 };
    }
    case 'ACCEPT_CONDITIONS': {
        return { ...state, acceptConditions: !state.acceptConditions };
    }
    default:
        return state;
    }
}
