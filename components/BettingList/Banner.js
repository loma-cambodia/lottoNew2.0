import Marquee from "react-fast-marquee";
import Link from "next/link";

import React from 'react';
import { useTranslation } from "react-i18next";
const ListBanner = () => {
    const { t } = useTranslation();
    return (
        <>
        {/*-Breadcrumb--*/}
        <section className="custom-breadcrumb">
        <div className="container">
            <div className="breadcrumb-heading">
                <h1>{t('BettingList')} </h1>
            </div>
            <div className="breadcrumb-list">
                <ul>
                    <li>
                        <a href="#"><span>Home</span></a>
                    </li>
                    <li><span>Betting List</span></li>
                </ul>
            </div>
        </div>
    </section>
        {/*--Breadcrumb--*/}
        </>
    )
}
export default ListBanner;