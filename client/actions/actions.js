// all actions to be created and sent to reducers

import * as types from '../constants/actionTypes';

export const nextButton = () => ({
    type: types.NEXT_BUTTON,
});

export const receiveData = (data) => ({
    type: types.RECEIVE_DATA,
    payload: data
});

export const fetchData = (query) => {
    return ((dispatch) => {
        fetch(`/result?query=${query}`, {
            method: 'GET',
            mode: 'no-cors',
            cache: 'default',
        })
            .then(response => response.json())
            .then(data => {
                // console.log("DATA", data)
                dispatch(receiveData(data))
            })
    })
}

export const submitButton = () => ({
    type: types.SUBMIT_BUTTON,
})
