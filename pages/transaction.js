import Transactions from "../components/history/transactions";
import TransactionBanner from "../components/history/transactionBanner";
import React, {useState} from "react";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { useTranslation } from "react-i18next";
export default function Transaction({datauser}){
    
    const { t } = useTranslation();
    const [active, setActive] = useState(false)
    return (
        <>
            <Head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{t('History_tittle')}</title>
            </Head>
            <Header datauser={datauser}/>
              {/*--Mobile Menu--*/}
                <div id="mySidepanel" className="sidepanel">
                    <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                    <ul className="list-unstyled">
                        <li><a href="#">{t('Homepage')}</a></li>
                        <li><a href="#">{t('Homepage')}</a></li>
                        <li><a href="#">{t('Homepage')}</a></li>
                        <li><a href="#">{t('Homepage')}</a></li>
                        <li><a href="#">{t('Homepage')}</a></li>
                    </ul>
                    </div>
                {/*--Mobile Menu-*/}
            <TransactionBanner/>
            <Transactions/>
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
