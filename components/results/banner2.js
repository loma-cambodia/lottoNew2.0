import React from "react";
import { useTranslation } from "react-i18next";
const Banner2 = () => {
    
  const { t } = useTranslation();
    return (
        <>
        <section className="custom-breadcrumb">
        <div className="container">
            <div className="breadcrumb-heading">
                <h1 class="text-uppercase">{t('Past_Draw_Result')}</h1>
            </div>
            <div className="breadcrumb-list">
                <ul>
                
                <li><span>{t('Homepage')} / {t('Past_Draw_Result')}</span></li>
                </ul>
            </div>
        </div>
    </section>
        </>
    )
}
export default Banner2;