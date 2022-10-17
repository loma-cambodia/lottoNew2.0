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
import GamePlayPrize from '../components/home/gamePlayPrize';
import HowToPlay from '../components/home/howToPlay';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {userTransactionDetails, winnerResultDetails2} from '../store/actions/homeActions';
import {getLogin} from '../store/actions/authActions';
export default function Home({datauser, updateSessionData, setUpdateSessionData}) {


  const [active, setActive] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const state = useSelector(state => state);

  //console.log('Home:datauser:',datauser);

useEffect(() => {
  dispatch(userTransactionDetails());
  dispatch(winnerResultDetails2());
}, [])



useEffect(() => {
  console.log('11111111111111');
  console.log('datauser:',datauser);

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

console.log('objectWithData:',objectWithData);
console.log('datauser:',datauser);

if(objectWithData.customer_id != 0){
    dispatch(getLogin(objectWithData)); 
}
}, [datauser])


  
    const auth = useSelector(state => state.auth);
     console.log('Index:state:', state);
      state.auth.transactions

      let transactions = state && state.auth && state.auth.transactions ? state.auth.transactions : {};

      let winnerResultDetails = state && state.home && state.home.winnerResultDetails ? state.home.winnerResultDetails : [];

  






  return (
    <>
       <Head>
          <title>{t('Index_tittle')}</title>          
      </Head>
      <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>

      <HomeSlider />
      <Announcement />
      <PayoutSection _transactions={transactions}/>
      <GamePlayPrize _winnerResultDetails ={winnerResultDetails}/>
      <HowToPlay/>
      <Footer/>
{/*--Footer--*/}
</>
      
  )
}
