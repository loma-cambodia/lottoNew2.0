import axios from 'axios';
let API_BASE_URL = process.env.apiUrl;


export const userTransactionDetails = () => async (dispatch) => {
  console.log('userTransactionDetails')
  const headers = {
    'Content-Type': 'application/json',
  }
  try {
    const res = await axios.get(`${API_BASE_URL}/merchant/1`, {
      headers: headers,
    })
    //console.log('res:',res);
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
  console.log('userTransactionDetails')
  try {
    const res = await axios.get(`${API_BASE_URL}/result/latest`)
    // console.log('userTransactionDetails:res:',res);
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
  console.log('userTransactionDetails')
  try {
    const res = await axios.get(`${API_BASE_URL}/result/latest`)
    // console.log('userTransactionDetails:res:',res);
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
