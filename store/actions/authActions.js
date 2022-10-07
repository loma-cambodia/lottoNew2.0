import axios from 'axios'
let API_BASE_URL = process.env.apiUrl;
  export const getLogin = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://uat.kk-lotto.com/b2b/api/dates`);
        console.log('res:',res);
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

