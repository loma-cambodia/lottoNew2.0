import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import HomeSlider from '../components/home/homeSlider';
import Announcement from '../components/home/announcement';
import PayoutSection from '../components/home/payoutSection';
import GamePlayPrize from '../components/home/gamePlayPrize';
import HowToPlay from '../components/home/howToPlay';
import BettingOptionSelection from '../components/betting/bettingOptionSelection';
import {getBettingDates,lotterySubmit} from '../store/actions/bettingActions';
import { useDispatch, useSelector } from "react-redux";
export default function BettingNew() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);


       useEffect(() => {
          dispatch(getBettingDates());
      },[dispatch]);


      const lotterySubmitRecords = () => {

        dispatch(lotterySubmit( setData, response =>{
           console.log('response:',response);
        }));


      }


      let bettingDatesStore = useSelector(state => state.betting.dates);
    //  console.log('bettingDatesStore:',bettingDatesStore);

  return (
    <>
       <Head>
          <title>Malaysia Lottery</title>
          <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet"/>
          <link href="assets/css/style.css" rel="stylesheet"/>
          <link href="assets/css/owl.carousel.css" rel="stylesheet"/>
          <link href="assets/css/owl.theme.default.css" rel="stylesheet"/>
      </Head>
      <Header/>
      {/*--Mobile Menu--*/}
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
      {/*--Mobile Menu-*/}
 

      {/*-Breadcrumb--*/}
        <section className="custom-breadcrumb">
            <div className="container">
                <div className="breadcrumb-heading">
                    <h1>BETTING</h1>
                </div>
                <div className="breadcrumb-list">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li><span>Betting</span></li>
                    </ul>
                </div>
            </div>
        </section>
      {/*--Breadcrumb--*/}
     <BettingOptionSelection _bettingDatesStore={bettingDatesStore}/> 
     <Footer/>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
    <script src="assets/js/owl.carousel.js"></script>
    <script src="assets/js/main.js"></script>
    {/*--Footer--*/}
</>
      
  )
}
