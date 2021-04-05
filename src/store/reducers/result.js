import * as actiontypes from '../actions';


const initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontypes.STORE_RESULT:
            return {...state, results: state.results.concat({id: new Date(), value: action.result})};
        case actiontypes.DELETE_RESULT:
            const newArr = state.results.filter(result => result.id !== action.resultId)
            return {...state, results: newArr}
        default:
            return state
    }
}

export default resultReducer;