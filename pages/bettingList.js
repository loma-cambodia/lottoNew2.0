import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { useDispatch, useSelector, } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from '../styles/Home.module.css'
import ListBanner from '../components/BettingList/Banner';
import ListTable from '../components/BettingList/BettingListTable';
import {getTicketData,searchTicketData} from '../store/actions/tickets';
export default function BettingList({datauser}) {
// console.log("TICKETLIST",datauser);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
       useEffect(() => {
        dispatch(getTicketData());
      },[dispatch]);
      
      const state = useSelector(state => state);
      let tickets = state && state.tickets && state.tickets.tickets ? state.tickets.tickets : [];
      let ticketSlave = tickets.ticket_slave
       console.log("tickets:",tickets)



      
      const ticketSearch = []
      const GetTicketNumber = (e) => {

         console.log("##1231231232#",e.target.value)
        dispatch(searchTicketData(e.target.value));
        console.log("##%%%%%%#",state)
        
        }

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
      <ListBanner/>
      <section class="page-content custom-padding">
    <div class="container">
        {/* <ListFilter/> */}
         <ListTable _tickets={tickets} _GetTicketNumber={GetTicketNumber}/> 
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
