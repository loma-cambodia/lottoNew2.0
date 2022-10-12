import React from "react";
import { useTranslation } from "react-i18next";
const Banner = () => {
    
  const { t } = useTranslation();
    return (
        <>
        <section className="custom-breadcrumb">
        <div className="container">
            <div className="breadcrumb-heading">
                <h1 className="text-uppercase">{t('Winning List')}</h1>
            </div>
            <div className="breadcrumb-list">
                <ul>
                
                <li><span>{t('Homepage')} / {t('Winning List')}</span></li>
                </ul>
            </div>
        </div>
    </section>
        </>
    )
}
export default Banner;