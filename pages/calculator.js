import Head from 'next/head'
import styles from '../styles/Home.module.css';
import React, { useState,useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {announcement, userTransactionDetails, winnerResultDetailsSecond, specialDraw} from '../store/actions/homeActions';
import {getLogin} from '../store/actions/authActions';
import Calculator from '../components/calculator/investmentCalculator_new';
import CalculatorOld from '../components/calculator/Calculator_new';
import ListBanner from '../components/Calculator/BannerCalculator';

export default function Home({datauser, updateSessionData, setUpdateSessionData}) {
  const [active, setActive] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
useEffect(() => {
  //dispatch(announcement());
  dispatch(specialDraw(datauser.user.data.token ? datauser.user.data.token : ""));
  if(datauser && datauser.user && datauser.user.data && datauser.user.data.merchant_id)
  dispatch(userTransactionDetails(datauser.user.data.merchant_id,datauser.user.data.token ? datauser.user.data.token : ""));
 // dispatch(winnerResultDetailsSecond());
  dispatch(winnerResultDetailsSecond(datauser.user.data.token ? datauser.user.data.token : ""));
}, [datauser]);




useEffect(() => {

}, [datauser])

      const auth = useSelector(state => state.auth);

      let transactions = state && state.auth && state.auth.transactions ? state.auth.transactions : {};

  return (
    <>
       <Head> 
          <title>{t('tittle_main')}</title>          
      </Head>
      <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>

      <ListBanner/>
      <CalculatorOld _transactions={transactions} _auth={auth}/>

      {/* <Calculator _transactions={transactions} _auth={auth}/>  */}

      <div className={styles.device_detect_for_desktop}> 
        <Footer/>
      </div>
</>
      
  )
}
