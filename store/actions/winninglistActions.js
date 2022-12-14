import axios from 'axios'

const API_BASE_URL = process.env.apiUrl

export const getWinningData = (id,filters,token="",callback) => async (dispatch) => {
    let urlHit = ''
    let ticketNo = filters.ticketNo || ""
    let prizeType = filters.prizeType || ""
    let dateRange = filters.dateRange || ""

    
    if (prizeType == 'All'){
        prizeType = ""
    }


    try {

      let kk_lotto_token = localStorage.getItem("kk_lotto_token");
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${kk_lotto_token}`
      }

      
        // urlHit = `${API_BASE_URL}/betListWinning?member_id=${id}`;
        urlHit = `${API_BASE_URL}/betListWinning?member_id=${id}&ticket_no=${ticketNo}&prize_type=${prizeType}&date_range=${dateRange}`;


        // console.log('urlHit: ',urlHit)

      const res = await axios.get(urlHit, {headers: headers,})
      return callback({
        message: 'Success',
        data: res,
        statusCode: res.status,
      })
    } catch (e) {
  
      let message = ''
      if(e.response){
        message = e.response
      }else 
      message = 'Problem in server,try after some time';
      return callback({
        message: message,
        statusCode: 401,
      })
    }
  }
