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
export default function Home({datauser, updateSessionData, setUpdateSessionData}) {


  const [active, setActive] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();


useEffect(() => {
  dispatch(userTransactionDetails());
  dispatch(winnerResultDetails2());
}, [])



useEffect(() => {
  dispatch({
    type: "GET_LOGIN_DETAILS",
    payload: datauser && datauser.user && datauser.user.data ? datauser.user.data : {}
})
}, [datauser])


const state = useSelector(state => state);
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
