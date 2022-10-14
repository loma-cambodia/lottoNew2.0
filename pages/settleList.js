import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { useDispatch, useSelector, } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from '../styles/Home.module.css'
import {getTicketDataSettled,searchTicketData, searchTicketDataSettled} from '../store/actions/reportActions';
import ReactPaginate from 'react-paginate';

import SettleTable from '../components/SettleList/SettleListTable';
import SettleBanner from '../components/SettleList/BannerSettle';
export default function SettleList({datauser,updateSessionData, setUpdateSessionData}) {

  const [pageCount, setPageCount] = useState(0);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [active, setActive] = useState(false);


       useEffect(() => {
        dispatch(getTicketDataSettled(auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0));

      },[dispatch,auth]);


      useEffect(() => {
        dispatch({
          type: "GET_LOGIN_DETAILS",
          payload: datauser && datauser.user && datauser.user.data ? datauser.user.data : {}
      })
      }, [datauser])
      
      const state = useSelector(state => state);
      let tickets = state && state.tickets && state.tickets.reportsSettleData ? state.tickets.reportsSettleData : [];
      
      let ticketsChild = state && state.tickets && state.tickets.reportsSettleChildData ? state.tickets.reportsSettleChildData : [];

      let ticketSlave = tickets.ticket_slave
      
      const ticketSearch = []
      const GetTicketNumber = (member_id,dateRange,ticketNo) => {
        dispatch(searchTicketDataSettled(member_id,dateRange,ticketNo));
        }

        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % Pkglottery1.length;

          setItemOffset(newOffset);
        };
        const resetTable = ()=>{
          dispatch(getTicketDataSettled(auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0));
        }
  return (
    <>
      <Head>
          <title>{t('Lotteries_tittle')}</title>
      </Head>
      <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>
      
      <SettleBanner/>
      <section className="page-content custom-padding vh-70">
          <div className="container">
                <SettleTable _tickets={tickets} _ticketsChild={ticketsChild} _GetTicketNumber={GetTicketNumber} _auth={auth} _resetTable={resetTable}/> 
          </div>
      </section>
      
      <Footer/>
        {/* <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
        <script src="assets/js/owl.carousel.js"></script>
        <script src="assets/js/main.js"></script> */}
        
    </>
  )
}
