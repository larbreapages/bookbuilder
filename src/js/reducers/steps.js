const initialState = {
    currentStep: 1,
    steps: [
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
        {
            text: 'Gilding',
            isActive: false,
            isDone: false,
        },
        {
            text: 'Summary',
            isActive: false,
            isDone: false,
        },
    ],
};

export default function steps(state = initialState, action) {
    switch (action.type) {
    // FIX: http://redux.js.org/docs/Troubleshooting.html
    case 'NEXT_STEP': {
        if (state.currentStep >= state.steps.length) {
            return state;
        }

        return {
            currentStep: state.currentStep + 1,
            steps: state.steps.map((step, index) => {
                if (index === state.currentStep - 1) {
                    return { ...step, isActive: false, isDone: true };
                }
                if (index === state.currentStep) {
                    return { ...step, isActive: true };
                }
                return step;
            }),
        };
    }
    case 'PREVIOUS_STEP': {
        if (state.currentStep <= 1) {
            return state;
        }

        const currentStep = state.currentStep - 1;
        return {
            currentStep,
            steps: state.steps.map((step, index) => {
                if (index === currentStep - 1) {
                    return { ...step, isActive: true, isDone: false };
                }
                if (index === currentStep) {
                    return { ...step, isActive: false };
                }
                return step;
            }),
        };
    }
    default:
        return state;
    }
}
