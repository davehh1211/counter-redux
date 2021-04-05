import * as actiontypes from '../actions';


const initialState = {
    counter: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontypes.INCREMENT:
            return {...state, counter: state.counter + 1};
        case actiontypes.DECREMENT:
            return {...state, counter: state.counter - 1};
        case actiontypes.ADDITION:
            return {...state, counter: state.counter + action.val};
        case actiontypes.SUBSTRACT:
            return {...state, counter: state.counter - action.val};
        default:
            return state
    }
}

export default counterReducer;