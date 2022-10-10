import axios from 'axios'
let API_BASE_URL = process.env.apiUrl;
  export const getLogin = (objectWithData) => async dispatch => {
    
    try{

        // const objectWithData = {
        //              "customer_name": "Dileep Maurya",
        //             "customer_id":  112,
        //            "merchant_id":  1,
        //            "language":  'en',
        //        } 

               const headers = {
                'Content-Type': 'application/json',
              }

        const res = await axios.post(`${API_BASE_URL}/member-login`,objectWithData,{headers: headers});
        console.log('getLogin:res:',res);


        dispatch({
            type: "GET_LOGIN_DETAILS",
            payload: res && res.data && res.data.data ? res.data.data : {}
        })
    }
    catch(e){
        console.log(e)
        // dispatch( {
        //     type: "GET_LOGIN_ERROR",
        //     payload: console.log(e),
        // })
    }

}

