import axios from 'axios';
let API_BASE_URL = process.env.apiUrl;
import store from './../store';


export const userTransactionDetails = (merchant_id, token ='') => async (dispatch) => {
  
  //let token = '2920|dyQI6UYfOtusAwaVCsW5pUGNdL2QcOWq5TZDjW4r';

  const headers = {
           'Content-Type': 'application/json','Authorization': `Bearer ${token}`
      }

  try {
    const res = await axios.get(`${API_BASE_URL}/merchant/${merchant_id}`, {
      headers: headers,
    })
    dispatch({
      type: 'TRANSACTION_DETAILS',
      payload: res.data.data,
    })
  } catch (e) {
    dispatch({
      type: 'USERS_ERROR',
      payload: console.log(e),
    })
  }
}

export const winnerResultDetails = (token ='') => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
     };
    const res = await axios.get(`${API_BASE_URL}/result/latest`,config)
    dispatch({
      type: 'WINNER_RESULT_DETAILS',
      payload: res.data.data,
    })
  } catch (e) {
    dispatch({
      type: 'USERS_ERROR',
      payload: console.log(e),
    })
  }
}

export const winnerResultDetailsSecond = (token ='') => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
     };
    const res = await axios.get(`${API_BASE_URL}/result/latest`,config)
    dispatch({
      type: 'WINNER_RESULT_DETAILS',
      payload: res.data.data,
    })
  } catch (e) {
    dispatch({
      type: 'USERS_ERROR',
      payload: console.log(e),
    })
  }
}

export const announcement = (token = '') => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
     };
    const res = await axios.get(`${API_BASE_URL}/announcements/latest`,config)
    dispatch({
      type: 'ANNOUNCEMENT_DETAILS',
      payload: res.data,
    })
    console.log("ANNOUNCEMENT_DETAILS",res)
  } catch (e) {
    dispatch({
      type: 'USERS_ERROR',
      payload: console.log(e),
    })
  }
}

export const specialDraw = (token ='') => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
     };
    const res = await axios.get(`${API_BASE_URL}/special-draw/latest`,config)
    dispatch({
      type: 'SPECIALDRAW_DETAILS',
      payload: res.data,
    })
    console.log("SPECIALDRAW_DETAILS",res)
  } catch (e) {
    dispatch({
      type: 'USERS_ERROR',
      payload: console.log(e),
    })
  }
}

