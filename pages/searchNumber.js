import Head from 'next/head'
import styles from '../styles/Home.module.css';
import React, { useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import SearchNumbers from '../components/bettingtips/SearchNumber';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { userTransactionDetails } from '../store/actions/homeActions';

export default function SearchNumber({datauser, updateSessionData, setUpdateSessionData}) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    useEffect(() => {
        if(datauser && datauser.user && datauser.user.data && datauser.user.data.merchant_id)
        dispatch(userTransactionDetails(datauser.user.data.merchant_id,datauser.user.data.token ? datauser.user.data.token : ""));
    }, [datauser]);
    const auth = useSelector(state => state.auth);
    let transactions = state && state.auth && state.auth.transactions ? state.auth.transactions : {};
    return (
        <>
            <Head> 
                <title>{t('tittle_main')}</title>          
            </Head>
            <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>
            <SearchNumbers _transactions={transactions} _auth={auth} datauser={datauser} />
            <div className={styles.device_detect_for_desktop}> 
                <Footer/>
            </div>
        </> 
    )
}
