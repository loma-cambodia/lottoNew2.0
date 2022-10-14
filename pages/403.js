// import { t } from 'i18next';
import { useTranslation } from "react-i18next";

import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function About403() {
    const { t } = useTranslation();

  return (
    // <div className={`${styles.error} row`}>
    <div className='row' style={{margin: '0',padding: '0',height:'100vh'}}>
        <Head>
            <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet"/>
          <link href="assets/css/style.css" rel="stylesheet"/>
          <link href="assets/css/owl.carousel.css" rel="stylesheet"/>
          <link href="assets/css/owl.theme.default.css" rel="stylesheet"/>
        <title>Loma Lotto - 403 {t('access_denied')}</title>
        </Head>
        
                                <div className="col-12 text-center" 
                                style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                                    <img src="img/LOGO MALAYSIA BACK-01-02.png" style={{width:'150px',filter: 'drop-shadow(5px 10px 10px grey)'}} alt="" />
                                </div>
                            <div id=''>
                                <div className="col-12 errorBg text-center" style={{}}>
                                    <img src="img/error/403-animated-2.gif" style={{width:'35%'}} alt="" />
                                </div>
                                <div className="col-12" style={{display: 'flex',justifyContent: 'center',alignItems: 'center', flexDirection:'column',paddingTop:'100px'}}>      
                                    <div className="section-title text-center border-bottom border-top border-4" style={{width:'60vw'}}>
                                        <h1 className="sub-title py-3 smallLetter text-color-main" style={{}}>{t('access_denied_or_forbbiden')}</h1>
                                    </div>
                                        <br></br>
                                    <div className='text-center'>
                                      <span className="" style={{fontWeight: 'normal'}}>
                                          {t('403_message')}
                                      </span>
                                    </div>
                                  <div>
                                      <a className="" style={{fontWeight: 'normal', color:'#fd5497'}}>
                                          {t('return_to')} {t('Homepage')}.
                                      </a>
                                  </div>
                                </div>
                            </div>

                        {/* <div className="error-page-menu">
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a className="single-menu">Homepage</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/lotteries">
                                            <a className="single-menu">Betting</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/history">
                                            <a className="single-menu">History</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/result">
                                            <a className="single-menu">Result</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
    </div>
  );
}