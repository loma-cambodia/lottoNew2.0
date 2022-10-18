import axios from 'axios';
let API_BASE_URL = process.env.apiUrl;


export const userTransactionDetails = (merchant_id) => async (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
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

export const winnerResultDetails = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/result/latest`)
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

export const winnerResultDetailsSecond = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/result/latest`)
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

export const announcement = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/announcements/latest`)
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

