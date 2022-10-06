import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from '../styles/Home.module.css'

export default function BettingList({datauser}) {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
       useEffect(() => {
        
      },[dispatch]);
      
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
        <div className='text-center'>HELLOO</div>
      <Footer/>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
        <script src="assets/js/owl.carousel.js"></script>
        <script src="assets/js/main.js"></script>
      {/*--Footer--*/}
    </>
  )
}
