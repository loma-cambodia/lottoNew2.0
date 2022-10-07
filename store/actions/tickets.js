import axios from 'axios'

  export const getTicketData = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://api.kk-lotto.com:8080/api/ticket/?member_id=4`);
        dispatch( {
            type: "GET_TICKETS",
            payload: res.data.data
        })
    }
    catch(e){
        dispatch( {
            type: "Get_Tickets_Error",
            payload: console.log(e),
        })
    }

}