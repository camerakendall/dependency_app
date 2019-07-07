// all actions to be created and sent to reducers

import * as types from '../constants/actionTypes';
// import { type } from 'os';


// need to export all actions here 
export const nextButton = () => ({
    type: types.NEXT_BUTTON,
});

export const requestData = () => ({
    type: types.REQUEST_DATA,
});

export const receiveData = (json) => ({
    type: types.RECEIVE_DATA,
    // codeToDisplay: unsure how the call handles the data
    receivedAt: Date.now(),
})