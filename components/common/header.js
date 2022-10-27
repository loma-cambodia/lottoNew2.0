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

import {useRouter} from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import {getLogin} from '../../store/actions/authActions';
import {twoDecimalPlaceWithAmount, twoDecimalPlaceWithoutRound} from './../Utils';


const Header = ({datauser,_auth, updateSessionData, setUpdateSessionData}) => {

   const dispatch = useDispatch();
   let auth = _auth;

   const state = useSelector(state => state);

   let language = '';

   if(auth && auth.lang){
    language = auth.lang;
   }else {
    language = datauser && datauser.user && datauser.user.data && datauser.user.data.language && datauser.user.data.language.locale ? datauser.user.data.language.locale : 'en'
   }

  const { t } = useTranslation();
  const [langType, setLangType] = useState(language);
  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language])

 




  const changeLangm = (l) => {
    return () => {


      let objectWithData = {
        "customer_name": datauser && datauser.user && datauser.user.data && datauser.user.data.customer_name ? datauser.user.data.customer_name : '',
        "customer_id":  datauser && datauser.user && datauser.user.data && datauser.user.data.customer_id ? datauser.user.data.customer_id : 0,
        "merchant_id":  datauser && datauser.user && datauser.user.data && datauser.user.data.merchant_id ? datauser.user.data.merchant_id : 0,
        "language":   l  
      } 
      
      if(objectWithData.customer_id != 0){
          dispatch(getLogin(objectWithData));
          setUpdateSessionData(updateSessionData + 1); 
      }

        i18n.changeLanguage(l);
      dispatch( {
        type: "CHANGE_LANGUAGE",
        payload: l
    })
    }
  }

  

  const loginAPICall = () => {
      setUpdateSessionData(updateSessionData + 1); 
 }

  function LangTypeFun({langTypeVal}){
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


  const logoutUser = (member_id) => {
    fetch(`/api/logout?member_id=${member_id}`)
    .then((res) => { let response = res.json(); 
      window.location.reload();
  })
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
                      <Link href="/" className="logo-link">
                          <img src="assets/images/logo-header.png" className="logo-img" alt="" role="button"/>
                      </Link>
                  </div>
                  <div className="desktop-menu me-auto">
                   
                          <ul className="desktop-menu-list">
                            <li className= {`${router.pathname === "/" ? "active-header":""}`}>
                              <Link className= "active" href="/">{t('Homepage')}</Link>
                            </li>
                            <li className= {`${router.pathname === "/betting" ? "active-header":""}`}>
                              <Link href="/betting">{t('Betting')}</Link>
                            </li>
                            <li className= {`${router.pathname === "/bettingList" ? "active-header":""}`}>
                              <Link href="/bettingList">{t('BettingList')}</Link>
                            </li>
                            <li className= {`${router.pathname === "/settleList" ? "active-header":""}`}>
                              <Link href="/settleList">{t('betting_history')}</Link>
                            </li>
                            <li className= {`${router.pathname === "/winningList" ? "active-header":""}`}>
                              <Link href="/winningList">{t('winning_list')}</Link>
                            </li>
                            {/* <li className="dropdown-desktop">
                            <a href="#" >{t('History')} </a>
                            <ul className="sub-menu-desktop">
                                <li><Link href="/betting">{t('Betting')}</Link></li>
                                <li className= {`${router === "/bettingList" ? "active-header":""}`}><Link href="/bettingList">{t('History')}</Link></li>
                            </ul>
                          </li> */}
                            <li className= {`${router.pathname === "/results" ? "active-header":""}`}>
                              <Link href="/results" >{t('Result')}</Link>
                            </li>
                          </ul>
                  </div>
                  <div className="right-part-menu">
                      <ul className="right-part-list">
                          <li>
                              <span className="text-end mb-0 user-details">
                                <span className="user-id text-black" >{auth && auth.auth  && auth.auth.name ? auth.auth.name[0].toUpperCase() + auth.auth.name.substring(1)  : "" }</span>
                                <span className="reload-icon" role="button"><span onClick={() => loginAPICall()}><img src="assets/images/icons/reload-white.png" alt="reload"/></span></span> <span className='text-black'>
                                
                              { auth && auth.auth && auth && auth.auth.wallet && auth.auth.wallet.amount ? twoDecimalPlaceWithAmount(auth.auth.wallet.amount,1)  : "0.00" }
                                
                              </span> <span className="badge badge-yellow text-black">
                            
                                { auth  && auth.auth && auth.auth.merchant && auth.auth.merchant.currency && auth.auth.merchant.currency.code ? auth.auth.merchant.currency.code  : "USD" }

                              </span></span>
                          </li>
                          <li className="hide-650">
                              <Link href="/betting"><span className="play-lottery-btn " role="button">{t('Play_Lottery')}</span></Link>
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

                          {/* <li className="dropdown position-relative">
                          <button className="btn btn-danger btn-sm" type="button" onClick={() => logoutUser(auth && auth.auth && auth.auth.id ? auth.auth.id  : 0) } style={{padding:'1px 4px'}}>
                          <i className="fa-solid fa-arrow-right-from-bracket"></i>
                          </button>
                          </li> */}



                          
                          <li className="menu-mobile">
                              <button className="navbar-toggler" type="button" onClick={() => openNav() } >
                                  <span className="navbar-toggler-icon"></span>
                                </button>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
        </header>
        <div id="mySidepanel" className="sidepanel">
            <span role="button" className="closebtn" onClick={() => closeNav() } >&times;</span>
              <div className="mobile-menu-list">
                  <ul className="list-unstyled">
                    <li className= {`${router.pathname === "/" ? "active-header-mobile":""}`}>
                      <Link className="active"  href="/">{t('Homepage')}</Link>  
                    </li>
                    <li className= {`${router.pathname === "/betting" ? "active-header-mobile":""}`}>
                        <Link href="/betting">{t('Betting')}</Link>
                    </li>
                    <li className= {`${router.pathname === "/bettingList" ? "active-header-mobile":""}`}>
                        <Link href="/bettingList">{t('BettingList')}</Link>
                    </li>
                   
                    <li className= {`${router.pathname === "/settleList" ? "active-header-mobile":""}`}>
                        <Link href="/settleList" >{t('betting_history')}</Link>  
                    </li>
                    <li className= {`${router.pathname === "/winningList" ? "active-header-mobile":""}`}>
                            <Link href="/winningList">{t('winning_list')}</Link>
                      </li>
                    <li className= {`${router.pathname === "/results" ? "active-header-mobile":""}`}>
                        <Link href="/results" >{t('Result')}</Link>  
                    </li>
                  </ul>
              </div>
        </div>
      </>
    )
  }
  export default Header;
  