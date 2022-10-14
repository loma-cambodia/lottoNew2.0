import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import BettingOptionSelection from '../components/betting/bettingOptionSelection';
import {getBettingDates,lotterySubmit} from '../store/actions/bettingActions';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import BettingOptionSelectionForMob from '../components/betting/bettingOptionSelectionForMob';
import styles from '../styles/Home.module.css'
import Banner from '../components/betting/banner';
import {userTransactionDetails, winnerResultDetails2} from '../store/actions/homeActions';
export default function BettingNew({datauser, updateSessionData, setUpdateSessionData}) {


  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
       useEffect(() => {
        dispatch(userTransactionDetails());
          dispatch(getBettingDates());
      },[dispatch]);

      useEffect(() => {
        dispatch({
          type: "GET_LOGIN_DETAILS",
          payload: datauser && datauser.user && datauser.user.data ? datauser.user.data : {}
      })
      }, [datauser])

      const state = useSelector(state => state);
      const auth = useSelector(state => state.auth);


      let transactions = state && state.auth && state.auth.transactions ? state.auth.transactions : {};
      let betLimit = transactions && transactions.bet_limit && transactions.bet_limit.limit_settings ? transactions.bet_limit.limit_settings : {};
      // -------------
      let bettingDatesStore = useSelector(state => state.betting.dates);

      
      
      
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
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
        <script src="assets/js/owl.carousel.js"></script>
        <script src="assets/js/main.js"></script>
      {/*--Footer--*/}
    </>
  )
}
