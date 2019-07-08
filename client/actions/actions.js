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

export const receiveData = (data) => ({
    type: types.RECEIVE_DATA,
    data
});

export const fetchData = (url = '/result', data = []) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data,
    })
        .then(
            response => {dispatchEvent(receiveData(response.data))},
            // error => console.log(error, 'This is error')
        )
  }