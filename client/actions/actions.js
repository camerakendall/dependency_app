// all actions to be created and sent to reducers

import * as types from '../constants/actionTypes';
// import { type } from 'os';


// need to export all actions here 
export const nextButton = () => ({
    type: types.NEXT_BUTTON,
});

// export const requestData = () => ({
//     type: types.REQUEST_DATA,
// });

export const receiveData = (data) => ({
    type: types.RECEIVE_DATA,
    payload: data
});

export const fetchData = (param) => {
    return ((dispatch) => {
        fetch(`/result?query=${param}`, {
            method: 'GET',
            mode: 'no-cors',
            cache: 'default',
            // query: ''
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify(fakeData),
        })
            .then(response => response.json())
            .then(data => console.log("DATA",(data)),
                // error => console.log(error, 'This is error')
            )
    })
}

export const submitButton = () => ({
    type: types.SUBMIT_BUTTON,
})
