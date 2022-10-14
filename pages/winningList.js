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


  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


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

    dispatch(getWinningData(auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0 ,filterParams? filterParams:'', response =>{

        if(response.statusCode  == 201  || response.statusCode  == 200 ){

        if(response.statusCode == 200){

            // setWinningList(response.data.data.data)
            
          

          setWinningList(response.data.data.data)
          // setWinningList(data.data)

            
        }else {

        }
        }else {
        // setIsLoading(false);
    }
}))
}


      useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
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
      
      
      const getOddsBig =(prize,game,item) =>{
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

        setItemOffset(newOffset);
      };
  return (
    <>
      <Head>
          <title>{t('Lotteries_tittle')}</title>
      </Head>
      <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>
      <WinngListBanner/>
      <section className="page-content custom-padding vh-70">
        <div className="container">
        <Filter _setFilterParams={setFilterParams} />

            <div className={`table-responsive my-3`}  >
              <div className={styles.device_detect_for_mobile}>
                {winningList.length > 0 ? (<>
                
                  <table className="mob-table mb-3">
                      <thead>
                        <tr>
                          <th><span>{t('Detail_Number')}<br />{t('Betting_Time')}<br/>{t('Draw_Id')}<br/>{t('Draw_Date')}</span></th>
                          <th><span>{t('game')}<br />{t('Bet_Number')}<br/>{t('Company')}<br/>{t('prize_type')}</span></th>
                          <th><span>{t('Big_Bet')}<br />{t('Small_Bet')}<br/>3A<br/>3C</span></th>
                          <th><span>{t('Odds')} (B/3A)<br />{t('Odds')} (S/3C)<br/>{t('Total')}<br/>{t('Rebate')}</span></th>
                          <th><span>{t('Net')}<br />{t('winning')}<br/>{t('Winning_Loss')}</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentItems ? currentItems.map((item,id) =>(
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
                        :null
                        }
                      </tbody>
                  </table>

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
                
                </>) : (<>
                
                  <div className='alert alert-warning'>
                    <h3 className='text-center'>
                    {t('no_data_found')}
                    </h3>
                    
                </div>

                </>) }
                  
              </div>
              <div className={styles.device_detect_for_desktop}>
                
                {winningList.length > 0 ? (<>
                  <table className="table small table-bordered align-middle table-sm">
                  <thead>
                      <tr >
                          <th style={{verticalAlign:'middle'}}>{t('No')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-start"> {t('Detail_Number')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-center">{t('Betting_Time')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-center">{t('Draw_Id')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-center">{t('Draw_Date')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-center">{t('game')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-start">{t('Bet_Number')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-center">{t('Company')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-center">{(t('prize_type'))}</th>
                          <th style={{verticalAlign:'middle'}} className="text-end">{t('Big_Bet')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-end">{t('Small_Bet')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-end">3A</th>
                          <th style={{verticalAlign:'middle'}} className="text-end">3C</th>
                          <th style={{verticalAlign:'middle'}} className="text-end">{t('Odds')} (B/3A)</th>
                          <th style={{verticalAlign:'middle'}} className="text-end">{t('Odds')} (S/3C)</th>
                          <th style={{verticalAlign:'middle'}} className="text-end">{t('Total')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-end">{t('Rebate')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-end">{t('Net')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-end">{t('winning')}</th>
                          <th style={{verticalAlign:'middle'}} className="text-end">{t('Winning_Loss')}</th>
                      </tr>
                  </thead>
                  <tbody>
                      {currentItems ? currentItems.map((item,id) =>(
                          <tr key={id}>
                              <td>{id+1}</td>
                              <td className="text-start"><a >{item.child_ticket_no}</a></td>
                              <td className="text-center" >{moment(item.created_at).format('YYYY-DD-MM h:mm:ss a')}</td>
                              <td className="text-start">{item.ticket.draw_number}</td>
                              <td className="text-center">{item.ticket.betting_date}</td>
                              <td className="text-center">{item.game_type}</td>
                              <td className="text-center">{item.ticket.bet_number}</td>
                              <td className="text-end">{item.game && item.game.name ? item.game.name : ""}</td>

                              {/* <td className="text-center">{item.game_type}</td> */}
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
                              <td className="text-end">{MoneyFormatDisplay(item.bet_net_amount,1)}</td>
                              <td className="text-end">{MoneyFormatDisplay(item.rebate_amount,1)}</td>

                              <td className="text-end">{MoneyFormatDisplay(item.winning_amount,1)}</td>
                              <td className={`${(item.winning_amount - item.bet_net_amount) > 0 ? "winningAmount":""} text-end`}>{MoneyFormatDisplay(item.winning_amount - item.bet_net_amount ,1)}</td>
                              {/* className={`${pageCount > 1 ? "winningFilterTall":""} table-responsive my-3`} */}
                          
                          </tr>
                      ))
                      :null
                      }
                  </tbody>
                </table>
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
                </>) : (<>
                  <div className='alert alert-warning'>
                        
                    <h3 className='text-center'>
                    {t('no_data_found')}
                    </h3>
                    
                </div></>)}

                
              </div>
            </div>
            
            
        </div>
      </section>
      
      <Footer/>
        {/* <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
        <script src="assets/js/owl.carousel.js"></script>
        <script src="assets/js/main.js"></script> */}
      {/*--Footer--*/}
    </>
  )
}
