import Marquee from "react-fast-marquee";
import Link from "next/link";

import React from 'react';
import { useTranslation } from "react-i18next";
const SettleBanner = () => {
    const { t } = useTranslation();
    return (
        <>
        {/*-Breadcrumb--*/}
        <section className="custom-breadcrumb">
        <div className="container">
            <div className="breadcrumb-heading">
                <h1>{t('betting_history')} </h1>
            </div>
            {/* <div className="breadcrumb-list">
                <ul>
                    <li>
                        <span>{t('Homepage')} / {t('betting_history')}</span>
                    </li>
                </ul>
            </div> */}
        </div>
    </section>
        {/*--Breadcrumb--*/}
        </>
    )
}
export default SettleBanner;