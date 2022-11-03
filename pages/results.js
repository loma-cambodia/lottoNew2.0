import Head from "next/head";
import React, { useState, useEffect } from "react";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Banner2 from "../components/results/banner2";
import ResultNew from "../components/results/resultNew";
import { useTranslation } from "react-i18next";
import styles from '../styles/Home.module.css'

import { useDispatch, useSelector } from "react-redux";
import {getResults,getLatestResultDate} from '../store/actions/resultActions';
import {getLogin} from '../store/actions/authActions';

// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Filter from "../components/results/filter";
 export default function Results({datauser,updateSessionData, setUpdateSessionData}){
    const { t } = useTranslation();
    const [active, setActive] = useState(false);
    const auth = useSelector(state => state.auth);
    const state = useSelector(state => state);

    const [initDate, setDate] = useState();

    const dispatch = useDispatch();

        const dateFilter = (date) =>{
            
    }
    
    useEffect(() => {
       
  
        }, [datauser,initDate])

    
    return (
        <>
            <Head>
                <title>{t('tittle_main')}</title>
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
            <section className="page-content py-3 ">
                <div className="container vh-70">
                {/* <Filter _setDate = {setDate}/> */}
                {/* <Result _initDate={initDate}/> */}
                <ResultNew _setDate = {setDate} _auth={auth}/>
                </div>
            </section>   
            
            <div className={styles.device_detect_for_desktop}> 
                <Footer/>
            </div>

            {/* <script src="assets/js/jquery.min.js"></script>
            <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
            <script src="assets/js/owl.carousel.js"></script>
            <script src="assets/js/main.js"></script> */}
        </>
        
    )
 }