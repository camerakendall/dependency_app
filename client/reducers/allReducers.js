// the main reducer to be used by state
// imports all of the actions from actionTypes

import * as types from '../constants/actionTypes';

const initialState = {
    questions: [],
    answers: []
}

const allReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.NEXT_BUTTON: //return something 
        {


        }

        case types.SUBMIT_BUTTON: //return something
        {



        }
        default:
            return state;
    }
}






export default allReducers;