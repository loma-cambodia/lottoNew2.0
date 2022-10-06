import axios from 'axios'

  export const getTicketData = () => async dispatch => {
    console.log('userTickets');
    try{
        const res = await axios.get(`http://api.kk-lotto.com:8080/api/ticket/1?member_id=1`);
        console.log('TICKETS-->>>:',res);
        dispatch( {
            type: "Get_Tickets",
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