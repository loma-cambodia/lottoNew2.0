import axios from 'axios'
//let API_BASE_URL = 'http://api.kk-lotto.com:8080/api';
let API_BASE_URL = process.env.apiUrl

export const getResults = (sendData,callback) => async (dispatch) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    }
    const res = await axios.get(`${API_BASE_URL}/results/get-by-date`, sendData, {
      headers: headers,
    })
    console.log('res:results:', res)
    return callback({
      message: 'Success',
      data: res,
      statusCode: res.status,
    })
  } catch (e) {
    console.log('catch:USERS_ERROR', e);

    // let message = ''
    // if(e.response){
    //   message = e.response
    // }else 
    // message = 'Problem in server,try after some time';
    // return callback({
    //   message: message,
    //   statusCode: 401,
    // })
  }
}

export const lotterySubmit = (sendData, callback) => async (dispatch) => {
  console.log('lotterySubmit')
  // return false;

  try {
    const headers = {
      'Content-Type': 'application/json',
    }
    const res = await axios.post(`${API_BASE_URL}/tickets`, sendData, {
      headers: headers,
    })
    console.log('res:tickets:', res)
    return callback({
      message: 'Success',
      data: res.data.data,
      statusCode: res.status,
    })
  } catch (e) {
    // dispatch( {
    //     type: "USERS_ERROR",
    //     payload: console.log(e),
    // });

    // return callback(res.data);
    console.log('catch:USERS_ERROR', e);

    let message = ''
    if(e.response.data.messages){
      message = e.response.data.messages;
    }else 
    message = 'Problem in server,try after some time';
    return callback({
      message: message,
      statusCode: 401,
    })
  }
}
