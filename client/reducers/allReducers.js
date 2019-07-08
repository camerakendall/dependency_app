// the main reducer to be used by state
// imports all of the actions from actionTypes

import * as types from '../constants/actionTypes';
// import ourQuestions from '../ourQuestions.js';// 

const initialState = {
    isItTimeForResults:false,
    index: 0,
    questions: [
        "Will you be using a Mac Operating system?",
        "Are you going to be building a Full-Stack application?",
        "Awesome! Will you be using Node.js for your Backend?",
        "Do you want to use Express with your Node.js?",
        "Would you like to install Nodemon?",
        "Will you be utilizing a database?",
        "Are you going to use a SQL database?",
        "Do you want to use Postgresql as your SQL database?",
        "Do you want to use a NoSQL database?",
        "Would you like to use MongoDB as your NoSQL database?",
        "Do you want to use Mongoose with MongoDB?",
        "Do you want to install body-parser middle-ware for any POST requests you make?",
        "Almost done - Will you be using React for your Frontend?",
        "Are you going to use Redux for your React state management?",
        "Last question! Do you wish to bundle your app with Webpack?",
        "... All Done! Click the sumbit button below to obtain your dependecies.",
      ],
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
            isItTimeForResults = true
            console.log('true')
            return {
                ...state,
                isItTimeForResults
            }
        default:
            return state;
    }
}






export default allReducers;