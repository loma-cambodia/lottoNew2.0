import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React, { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Marquee from "react-fast-marquee";


export default function Home() {
  const [active, setActive] = useState(false)

  return (
    <>
       <Head>
          <title>Malaysia Lottery</title>
          <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet"/>
          <link href="assets/css/style.css" rel="stylesheet"/>
          <link href="assets/css/owl.carousel.css" rel="stylesheet"/>
          <link href="assets/css/owl.theme.default.css" rel="stylesheet"/>
      </Head>
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
                        <a className="active" href="#">Home</a>
                      </li>
                      <li>
                        <a  href="#">Betting</a>
                      </li>
                      <li>
                        <a href="#" >History</a>
                      </li>
                      <li>
                        <a href="#" >Results</a>
                      </li>
                    </ul>
            </div>
            <div className="right-part-menu">
                <ul className="right-part-list">
                    <li>
                        <span className="text-end mb-0 user-details"><span className="user-id">John_0786</span><a href="#" className="reload-icon"><span><img src="assets/images/icons/reload-white.png" alt="reload"/></span></a> 102,84665.00 <span className="badge badge-yellow">VND</span></span>
                    </li>
                    <li className="hide-650">
                        <a href="#" className="play-lottery-btn">Play Lottery</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="lanugae-selector dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><span className="lang-flag"><img src="assets/images/icons/flag-english.png"/></span> Eng</a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                    </li>
                    <li className="menu-mobile">
                        <button className="navbar-toggler" type="button" onclick="openNav()">
                            <span className="navbar-toggler-icon"></span>
                          </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </header>
  {/*--Header-->*/}

{/*--Mobile Menu--*/}
<div id="mySidepanel" className="sidepanel">
    <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
    <ul className="list-unstyled">
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
    </ul>
  </div>
{/*--Mobile Menu-*/}

  {/*--Slider-*/}


  <Carousel>
  <div className="item">
            <div className="hero-slider-special-draw">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-sm-5 col-6">
                            <div className="sd-text-part">
                                <p className="text-uppercase">CONTEST FOR YOUR CHANCE TO</p>
                                <div className="d-inline-flex align-items-center mb-4">
                                    <div className="logo-draw">
                                        <div className="draw-logo-div">
                                            <div className="draw-logo-img">
                                                <img src="assets/images/1659581469.png" className="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="draw-name">
                                        SPECIAL<br/>DRAW
                                    </div>
                                </div>
                                <div className="date-block">
                                    <a href="#">27TH September (TUE)</a>
                                </div>
                                <p className="small">Don't miss your chance. Will you be our next</p>
                                <h3>lucky winner?</h3>
                                <div className="clearfix my-3">
                                    <a href="#" className="btn-yellow rounded-full">Start Playing Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-7 pt-5 hide-575">
                            <img src="assets/images/special-draw-img.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="hero-slider-special-draw">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-sm-5">
                            <div className="sd-text-part">
                                <p className="text-uppercase">CONTEST FOR YOUR CHANCE TO sdfksdjflksdf</p>
                                <div className="d-inline-flex align-items-center mb-4">
                                    <div className="logo-draw">
                                        <div className="draw-logo-div">
                                            <div className="draw-logo-img">
                                                <img src="assets/images/1659581469.png" className="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="draw-name">
                                        SPECIAL<br/>DRAW
                                    </div>
                                </div>
                                <div className="date-block">
                                    <a href="#">27TH September (TUE)</a>
                                </div>
                                <p className="small">Don't miss your chance. Will you be our next</p>
                                <h3>lucky winner?</h3>
                                <div className="clearfix">
                                    <a href="#" className="btn-yellow rounded-full">Start Playing Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-7 pt-5 hide-575 col-6">                            
                            <img src="assets/images/special-draw-img.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              </Carousel>
  {/* <section className="slider">
    <div className="owl-carousel owl-theme hero-slider"> */}
        {/* <div className="item">
            <div className="hero-slider-special-draw">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-sm-5 col-6">
                            <div className="sd-text-part">
                                <p className="text-uppercase">CONTEST FOR YOUR CHANCE TO</p>
                                <div className="d-inline-flex align-items-center mb-4">
                                    <div className="logo-draw">
                                        <div className="draw-logo-div">
                                            <div className="draw-logo-img">
                                                <img src="assets/images/1659581469.png" className="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="draw-name">
                                        SPECIAL<br/>DRAW
                                    </div>
                                </div>
                                <div className="date-block">
                                    <a href="#">27TH September (TUE)</a>
                                </div>
                                <p className="small">Don't miss your chance. Will you be our next</p>
                                <h3>lucky winner?</h3>
                                <div className="clearfix my-3">
                                    <a href="#" className="btn-yellow rounded-full">Start Playing Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-7 pt-5 hide-575">
                            <img src="assets/images/special-draw-img.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <div className="item">
            <div className="hero-slider-special-draw">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-sm-5">
                            <div className="sd-text-part">
                                <p className="text-uppercase">CONTEST FOR YOUR CHANCE TO sdfksdjflksdf</p>
                                <div className="d-inline-flex align-items-center mb-4">
                                    <div className="logo-draw">
                                        <div className="draw-logo-div">
                                            <div className="draw-logo-img">
                                                <img src="assets/images/1659581469.png" className="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="draw-name">
                                        SPECIAL<br/>DRAW
                                    </div>
                                </div>
                                <div className="date-block">
                                    <a href="#">27TH September (TUE)</a>
                                </div>
                                <p className="small">Don't miss your chance. Will you be our next</p>
                                <h3>lucky winner?</h3>
                                <div className="clearfix">
                                    <a href="#" className="btn-yellow rounded-full">Start Playing Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-7 pt-5 hide-575 col-6">                            
                            <img src="assets/images/special-draw-img.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    {/* </div>
  </section> */}
  {/*--Slider--*/}
  {/*--Announcement--*/}
  <section className="announcement">
    <div className="container">
        <div className="d-inline-flex align-item-center">
            <div className="announcement-block-icon">
                <div className="annoncement-icon">
                    <span className="icon-img-announcement"><img src="assets/images/icons/announcement-icon-white.png" alt="" className="img-fluid"/></span>
                    <span className="text-announcement">Announcement</span>
                </div>
            </div>
            <div className="marque-div">
            <Marquee pauseOnHover={true} speed={80}>
            <ul className="list-inline">
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                    </ul>
            
            </Marquee>
                {/* <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                    <ul className="list-inline">
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                    </ul>
                </marquee> */}
            </div>
        </div>
    </div>
  </section>
  {/*--Announcement--*/}
  {/*--Payout Section-*/}
  <section className="payouts-part custom-padding">
    <div className="container">
        <div className="heading-part text-center mb-4">
            <h5 className="text-uppercase fw-bold">Payouts</h5>
            <h2 className="text-uppercase text-color-main fw-bold">Winning Payouts</h2>
        </div>
        <div className="theme-tabs py-4">
              <ul className="nav nav-tabs theme-nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active d-inline-flex align-items-center" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                        <span className="circle-logo-gp me-2"><img src="assets/images/icons/damacai.png" className="img-gp" alt=""/></span> <span className="name-gp">Da Ma Cai</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link d-inline-flex align-items-center" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                    <span className="circle-logo-gp me-2"><img src="assets/images/icons/magnum.png" className="img-gp" alt=""/></span> <span className="name-gp">Magnum</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link d-inline-flex align-items-center" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                    <span className="circle-logo-gp me-2"><img src="assets/images/icons/toto.png" className="img-gp" alt=""/></span> <span className="name-gp">Sports Toto</span>
                  </button>
                </li>
              </ul>
              <div className="tab-content py-5" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="coupon-block">
                                <div className="half-cicle left">

                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">Big</th>
                                                    <th className="text-end">Small</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1st</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>2nd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>3rd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Special</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Consolation</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        Payout
                                    </div>
                                </div>
                                <div className="half-circles">
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coupon-block">
                                <div className="half-cicle left">

                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">Big</th>
                                                    <th className="text-end">Small</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1st</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>2nd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>3rd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Special</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Consolation</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        Payout
                                    </div>
                                </div>
                                <div className="half-circles">
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="coupon-block">
                                <div className="half-cicle left">

                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">Big</th>
                                                    <th className="text-end">Small</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1st</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>2nd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>3rd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Special</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Consolation</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        Payout
                                    </div>
                                </div>
                                <div className="half-circles">
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coupon-block">
                                <div className="half-cicle left">

                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">Big</th>
                                                    <th className="text-end">Small</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1st</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>2nd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>3rd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Special</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Consolation</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        Payout
                                    </div>
                                </div>
                                <div className="half-circles">
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="coupon-block">
                                <div className="half-cicle left">

                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">Big</th>
                                                    <th className="text-end">Small</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1st</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>2nd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>3rd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Special</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Consolation</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        Payout
                                    </div>
                                </div>
                                <div className="half-circles">
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coupon-block">
                                <div className="half-cicle left">

                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">Big</th>
                                                    <th className="text-end">Small</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1st</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>2nd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>3rd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Special</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Consolation</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        Payout
                                    </div>
                                </div>
                                <div className="half-circles">
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        </div>
        <div className="clearfix text-center">
            <a href="#" className="btn-yellow rounded-full">Play Now</a>
        </div>
    </div>
  </section>
 {/*-Payout Section-*/}
 {/*-Game Play prize-*/}
  <section className="gp-prize">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card damamcai">
                    <div className="card-body">
                        <div className="card-top">
                            <div className="logo-gp-prize">
                                <div className="logo-gp-prize-outer">
                                    <div className="logo-gp-prize-inner">
                                        <img  src="assets/images/icons/damacai.png" alt="" className="img-icon-prize"/>
                                    </div>
                                </div>
                            </div>
                            <div className="name-lottery">
                                <p className="fw-bold">DA MA CAI</p>
                                <p className="date-cal"><span className="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> 22-09-2022</p>
                                
                            </div>
                            <div className="gp-prize-play-btn ms-auto">
                                <a href="#" className="">Play Now</a>
                            </div>
                        </div>
                        <div className="row first-three">
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        1<sup>st</sup> Prize
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        1<sup>st</sup> Prize
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        1<sup>st</sup> Prize
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">Special</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                              </tbody>  
                            </table>
                        </div>
                         <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">Consolation</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                              </tbody>  
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card magnum">
                    <div className="card-body">
                        <div className="card-top">
                            <div className="logo-gp-prize">
                                <div className="logo-gp-prize-outer">
                                    <div className="logo-gp-prize-inner">
                                        <img src="assets/images/icons/magnum.png" alt="" className="img-icon-prize"/>
                                    </div>
                                </div>
                            </div>
                            <div className="name-lottery">
                                <p className="fw-bold">MAGNUM</p>
                                <p className="date-cal"><span className="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> 22-09-2022</p>
                               
                            </div>
                            <div className="gp-prize-play-btn ms-auto">
                                <a href="#" className="">Play Now</a>
                            </div>
                        </div>
                        <div className="row first-three">
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        1<sup>st</sup> Prize
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        1<sup>st</sup> Prize
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        1<sup>st</sup> Prize
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">Special</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                </tbody>   
                            </table>
                        </div>
                        <div className="s-and-c">
                            <table className="table-custom">
                            <tbody> 
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">Consolation</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                </tbody>  
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card toto">
                    <div className="card-body">
                        <div className="card-top">
                            <div className="logo-gp-prize">
                                <div className="logo-gp-prize-outer">
                                    <div className="logo-gp-prize-inner">
                                        <img src="assets/images/icons/toto.png" alt="" className="img-icon-prize"/>
                                    </div>
                                </div>
                            </div>
                            <div className="name-lottery">
                                <p className="fw-bold">SPORTS TOTO</p>
                                 <p className="date-cal"><span className="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> 22-09-2022</p> 
                            </div>
                            <div className="gp-prize-play-btn ms-auto">
                                <a href="#" className="">Play Now</a>
                            </div>
                        </div>
                        <div className="row first-three">
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        1<sup>st</sup> Prize
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        1<sup>st</sup> Prize
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        1<sup>st</sup> Prize
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">Special</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                </tbody>    
                            </table>
                        </div>
                        <div className="s-and-c">
                            <table className="table-custom">
                            <tbody> 
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">Consolation</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                </tbody>   
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
{/*--Game Play prize-*/}
 {/*-How to play-*/}
  <section className="how-to-play custom-padding">
    <div className="container">
        <div className="heading-part text-center mb-4">
            <h5 className="text-uppercase fw-bold">HOW TO PLAY</h5>
            <h2 className="text-uppercase text-color-main fw-bold">Easiest Way To Picking A Number</h2>
        </div>

        <div className="timeline">
            <div className="timeline-container left">
              <div className="date">1</div>
              <div className="content">
                <h2>Set A Budget</h2>
                <p>
                    Playing the lottery is gambling, so keep it
                    fun by treating it as part of your
                    entertainment budget.
                </p>
              </div>
            </div>
            <div className="timeline-container right">
              <div className="date">2</div>
              <div className="content">
                <h2>Choose Your Numbers</h2>
                <p>
                    Pick single/multiple 4 digit numbers from
                    0000 to 9999. Choose how you want to 
                    play (Big bet, Small bet etc..)
                </p>
              </div>
            </div>
            <div className="timeline-container left">
              <div className="date">3</div>
              <div className="content">
                <h2>Buy Your Numbers</h2>
                <p>
                    Add selected numbers to the cart, check if 
                    you have sufficient balance then place 
                    your order.
                </p>
              </div>
            </div>
            <div className="timeline-container right">
              <div className="date">4</div>
              <div className="content">
                <h2>Check Winnings</h2>
                <p>
                    Congratulations! You are winner if your
                    selected number are in the announced
                    winners list.
                </p>
              </div>
            </div>
            
          </div>
          <div className="clearfix text-center mt-5">
            <a href="#" className="btn-yellow rounded-full">Play Now</a>
        </div>
    </div>
  </section>
{/*-How to play-*/}
 {/*-Footer-*/}
  <section className="footer py-3">
    <div className="container">
        <div className="footer-row">
            <div className="footer-logo">
                <a href="#">
                    <img src="assets/images/logo-footer.png" className="img-fluid"/>
                </a>
            </div>
            <div className="footer-links ms-auto">
                <div className="clearfix">
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Home</a></li>
                        <li className="list-inline-item"><a href="#">Betting</a></li>
                        <li className="list-inline-item"><a href="#">History</a></li>
                        <li className="list-inline-item"><a href="#">Results</a></li>
                        <li className="list-inline-item"><a href="#">Play Lottery</a></li>
                    </ul>
                </div>
                <div className="clearfix my-3">
                    <p className="mb-0 small text-white">Copyright © 2022. All Right Reserved By PokLotto</p>
                </div>
            </div>
        </div>
    </div>
  </section>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
<script src="assets/js/owl.carousel.js"></script>
<script src="assets/js/main.js"></script>
{/*--Footer--*/}
</>
      
  )
}
