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
import {updateUser, updateUserWithSession} from '../../store/actions/authActions';
import {twoDecimalPlaceWithAmount, twoDecimalPlaceWithoutRound} from './../Utils';
import LogoutModal from "../modal/logoutModal";

const Header = ({_auth,datauser, updateSessionData, setUpdateSessionData}) => {

   const dispatch = useDispatch();
   let auth = _auth;
   const state = useSelector(state => state);

   let language = '';
   let langg = auth && auth.auth && auth.auth.language && auth.auth.language.locale ? auth.auth.language.locale : 'en';
   if(auth && auth.lang){
    language = auth.lang;
   }else {
    language = langg
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
          dispatch(updateUser(objectWithData));
         // setUpdateSessionData(updateSessionData + 1); 
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
            </span> ??????
        </>
      )
    }
    else if (langTypeVal == 'kh') {
      return(
        <>
            <span className="lang-flag">
              <img src="assets/images/icons/flag-khmer.png"/>
            </span> ???????????????
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
  // const [logoutStatus,setLogoutData] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const toggle = () => setDropdownOpen((prevState) => !prevState);
   
    return (
      <>
      {/* <LogoutModal _logoutStatus={logoutStatus} _memberId={auth && auth.auth && auth.auth.id ? auth.auth.id  : 0}/> */}
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
                            <li className= {`${router.pathname === "/results" ? "active-header":""}`}>
                              <Link href="/results" >{t('Result')}</Link>
                            </li>
                            <li className="dropdown-desktop">
                              <a className= {`${router.pathname === "/calculator" || router.pathname === "/analysis" ? "under-line-link":""}`} href="#" >{t('Utility')} </a>
                              <ul className="sub-menu-desktop">
                                <li style={{whiteSpace:"nowrap"}} className= {`${router.pathname === "/calculator" ? "active-header":""}`}>
                                  <Link href="/calculator">{t('Calculator')}</Link>
                                </li>                                
                                <li style={{whiteSpace:"nowrap"}} className= {`${router.pathname === "/analysis" ? "active-header":""}`}>
                                  <Link href="/analysis" >{t('Betting_Tips')}</Link>
                                </li>                            
                              </ul>
                           </li>
                            {/* <li className= {`${router.pathname === "/calculator" ? "active-header":""}`}>
                              <Link href="/calculator" >{t('Calculator')}</Link>
                            </li>
                            {/* <li className= {`${router.pathname === "/analysis" ? "active-header":""}`}>
                              <Link href="/analysis" >{t('Betting_Tips')}</Link>
                            </li> */}
                          </ul>
                  </div>
                  <div className="right-part-menu">
                      <ul className="right-part-list">
                          <li>
                              <span className="text-end mb-0 user-details">
                                <span className="user-id text-black" >{auth && auth.auth  && auth.auth.name ? auth.auth.name  : "" }</span>
                                <span className="reload-icon" role="button"><span onClick={() => loginAPICall()}><img src="assets/images/icons/reload-white.png" alt="reload"/></span></span> <span className='text-black'>
                                
                              { auth && auth.auth && auth && auth.auth.wallet && auth.auth.wallet.amount ? twoDecimalPlaceWithAmount(auth.auth.wallet.amount,1)  : "0.00" }
                                
                              </span> <span className="badge badge-yellow text-black">
                            
                                { auth  && auth.auth && auth.auth.merchant && auth.auth.merchant.currency && auth.auth.merchant.currency.code ? auth.auth.merchant.currency.code  : "USD" }

                              </span></span>
                          </li>
                          <li className="hide-650">
                              <Link href="/betting"><span className="play-lottery-btn " role="button">{t('Play_now')}</span></Link>
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
                                      </span>&nbsp; &nbsp;??????
                                </DropdownItem>
                                <DropdownItem onClick={changeLangm('kh')}>
                                      <span className="lang-flag">
                                        <img src="assets/images/icons/flag-khmer.png"/>
                                      </span>&nbsp; &nbsp;???????????????
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
                          {/* <li className="dropdown position-relative">
                          <button className="btn btn-danger btn-sm" type="button" onClick={() => setLogoutData(true) } style={{padding:'1px 4px'}}>
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
                    
                    {/* <li className= {`${router.pathname === "/calculator" ? "active-header-mobile":""}`}>
                      <Link href="/calculator" >{t('Calculator')}</Link>
                    </li>
                    
                    <li className= {`${router.pathname === "/searchNumber" ? "active-header-mobile":""}`}>
                      <Link href="/searchNumber" >{t('Betting Tips')}</Link>
                    </li> */}
                    
                    <li className="submenu-mobile">
                    <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                    className= {`${router.pathname === "/calculator" || router.pathname === "/searchNumber" ? "active-header-mobile":""}`}>{t('Utility')} </a>
                          <div className="collapse" id="collapseExample">
                              <ul style={{padding:'0px'}}>
                                  <li  className= {`${router.pathname === "/calculator" ? "active-header-mobile":""} list-unstyled`}>
                                    <Link href="/calculator">{t('Calculator')}</Link>
                                  </li>
                                  <li  className= {`${router.pathname === "/analysis" ? "active-header-mobile":""} list-unstyled`}>
                                    <Link href="/analysis" >{t('Betting_Tips')}</Link>
                                  </li>
                              </ul>
                            </div>
                      </li>
                  </ul>
              </div>
        </div>
      </>
    )
  }
  export default Header;