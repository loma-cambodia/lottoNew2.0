import axios from 'axios'

export const speedUp = (value) => {
    return {
      type: 'SPEED_UP',
      value:value,
      step: 200,
      maxValue: 100,
      payload:{name:'dileep Kumar', age:32, address:'Noida Sectior 51'}
    }
  }
  
  export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: "GET_USERS",
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: "USERS_ERROR",
            payload: console.log(e),
        })
    }

}

export const getMerchantData = () => async dispatch => {
    
  try{
      const res = await axios.get(`http://uat.kk-lotto.com/b2b/api/merchant/1`)
      dispatch( {
          type: "GET_USERS",
          payload: res.data
      })
  }
  catch(e){
      dispatch( {
          type: "USERS_ERROR",
          payload: console.log(e),
      })
  }

}

