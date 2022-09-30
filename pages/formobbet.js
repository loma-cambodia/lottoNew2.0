import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React, { useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Modal from 'react-modal';
// Modal.setAppElement('#yourAppElement');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '95%',
      borderRadius: '12px',
    },
  };
export default function Betting() {
  const [active, setActive] = useState(false)
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


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
      
      </BrowserView>

      <MobileView className="container">
        <div className="m-top-d-png">
          <div className="m-top-d-png-l">
            <img className="img-fluid" src="images\betting\3d-red.png" alt="" />
          </div>
          <div className="m-top-d-png-m">
            <div className="vr"></div>
          </div>
          <div className="m-top-d-png-r">
            <img className="img-fluid" src="images\betting\rd-yellow.png" alt="" />
          </div>
        </div>

            <div className="form-group">
                <button onClick={openModal} className="form-control custom-i-dg" style={{ background: '-webkit-linear-gradient( 90deg, rgb(253,184,3) 0%, rgb(247,234,120) 100%)' }}> <b>SELECT DATE & GAME</b> 
                    <img className="img-fluid" src="images\betting\1111111.png" alt="" style={{ width: '20px',float: 'right', marginTop: '5px' }}  />
                </button>             
            </div> 

        <div className="m-top-b-n">
          <div className="m-top-b-n-l">
            <div className="form-group">
                <input type="text" className="form-control custom-i" placeHolder="Bet Number" />
            </div>
          </div>
          <div className="m-top-b-n-r">
            <div className="m-top-b-n">
            <div className="m-top-b-n-l">
                <div className="form-group">
                    <input type="text" className="form-control custom-i" placeHolder="Big" />
                </div>
            </div>
            <div className="m-top-b-n-r">
                <div className="form-group">
                    <input type="text" className="form-control custom-i" placeHolder="Small" />
                </div>
            </div>
            </div>
          </div>
        </div>

        <div className="m-top-b-ib">
          <div className="m-top-b-ib-l mt-2 mb-2">
            <div className="form-group">
                <button className="form-control custom-i" style={{ background: '-webkit-linear-gradient( 90deg, rgb(253,184,3) 0%, rgb(247,234,120) 100%)' }}>
                    <img className="img-fluid" src="images\betting\0000.png" alt="" style={{ width: '20px' }} /> Box
                </button>
            </div>
          </div>
          <div className="m-top-b-ib-m mt-2 mb-2">
            <div className="form-group">
                <button className="form-control custom-i" style={{ background: 'aliceblue' }}>
                    <img className="img-fluid" src="images\betting\000000.png" alt="" style={{ width: '20px' }} /> iBox
                </button>            
            </div>            
          </div>
          <div className="m-top-b-ib-r mt-2 mb-2">
            <div className="form-group">
                <button className="form-control custom-i" style={{ background: 'aliceblue' }}>
                    <img className="img-fluid" src="images\betting\00000000.png" alt="" style={{ width: '20px' }} /> Reverse
                </button>             
            </div>            
          </div>
        </div>
        <div className="">
            <div className="css-for-table for-table-hw">
                <table className="table-borderless" style={{ width: '100%' }}>
                    <thead className="text-light" style={{ background: '#e91d25', fontSize: '12px' }}>
                        <tr>
                            <td className="text-center">#</td>
                            <td className="text-center">Date</td>
                            <td className="text-center">CO</td>
                            <td className="text-center">Number</td>
                            <td className="text-center">B/3A</td>
                            <td className="text-center">S/3C</td>
                            <td className="text-center">Bet Type</td>
                            <td className="text-center"></td>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '12px' }}>
                        <tr>
                            <td className="text-center">01</td>
                            <td className="text-center">21/09</td>
                            <td className="text-center">MPT</td>
                            <td className="text-center">123R</td>
                            <td className="text-center">15465</td>
                            <td className="text-center">99999</td>
                            <td className="text-center">B</td>
                            <td>
                                <img className="img-fluid" src="images\betting\12121121.png" alt="" style={{ width: '18px' }}  />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">02</td>
                            <td className="text-center">21/09</td>
                            <td className="text-center">MPT</td>
                            <td className="text-center">123R</td>
                            <td className="text-center">15465</td>
                            <td className="text-center">99999</td>
                            <td className="text-center">I</td>
                            <td>
                                <img className="img-fluid" src="images\betting\12121121.png" alt="" style={{ width: '18px' }}  />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">03</td>
                            <td className="text-center">21/09</td>
                            <td className="text-center">MPT</td>
                            <td className="text-center">123R</td>
                            <td className="text-center">15465</td>
                            <td className="text-center">99999</td>
                            <td className="text-center">R</td>
                            <td>
                                <img className="img-fluid" src="images\betting\12121121.png" alt="" style={{ width: '18px' }}  />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">04</td>
                            <td className="text-center">21/09</td>
                            <td className="text-center">MPT</td>
                            <td className="text-center">123R</td>
                            <td className="text-center">15465</td>
                            <td className="text-center">99999</td>
                            <td className="text-center">S</td>
                            <td>
                                <img className="img-fluid" src="images\betting\12121121.png" alt="" style={{ width: '18px' }}  />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-footer text-light" style={{  background: '#e91d25', fontSize: '12px' }}>
                <div className="table-footer-l text-left">Total Amount</div>
                <div className="table-footer-r" style={{ textAlign: 'end' }}>1500</div>
            </div>
        </div>
        
        <div className="m-top-b-n mt-2">
          <div className="m-top-b-n-l">
                <div className="m-top-b-n-l">
                    <div className="form-group">
                        <button className="form-control custom-i">
                            <b>1</b>
                        </button> 
                    </div>
                </div>
                <div className="m-top-b-n-r">
                    <button className="form-control custom-i">
                        <b>2</b>
                    </button> 
                </div>
          </div>
          <div className="m-top-b-n-r">
            <div className="m-top-b-n">
                <div className="m-top-b-n-l">
                    <button className="form-control custom-i">
                        <b>3</b>
                    </button> 
                </div>
                <div className="m-top-b-n-r">
                    <button className="form-control custom-i">
                        <b>R</b>
                    </button> 
                </div>
            </div>
          </div>
        </div>
        
        <div className="m-top-b-n">
          <div className="m-top-b-n-l mt-2">
                <div className="m-top-b-n-l">
                    <div className="form-group">
                        <button className="form-control custom-i">
                            <b>4</b>
                        </button> 
                    </div>
                </div>
                <div className="m-top-b-n-r">
                    <button className="form-control custom-i">
                        <b>5</b>
                    </button> 
                </div>
          </div>
          <div className="m-top-b-n-r mt-2">
            <div className="m-top-b-n">
                <div className="m-top-b-n-l">
                    <button className="form-control custom-i">
                        <b>6</b>
                    </button> 
                </div>
                <div className="m-top-b-n-r">
                    <button className="form-control custom-i">
                        <b>CLEAR</b>
                    </button> 
                </div>
            </div>
          </div>
        </div>
        
        <div className="m-top-b-n">
          <div className="m-top-b-n-l mt-2">
                <div className="m-top-b-n-l">
                    <div className="form-group">
                        <button className="form-control custom-i">
                            <b>7</b>
                        </button> 
                    </div>
                </div>
                <div className="m-top-b-n-r">
                    <button className="form-control custom-i">
                        <b>8</b>
                    </button> 
                </div>
          </div>
          <div className="m-top-b-n-r mt-2">
            <div className="m-top-b-n">
                <div className="m-top-b-n-l">
                    <button className="form-control custom-i">
                        <b>9</b>
                    </button> 
                </div>
                <div className="m-top-b-n-r">
                    <button className="form-control custom-i">
                        <img className="img-fluid" src="images\betting\ASA.png" alt="" style={{ width: '22px' }} />
                    </button> 
                </div>
            </div>
          </div>
        </div>
        
        <div className="m-top-b-n">
          <div className="m-top-b-n-l mt-2">
                <div className="m-top-b-n-l">
                    <div className="form-group">
                        <button className="form-control custom-i">
                            <img className="img-fluid" src="images\betting\12569.png" alt="" style={{ width: '22px' }} />
                        </button> 
                    </div>
                </div>
                <div className="m-top-b-n-r">
                    <button className="form-control custom-i">
                        <b>0</b>
                    </button> 
                </div>
          </div>
          <div className="m-top-b-n-r mt-2 mb-2">
            <div className="m-top-b-n">
                <div className="m-top-b-n-l">
                    <button className="form-control custom-i">
                        <img className="img-fluid" src="images\betting\1256.png" alt="" style={{ width: '22px' }} />
                    </button> 
                </div>
                <div className="m-top-b-n-r">
                    <button className="form-control custom-i">
                        <b>+</b>
                    </button> 
                </div>
            </div>
          </div>
        </div>
        
        <div className="form-group for-bet-button">
            <button className="form-control text-light" style={{ background: '#e91d25' }}> 
                <b>BET</b> 
            </button>             
        </div> 
        -
            {/* <button onClick={closeModal}>close</button> */}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </MobileView> 
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </Modal>
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
