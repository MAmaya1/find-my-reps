// Import Actions

import {
    GET_REPS_START,
    GET_REPS_SUCCESS,
    GET_REPS_FAILURE
} from '../actions/index';

// Set Initial State

const initialState = {
    reps: {},
    fetchingReps: false,
    fetchingRepsError: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_REPS_START:
            return {
                ...state,
                fetchingReps: true
            }

        case GET_REPS_SUCCESS:
            return {
                ...state,
                reps: action.payload,
                fetchingReps: false
            }

        case GET_REPS_FAILURE:
            return {
                ...state,
                fetchingReps: false,
                fetchingRepsError: action.payload
            }

        default:
                return state;
    }
}

export default reducer;