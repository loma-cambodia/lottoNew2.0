import Link from 'next/link';
import React from 'react';
import { useTranslation } from "react-i18next";

const Footer = () => {
const { t } = useTranslation();
  return (
    <>
    <section className="footer py-4" >
    <div className="container">
        <div className="footer-row">
            <div className="footer-logo">
                <a href="#">
                    <img src="assets/images/logo-footer.png" style={{maxHeight: '100px!important'}} className="img-fluid"/>
                </a>
            </div>
            <div className="footer-links ms-auto">
                <div className="clearfix">
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link className="active"  href="/"><a>{t('Homepage')}</a></Link></li>
                        <li className="list-inline-item"><Link href="/bettingNew"><a>{t('Betting')}</a></Link></li>
                        <li className="list-inline-item"><Link href="/transaction"><a>{t('History')}</a></Link></li>
                        <li className="list-inline-item"><Link href="/results"><a>{t('Result')}</a></Link></li>
                        <li className="list-inline-item"><Link href="#"><a>{t('Play_Lottery')}</a></Link></li>
                    </ul>
                </div>
                {/* <div className="clearfix my-3">
                    <p className="mb-0 small text-white">{t('copyright')}</p>
                </div> */}
            </div>
        </div>
    </div>
  </section>
    </>
  )
}
export default Footer;
