import axios from 'axios'
//let API_BASE_URL = 'http://api.kk-lotto.com:8080/api';
let API_BASE_URL = process.env.apiUrl

export const getBettingDates = (token ='') => async (dispatch) => {
  try {
    //    const res = await axios.get(`http://uat.kk-lotto.com/b2b/api/dates`);
    let kk_lotto_token = localStorage.getItem("kk_lotto_token");
    const config = {
      headers: { Authorization: `Bearer ${kk_lotto_token}` }
     };
    const res = await axios.get(`${API_BASE_URL}/dates/all`,config)
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

  //console.log('lotterySubmit:sendData:', sendData);



  try {

    //let kk_lotto_token = '';
   // let token = localStorage.getItem("kk_lotto_token");
    let kk_lotto_token = localStorage.getItem("kk_lotto_token");
    const headers = {
      'Content-Type': 'application/json','Authorization': `Bearer ${kk_lotto_token}`
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
