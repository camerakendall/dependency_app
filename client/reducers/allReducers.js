// the main reducer to be used by state
// imports all of the actions from actionTypes

import * as types from '../constants/actionTypes';
import ourQuestions from '../ourQuestions.js';

const initialState = {
    // to be used in redux to determine if the fetch is actually going out
    isFetching: false,
    codeToDisplay: null,
    isItTimeForResults:false,
    index: 0,
    questions: ourQuestions,
    answers: [
        'Webpack', 'Node', 'Express', 'Nodemon', 'Request', 'Body-Parser', 'node-postgres', 'Mongo', 'Mongoose', 'Babel', 'React', 'CSS', 'Redux',
    ],
    answers2: []
}

const allReducers = (state = initialState, action) => {
    let questions = state.questions.slice()
    let index = state.index
    let isItTimeForResults = state.isItTimeForResults
    // state = Object.assign({}, state);
    switch (action.type) {
        case types.NEXT_BUTTON: //return something 
            if (index <= questions.length - 2) {
                index = index + 1
            }
            return {
                ...state,
                index
            }
        // case types.REQUEST_DATA:
        //     return Object.assign({}, state, {
        //         isFetching: true,
        //     })
        case types.RECEIVE_DATA:
            let stateClone = { ...state };
            // console.log("here", action.payload)
            const data = action.payload;
            // console.log(data, 'this is data before action payload')
            // console.log(data, 'this is the action payload')
            stateClone.codeToDisplay = data;
            // console.log(JSON.stringify(stateClone))
            return stateClone
        case types.SUBMIT_BUTTON: //return something
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