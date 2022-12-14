import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React, { useState,useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import HomeSlider from '../components/home/homeSlider';
import Announcement from '../components/home/announcement';
import PayoutSection from '../components/home/payoutSection';
import PayoutSectionForMob from '../components/home/payoutSectionForMob';

import GamePlayPrize from '../components/home/gamePlayPrize';
import HowToPlay from '../components/home/howToPlay';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {announcement, userTransactionDetails, winnerResultDetailsSecond, specialDraw} from '../store/actions/homeActions';
import {getLogin} from '../store/actions/authActions';
export default function Home({datauser, updateSessionData, setUpdateSessionData}) {


  const [active, setActive] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector(state => state);

useEffect(() => {
  dispatch(announcement(datauser.user.data.token ? datauser.user.data.token : ""));
  dispatch(specialDraw(datauser.user.data.token ? datauser.user.data.token : ""));
  if(datauser && datauser.user && datauser.user.data && datauser.user.data.merchant_id)
    dispatch(userTransactionDetails(datauser.user.data.merchant_id, datauser.user.data.token ? datauser.user.data.token : "" ));
  dispatch(winnerResultDetailsSecond(datauser.user.data.token ? datauser.user.data.token : ""));
}, [datauser]);





useEffect(() => {

let objectWithData = {  
  "customer_name": datauser && datauser.user && datauser.user.data && datauser.user.data.customer_name ? datauser.user.data.customer_name : '',
  "customer_id":  datauser && datauser.user && datauser.user.data && datauser.user.data.customer_id ? datauser.user.data.customer_id : 0,
  "merchant_id":  datauser && datauser.user && datauser.user.data && datauser.user.data.merchant_id ? datauser.user.data.merchant_id : 0,
 // "language":   datauser && datauser.user && datauser.user.data && datauser.user.data.language &&  datauser.user.data.language.locale ? datauser.user.data.language.locale : 'en' 
  "language":   state && state.auth && state.auth.lang  ? state.auth.lang : datauser && datauser.user && datauser.user.data && datauser.user.data.language &&  datauser.user.data.language.locale ? datauser.user.data.language.locale : 'en',
  "token": datauser.user.data.token ? datauser.user.data.token : ""  
} 

// console.log('datauserdatauser',datauser.user.data.token)
if(objectWithData.customer_id != 0){
    dispatch(getLogin(objectWithData)); 
}
}, [datauser])


      const auth = useSelector(state => state.auth);

      let transactions = state && state.auth && state.auth.transactions ? state.auth.transactions : {};

      let winnerResultDetails = state && state.home && state.home.winnerResultDetails ? state.home.winnerResultDetails : [];

      let language = state && state.auth && state.auth.auth && state.auth.auth.language && state.auth.auth.language.locale ? state.auth.auth.language.locale : '';

      let announcementState = state && state.home && state.home.announcementDetails ? state.home.announcementDetails : '';
      
      let specialDrawState = state && state.home && state.home.specialDrawDetails ? state.home.specialDrawDetails : '';
      
  return (
    <>
       <Head> 
          <title>{t('tittle_main')}</title>          
      </Head>
      <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>

      <HomeSlider _specialDrawState={ specialDrawState} datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData} />

          {announcementState && announcementState.length > 0 ? <Announcement _announcementState={ announcementState} _auth={auth}  _language = { language }/> : null}

      <div className={styles.device_detect_for_mobile}> 
            <PayoutSectionForMob _transactions={transactions}/>
      </div>

      
      
      <div className={styles.device_detect_for_desktop}> 
        <PayoutSection _transactions={transactions}/>
        <GamePlayPrize _winnerResultDetails ={winnerResultDetails}/>
        <HowToPlay/>

        <Footer/>
      </div>
{/*--Footer--*/}
</>
      
  )
}
