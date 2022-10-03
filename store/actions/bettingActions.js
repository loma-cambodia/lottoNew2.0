import axios from 'axios'

  export const getBettingDates = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://sit.kk-lotto.com/b2b/api/dates`);
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

export const lotterySubmit = (sendData, callback) => async dispatch => {
    
    try{
        const res = await axios.post(`http://sit.kk-lotto.com/b2b/api/lottery-store`,sendData);
        console.log('res:',res);
        dispatch( {
            type: "GET_DATES2",
            payload: res.data.data
        });

        return callback(res.data);

    }
    catch(e){
        dispatch( {
            type: "USERS_ERROR",
            payload: console.log(e),
        });

       // return callback(res.data);
    }

}

