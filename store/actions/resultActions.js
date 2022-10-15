import axios from 'axios'
import moment from 'moment';

//let API_BASE_URL = 'http://api.kk-lotto.com:8080/api';
let API_BASE_URL = process.env.apiUrl

export const getResults = (sendData,callback) => async (dispatch) => {
  let urlHit = ''
   
  try {
    const headers = {
      'Content-Type': 'application/json',
    }
    if(sendData === undefined){
      urlHit = `${API_BASE_URL}/results/get-by-date`;
    }
    else{
      const dataSubmit = moment(sendData).format('YYYY-MM-DD')
      urlHit = `${API_BASE_URL}/results/get-by-date?date=${dataSubmit}`;
}

    const res = await axios.get(urlHit, {
      headers: headers,
    })
    console.log("RESRES",res)
    return callback({
      message: 'Success',
      data: res,
      statusCode: res.status,
    })
  } catch (e) {

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

export const getLatestResultDate = (callback) => async (dispatch) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    }
    let urlHit = `${API_BASE_URL}/results/get-by-date`;

    const res = await axios.get(urlHit, {
      headers: headers,
    })
    return callback({
      message: 'Success',
      data: res.data[0].result_date,
      statusCode: res.status,
    })
    
  } catch (e) {

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
