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
import ReactPaginate from 'react-paginate';
import SettleTable from '../components/SettleList/SettleListTable';
import SettleBanner from '../components/SettleList/BannerSettle';

export default function SettleList({datauser}) {
  const [pageCount, setPageCount] = useState(0);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
      useEffect(() => {
        dispatch({
          type: "GET_LOGIN_DETAILS",
          payload: datauser && datauser.user && datauser.user.data ? datauser.user.data : {}
      })
      }, [datauser])
      const userData =  datauser && datauser.user && datauser.user.data ? datauser.user.data : {}
       useEffect(() => {
        dispatch(getTicketData(userData.id));
        dispatch(searchTicketData());
      },[dispatch]);
      const state = useSelector(state => state);
      let tickets = state && state.tickets && state.tickets.tickets ? state.tickets.tickets : [];
      let ticketsChild = state && state.tickets && state.tickets.ticketsChild ? state.tickets.ticketsChild : [];
      let ticketSlave = tickets.ticket_slave
      const auth = useSelector(state => state.auth);

      const ticketSearch = []
      const GetTicketNumber = (dateRange,ticketNo) => {
        dispatch(searchTicketData(dateRange,ticketNo));
        }
        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % Pkglottery1.length;
          console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);
        };
        const resetTable = ()=>{
          dispatch(getTicketData(userData.id));
        }
        
     console.log("TICKS:khan",tickets)
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
      <Header datauser={datauser} _auth={auth}/>
      <SettleBanner/>
      <section class="page-content custom-padding">
    <div class="container">
         <SettleTable _tickets={tickets} _ticketsChild={ticketsChild} _GetTicketNumber={GetTicketNumber} _resetTable={resetTable}/> 
    </div>
</section>
      
      <Footer/>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
        <script src="assets/js/owl.carousel.js"></script>
        <script src="assets/js/main.js"></script>
    </>
  )
}
