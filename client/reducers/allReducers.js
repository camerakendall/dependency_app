// the main reducer to be used by state
// imports all of the actions from actionTypes

import * as types from '../constants/actionTypes';

const initialState = {
    index: 0,
    questions: ['Are you using wepack?', 'b', 'c', 'd'],
    answers: [
         'Webpack', 'Node', 'Express', 'Nodemon', 'Request', 'Body-Parser', 'node-postgres', 'Mongo', 'Mongoose', 'Babel', 'React', 'CSS', 'Redux',
    ]
}

const allReducers = (state = initialState, action) => {
    let questions = state.questions.slice()
    // state = Object.assign({}, state);
    switch (action.type) {
        case types.NEXT_BUTTON: //return something 
            console.log(state.index);
            return {
                ...state,
                index: state.index + 1
            }
        case types.SUBMIT_BUTTON: //return something
            return {


            }
        default:
            return state;
    }
}






export default allReducers;