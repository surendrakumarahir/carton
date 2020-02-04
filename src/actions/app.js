import { SAVE_TOKEN, GET_FEATURED_PRODUCT, GET_LATEST_PRODUCT, GET_CATEGORY_LIST} from './types';
import NavigationService from '../NavigationService';
import {defaultOptions} from '../config';
import {logistical} from '../logistical';

export const saveUserDataLogin = data => dispatch => {
  dispatch({type: 'LOADING', payload: true});
  return new Promise(async (resolve, reject) => {
    const response = await logistical.post('/createUser', data);
    if (response.STATUS === 'success') {
      // dispatch({type: 'OTP_TOKEN_R', payload: response.data});
      dispatch({type: 'LOADING', payload: false});
      resolve(response.MESSAGE);
    } else {
      //dispatch(error(response.data.error[0]));
      dispatch({type: 'LOADING', payload: false});
      reject(response.MESSAGE);
    }
  });
};

export const loginUser = data => dispatch => {
  dispatch({type: 'LOADING', payload: true});
  return new Promise(async (resolve, reject) => {
    const response = await logistical.post('/loginUser', data);
    if (response.STATUS === 'success') {
      dispatch({type: 'LOADING', payload: false});
      dispatch({type: 'USER_DATA_SAVE', payload: response.user_data})
      resolve(response.MESSAGE);
    } else {
      //dispatch(error(response.data.error[0]));
      dispatch({type: 'LOADING', payload: false});
      reject(response.MESSAGE);
    }
  });
};

export const getFeaturedProduct = data => dispatch => {
  return new Promise(async (resolve, reject) => {
    const response = await logistical.post('/get_featured_product', data);
    if (response.STATUS === 'success') {
      dispatch({type: GET_FEATURED_PRODUCT, payload: response.data});
      resolve(response.data);
    } else {

      reject(response.MESSAGE);
    }
  });
};

export const getLatestProduct = data => dispatch => {
  return new Promise(async (resolve, reject) => {
    const response = await logistical.post('/get_latest_product', data);
    if (response.STATUS === 'success') {
      dispatch({type: GET_LATEST_PRODUCT, payload: response.data});
      resolve(response.data);
    } else {

      reject(response.MESSAGE);
    }
  });
};

export const getCategoryList = data => dispatch => {
  return new Promise(async (resolve, reject) => {
    const response = await logistical.post('/get_category_list', data);
    if (response.STATUS === 'success') {
      dispatch({type: GET_CATEGORY_LIST, payload: response.data});
      resolve(response.data);
    } else {

      reject(response.MESSAGE);
    }
  });
};

export const forgotPasswordSaveUserId = data => async dispatch => {
  dispatch({type: 'LOADING', payload: true});
  try {
    const response = await logistical.post('/forgotpassword', data);
    if (response.status === '1') {
      dispatch({type: 'FORGOT_PASSWORD_USER_DATA', payload: response.data});
      NavigationService.navigate('VarifiyEmail');
      dispatch({type: 'LOADING', payload: false});
    } else {
      //dispatch({type: 'FORGOT_PASSWORD_ERROR', payload: response.data});
      dispatch(error(response.data.error[0]));
    }
  } catch (e) {
    console.log(e);
    dispatch(error(e));
  }
};

export const forgotPasswordSaveOtpToken = data => async dispatch => {
  dispatch({type: 'LOADING', payload: true});
  try {
    const response = await logistical.post('/verifyotp', data);
    if (response.status === '1') {
      dispatch({type: 'FORGOT_PASSWORD_USER_DATA', payload: response.data});
      NavigationService.navigate('ResetPassword');
      dispatch({type: 'LOADING', payload: false});
    } else {
      dispatch(error(response.data.error[0]));
    }
  } catch (e) {
    dispatch(error(e));
  }
};

export const resetPassword = data => async dispatch => {
  dispatch({type: 'LOADING', payload: true});
  try {
    const response = await logistical.post('/changepassword', data);
    if (response.status === '1') {
      NavigationService.navigate('Login');
      dispatch({type: 'LOADING', payload: false});
    } else {
      dispatch(error(response.data.error[0]));
    }
  } catch (e) {
    dispatch(error(e));
  }
};

export const uploadDocument = data => dispatch => {
  dispatch({type: 'LOADING', payload: true});
  return new Promise((resolve, reject) => {
    fetch(`${defaultOptions.baseUrl}/uploaddocument`, {
      method: 'POST',
      body: data,
      headers: {
        APIKEY: `${defaultOptions.apikey}`,
      },
    })
      .then(response => response.json())
      .then(response => {
        dispatch({type: 'SAVE_DOCUMENT', payload: response.data});
        dispatch({type: 'LOADING', payload: false});
        resolve(response.data);
      })
      .catch(error => {
        dispatch({type: 'LOADING', payload: false});
        reject(error);
      });
  });
};

export const removeDocument = data => dispatch => {
  dispatch({type: 'LOADING', payload: true});
  return new Promise(async (resolve, reject) => {
    const response = await logistical.post('/removedocument', data);
    if (response.status === '1') {
      dispatch({type: 'REMOVE_DOCUMENT', payload: response.data});
      dispatch({type: 'LOADING', payload: false});
      resolve(response.data);
    } else {
      //dispatch({type: 'REMOVE_DOCUMENT', payload: response.data});
      dispatch({type: 'LOADING', payload: false});
      reject(response.data.error[0]);
    }
  });
};

export const getToken = token => ({
  type: 'GET_TOKEN',
  token,
});

export const saveToken = token => ({
  type: 'SAVE_TOKEN',
  token,
});

export const removeToken = () => ({
  type: 'REMOVE_TOKEN',
});

export const loading = bool => ({
  type: 'LOADING',
  isLoading: bool,
});

export const error = error => ({
  type: 'ERROR',
  error,
});
