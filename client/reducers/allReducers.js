// the main reducer to be used by state
// imports all of the actions from actionTypes

import * as types from '../constants/actionTypes';
import ourQuestions from '../ourQuestions.js';

const initialState = {
    index: 0,
    questions: ourQuestions,
    answers: [
        'Webpack', 'Node', 'Express', 'Nodemon', 'Request', 'Body-Parser', 'node-postgres', 'Mongo', 'Mongoose', 'Babel', 'React', 'CSS', 'Redux',
    ]
}

const allReducers = (state = initialState, action) => {
    let questions = state.questions.slice()
    let index = state.index
    // state = Object.assign({}, state);
    switch (action.type) {
        case types.NEXT_BUTTON: //return something 
            console.log(state.index);
            if(index <= questions.length-2){
                index = index + 1
            }
            return {
                ...state,
                index
            }
        case types.SUBMIT_BUTTON: //return something
            return {


            }
        default:
            return state;
    }
}

export default allReducers;