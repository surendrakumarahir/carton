import {defaultOptions} from '../config';
import {REMOVE_USER_DATA, SAVE_TOKEN, USER_DATA_SAVE} from './types';
import NavigationService from '../NavigationService';
import {error} from './app';

export const removeUserData = data => dispatch => {
    // const params = {
    //   name: data.username,
    //   email: data.email,
    //   password: data.password,
    // };
    //   dispatch({type: REMOVE_USER_DATA});
    //   NavigationService.navigate('Welcome');
    console.log(`${defaultOptions.baseUrl}/logout`);
    console.log(JSON.stringify(data));
    console.log(`${defaultOptions.apikey}`);
    fetch(`${defaultOptions.baseUrl}/logout`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            APIKEY: `${defaultOptions.apikey}`,
            'Content-type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(json => {
            if (json.status == 1) {
                console.log(json.data);
                dispatch({type: REMOVE_USER_DATA});
                NavigationService.navigate('Welcome');
            } else {
                console.log(json.data.error);
            }
        })
        .catch(err => {
            console.log(err);
        });
};
export const saveUserData = data => dispatch => {
    dispatch({type: 'LOADING', payload: true});
    console.log(`${defaultOptions.baseUrl}/register`);
    console.log(JSON.stringify(data));
    fetch(`${defaultOptions.baseUrl}/register`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            APIKEY: `${defaultOptions.apikey}`,
            'Content-type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(json => {
            if (json.status == 1) {
                console.log(json.data);
                dispatch({type: USER_DATA_SAVE, payload: json.data.user});
                dispatch({type: SAVE_TOKEN, token: json.data.access_token});
                NavigationService.navigate('Deshboard');
                dispatch({type: 'LOADING', payload: false});
            } else {
                console.log(json.data.error);
                dispatch(error(json.data.error[0]));
            }
        })
        .catch(err => {
            console.log(err);
        });
};
