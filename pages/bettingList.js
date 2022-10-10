import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { useDispatch, useSelector, } from "react-redux";
import { useTranslation } from "react-i18next";
import ListBanner from '../components/BettingList/Banner';
import ListTable from '../components/BettingList/BettingListTable';
import {getTicketData,searchTicketData} from '../store/actions/tickets';

export default function BettingList({datauser}) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

       useEffect(() => {
        dispatch(getTicketData());
      },[dispatch]);
      
      const state = useSelector(state => state);
      let tickets = state && state.tickets && state.tickets.tickets ? state.tickets.tickets : [];
      let ticketsChild = state && state.tickets && state.tickets.ticketsChild ? state.tickets.ticketsChild : [];

      // const GetTicketNumber = (e) => {
      //   console.log("##1231231232#",e.target.value)
      //   const ticketNumber = e.target.value;
      //   dispatch(searchTicketData(ticketNumber));
      //   console.log("##%%%%%%#",state)
      // }

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
         <ListTable _tickets={tickets} _ticketsChild={ticketsChild} /> 
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
