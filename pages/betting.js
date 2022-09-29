import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React, { useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function Betting() {
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
        <section className="slider">
          <div className="owl-carousel owl-theme hero-slider">
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
          </div>
        </section>
        {/*--Slider--*/}

      <BrowserView>
        <h1>This is rendered only on desktop</h1>
      </BrowserView>
      <MobileView>
        <div className="m-top-d-png container">
          <div className="m-top-d-png-l">
            <img className="img-fluid" src="images\betting\3d-red.png" alt="" />
          </div>
          <div className="m-top-d-png-m">
            <div class="vr"></div>
          </div>
          <div className="m-top-d-png-r">
            <img className="img-fluid" src="images\betting\rd-yellow.png" alt="" />
          </div>
        </div>

        <div className="m-top-d-png container">
          <div className="m-top-d-png-l">
            <input type="text" className="form-control" />
          </div>
          <div className="m-top-d-png-r">
            <input type="text" className="form-control" />
          </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
      </MobileView> 


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
