import axios from 'axios';
let API_BASE_URL = process.env.apiUrl;


export const userTransactionDetails = () => async (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  try {
    const res = await axios.get(`${API_BASE_URL}/merchant/1`, {
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

export const winnerResultDetails2 = () => async (dispatch) => {
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
