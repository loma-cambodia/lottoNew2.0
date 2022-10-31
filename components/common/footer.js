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
                    <Link href="/" className="logo-link">
                      <img src="assets/images/logo-footer.png" style={{}} className="img-fluid" role="button"/>
                    </Link> 
            </div>
            <div className="footer-links ms-auto">
                <div className="clearfix">
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link className="active"  href="/"><a>{t('Homepage')}</a></Link></li>
                         <li className="list-inline-item"><Link href="/betting"><a>{t('Betting')}</a></Link></li> 
                        <li className="list-inline-item"><Link href="/bettingList"><a>{t('BettingList')}</a></Link></li>
                        <li className="list-inline-item"><Link href="/settleList"><a>{t('betting_history')}</a></Link></li>
                        <li className="list-inline-item"><Link href="/winningList"><a>{t('winning_list')}</a></Link></li>
                        <li className="list-inline-item"><Link href="/results"><a>{t('Result')}</a></Link></li>
                        <li className="list-inline-item"><Link href="/calculator" ><a>{t('Calculator')}</a></Link></li>
                        <li className="list-inline-item"><Link href="/analysis" ><a>{t('Betting_Tips')}</a></Link></li>
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
