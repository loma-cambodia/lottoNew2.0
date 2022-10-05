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
import {userTransactionDetails,winnerResultDetails} from '../store/actions/homeActions';
export default function Home({datauser}) {
  const [active, setActive] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
console.log('datauser212121212:',datauser);





useEffect(() => {
  dispatch(userTransactionDetails());
  dispatch(winnerResultDetails());
}, [])

const state = useSelector(state => state);
console.log('index:state:',state);


  return (
    <>
       <Head>
          <title>{t('Index_tittle')}</title>
          <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet"/>
          <link href="assets/css/style.css" rel="stylesheet"/>
          <link href="assets/css/owl.carousel.css" rel="stylesheet"/>
          <link href="assets/css/owl.theme.default.css" rel="stylesheet"/>
      </Head>
      <Header datauser={datauser}/>
      {/*--Mobile Menu--*/}
      <div id="mySidepanel" className="sidepanel">
          <a href="javascript:void(0)" className="closebtn">&times;</a>
          <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
          </ul>
        </div>
      {/*--Mobile Menu-*/}
  <HomeSlider />
  <Announcement />
  <PayoutSection/>
  <GamePlayPrize/>
  <HowToPlay/>
  <Footer/>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
<script src="assets/js/owl.carousel.js"></script>
<script src="assets/js/main.js"></script>
{/*--Footer--*/}
</>
      
  )
}
