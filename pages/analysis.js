import Head from 'next/head'
import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import SearchNumbers from '../components/bettingtips/SearchNumber';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { userTransactionDetails } from '../store/actions/homeActions';
import { serachBettingTips } from "../store/actions/bettingTips";

export default function SearchNumber({datauser, updateSessionData, setUpdateSessionData}) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [action, setAction] = useState(false);
    
    const GetSearchNumber = (searchPostData,tokenNo) => {
        let response = dispatch(serachBettingTips(searchPostData, tokenNo));
        setAction(true);
        if(response){
            return true;
        }
    }
    let bettingTip = [];
    if(action){
        bettingTip = state && state.bettingTips && state.bettingTips.bettingsTips ? state.bettingTips.bettingsTips : [];
    }
    useEffect(() => {
        
        if(datauser && datauser.user && datauser.user.data && datauser.user.data.merchant_id)
        dispatch(userTransactionDetails(datauser.user.data.merchant_id,datauser.user.data.token ? datauser.user.data.token : ""));
    }, [datauser,action]);
    const auth = useSelector(state => state.auth);
    let transactions = state && state.auth && state.auth.transactions ? state.auth.transactions : {};
    let isLoading = state && state.bettingTips && state.bettingTips.loading ? state.bettingTips.loading : false;
    return ( 
        <>
            <Head> 
                <title>{t('tittle_main')}</title>          
            </Head>
            <Header datauser={datauser} _auth={auth} updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>
            <SearchNumbers _transactions={transactions} _auth={auth} datauser={datauser} _GetSearchNumber={GetSearchNumber} _bettingTip={bettingTip} _isLoading={isLoading} />
            <div className={styles.device_detect_for_desktop}> 
                <Footer/>
            </div> 
        </> 
    )
}
