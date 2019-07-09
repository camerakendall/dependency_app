// the main reducer to be used by state
// imports all of the actions from actionTypes

import * as types from '../constants/actionTypes';
import ourQuestions from '../ourQuestions.js';

const initialState = {
    // to be used in redux to determine if the fetch is actually going out
    codeToDisplay: null,
    isItTimeForResults: false,
    index: 0,
    questions: ourQuestions,
    answers: [
        'Webpack', 'Node', 'Express', 'Nodemon', 'Request', 'Body-Parser', 'node-postgres', 'Mongo', 'Mongoose', 'Babel', 'React', 'CSS', 'Redux',
    ]
}

const allReducers = (state = initialState, action) => {
    let questions = state.questions.slice()
    let index = state.index
    let isItTimeForResults = state.isItTimeForResults
    // state = Object.assign({}, state);
    switch (action.type) {
        case types.NEXT_BUTTON: 
            if (index <= questions.length - 2) {
                index = index + 1
            }
            return {
                ...state,
                index
            }

        case types.RECEIVE_DATA:
            let stateClone = { ...state };
            const data = action.payload;
            stateClone.codeToDisplay = data;
            return stateClone

        case types.SUBMIT_BUTTON: 
            isItTimeForResults = true
            return {
                ...state,
                isItTimeForResults
            }

        default:
            return state;
    }
}

export default allReducers;