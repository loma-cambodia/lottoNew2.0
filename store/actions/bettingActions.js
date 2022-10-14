import axios from 'axios'
//let API_BASE_URL = 'http://api.kk-lotto.com:8080/api';
let API_BASE_URL = process.env.apiUrl

export const getBettingDates = () => async (dispatch) => {
  try {
    //    const res = await axios.get(`http://uat.kk-lotto.com/b2b/api/dates`);
    const res = await axios.get(`${API_BASE_URL}/dates/all`)
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

export const lotterySubmit = (sendData, callback) => async (dispatch) => {
  // return false;

  try {
    const headers = {
      'Content-Type': 'application/json',
    }
    const res = await axios.post(`${API_BASE_URL}/tickets`, sendData, {
      headers: headers,
    })
    
      if(res.data.message_id  == 200){

        return callback({
          message: 'Success',
          messages:res.data.messages,
          message_id:res.data.message_id,
          data: res.data.data,
          statusCode: res.status,
        })

      }else{

        return callback({
          message: 'Success',
          messages:res.data.messages,
          message_id:res.data.message_id,
          data: [],
          statusCode: res.status,
        })

      }



    
  } catch (e) {
    // dispatch( {
    //     type: "USERS_ERROR",
    // });

    // return callback(res.data);


    return callback({
      message: 'Failed',
      messages:e.response.data.messages,
      message_id:e.response.data.message_id,
      data: [],
      statusCode: e.response.status,
    })
    // let message = ''
    // if(e && e.response && e.response.data && e.response.data.messages){
    //   message = e.response.data.messages;
    // }else 
    // message = 'Problem in server,try after some time';
    // return callback({
    //   message: message,
    //   statusCode: 401,
    // })
  }
}
