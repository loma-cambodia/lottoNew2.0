import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { useDispatch, useSelector, } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from '../styles/Home.module.css'
import {getTicketDataSettled,searchTicketData, searchTicketDataSettled} from '../store/actions/reportActions';
import {getLogin} from '../store/actions/authActions';
import ReactPaginate from 'react-paginate';

import SettleTable from '../components/SettleList/SettleListTable';
import SettleBanner from '../components/SettleList/BannerSettle';
export default function SettleList({datauser,updateSessionData, setUpdateSessionData}) {

  const [pageCount, setPageCount] = useState(0);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [active, setActive] = useState(false);
  const state = useSelector(state => state);

  function formatDate2(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [day,month,year].join('/');
}
       useEffect(() => {
       

      },[dispatch,auth]);


      useEffect(() => {
      
      }, [datauser])



      let d = new Date()
      useEffect(() => {
        // dispatch(getTicketDataSettled(datauser && datauser.user && datauser.user.data && datauser.user.data.id ? parseInt(datauser.user.data.id): 0));
        dispatch(searchTicketDataSettled(datauser && datauser.user && datauser.user.data && datauser.user.data.id ? parseInt(datauser.user.data.id): 0,formatDate2(d)+ ' - ' + formatDate2(d),'',datauser.user.data.token ? datauser.user.data.token : ""));
        }, [])
  




      
     
      let tickets = state && state.tickets && state.tickets.reportsSettleData ? state.tickets.reportsSettleData : [];
      let ticketsChild = state && state.tickets && state.tickets.reportsSettleChildData ? state.tickets.reportsSettleChildData : [];

      let ticketSlave = tickets.ticket_slave
      
      let isLoading = state && state.tickets && state.tickets.loading ? state.tickets.loading : false;

      const ticketSearch = []
      const GetTicketNumber = (member_id,dateRange,ticketNo) => {
        dispatch(searchTicketDataSettled(member_id,dateRange,ticketNo,datauser.user.data.token ? datauser.user.data.token : ""));
        }

        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % Pkglottery1.length;

          setItemOffset(newOffset);
        };
        const resetTable = ()=>{
          // dispatch(getTicketDataSettled(auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0));
          let d = new Date();
          dispatch(searchTicketDataSettled(auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0,formatDate2(d)+ ' - ' + formatDate2(d),'',datauser.user.data.token ? datauser.user.data.token : ""));
        }
  return (
    <> 
      <Head>
          <title>{t('tittle_main')}</title>
      </Head>
      <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>
      
      <SettleBanner/>
      <section className="page-content custom-padding  vh-70">
          <div className="container">
                <SettleTable _tickets={tickets} _ticketsChild={ticketsChild} _GetTicketNumber={GetTicketNumber} _auth={auth} _resetTable={resetTable} _isLoading={isLoading}/> 
          </div>
      </section>
      
      <div className={styles.device_detect_for_desktop}> 
        <Footer/>
      </div>
        {/* <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
        <script src="assets/js/owl.carousel.js"></script>
        <script src="assets/js/main.js"></script> */}
        
    </>
  )
}
