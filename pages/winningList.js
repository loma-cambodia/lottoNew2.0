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
import {getWinningData,filterWinningData} from '../store/actions/winninglistActions';
import moment from 'moment';

import ReactPaginate from 'react-paginate';

import Filter from "../components/Winning/filter";


export default function WinningList({datauser,updateSessionData, setUpdateSessionData}) {


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

  const [filterParams, setFilterParams] = useState({});
 
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

    dispatch(getWinningData(auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0 ,filterParams? filterParams:'', response =>{
      // console.log('inside dispatch dataSubmit date:   ',dataSubmit);

        if(response.statusCode  == 201  || response.statusCode  == 200 ){

        if(response.statusCode == 200){

            console.log('results response in winning page:',response.data);
            // setWinningList(response.data.data.data)
            
          

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
      },[auth,filterParams]);


      useEffect(() => {
        dispatch({
          type: "GET_LOGIN_DETAILS",
          payload: datauser && datauser.user && datauser.user.data ? datauser.user.data : {}
      })
      }, [datauser])
      

      
      const state = useSelector(state => state);
      console.log("state after getwinningdata: ", state)
      
      
      const getOddsBig =(prize,game,item) =>{
        console.log(prize+"khan test ======"+game+item);
        if(prize == 'P1' && game == '4D')
        {
          return item.big_first
        }
        else if (prize == 'P2' && game == '4D'){
          return item.big_second
        }
        else if (prize == 'P3' && game == '4D'){
          return item.big_third
        }
        else if (prize == 'C' && game == '4D'){
          return item.big_consolation
        }
        else if (prize == 'S' && game == '4D'){
          return item.big_special
        } else if(prize == 'P1' && game == '3D'){
          return item.three_a_first
        }
        else 
          return ''



      }
      const getOddsSmall =(prize,game,item) =>{
        if(prize == 'P1' && game == '4D')
        {
          return item.small_first
        }
        else if (prize == 'P2' && game == '4D'){
          return item.small_second
        }
        else if (prize == 'P3' && game == '4D'){
          return item.small_third
        }
        else if(prize == 'P1' && game == '3D'){
          return item.three_c_first
        }
        else if(prize == 'P2' && game == '3D'){
          return item.three_c_second
        }
        else if(prize == 'P3' && game == '3D'){
          return item.three_c_third
        }
        else 
          return ''

      }

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
      <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>
      <WinngListBanner/>
      <section className="page-content custom-padding vh-70">
        <div className="container">
        <Filter _setFilterParams={setFilterParams} />

            <div className={`table-responsive my-3`}  >
              <div className={styles.device_detect_for_mobile}>
                  <table className="mob-table mb-3">
                      <thead>
                        <tr>
                          <th><span>Detail Number<br />Betting Time<br/>Draw ID<br/>Draw Date</span></th>
                          <th><span>Game<br />Bet Number<br/>{t('Company')}<br/>Prize</span></th>
                          <th><span>Big<br />Small<br/>3A<br/>3C</span></th>
                          <th><span>Odds (B/3A)<br />Odds (S/3C)<br/>Total<br/>Rebate</span></th>
                          <th><span>Net<br />Winning<br/>W/L</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        {winningList.length > 0 && currentItems ? currentItems.map((item,id) =>(
                          <tr key={id}>    
                            <td>
                                <span>{item.child_ticket_no}<br />{moment(item.created_at).format('YYYY-DD-MM h:mm:ss a')}<br />{item.ticket.draw_number}<br />{item.ticket.betting_date}</span>
                            </td> 
                            <td>
                                <span>{item.game_type}<br />{item.lottery_number}<br />{item.game && item.game.name ? item.game.name : ""}<br />{item.prize_type}</span>
                            </td> 
                            <td>
                                <span>{MoneyFormatDisplay(item.big_bet_amount,1)}<br />{MoneyFormatDisplay(item.small_bet_amount,1)}<br />{MoneyFormatDisplay(item.three_a_amount,1)}<br />{MoneyFormatDisplay(item.three_c_amount,1)}</span>
                            </td> 
                            <td>
                                <span>{getOddsBig(item.prize_type,item.game_type,item)}<br />{getOddsSmall(item.prize_type,item.game_type,item)}<br />{MoneyFormatDisplay(item.bet_amount,1)}<br />{MoneyFormatDisplay(item.rebate_amount,1)}</span>
                            </td> 
                            <td>
                                <span>{MoneyFormatDisplay(item.bet_net_amount,1)}<br />{MoneyFormatDisplay(item.winning_amount,1)}</span><br />
                                <span className={`${(item.winning_amount - item.bet_net_amount) > 0 ? "winningAmount":""} text-end`}>{MoneyFormatDisplay(item.winning_amount - item.bet_net_amount ,1)}</span>
                            </td>
                          </tr>
                        ))
                        :<tr className='text-center'>
                          <td colSpan={5}>No results</td>
                        </tr>
                        }
                      </tbody>
                  </table>
              </div>
              <div className={styles.device_detect_for_desktop}>
                <table className="table small table-bordered align-middle table-sm">
                  <thead>
                      <tr >
                          <th>{t('No.')}</th>
                          <th className="text-start">Detail Number</th>
                          <th className="text-center">Betting Time</th>
                          <th className="text-center">Draw ID</th>
                          <th className="text-center">Draw Date</th>
                          <th className="text-center">Game</th>
                          <th className="text-start">Bet Number</th>
                          <th className="text-center">{t('Company')}</th>
                          <th className="text-center">Prize</th>
                          <th className="text-end">Big</th>
                          <th className="text-end">Small</th>
                          <th className="text-end">3A</th>
                          <th className="text-end">3C</th>
                          <th className="text-end">Odds (B/3A)</th>
                          <th className="text-end">Odds (S/3C)</th>
                          <th className="text-end">Total</th>
                          <th className="text-end">Rebate</th>
                          <th className="text-end">Net</th>
                          <th className="text-end">Winning</th>
                          <th className="text-end">W/L</th>
                      </tr>
                  </thead>
                  <tbody>
                      {winningList.length > 0 && currentItems ? currentItems.map((item,id) =>(
                          <tr key={id}>
                              <td>{id+1}</td>
                              <td className="text-start"><a >{item.child_ticket_no}</a></td>
                              <td className="text-center" >{moment(item.created_at).format('YYYY-DD-MM h:mm:ss a')}</td>
                              <td className="text-center">{item.ticket.draw_number}</td>

                              <td className="text-center">{item.ticket.betting_date}</td>
                              <td className="text-center">{item.game_type}</td>
                              <td className="text-start">{item.lottery_number}</td>
                              <td className="text-end">{item.game && item.game.name ? item.game.name : ""}</td>
                              <td className="text-start">{item.prize_type}</td>

                              <td className="text-end">{MoneyFormatDisplay(item.big_bet_amount,1)}</td>
                              <td className="text-end">{MoneyFormatDisplay(item.small_bet_amount,1)}</td>
                              <td className="text-end">{MoneyFormatDisplay(item.three_a_amount,1)}</td>
                              <td className="text-end">{MoneyFormatDisplay(item.three_c_amount,1)}</td>
                              <td className="text-end">
                                {getOddsBig(item.prize_type,item.game_type,item)}
                                {/* {MoneyFormatDisplay(item.merchant.market.odd_settings,1)} */}
                                </td>
                              <td className="text-end">{getOddsSmall(item.prize_type,item.game_type,item)}</td>

                              <td className="text-end">{MoneyFormatDisplay(item.bet_amount,1)}</td>
                              <td className="text-end">{MoneyFormatDisplay(item.rebate_amount,1)}</td>
                              <td className="text-end">{MoneyFormatDisplay(item.bet_net_amount,1)}</td>
                              <td className="text-end">{MoneyFormatDisplay(item.winning_amount,1)}</td>
                              <td className={`${(item.winning_amount - item.bet_net_amount) > 0 ? "winningAmount":""} text-end`}>{MoneyFormatDisplay(item.winning_amount - item.bet_net_amount ,1)}</td>
                              {/* className={`${pageCount > 1 ? "winningFilterTall":""} table-responsive my-3`} */}
                          
                          </tr>
                      ))
                      :<tr className='text-center'>
                            <td colSpan={16}>No results</td>
                      </tr>
                      }
                  </tbody>
                </table>
              </div>
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
