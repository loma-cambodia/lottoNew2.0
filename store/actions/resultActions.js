import axios from 'axios'
//let API_BASE_URL = 'http://api.kk-lotto.com:8080/api';
let API_BASE_URL = process.env.apiUrl

export const getResults = () => async (dispatch) => {
  try {
    //    const res = await axios.get(`http://uat.kk-lotto.com/b2b/api/dates`);
    const res = await axios.get(`${API_BASE_URL}/results/date`)
    // console.log('res:',res);
    dispatch({
      type: 'GET_DATES',
      payload: res.data.data,
    })
  } catch (e) {
    dispatch({
      type: 'USERS_ERROR',
      payload: console.log(e),
    })
  }
}
