import axios from 'axios'

const API_BASE_URL = process.env.apiUrl

export const getWinningData = (id,callback) => async (dispatch) => {
    let urlHit = ''
   
    try {
      const headers = {
        'Content-Type': 'application/json',
      }
      
        urlHit = `${API_BASE_URL}/betListWinning?member_id=${id}`;

  
      const res = await axios.get(urlHit, {headers: headers,})
      console.log('winning action res:results:', res)
      return callback({
        message: 'Success',
        data: res,
        statusCode: res.status,
      })
    } catch (e) {
      console.log('catch:USERS_ERROR', e);
  
      let message = ''
      if(e.response){
        message = e.response
      }else 
      message = 'Problem in server,try after some time';
      return callback({
        message: message,
        statusCode: 401,
      })
    }
  }

  export const filterWinningData = (id,filters,callback) => async (dispatch) => {
    let urlHit = ''
   
    try {
      const headers = {
        'Content-Type': 'application/json',
      }
      
        urlHit = `${API_BASE_URL}/betListWinning?member_id=${id}`;

  
      const res = await axios.get(urlHit, {headers: headers,})
      console.log('winning action res:results:', res)
      return callback({
        message: 'Success',
        data: res,
        statusCode: res.status,
      })
    } catch (e) {
      console.log('catch:USERS_ERROR', e);
  
      let message = ''
      if(e.response){
        message = e.response
      }else 
      message = 'Problem in server,try after some time';
      return callback({
        message: message,
        statusCode: 401,
      })
    }
  }