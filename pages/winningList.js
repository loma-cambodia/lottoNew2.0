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

import ReactPaginate from 'react-paginate';

import Filter from "../components/Winning/filter";


export default function WinningList({datauser}) {

  const [pageCount, setPageCount] = useState(0);

// console.log("TICKETLIST",datauser);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  console.log('WinningList:auth:',auth);

  const [active, setActive] = useState(false);


       useEffect(() => {
        dispatch(getTicketData(auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0));
        //dispatch(searchTicketData());
      },[dispatch,auth]);


      useEffect(() => {
       // console.log('111111111111111');
        dispatch({
          type: "GET_LOGIN_DETAILS",
          payload: datauser && datauser.user && datauser.user.data ? datauser.user.data : {}
      })
      }, [datauser])
      
      const state = useSelector(state => state);
      let tickets = state && state.tickets && state.tickets.tickets ? state.tickets.tickets : [];
      let ticketsChild = state && state.tickets && state.tickets.ticketsChild ? state.tickets.ticketsChild : [];

      let ticketSlave = tickets.ticket_slave
   //    console.log("tickets:",tickets)
      
      const ticketSearch = []
      const GetTicketNumber = (member_id,dateRange,ticketNo) => {
       // const number = e.target.value
        dispatch(searchTicketData(member_id,dateRange,ticketNo));
       // console.log("##%%%%%%#",state)
        }

        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % Pkglottery1.length;
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
      <section class="page-content custom-padding">
        <div class="container">
        <Filter/>
            <div class="table-responsive my-3">
                <table class="table small table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th class="text-start">Ticket No</th>
                            <th class="text-start">Bet No.</th>
                            <th class="text-center">Date</th>
                            <th class="text-center">Game</th>
                            <th class="text-center">Betting Type</th>
                            <th class="text-center">Company</th>
                            <th class="text-end">Gross Amt.</th>
                            <th class="text-end">Commission</th>
                            <th class="text-end">Net Amt.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="2">1</td>
                            <td class="text-start" rowspan="2"><a href="href">BRN0000001</a></td>
                            <td class="text-start" rowspan="2">1234</td>
                            <td class="text-center" rowspan="2">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            
                            <td class="text-center">3D</td>
                            <td class="text-center">R</td>
                            <td class="text-center">B</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        
                        <tr>
                            <td>2</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        <div class="clearfix d-flex align-items-center justify-content-center">
            <div class="pagination:container">
                <div class="pagination:number arrow">
                  <svg width="18" height="18">
                    {/* <use xlink:href="#left" /> */}
                  </svg>
                  <span class="arrow:text">Previous</span> 
                </div>
                
                <div class="pagination:number">
                  1
                </div>
                <div class="pagination:number">
                  2
                </div>
                
                <div class="pagination:number pagination:active">
                  3
                </div>
                
                <div class="pagination:number">
                  4
                </div>
                
                <div class="pagination:number">
                  540
                </div>
                
                <div class="pagination:number arrow">
                  <svg width="18" height="18">
                    {/* <use xlink:href="#right" /> */}
                  </svg>
                </div>
              </div>
              
              <svg class="hide">
                <symbol id="left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></symbol>
                <symbol id="right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></symbol>
              </svg>
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
