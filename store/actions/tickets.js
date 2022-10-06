// import axios from 'axios'

//   export const userTickets = () => async dispatch => {
//     console.log('userTickets');
//     try{
//         const res = await axios.get(`http://api.kk-lotto.com:8080/api/ticket/1?member_id=1`);
//         console.log('TICKETS-->>>:',res);
//         // dispatch( {
//         //     type: "TRANSACTION_DETAILS",
//         //     payload: res.data.data
//         // })
//     }
//     catch(e){
//         dispatch( {
//             type: "USERS_ERROR",
//             payload: console.log(e),
//         })
//     }

// }