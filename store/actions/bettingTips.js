import axios from 'axios'

 const API_BASE_URL = process.env.apiUrl

export const serachBettingTips = (getData,token="") => async (dispatch) => {
    console.log('getData',getData);

  let company = getData.company;
  let date = getData.date;
  let number = getData.number;
  let permutation = getData.permutation ? getData.permutation : 0 ;
  let prize = getData.prize;
  let com = ""

    company.forEach((cpny, index) => {
        com = com + `&company[${index}]=${cpny}`
    });

  let pri = ""

    prize.forEach((cpny2, index2) => {
      pri = pri + `&company[${index2}]=${cpny2}`
    });


  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${token}`
    }
    let URL = `${API_BASE_URL}/getBetTips?number=${number}${com}${pri}&permutation=${permutation}&date_range=${date}`;

    const res = await axios.get(
      `${URL}`,{
        headers: headers,
      }
    ) 
    dispatch({
      type: 'GET_SEARCH_BETTING_TIPS',
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: 'GET_SEARCH_BETTING_TIPS_ERROR',
      payload: console.log(e),
    })
  }
}