import axios from 'axios'

  export const getLogin = () => async dispatch => {
    
    try{
      //  const res = await axios.get(`http://uat.kk-lotto.com/b2b/api/dates`);
      const res = await axios.get(`http://api.kk-lotto.com:8080/api/dates/all`);
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

