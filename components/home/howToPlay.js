
import React from 'react';
import { useTranslation } from "react-i18next";
import Link from 'next/link';
const HowToPlay = () => {
  const { t } = useTranslation();
    return (
      <>
       {/* HOW TO PLAY */}
       <section className="how-to-play custom-padding">
    <div className="container">
        <div className="heading-part text-center mb-4">
            <h5 className="text-uppercase fw-bold">{t('how_to')}</h5>
            <h2 className="text-uppercase text-color-main fw-bold">{t('Easiest_Way_To_Picking_A_Number')}</h2>
        </div>

        <div className="timeline">
            <div className="timeline-container left">
              <div className="date">{t('1')}</div>
              <div className="content">
                <h2>{t('step_1_heading')}</h2>
                <p>
                {t('step_1_tittle')}
                </p>
              </div>
            </div>
            <div className="timeline-container right">
              <div className="date">{t('2')}</div>
              <div className="content">
                <h2>{t('step_2_heading')}</h2>
                <p>
                {t('step_2_tittle')}
                </p>
              </div>
            </div>
            <div className="timeline-container left">
              <div className="date">{t('3')}</div>
              <div className="content">
                <h2>{t('step_3_heading')}</h2>
                <p>
                {t('step_3_tittle')}
                </p>
              </div>
            </div>
            <div className="timeline-container right">
              <div className="date">{t('4')}</div>
              <div className="content">
                <h2>{t('step_4_heading')}</h2>
                <p>
                {t('step_4_tittle')}
                </p>
              </div>
            </div>
            
          </div>
          <div className="clearfix text-center mt-5">
            {/* <a href="#" className="btn-yellow rounded-full">{t('Play_now')}</a> */}
                                   <Link href="/bettingNew"> 
                                        <a href="#" className="btn-yellow rounded-full">{t("Play_now")}</a>
                                     </Link>

        </div>
    </div>
  </section>
      </>
    )
  }
  export default HowToPlay;
  