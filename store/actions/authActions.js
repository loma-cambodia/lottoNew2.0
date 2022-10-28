import axios from 'axios'
let API_BASE_URL = process.env.apiUrl;

import {setUserDataFormat} from '../../components/Utils';
  export const getLogin = (objectWithData) => async dispatch => {
    try{  
      let token = localStorage.getItem("kk_lotto_token")
      const headers = {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
                'Authorization': `Bearer ${token}`
              }


        // console.log('objectWithData:',objectWithData);

        const res = await axios.get(`${API_BASE_URL}/getUserData`,{headers: headers});
        let oldData = {};
        if(res && res.data && res.data.data){
           oldData =  setUserDataFormat(res.data.data,2);
           dispatch({
            type: "GET_LOGIN_DETAILS",
            payload: oldData
        });
        }

      //   dispatch({
      //     type: "GET_LOGIN_DETAILS",
      //     payload: res && res.data && res.data.data ? res.data.data : {}
      // });

          // if(res && res.data && res.data.data  && res.data.data.language && res.data.data.language.locale){
          //       dispatch( {
          //         type: "CHANGE_LANGUAGE",
          //         payload: res.data.data.language.locale
          //     });
          //   }



      
    }
    catch(e){

        console.log('Catch:',e);
        // dispatch( {
        //     type: "GET_LOGIN_ERROR",
        //     payload: console.log(e),
        // })
    }

}

