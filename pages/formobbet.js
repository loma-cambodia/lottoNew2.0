import Head from 'next/head'
import React, { useState, useEffect } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import BettingOptionSelection from '../components/betting/bettingOptionSelection';
import BettingOptionSelectionForMob from '../components/betting/bettingOptionSelectionForMob';
import { useDispatch, useSelector } from "react-redux";

export default function Formobbet() {

  let bettingDatesStore = useSelector(state => state.betting.dates);

  return (
    <>
        <Head>
          <title>Malaysia Lottery</title>
          <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet"/>
          <link href="assets/css/style.css" rel="stylesheet"/>
          <link href="assets/css/owl.carousel.css" rel="stylesheet"/>
          <link href="assets/css/owl.theme.default.css" rel="stylesheet"/>
      <Header/>
        </Head>
        <div id="mySidepanel" className="sidepanel">
          <a href="#" className="closebtn" >&times;</a>
          <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
          </ul>
        </div>

        <BrowserView>
            <BettingOptionSelection/> 
        </BrowserView>

        <MobileView className="container">
            <BettingOptionSelectionForMob _bettingDatesStore={bettingDatesStore}/>
        </MobileView> 
        {/*-Footer-*/}
        <Footer/>
    </>
  )
}
