import Head from 'next/head'
import styles from '../styles/Home.module.css';
import React, {useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {userTransactionDetails} from '../store/actions/homeActions';
import {getLogin} from '../store/actions/authActions';
import InvestmentCalculator from '../components/Calculator/investmentCalculator';
export default function Home({datauser, updateSessionData, setUpdateSessionData}) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
useEffect(() => {
  if(datauser && datauser.user && datauser.user.data && datauser.user.data.merchant_id)
    dispatch(userTransactionDetails(datauser.user.data.merchant_id));
}, [datauser]);

useEffect(() => {
let objectWithData = {  
  "customer_name": datauser && datauser.user && datauser.user.data && datauser.user.data.customer_name ? datauser.user.data.customer_name : '',
  "customer_id":  datauser && datauser.user && datauser.user.data && datauser.user.data.customer_id ? datauser.user.data.customer_id : 0,
  "merchant_id":  datauser && datauser.user && datauser.user.data && datauser.user.data.merchant_id ? datauser.user.data.merchant_id : 0,
  "language":   state && state.auth && state.auth.lang  ? state.auth.lang : datauser && datauser.user && datauser.user.data && datauser.user.data.language &&  datauser.user.data.language.locale ? datauser.user.data.language.locale : 'en'  
} 

if(objectWithData.customer_id != 0){
    dispatch(getLogin(objectWithData)); 
}
}, [datauser])

      const auth = useSelector(state => state.auth);
      let transactions = state && state.auth && state.auth.transactions ? state.auth.transactions : {};
      let calculatorOdds = transactions && transactions.market && transactions.market.odd_settings ? transactions.market.odd_settings : [];
  return (
    <>
       <Head> 
          <title>{t('tittle_main')}</title>          
      </Head>
      <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>
      <InvestmentCalculator _calculatorOdds={calculatorOdds} _auth={auth}/>
      <div className={styles.device_detect_for_desktop}> 
        <Footer/>
      </div>
    </>
      
  )
}
