// the main reducer to be used by state
// imports all of the actions from actionTypes

import * as types from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    codeToDisplay: null,
    index: 0,
    questions: ['a', 'b', 'c', 'd'],
    answers: [
         'Webpack', 'Node', 'Express', 'Nodemon', 'Request', 'Body-Parser', 'node-postgres', 'Mongo', 'Mongoose', 'Babel', 'React', 'CSS', 'Redux',
    ]
}

const allReducers = (state = initialState, action) => {
    let questions = state.questions.slice()
    switch (action.type) {
        case types.NEXT_BUTTON: //return something 
            return {
                ...state,
                index: state.index + 1
            }
        case types.REQUEST_DATA: //return something
            return Object.assign({}, state, {
                isFetching: true,
            })
        
        default:
            return state;
    }
}






export default allReducers;