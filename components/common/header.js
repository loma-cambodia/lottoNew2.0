import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from 'react';
import i18n from '../../components/i18n';
import Link from 'next/link'

const Header = ({datauser}) => {
  const { t } = useTranslation();
  const [langType, setLangType] = useState('');
  useEffect(() => {
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);
    setLangType(currentLang);
  }, [langType])
  

  const changeLangm = (l) => {
    return () => {
        i18n.changeLanguage(l);
        localStorage.setItem('lang', l);
        setLangType(l);
    }
  }
  // const userDatas = JSON.parse(localStorage.getItem("name"));
  //  console.log('Header:datauser:',datauser);

  function LangTypeFun({langTypeVal}){
    // alert(langTypeVal)
    if (langTypeVal == 'en') {
      return(
        <>
            <span className="lang-flag">
              <img src="assets/images/icons/flag-english.png"/>
            </span> ENGLISH
        </>
      )
    }
    else if (langTypeVal == 'de') {
      return(
        <>
            <span className="lang-flag">
              <img src="assets/images/icons/flag-china.png"/>
            </span> Chinese
        </>
      )
    }
    else if (langTypeVal == 'kh') {
      return(
        <>
            <span className="lang-flag">
              <img src="assets/images/icons/flag-khmer.png"/>
            </span> Khmer
        </>
      )
    } else {
      return(
        <>
            <span className="lang-flag">
              <img src="assets/images/icons/flag-english.png"/>
            </span> ENGLISH
        </>
      )
    }
  }

    return (
      <>
        <header className="header-top" data-spy="affix" data-offset-top="197">
    <div className="container">
        <div className="d-flex align-items-center">
            <div className="logo">
                <a href="#" className="logo-link">
                    <img src="assets/images/logo-header.png" className="logo-img" alt=""/>
                </a>
            </div>
            <div className="desktop-menu me-auto">
                    <ul className="desktop-menu-list">
                      <li>
                      <Link className="active"  href="/">{t('Homepage')}</Link>
                        {/* <a className="active" href="#">Home</a> */}
                      </li>
                      <li>
                      <Link href="/bettingNew">{t('Betting')}</Link>
                        {/* <a  href="#">Betting</a> */}
                      </li>
                      <li>
                      <Link href="/transaction">{t('History')}</Link>
                        {/* <a href="#" >History</a> */}
                      </li>
                      <li>
                        <Link href="/results" >{t('Result')}</Link>
                      </li>
                    </ul>
            </div>
            <div className="right-part-menu">
                <ul className="right-part-list">
                    <li>
                        <span className="text-end mb-0 user-details"><span className="user-id text-black" >{datauser && datauser.user && datauser.user.data  && datauser.user.data.name ? datauser.user.data.name[0].toUpperCase() + datauser.user.data.name.substring(1)  : "" }</span><a href="#" className="reload-icon"><span ><img src="assets/images/icons/reload-white.png" alt="reload"/></span></a> <span className='text-black'>0.00</span> <span className="badge badge-yellow text-black">{datauser && datauser.user && datauser.user.data  && datauser.user.data.currency_symbol ? datauser.user.data.currency_symbol  : "" }
                         USD</span></span>
                    </li>
                    <li className="hide-650">
                        <a href="#" className="play-lottery-btn ">{t('Play_Lottery')}</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="lanugae-selector dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                          <LangTypeFun langTypeVal={langType} />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                            {/* <li><a className="dropdown-item" href="#">Action</a></li> */}
                            <li onClick={changeLangm('en')}>
                              <a className="dropdown-item" href="#">
                                <span className="lang-flag">
                                  <img src="assets/images/icons/flag-english.png"/>
                                </span>&nbsp; &nbsp;English
                              </a>
                            </li>
                            <li onClick={changeLangm('de')}>
                              <a className="dropdown-item" href="#">
                                <span className="lang-flag">
                                  <img src="assets/images/icons/flag-china.png"/>
                                </span>&nbsp; &nbsp;Chinese
                              </a>
                            </li>
                            <li onClick={changeLangm('kh')}>
                              <a className="dropdown-item" href="#">
                                <span className="lang-flag">
                                  <img src="assets/images/icons/flag-china.png"/>
                                </span>&nbsp; &nbsp;Khmer
                              </a>
                            </li>
                          </ul>
                    </li>
                    <li className="menu-mobile">
                        {/* <button className="navbar-toggler" type="button" onClick="openNav()"> */}
                        <button className="navbar-toggler" type="button">
                            <span className="navbar-toggler-icon"></span>
                          </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </header>
      </>
    )
  }
  export default Header;
  