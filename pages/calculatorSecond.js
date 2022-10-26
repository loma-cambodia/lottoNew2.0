import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React, { useState,useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {announcement, userTransactionDetails, winnerResultDetailsSecond, specialDraw} from '../store/actions/homeActions';
import {getLogin} from '../store/actions/authActions';
import InvestmentCalculator from '../components/Calculator/investmentCalculator';
//import Calculator from '../components/calculator/Calculator';
export default function Home({datauser, updateSessionData, setUpdateSessionData}) {


  const [active, setActive] = useState(false);


  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
useEffect(() => {
  dispatch(announcement());
  dispatch(specialDraw());
  if(datauser && datauser.user && datauser.user.data && datauser.user.data.merchant_id)
    dispatch(userTransactionDetails(datauser.user.data.merchant_id));
  dispatch(winnerResultDetailsSecond());
}, [datauser]);





useEffect(() => {
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


      const auth = useSelector(state => state.auth);

      let transactions = state && state.auth && state.auth.transactions ? state.auth.transactions : {};

      let winnerResultDetails = state && state.home && state.home.winnerResultDetails ? state.home.winnerResultDetails : [];

      let language = state && state.auth && state.auth.lang ? state.auth.lang : '';

      let announcementState = state && state.home && state.home.announcementDetails ? state.home.announcementDetails : '';
      
      let specialDrawState = state && state.home && state.home.specialDrawDetails ? state.home.specialDrawDetails : '';

      let calculatorOdds = transactions && transactions.market && transactions.market.odd_settings ? transactions.market.odd_settings : [];
  console.log("CALC",calculatorOdds)
  return (
    <>
       <Head> 
          <title>{t('tittle_main')}</title>          
      </Head>
      <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>

     
      <InvestmentCalculator _calculatorOdds={calculatorOdds} _auth={auth}/>
     
    
      {/* <Calculator _transactions={transactions} _auth={auth}/> */}

      
      <div className={styles.device_detect_for_desktop}> 
        <Footer/>
      </div>
{/*--Footer--*/}
</>
      
  )
}
