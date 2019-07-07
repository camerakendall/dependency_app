// the main reducer to be used by state
// imports all of the actions from actionTypes

import * as types from '../constants/actionTypes';

const initialState = {
    questions: ['a', 'b', 'c', 'd'],
    answers: []
}

const allReducers = (state = initialState, action) => {
    let questions = state.questions.slice()
    switch (action.type) {
        case types.NEXT_BUTTON: //return something 
            questions.push('Dillon');
            console.log(questions);
            return {
                ...state,
                questions
            }
        case types.SUBMIT_BUTTON: //return something
            return {


            }
        default:
            return state;
    }
}






export default allReducers;