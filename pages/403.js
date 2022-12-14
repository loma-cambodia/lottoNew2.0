// import { t } from 'i18next';
import React,{ useState,useEffect } from "react";
import i18n from '../components/i18n';
import { useTranslation } from "react-i18next";

import Head from 'next/head'
// import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function About403({_action,datauser}) {
  const { t } = useTranslation();
  const action = _action;
  const language = datauser && datauser.user && datauser.user.data && datauser.user.data.language && datauser.user.data.language.locale ? datauser.user.data.language.locale : 'en';

  const [activeMerchant, setActiveMerchant] = useState(action);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language])

  return (
    <div className="container">
      <div className='row align-items-center justify-content-center '>
          <Head>
            <title>Malaysia Lottery</title>
          </Head>
 
          <div className="col-md-6">
              <div className="text-center pt-3">
                  <img src="img/LOGO MALAYSIA BACK-01.png" style={{width: '150px',height: 'auto',paddingBottom:'',paddingLeft:'0', margin:'0 auto'}} alt="" />
                  <br></br>
                  <img  src="img/error/403-animated-2.gif" style={{width: '100%'}}  alt="" />
                      <hr></hr>
                      <h3>{activeMerchant == 1 ? t('merchant has disabled') : "" }</h3>
                      <h3 className="fw-bold">Access Denied Or Forbidden</h3>
                      <h3 className="fw-bold">访问被拒绝或禁止</h3>
                      <h3 className="fw-bold">ដំណើរ​ការ​ត្រូវ​បាន​បដិសេធ</h3>
                      <hr></hr>
                      {/* <p className="fs-3"> <span className="text-danger">Opps!</span> Status 404</p> */}
                      <p className="lead">
                      The page or resource you&rsquo;re trying to reach is absolutely forbidden for some reason.<br/>
                          {/* <Link href="/" style={{color: '#be2263'}}>Return to the Home Page </Link> */}
                      </p>
                      
                      <p className="lead">
                      由于某种原因，您尝试访问的页面或资源被禁止 <br/>
                      {/* <Link href="/" style={{color: '#be2263'}}>返回主页</Link> */}
                      </p>
                      
                      <p className="lead">
                      ទំព័រ ឬធនធានដែលអ្នកកំពុងព្យាយាមចូលប្រើត្រូវបានហាមឃាត់ដោយហេតុផលមួយចំនួន<br/>
                      {/* <Link href="/" style={{color: '#be2263'}}>ត្រឡប់ទៅទំព័រដើមវិញ</Link> */}
                      </p>
                      
              </div>
          </div>
      </div>
    </div>
  );
}