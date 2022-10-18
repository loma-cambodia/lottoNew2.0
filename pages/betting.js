import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import BettingOptionSelection from '../components/betting/bettingOptionSelection';
import {getBettingDates,lotterySubmit} from '../store/actions/bettingActions';
import { useDispatch, useSelector } from "react-redux";
import { t } from 'i18next';
import { useTranslation } from "react-i18next";
import BettingOptionSelectionForMob from '../components/betting/bettingOptionSelectionForMob';
import styles from '../styles/Home.module.css'
import Banner from '../components/betting/banner';
//import {userTransactionDetails, winnerResultDetails2} from '../store/actions/homeActions';
import {getLogin} from '../store/actions/authActions';
export default function Betting({datauser, updateSessionData, setUpdateSessionData}) {


  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);


      const state = useSelector(state => state);
      const auth = useSelector(state => state.auth)
       useEffect(() => {
     //   dispatch(userTransactionDetails());
          dispatch(getBettingDates());
      },[dispatch]);

      useEffect(() => {

      //  console.log('2222222222222222222222222');
      //   dispatch({
      //     type: "GET_LOGIN_DETAILS",
      //     payload: datauser && datauser.user && datauser.user.data ? datauser.user.data : {}
      // })
      let objectWithData = {
        "customer_name": datauser && datauser.user && datauser.user.data && datauser.user.data.customer_name ? datauser.user.data.customer_name : '',
        "customer_id":  datauser && datauser.user && datauser.user.data && datauser.user.data.customer_id ? datauser.user.data.customer_id : 0,
        "merchant_id":  datauser && datauser.user && datauser.user.data && datauser.user.data.merchant_id ? datauser.user.data.merchant_id : 0,
       // "language":   datauser && datauser.user && datauser.user.data && datauser.user.data.language &&  datauser.user.data.language.locale ? datauser.user.data.language.locale : 'en'
       "language":   state && state.auth && state.auth.lang  ? state.auth.lang : datauser && datauser.user && datauser.user.data && datauser.user.data.language &&  datauser.user.data.language.locale ? datauser.user.data.language.locale : 'en'
      } 
      if(objectWithData.customer_id != 0){
        dispatch(getLogin(objectWithData));
      }
      }, [datauser])

      ;


      let transactions = state && state.auth && state.auth.transactions ? state.auth.transactions : {};
      let betLimit = transactions && transactions.bet_limit && transactions.bet_limit.limit_settings ? transactions.bet_limit.limit_settings : {};
      // -------------
      let bettingDatesStore = useSelector(state => state.betting.dates);

      
      
      
  return (
    <>
      <Head>
          <title>{t('tittle_main')}</title>
      </Head>
      <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>
      <Banner/>
          <div className={styles.device_detect_for_desktop}>
          
          <BettingOptionSelection _bettingDatesStore={bettingDatesStore} _betLimit={betLimit} _auth={auth}/>
        </div>  
        <div className="container">
            <div className={styles.device_detect_for_mobile}> 
              <BettingOptionSelectionForMob _bettingDatesStore={bettingDatesStore} _betLimit={betLimit}/>
            </div>
        </div>
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
