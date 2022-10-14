import axios from 'axios'

 const API_BASE_URL = process.env.apiUrl
//const API_BASE_URL = 'http://api.kk-lotto.com:8080/api';
//http://api.kk-lotto.com:8080/frontend-api
//http://api.kk-lotto.com:8080/frontend-api/ticket?member_id=4
export const getTicketData = (id) => async (dispatch) => {
 const userId = id
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
    const res = await axios.get(
       `${API_BASE_URL}/betList?member_id=${userId}&ticket_status:UNSETTLED`,{
     //   `${API_BASE_URL}/betList?member_id=${userId}&ticket_status=SETTLED`,{
        headers: headers,
      }
    )
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


export const getTicketDataSettled = (id) => async (dispatch) => {
  const userId = id
   try {
     const headers = {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*',
     }
     const res = await axios.get(
       // `${API_BASE_URL}/betList?member_id=${userId}&ticket_status:UNSETTLED`,{
         `${API_BASE_URL}/betList?member_id=${userId}&ticket_status=SETTLED`,{
         headers: headers,
       }
     )
     dispatch({
       type: 'GET_SETTLE_REPORTS',
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

     date_range = date_range.replace(" ", "");
     date_range = date_range.replace(" ", "");

    // let urlHit = `${API_BASE_URL}/betList?member_id=1&ticket_no=${ticketNumber}&date_range=${date_range}&ticket_status:UNSETTLED`;

    let urlHit = `${API_BASE_URL}/betList?member_id=${member_id}&ticket_status:UNSETTLED`;
   // let urlHit = `${API_BASE_URL}/betList?member_id=${member_id}&ticket_status=SETTLED`
     if(ticketNumber)
     urlHit += `&ticket_no=${ticketNumber}`;

     if(date_range)
     urlHit += `&date_range=${date_range}`;



    const res = await axios.get(`${urlHit}`,{
        headers: headers,
      }
    )
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


export const searchTicketDataSettled = (member_id,date_range, ticketNumber) => async (dispatch) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }

     date_range = date_range.replace(" ", "");
     date_range = date_range.replace(" ", "");

    // let urlHit = `${API_BASE_URL}/betList?member_id=1&ticket_no=${ticketNumber}&date_range=${date_range}&ticket_status:UNSETTLED`;

   // let urlHit = `${API_BASE_URL}/betList?member_id=${member_id}&ticket_status:UNSETTLED`;
    let urlHit = `${API_BASE_URL}/betList?member_id=${member_id}&ticket_status=SETTLED`
     if(ticketNumber)
     urlHit += `&ticket_no=${ticketNumber}`;

     if(date_range)
     urlHit += `&date_range=${date_range}`;



    const res = await axios.get(`${urlHit}`,{
        headers: headers,
      }
    )
    dispatch({
      type: 'GET_SETTLE_REPORTS',
      payload: res.data.data,
    })
  } catch (e) {
    dispatch({
      type: 'Get_Tickets_Error',
      payload: console.log(e),
    })
  }
}

export const getLotteryDetailsList = (getData) => async (dispatch) => {


  let ticketId = getData.ticketId;
  let child_ticket_no = getData.child_ticket_no;
  let game_play_id = getData.game_play_id;
  let game_type = getData.game_type;

  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }




    let URL = `${API_BASE_URL}/betListById?id=${ticketId}`;

    if(child_ticket_no)
    URL += `&child_ticket_no=${child_ticket_no}`;

    if(game_play_id)
    URL += `&game_play_id=${game_play_id}`;

    if(game_type)
    URL += `&game_type=${game_type}`;


    const res = await axios.get(
      `${URL}`,{
        headers: headers,
      }
    )
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

export const filterLotteryDetailsList = (getData) => async (dispatch) => {
  let ticketId = getData.ticketId;
  let child_ticket_no = getData.child_ticket_no;
  let game_play_id = getData.game_play_id;
  let game_type = getData.game_type;
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
    let URL = `${API_BASE_URL}/betListById?id=${ticketId}`;

    if(child_ticket_no)
    URL += `&child_ticket_no=${child_ticket_no}`;

    if(game_play_id)
    URL += `&game_play_id=${game_play_id}`;

    if(game_type)
    URL += `&game_type=${game_type}`;

    const res = await axios.get(
      `${URL}`,{
        headers: headers,
      }
    )
    dispatch({
      type: 'GET_FILTER_CHILD_TICKETS',
      payload: res.data.data,
    })
  } catch (e) {
    dispatch({
      type: 'Get_Tickets_Error',
      payload: console.log(e),
    })
  }
}