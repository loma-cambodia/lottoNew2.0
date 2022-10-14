import axios from 'axios'
let API_BASE_URL = process.env.fronEndUrl;
  export const getLogin = (objectWithData) => async dispatch => {
    
    try{

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

        console.log('Catch:',e);
        // dispatch( {
        //     type: "GET_LOGIN_ERROR",
        //     payload: console.log(e),
        // })
    }

}

