import axios from 'axios'

 const API_BASE_URL = process.env.apiUrl
//const API_BASE_URL = 'http://api.kk-lotto.com:8080/api';
//http://api.kk-lotto.com:8080/frontend-api
//http://api.kk-lotto.com:8080/frontend-api/ticket?member_id=4
export const getTicketData = (id) => async (dispatch) => {
 
  console.log('getTicketData:');
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
    const res = await axios.get(
      `${API_BASE_URL}/betList?member_id=${id}&ticket_status:UNSETTLE`,{
        headers: headers,
      }
    )
    console.log("TICKET-DATA-->>",res)
    dispatch({
      type: 'GET_TICKETS',
      payload: res.data.data,
    })
  } catch (e) {
    dispatch({
      type: 'Get_Tickets_Error',
      payload: console.log(e),
    })
  }
}

export const searchTicketData = (member_id,date_range, ticketNumber) => async (dispatch) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
   /// const date = date_range.replace(/\s+/g, '-');
    //console.log('ticketNumber:', ticketNumber);

     date_range = date_range.replace(" ", "");
     date_range = date_range.replace(" ", "");

    // let urlHit = `${API_BASE_URL}/betList?member_id=1&ticket_no=${ticketNumber}&date_range=${date_range}&ticket_status:UNSETTLED`;

     let urlHit = `${API_BASE_URL}/betList?member_id=${member_id}&ticket_status:UNSETTLED`;
     if(ticketNumber)
     urlHit += `&ticket_no=${ticketNumber}`;

     if(date_range)
     urlHit += `&date_range=${date_range}`;



    const res = await axios.get(`${urlHit}`,{
        headers: headers,
      }
    )
    console.log("SEARCH TICKET-->>",res)
    dispatch({
      type: 'GET_SEARCH_TICKETS',
      payload: res.data.data,
    })
  } catch (e) {
    dispatch({
      type: 'Get_Tickets_Error',
      payload: console.log(e),
    })
  }
}

export const getLotteryDetailsList = (ticketNumber) => async (dispatch) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }

    console.log('getLotteryDetailsList:ticketNumber:', ticketNumber);
    const res = await axios.get(
      `${API_BASE_URL}/betListById?id=${ticketNumber}`,{
        headers: headers,
      }
    )
    console.log("SEARCH TICKET-->>",res)
    dispatch({
      type: 'GET_SEARCH_TICKETS_CHILD',
      payload: res.data.data,
    })
  } catch (e) {
    dispatch({
      type: 'Get_Tickets_Error',
      payload: console.log(e),
    })
  }
}

