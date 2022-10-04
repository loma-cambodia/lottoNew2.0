import Marquee from "react-fast-marquee";
import Link from "next/link";

import React from 'react';
import { useTranslation } from "react-i18next";
const TransactionBanner = () => {
    const { t } = useTranslation();
    return (
        <>
        {/*-Breadcrumb--*/}
        <section className="custom-breadcrumb">
            <div className="container">
                <div className="breadcrumb-heading">
                    <h1>{t('Transaction_Details')}</h1>
                </div>
                <div className="breadcrumb-list">
                    <ul>
                        <li><span>{t('Homepage')} / {t('Transaction_Details')}</span></li>
                    </ul>
                </div>
            </div>
        </section>
        {/*--Breadcrumb--*/}
        </>
    )
}
export default TransactionBanner;