import Head from 'next/head'
import React, { useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Modal from 'react-modal';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import BettingOptionSelection from '../components/betting/bettingOptionSelection';
import DateAndGameOptionMob from '../components/betting/dateAndGameOptionMob';
let dateAndGameOptionDataMob = [1,2,3,4];
const customStyles = {
    content: {
      top: '45%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '95%',
      borderRadius: '12px',
    },
  };
export default function Formobbet() {
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
      <Header/>
      </Head>
        <div id="mySidepanel" className="sidepanel">
          <a href="#" className="closebtn" >&times;</a>
          <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
          </ul>
        </div>

        <BrowserView>
            <BettingOptionSelection/> 
        </BrowserView>

        <MobileView className="container">
            <div className="row">
                <div className="col-5">
                    <img className="img-fluid" src="images\betting\3d-red.png" alt="" />
                </div>
                <div className="col-2 text-center" style={{ fontSize: '36px' }}>
                    <div className="vr"></div>
                </div>
                <div className="col-5">
                    <img className="img-fluid" src="images\betting\rd-yellow.png" alt="" />
                </div>
            </div>

            <div className="form-group">
                <button onClick={openModal} className="form-control custom-i-dg" style={{ background: '-webkit-linear-gradient( 90deg, rgb(253,184,3) 0%, rgb(247,234,120) 100%)' }}> <b>SELECT DATE & GAME</b> 
                <img className="img-fluid" src="images\betting\1111111.png" alt="" style={{ width: '20px',float: 'right', marginTop:'5px' }}  />
                </button>             
            </div> 

            <div className="row">
                <div className="col-6" style={{ padding: '-1px' }}>
                    <input type="text" className="form-control" placeholder="Bet Number" />
                </div>
                <div className="col-3" style={{ padding: '0px' }}>
                    <input type="text" className="form-control" placeholder="Big"/>
                </div>
                <div className="col-3" style={{ padding: '-0.9px' }}>
                    <input type="text" className="form-control" placeholder="Small"/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-4">
                    <button className="form-control" style={{ background: '-webkit-linear-gradient( 90deg, rgb(253,184,3) 0%, rgb(247,234,120) 100%)' }}>
                        <img className="img-fluid" src="images\betting\0000.png" alt="" style={{ width: '20px' }} /> Box
                    </button>
                </div>
                <div className="col-4">
                    <button className="form-control" style={{ background: 'aliceblue', marginLeft: '-11px' }}>
                        <img className="img-fluid" src="images\betting\000000.png" alt="" style={{ width: '20px' }} /> iBox
                    </button>            
                </div>
                <div className="col-4" style={{ padding: '0' }}>
                    <button className="form-control" style={{ background: 'aliceblue', marginLeft: '-11px' }}>
                        <img className="img-fluid" src="images\betting\00000000.png" alt="" style={{ width: '20px' }} /> Reverse
                    </button>                       
                </div>
            </div>
            <div className="border mt-2">
                <div className="" style={{ height: '180px' }}>
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
                <div className="row text-light container-fluid m-auto" style={{  background: '#e91d25' }}>
                    <div className="col-6">Total Amount</div>
                    <div className="col-6" style={{ textAlign: 'end' }}>1500</div>
                </div>
            </div>
        
            <div className="mt-2">
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>1</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>2</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>3</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>R</b>
                        </button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>4</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>5</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>6</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>Clear</b>
                        </button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>7</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>8</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>9</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <img className="img-fluid" src="images\betting\ASA.png" alt="" style={{ width: '22px' }} />
                        </button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <img className="img-fluid" src="images\betting\12569.png" alt="" style={{ width: '22px' }} />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>0</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <img className="img-fluid" src="images\betting\1256.png" alt="" style={{ width: '22px' }} />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>+</b>
                        </button>
                    </div>
                </div>
            </div>
        
        
            <div className="mt-2 mb-2">
                <button className="form-control text-light" style={{ background: '#e91d25' }}> 
                    <b>BET</b> 
                </button>             
            </div> 

            {/* <button onClick={closeModal}>close</button> */}

        </MobileView> 
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >   
        <div className="d-flex my-3">
            <div className="round-h5">
                <input type="checkbox" id="checkbox1" />
                <label htmlFor="checkbox1"></label>
            </div>
            <label className="small" htmlFor="checkbox1"><b>Select All</b></label>
        </div>

        {dateAndGameOptionDataMob.map((item) => (<DateAndGameOptionMob key={'DateAndGameOptionMob'+item} item={item}/>) )}
            {/* <div className="d-flex align-items-center py-2 border-bottom">
                <div className="round-h5">
                        <input type="checkbox" id="checkbox3" />
                        <label htmlFor="checkbox3"></label>
                </div>
                <label className={contentClassname+" date-time-small" } htmlFor="checkbox3" onClick={() => setIsModal(!isModal)}>
                    <small>22-09-2022<br/>WED</small>
                </label>
                <div className="select-gp p-2">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <span className="outer-circle-gp" title="Select">
                                <span className="inner-circle-gp">
                                    <img className="img-fluid" src="assets/images/icons/damacai.png" />
                                </span>
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span className="outer-circle-gp" title="Select">
                                <span className="inner-circle-gp">
                                    <img className="img-fluid" src="assets/images/icons/magnum.png" />
                                </span>
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span className="outer-circle-gp" title="Select">
                                <span className="inner-circle-gp">
                                    <img className="img-fluid" src="assets/images/icons/toto.png" />
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="d-flex align-items-center py-2 border-bottom">
                <div className="round-h5">
                        <input type="checkbox" id="checkbox4" />
                        <label htmlFor="checkbox4"></label>
                </div>
                <label className={contentClassname+" date-time-small" } htmlFor="checkbox4" onClick={() => setIsModal(!isModal)}>
                    <small>22-09-2022<br/>WED</small>
                </label>
                <div className="select-gp p-2">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <span className="outer-circle-gp" title="Select">
                                <span className="inner-circle-gp">
                                    <img className="img-fluid" src="assets/images/icons/damacai.png" />
                                </span>
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span className="outer-circle-gp" title="Select">
                                <span className="inner-circle-gp">
                                    <img className="img-fluid" src="assets/images/icons/magnum.png" />
                                </span>
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span className="outer-circle-gp" title="Select">
                                <span className="inner-circle-gp">
                                    <img className="img-fluid" src="assets/images/icons/toto.png" />
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div> */}

        </Modal>
        {/*-Footer-*/}
        <Footer/>
      {/* <script src="assets/js/jquery.min.js"></script>
      <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
      <script src="assets/js/owl.carousel.js"></script>
      <script src="assets/js/main.js"></script> */}
      {/*--Footer--*/}
    </>
  )
}
