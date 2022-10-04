import Transactions from "../components/history/transactions";
import TransactionBanner from "../components/history/transactionBanner";
import React, {useState} from "react";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import Head from 'next/head';

import { useTranslation } from "react-i18next";
export default function Transaction(){
    
    const { t } = useTranslation();
    const [active, setActive] = useState(false)
    return (
        <>
            <Head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{t('History_tittle')}</title>
            <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet"/>
            <link href="assets/css/style.css" rel="stylesheet"/>
            <link href="assets/css/owl.carousel.css" rel="stylesheet"/>
            <link href="assets/css/owl.theme.default.css" rel="stylesheet"/>
            </Head>
            <Header/>
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
            <TransactionBanner/>
            <Transactions/>
            <Footer/>
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
            <script src="assets/js/owl.carousel.js"></script>
            <script src="assets/js/main.js"></script>
        </>
    )
}