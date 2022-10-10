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
      `${API_BASE_URL}/ticket?member_id=7`,{
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

export const searchTicketDataP = (ticketNumber) => async (dispatch) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }

    //console.log('ticketNumber:', ticketNumber);
    const res = await axios.get(
      `${API_BASE_URL}/ticket?member_id=7&ticket_no=${ticketNumber}`,{
        headers: headers,
      }
    )
    console.log("SEARCH TICKET-->>",res)
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

export const searchTicketData = (ticketNumber) => async (dispatch) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }

    //console.log('ticketNumber:', ticketNumber);
    const res = await axios.get(
      `${API_BASE_URL}/ticket?member_id=7&ticket_no=${ticketNumber}`,{
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

