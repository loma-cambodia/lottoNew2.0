import Head from "next/head";
import React, { useState } from "react";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Banner2 from "../components/results/banner2";
import Result from "../components/results/result";
import { useTranslation } from "react-i18next";
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Filter from "../components/results/filter";
 export default function Results({datauser}){
    const { t } = useTranslation();
    const [active, setActive] = useState(false)

    return (
        <>
            <Head>
                <title>{t('Result_tittle')}</title>
                <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet"/>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" rel="stylesheet"/>
                <link href="assets/fontawesome/css/all.css" rel="stylesheet"/>
                <link href="assets/css/style.css" rel="stylesheet"/>
                <link href="assets/css/owl.carousel.css" rel="stylesheet"/>
                <link href="assets/css/owl.theme.default.css" rel="stylesheet"/>
            </Head>
            
            <Header datauser={datauser}/>
            {/*--Mobile Menu--*/}
            <div id="mySidepanel" className="sidepanel">
                <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                </ul>
            </div>
            {/*--Mobile Menu-*/}
            <Banner2/>
            <section class="page-content py-3">
                <div class="container">
                <Filter/>
                    <Result/>
                </div>
            </section>   
            <Footer/>
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
            <script src="assets/js/owl.carousel.js"></script>
            <script src="assets/js/main.js"></script>
        </>
        
    )
 }