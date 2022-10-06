import { useTranslation } from "react-i18next";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import React, { useEffect, useState } from 'react';
import i18n from '../../components/i18n';

import PropTypes from 'prop-types';

import Link from 'next/link';


import { useDispatch, useSelector } from "react-redux";
const Header = ({datauser}) => {
  
   const dispatch = useDispatch();
   let auth = useSelector(state => state.auth);


   console.log('Header:auth:',auth);


   let language = '';

   

   if(auth && auth.lang){
    language = auth.lang;
   }else {
    language = datauser && datauser.user && datauser.user.data && datauser.user.data.language && datauser.user.data.language.locale ? datauser.user.data.language.locale : 'en'
   }

  const { t } = useTranslation();
  const [langType, setLangType] = useState(language);
 
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language])



  const changeLangm = (l) => {
    return () => {
        i18n.changeLanguage(l);
      dispatch( {
        type: "CHANGE_LANGUAGE",
        payload: l
    })
    }
  }

  function LangTypeFun({langTypeVal}){
    // alert(langTypeVal)
    if (langTypeVal == 'en') {
      return(
        <>
            <span className="lang-flag">
              <img src="assets/images/icons/flag-english.png"/>
            </span> Eng
        </>
      )
    }
    else if (langTypeVal == 'ch') {
      return(
        <>
            <span className="lang-flag">
              <img src="assets/images/icons/flag-china.png"/>
            </span> 中文
        </>
      )
    }
    else if (langTypeVal == 'kh') {
      return(
        <>
            <span className="lang-flag">
              <img src="assets/images/icons/flag-khmer.png"/>
            </span> ខ្មែរ
        </>
      )
    } else {
      return(
        <>
            <span className="lang-flag">
              <img src="assets/images/icons/flag-english.png"/>
            </span> Eng
        </>
      )
    }
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
   
    return (
      <>
      <link href="assets/text-fonts/poppins/poppins-font.css" rel="stylesheet" />
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
                            <li >
                            <Link  className="active" href="/">{t('Homepage')}</Link>
                              {/* <a className="active" href="#">Home</a> */}
                            </li>
                            <li>
                            <Link href="/bettingNew">{t('Betting')}</Link>
                              {/* <a  href="#">Betting</a> */}
                            </li>
                            <li class="dropdown-desktop">
                            <a href="#" >{t('History')}</a>
                            <ul class="sub-menu-desktop">
                                <li><Link href="/bettingNew">{t('Betting')}</Link></li>
                                <li><Link href="/bettingList">{t('History')}</Link></li>
                            </ul>
                          </li>
                            <li>
                              <Link href="/results" >{t('Result')}</Link>
                            </li>
                          </ul>
                  </div>
                  <div className="right-part-menu">
                      <ul className="right-part-list">
                          <li>
                              <span className="text-end mb-0 user-details"><span className="user-id text-black" >{datauser && datauser.user && datauser.user.data  && datauser.user.data.name ? datauser.user.data.name[0].toUpperCase() + datauser.user.data.name.substring(1)  : "" }</span><a href="#" className="reload-icon"><span ><img src="assets/images/icons/reload-white.png" alt="reload"/></span></a> <span className='text-black'>
                                
                              { datauser && datauser.user && datauser.user.data && datauser.user.data && datauser.user.data.wallet && datauser.user.data.wallet.amount ? parseFloat(datauser.user.data.wallet.amount).toFixed(2)  : "0.00" }
                                
                              </span> <span className="badge badge-yellow text-black">
                            
                                { datauser && datauser.user && datauser.user.data && datauser.user.data.merchant && datauser.user.data.merchant.currency && datauser.user.data.merchant.currency.code ? datauser.user.data.merchant.currency.code  : "USD" }

                              </span></span>
                          </li>
                          <li className="hide-650">
                              <a href="#" className="play-lottery-btn ">{t('Play_Lottery')}</a>
                          </li>
                          <li className="dropdown position-relative">
                          <div className="">
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                              <DropdownToggle className="lanugae-selector" caret>
                                <LangTypeFun langTypeVal={language} />
                                {/* <span className="lang-flag me-2"><img src="assets/images/icons/flag-english.png"/></span>English */}
                              </DropdownToggle>
                              <DropdownMenu >
                                <DropdownItem  onClick={changeLangm('en')}>
                                      <span className="lang-flag">
                                        <img src="assets/images/icons/flag-english.png"/>
                                      </span>&nbsp; &nbsp;Eng
                                </DropdownItem>
                                <DropdownItem  onClick={changeLangm('ch')}>
                                      <span className="lang-flag">
                                        <img src="assets/images/icons/flag-china.png"/>
                                      </span>&nbsp; &nbsp;中文
                                </DropdownItem>
                                <DropdownItem onClick={changeLangm('kh')}>
                                      <span className="lang-flag">
                                        <img src="assets/images/icons/flag-khmer.png"/>
                                      </span>&nbsp; &nbsp;ខ្មែរ
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                          </li>



                          
                          <li className="menu-mobile">
                              <button class="navbar-toggler" type="button" onClick={() => openNav() } >
                                  <span class="navbar-toggler-icon"></span>
                                </button>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
        </header>
        <div id="mySidepanel" className="sidepanel">
            <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav() } >&times;</a>
              <div className="mobile-menu-list">
                  <ul className="list-unstyled">
                      <li>
                        <Link className="active"  href="/">{t('Homepage')}</Link>  
                      </li>
                      {/* <li className="submenu-mobile">
                          <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" className="collapsed">Betting</a>
                          <div className="collapse" id="collapseExample">
                              <ul className="list-unstyled">
                                  <li>
                                      <Link href="/bettingNew">{t('Betting')}</Link>
                                  </li>
                                  <li>
                                    <Link href="/transaction">{t('History')}</Link>
                                  </li>
                              </ul>
                            </div>
                      </li> */}
                      <li>
                          <Link href="/bettingNew">{t('Betting')}</Link>
                      </li>
                      <li>
                        <Link href="/transaction">{t('History')}</Link>
                      </li>
                      <li>
                        <Link href="/results" >{t('Result')}</Link>  
                      </li>
                  </ul>
              </div>
        </div>
      </>
    )
  }
  export default Header;
  