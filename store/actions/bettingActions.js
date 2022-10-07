import axios from 'axios';
//let API_BASE_URL = 'http://api.kk-lotto.com:8080/api';
let API_BASE_URL = process.env.apiUrl;


  export const getBettingDates = () => async dispatch => {
    
    try{
    //    const res = await axios.get(`http://uat.kk-lotto.com/b2b/api/dates`);
    const res = await axios.get(`${API_BASE_URL}/dates/all`);
       // console.log('res:',res);
        dispatch( {
            type: "GET_DATES",
            payload: res.data.data
        })
    }
    catch(e){
        dispatch( {
            type: "USERS_ERROR",
            payload: console.log(e),
        })
    }

}

export const lotterySubmit = (sendData, callback) => async dispatch => {

    console.log('lotterySubmit');
   // return false;
    
    try{
        const headers = {
            'Content-Type': 'application/json'
          }
        const res = await axios.post(`${API_BASE_URL}/tickets`,sendData,{
            headers: headers
          });
        console.log('res:tickets:',res);
        return callback({'message': 'Success', data:res.data.data, statusCode:res.status});

    }
    catch(e){
        // dispatch( {
        //     type: "USERS_ERROR",
        //     payload: console.log(e),
        // });

       // return callback(res.data);
       console.log('catch:USERS_ERROR',e);
       return callback({'message': 'Problem in server,try after some time', statusCode:401});
    }

}

