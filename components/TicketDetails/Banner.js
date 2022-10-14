import Marquee from "react-fast-marquee";
import Link from "next/link";

import React from 'react';
import { useTranslation } from "react-i18next";
const ListBanner = () => {
    const { t } = useTranslation();
    return (
        <>
        {/*-Breadcrumb--*/}
        <section class="custom-breadcrumb">
        <div class="container">
            <div class="breadcrumb-heading">
                <h1>{t('BettingList')}</h1>
            </div>
            <div class="breadcrumb-list">
                <ul>
                    <li>
                        <a href="#"><span>{t('Homepage')}</span></a>
                    </li>
                    <li><span>{t('BettingList')}</span></li>
                </ul>
            </div>
        </div>
    </section>
        {/*--Breadcrumb--*/}
        </>
    )
}
export default ListBanner;