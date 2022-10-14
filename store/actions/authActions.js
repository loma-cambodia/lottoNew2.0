import axios from 'axios'
let API_BASE_URL = process.env.fronEndUrl;
  export const getLogin = (objectWithData) => async dispatch => {
    
    try{

        // const objectWithData2 = {
        //              "customer_name": "Dileep Maurya",
        //             "customer_id":  112,
        //            "merchant_id":  1,
        //            "language":  'en',
        //        } 

               const headers = {
                'Content-Type': 'application/json',
              }

        const res = await axios.post(`/api/updateUser`,objectWithData,{headers: headers});


        dispatch({
            type: "GET_LOGIN_DETAILS",
            payload: res && res.data && res.data.data ? res.data.data : {}
        })
    }
    catch(e){
        // dispatch( {
        //     type: "GET_LOGIN_ERROR",
        //     payload: console.log(e),
        // })
    }

}

