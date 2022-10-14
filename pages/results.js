import Head from "next/head";
import React, { useState, useEffect } from "react";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Banner2 from "../components/results/banner2";
import Result from "../components/results/result";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";
import {getResults,getLatestResultDate} from '../store/actions/resultActions';

// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Filter from "../components/results/filter";
 export default function Results({datauser,updateSessionData, setUpdateSessionData}){
    const { t } = useTranslation();
    const [active, setActive] = useState(false);
    const auth = useSelector(state => state.auth);


    const [initDate, setDate] = useState();

    const dispatch = useDispatch();

    
        console.log('initDate in results: ',initDate)


        const dateFilter = (date) =>{
            
    }
    useEffect(() => {
        // getlatestDrawResultsDate()
    },[]);
    return (
        <>
            <Head>
                <title>{t('Result_tittle')}</title>
            </Head>
            
            <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>
            {/*--Mobile Menu--*/}
            {/* <div id="mySidepanel" className="sidepanel">
                <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                </ul>
            </div> */}
            {/*--Mobile Menu-*/}
            <Banner2/>
            <section className="page-content py-3">
                <div className="container">
                <Filter _setDate = {setDate}/>
                <Result _initDate={initDate}/>
                </div>
            </section>   
            <Footer/>
            {/* <script src="assets/js/jquery.min.js"></script>
            <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
            <script src="assets/js/owl.carousel.js"></script>
            <script src="assets/js/main.js"></script> */}
        </>
        
    )
 }