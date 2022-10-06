import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import BettingOptionSelection from '../components/betting/bettingOptionSelection';
import {getBettingDates,lotterySubmit} from '../store/actions/bettingActions';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import BettingOptionSelectionForMob from '../components/betting/bettingOptionSelectionForMob';

import {userTransactionDetails, winnerResultDetails2} from '../store/actions/homeActions';
export default function BettingNew({datauser}) {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
       useEffect(() => {
        dispatch(userTransactionDetails());
          dispatch(getBettingDates());
      },[dispatch]);
      const lotterySubmitRecords = () => {
        dispatch(lotterySubmit( setData, response =>{
        }));
      }

      //BET LIMIT
      const state = useSelector(state => state);
      state.auth.transactions
      let transactions = state && state.auth && state.auth.transactions ? state.auth.transactions : {};
      let betLimit = transactions && transactions.bet_limit && transactions.bet_limit.limit_settings ? transactions.bet_limit.limit_settings : {};
      
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
      <Header datauser={datauser}/>
    
      <BrowserView>
        <BettingOptionSelection _bettingDatesStore={bettingDatesStore} _betLimit={betLimit}/> 
      </BrowserView>
     
      <MobileView className="container">
        <BettingOptionSelectionForMob _bettingDatesStore={bettingDatesStore}/>
      </MobileView> 

     <Footer/>
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
      <script src="assets/js/owl.carousel.js"></script>
      <script src="assets/js/main.js"></script>
    {/*--Footer--*/}
</>
      
  )
}
