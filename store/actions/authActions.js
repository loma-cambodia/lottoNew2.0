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

export const updateUser = (objectWithData) => async dispatch => {
  try{  
    let token = localStorage.getItem("kk_lotto_token")
    const headers = {
              'Content-Type': 'application/json',
              'Accept' : 'application/json',
              'Authorization': `Bearer ${token}`
            }

      const res = await axios.post(`${API_BASE_URL}/getUserData`,objectWithData,{headers: headers});
      let oldData = {};
      if(res && res.data && res.data.data){
         oldData =  setUserDataFormat(res.data.data,2);
        //  dispatch({
        //   type: "GET_LOGIN_DETAILS",
        //   payload: oldData
        // });
      }



  }
  catch(e){

      console.log('Catch:',e);
      // dispatch( {
      //     type: "GET_LOGIN_ERROR",
      //     payload: console.log(e),
      // })
  }

}




export const updateUserWithSession = (objectWithData) => async dispatch => {
    
  try{
      const headers = {'Content-Type': 'application/json'}
      const res = await axios.post(`/api/updateUser`,objectWithData,{headers: headers});
      let oldData = {};
      console.log('res:',res);
      if(res && res.data && res.data.data){
         oldData =  setUserDataFormat(res.data.data,3);
         console.log('oldData:',oldData);
         dispatch({
          type: "GET_LOGIN_DETAILS",
          payload: oldData
      });

      localStorage.setItem("kk_lotto_token", oldData.token)
      }


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

