import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { useDispatch, useSelector, } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from '../styles/Home.module.css'
import WinngListBanner from '../components/Winning/Banner';
import ListTable from '../components/BettingList/BettingListTable';
import {getTicketData,searchTicketData} from '../store/actions/reportActions';
import {getWinningData} from '../store/actions/winninglistActions';
import moment from 'moment';

import ReactPaginate from 'react-paginate';

import Filter from "../components/Winning/filter";


export default function WinningList({datauser}) {


// console.log("TICKETLIST",datauser);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  console.log('WinningList:auth:',auth);

  const [active, setActive] = useState(false);
  const [winningList, setWinningList] = useState([]);

  const itemsPerPage  = 10;

  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);

  
  const MoneyFormatDisplay = (theInput, getCase) => {
    //Do something with the input
    let getInput = theInput;
    if(getCase == 1){
     if(getInput){

       let newStr = theInput.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
       newStr = parseFloat(newStr).toFixed(2);
       return newStr;

     }else 
       return '0.00';
    }else{
       return parseFloat(lottery.slave_net_amount).toFixed(2)
    }
 };
  const getWinningList = () =>{
    console.log('auth in getwinninglist:',auth.auth.id);

    dispatch(getWinningData(auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0 , response =>{
      // console.log('inside dispatch dataSubmit date:   ',dataSubmit);

        if(response.statusCode  == 201  || response.statusCode  == 200 ){

        if(response.statusCode == 200){

            console.log('results response in winning page:',response.data);
            // setWinningList(response.data.data.data)
            let res = {
              "current_page": 1,
              "data": [
                  {
                      "id": 121,
                      "ticket_id": 1,
                      "merchant_id": 1,
                      "game_play_id": 1,
                      "child_ticket_no": "C0000121",
                      "lottery_number": "1234",
                      "big_bet_amount": 1,
                      "small_bet_amount": 1,
                      "three_a_amount": 0,
                      "three_c_amount": 0,
                      "bet_amount": 2,
                      "bet_net_amount": 1.4,
                      "rebate_amount": 0.6,
                      "rebate_percentage": 30,
                      "game_type": "4D",
                      "prize_type": "No",
                      "bet_size": "Both",
                      "winning_amount": 0,
                      "status": "finished",
                      "progress_status": "ACCPETED",
                      "message": "",
                      "created_at": "2022-10-11T11:28:49.000000Z",
                      "updated_at": "2022-10-11T11:28:49.000000Z",
                      "deleted_at": null,
                      "odds": null,
                      "ticket": {
                          "id": 1,
                          "member_id": 1,
                          "merchant_id": 1,
                          "ticket_no": "T0000001",
                          "bet_number": "1234",
                          "bet_type": 0,
                          "total_amount": 1152,
                          "net_amount": 0,
                          "rebate_amount": 0,
                          "rebate_percentage": 0,
                          "betting_date": "2022-10-12",
                          "draw_date": "2022-10-12",
                          "ticket_status": "UNSETTLED",
                          "progress_status": "IN_PROGRESS",
                          "message": "",
                          "created_at": "2022-10-11T11:17:18.000000Z",
                          "updated_at": "2022-10-11T11:17:18.000000Z",
                          "deleted_at": null
                      },
                      "game": {
                          "id": 1,
                          "name": "Magnum",
                          "abbreviation": "M",
                          "logo_path": "public/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png",
                          "logo_url": "http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png",
                          "status": "Active",
                          "deleted_at": null,
                          "created_at": "2022-10-11T11:03:49.000000Z",
                          "updated_at": "2022-10-11T11:03:49.000000Z"
                      }
                  },
                  
              ],
              "first_page_url": "http://localhost:8000/frontend-api/betListWinning?page=1",
              "from": 1,
              "last_page": 1,
              "last_page_url": "http://localhost:8000/frontend-api/betListWinning?page=1",
              "links": [
                  {
                      "url": null,
                      "label": "&laquo; Previous",
                      "active": false
                  },
                  {
                      "url": "http://localhost:8000/frontend-api/betListWinning?page=1",
                      "label": "1",
                      "active": true
                  },
                  {
                      "url": null,
                      "label": "Next &raquo;",
                      "active": false
                  }
              ],
              "next_page_url": null,
              "path": "http://localhost:8000/frontend-api/betListWinning",
              "per_page": 15,
              "prev_page_url": null,
              "to": 1,
              "total": 1
          }
          let data = {
            "data": Array(22).fill ({
              "id": 121,
              "ticket_id": 1,
              "merchant_id": 1,
              "game_play_id": 1,
              "child_ticket_no": "C0000121",
              "lottery_number": "1234",
              "big_bet_amount": 1,
              "small_bet_amount": 1,
              "three_a_amount": 0,
              "three_c_amount": 0,
              "bet_amount": 2,
              "bet_net_amount": 1.4,
              "rebate_amount": 0.6,
              "rebate_percentage": 30,
              "game_type": "4D",
              "prize_type": "No",
              "bet_size": "Both",
              "winning_amount": 0,
              "status": "finished",
              "progress_status": "ACCPETED",
              "message": "",
              "created_at": "2022-10-11T11:28:49.000000Z",
              "updated_at": "2022-10-11T11:28:49.000000Z",
              "deleted_at": null,
              "odds": null,
              "ticket": {
                  "id": 1,
                  "member_id": 1,
                  "merchant_id": 1,
                  "ticket_no": "T0000001",
                  "bet_number": "1234",
                  "bet_type": 0,
                  "total_amount": 1152,
                  "net_amount": 0,
                  "rebate_amount": 0,
                  "rebate_percentage": 0,
                  "betting_date": "2022-10-12",
                  "draw_date": "2022-10-12",
                  "ticket_status": "UNSETTLED",
                  "progress_status": "IN_PROGRESS",
                  "message": "",
                  "created_at": "2022-10-11T11:17:18.000000Z",
                  "updated_at": "2022-10-11T11:17:18.000000Z",
                  "deleted_at": null
              },
              "game": {
                  "id": 1,
                  "name": "Magnum",
                  "abbreviation": "M",
                  "logo_path": "public/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png",
                  "logo_url": "http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png",
                  "status": "Active",
                  "deleted_at": null,
                  "created_at": "2022-10-11T11:03:49.000000Z",
                  "updated_at": "2022-10-11T11:03:49.000000Z"
              }
          })
              
              
          
          }
          console.log('results of data winning page:',data.data);

          setWinningList(response.data.data.data)
          // setWinningList(data.data)

            
        }else {
            console.log(response.data.messages);

        }
        }else {
        console.log('response:',response);
        // setIsLoading(false);
    }
}))
}
      useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(winningList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(winningList.length / itemsPerPage));
      }, [itemOffset, itemsPerPage,winningList]);


       useEffect(() => {
        getWinningList();
      },[auth]);


      useEffect(() => {
        dispatch({
          type: "GET_LOGIN_DETAILS",
          payload: datauser && datauser.user && datauser.user.data ? datauser.user.data : {}
      })
      }, [datauser])
      

      
      const state = useSelector(state => state);
      console.log("state after getwinningdata: ", state)
      
      
      

      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % winningList.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };
  return (
    <>
      <Head>
          <title>{t('Lotteries_tittle')}</title>
          <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet"/>
          <link href="assets/css/style.css" rel="stylesheet"/>
          <link href="assets/css/owl.carousel.css" rel="stylesheet"/>
          <link href="assets/css/owl.theme.default.css" rel="stylesheet"/>
          <link href="assets/text-fonts/poppins/poppins-font.css" rel="stylesheet" />
      </Head>
      <Header datauser={datauser}/>
      <WinngListBanner/>
      <section className="page-content custom-padding">
        <div className="container">
        <Filter/>
            <div className={`${pageCount > 1 ? "winningFilterTall":""} table-responsive my-3`}  >
                <table className="table small table-bordered align-middle">
                <thead>
                                <tr>
                                    <th>{t('No.')}</th>
                                    <th className="text-start">Detail Number</th>
                                    {/* <th className="text-start">Detail Number</th> */}
                                    <th className="text-center">Betting Time</th>
                                    <th className="text-center">Draw Date</th>
                                    <th className="text-center">Game</th>
                                    <th className="text-center">{t('Company')}</th>
                                    <th className="text-start">Bet Number</th>

                                    <th className="text-end">Big</th>
                                    <th className="text-end">Small</th>
                                    <th className="text-end">3A</th>
                                    <th className="text-end">3C</th>
                                    <th className="text-end">Total</th>
                                    <th className="text-end">Rebate</th>
                                    <th className="text-end">Net</th>
                                    <th className="text-end">Win Amount</th>
                                    <th className="text-end">Win/Lose</th>
                                
                                </tr>


                            </thead>
                            <tbody>
                            {console.log('length: ',winningList.length)}

                                {winningList.length > 0 && currentItems ? currentItems.map((item,id) =>(
                                    <tr key={id}>
                                        <td>{id+1}</td>
                                        <td className="text-start"><a >{item.child_ticket_no}</a></td>
                                        <td className="text-center" >{moment(item.created_at).format('YYYY-DD-MM h:mm:ss a')}</td>
                                        <td className="text-center">{item.ticket.betting_date}</td>
                                        <td className="text-center">{item.game_type}</td>
                                        <td className="text-end">{item.game && item.game.name ? item.game.name : ""}</td>
                                        <td className="text-start">{item.lottery_number}</td>

                                        <td className="text-end">{MoneyFormatDisplay(item.big_bet_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.small_bet_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.three_a_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.three_c_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.bet_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.rebate_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.bet_net_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.winning_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.bet_net_amount - item.winning_amount,1)}</td>
                                    
                                    </tr>
                                ))
                              :<tr className='text-center'>
                                    <td colSpan={16}>No results</td>
                              </tr>
                              }

          
                        </tbody>
                    {/* <tbody>
                    {currentItems ? currentItems.map((item,id)=>(
                      <tr key={id}>
                            <td >
                              {item.id}
                              </td>
                            <td className="text-start" ><a href="href">
                              {item.child_ticket_no}
                              </a></td>
                            <td className="text-start" >
                              {item.ticket.betting_date}
                              </td>
                            <td className="text-center" >
                              {item.ticket.draw_date}
                              </td>
                            <td className="text-center">3D</td>
                            <td className="text-center">B</td>
                            <td className="text-center">Magnum</td>
                            <td className="text-end">100.08</td>
                            <td className="text-end">10%</td>
                            <td className="text-end">90.07</td>
                            <td className="text-end">90.07</td>
                            <td className="text-end">90.07</td>
                            <td className="text-end">90.07</td>
                            <td className="text-end">90.07</td>
                      </tr>
                    )) :<tr>
                      <td>
                      <span>Nothing</span>

                      </td>

                    </tr>
                  }
                    </tbody> */}
                </table>
            </div>
            <div className='d-flex justify-content-center'>
            { pageCount > 1 ?
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Next >" 
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="< Previous"
                            renderOnZeroPageCount={null}
                            className="pagination"
                        /> : null } 
            </div>
            
        
        </div>
    </section>
      
      <Footer/>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
        <script src="assets/js/owl.carousel.js"></script>
        <script src="assets/js/main.js"></script>
        
      {/*--Footer--*/}
    </>
  )
}
