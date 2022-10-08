import axios from 'axios'

const API_BASE_URL = process.env.apiUrl
export const getTicketData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_BASE_URL}/ticket/?member_id=4`
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
