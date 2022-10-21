import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { useDispatch, useSelector, } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from '../styles/Home.module.css'
import ListBanner from '../components/BettingList/Banner';
import ListTable from '../components/BettingList/BettingListTable';
import {getTicketData,searchTicketData} from '../store/actions/reportActions';
import {getLogin} from '../store/actions/authActions';

import ReactPaginate from 'react-paginate';

export default function BettingList({datauser, updateSessionData, setUpdateSessionData}) {

  const [pageCount, setPageCount] = useState(0);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [isLoading, setIsLoading] = React.useState(true);

  const [active, setActive] = useState(false);

  const state = useSelector(state => state);


       useEffect(() => {
      //  dispatch(getTicketData(auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0));
        //dispatch(searchTicketData());
      },[dispatch,auth]);

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

      //   dispatch({
      //     type: "GET_LOGIN_DETAILS",
      //     payload: datauser && datauser.user && datauser.user.data ? datauser.user.data : {}
      // })

      let objectWithData = {
        "customer_name": datauser && datauser.user && datauser.user.data && datauser.user.data.customer_name ? datauser.user.data.customer_name : '',
        "customer_id":  datauser && datauser.user && datauser.user.data && datauser.user.data.customer_id ? datauser.user.data.customer_id : 0,
        "merchant_id":  datauser && datauser.user && datauser.user.data && datauser.user.data.merchant_id ? datauser.user.data.merchant_id : 0,
       //   "language":   datauser && datauser.user && datauser.user.data && datauser.user.data.language &&  datauser.user.data.language.locale ? datauser.user.data.language.locale : 'en'
       "language":   state && state.auth && state.auth.lang  ? state.auth.lang : datauser && datauser.user && datauser.user.data && datauser.user.data.language &&  datauser.user.data.language.locale ? datauser.user.data.language.locale : 'en'
      } 
      if(objectWithData.customer_id != 0){
      dispatch(getLogin(objectWithData));
      }
      let d = new Date();
      dispatch(searchTicketData(datauser && datauser.user && datauser.user.data && datauser.user.data.id ? parseInt(datauser.user.data.id): 0,formatDate2(d)+ ' - ' + formatDate2(d),''),setIsLoading(false))
      }, [datauser])
      

      let tickets = state && state.tickets && state.tickets.tickets ? state.tickets.tickets : [];
      let ticketsChild = state && state.tickets && state.tickets.ticketsChild ? state.tickets.ticketsChild : [];
      
      // let ticketSlave = tickets.ticket_slave
        
      // const ticketSearch = []
      const GetTicketNumber = (member_id,dateRange,ticketNo) => {
       // const number = e.target.value
        dispatch(searchTicketData(member_id,dateRange,ticketNo));
        }

        // const handlePageClick = (event) => {
        //   const newOffset = (event.selected * itemsPerPage) % Pkglottery1.length;

        //   setItemOffset(newOffset);
        // };
  return (
    <>
      <Head>
          <title>{t('tittle_main')}</title>
      </Head>
      {/* <Header datauser={datauser}/> */}
      <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>
      <ListBanner/>
      <section className="page-content custom-padding vh-70 background">
    <div className="container">
        {/* <ListFilter/> */}
         <ListTable _tickets={tickets} _ticketsChild={ticketsChild} _GetTicketNumber={GetTicketNumber} _auth={auth} _isLoading={isLoading}/> 



         {/* <div id='forPackageSection1' className="" style={{background:'whitesmoke'}} > */}

            {/* {pageCount > 0 ? */}

            {/* <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                className="pagination1"
            /> */}

              {/* : null }  */}

        {/* </div> */}

        {/* <div className="clearfix d-flex align-items-center justify-content-center">
            <div className="pagination:container">
                <div className="pagination:number arrow">
                  <svg width="18" height="18">
                  </svg>
                  <span className="arrow:text">Previous</span> 
                </div>
                
                <div className="pagination:number">
                  1
                </div>
                <div className="pagination:number">
                  2
                </div>
                
                <div className="pagination:number pagination:active">
                  3
                </div>
                
                <div className="pagination:number">
                  4
                </div>
                
                <div className="pagination:number">
                  540
                </div>
                
                <div className="pagination:number arrow">
                  <svg width="18" height="18">
                  </svg>
                </div>
              </div>
              
              <svg className="hide">
                <symbol id="left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></symbol>
                <symbol id="right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></symbol>
              </svg>
        </div> */}
    </div>
</section>
      
      <div className={styles.device_detect_for_desktop}> 
        <Footer/>
      </div>
        {/* <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
        <script src="assets/js/owl.carousel.js"></script>
        <script src="assets/js/main.js"></script> */}
        
      {/*--Footer--*/}
    </>
  )
}
