import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React, { useState } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import HomeSlider from '../components/home/homeSlider';
import Announcement from '../components/home/announcement';
import PayoutSection from '../components/home/payoutSection';
import GamePlayPrize from '../components/home/gamePlayPrize';
import HowToPlay from '../components/home/howToPlay';
import Banner from '../components/betting/banner';
export default function BettingNew() {
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
      <Header/>
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
 

      {/*-Breadcrumb--*/}
{/* <section className="custom-breadcrumb">
    <div className="container">
        <div className="breadcrumb-heading">
            <h1>BETTING</h1>
        </div>
        <div className="breadcrumb-list">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li><span>Betting</span></li>
            </ul>
        </div>
    </div>
</section> */}
    <Banner/>
{/*--Breadcrumb--*/}

<section className="page-content custom-padding">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-3 col-sm-6">
                <div className="date-lottery-selector unslected">
                    <div className="d-flex align-items-center">
                        <div className="round">
                            <input type="checkbox" id="checkbox1" />
                            <label for="checkbox1"></label>
                        </div>
                        <div className="day-n-date">
                            <p className="fw-bold mb-0">Tuesday</p>
                            <p className="mb-0">20 Sep. 2022</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="round"></div>
                        <div className="select-gp">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/damacai.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/magnum.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/toto.png"/>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="date-lottery-selector selected">
                    <div className="d-flex align-items-center">
                        <div className="round">
                            <input type="checkbox"  id="checkbox2" checked/>
                            <label for="checkbox2"></label>
                        </div>
                        <div className="day-n-date">
                            <p className="fw-bold mb-0">Tuesday</p>
                            <p className="mb-0">20 Sep. 2022</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="round"></div>
                        <div className="select-gp">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp selected-gp-btn" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/damacai.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp selected-gp-btn" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/magnum.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp">
                                        <span className="inner-circle-gp selected-gp-btn" title="Select">
                                            <img className="img-fluid" src="assets/images/icons/toto.png"/>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="date-lottery-selector unslected">
                    <div className="d-flex align-items-center">
                        <div className="round">
                            <input type="checkbox"  id="checkbox3"/>
                            <label for="checkbox3"></label>
                        </div>
                        <div className="day-n-date">
                            <p className="fw-bold mb-0">Tuesday</p>
                            <p className="mb-0">20 Sep. 2022</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="round"></div>
                        <div className="select-gp">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/damacai.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/magnum.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/toto.png"/>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="date-lottery-selector selected">
                    <div className="d-flex align-items-center">
                        <div className="round">
                            <input type="checkbox"  id="checkbox4" checked/>
                            <label for="checkbox4"></label>
                        </div>
                        <div className="day-n-date">
                            <p className="fw-bold mb-0">Tuesday</p>
                            <p className="mb-0">20 Sep. 2022</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="round"></div>
                        <div className="select-gp">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp selected-gp-btn" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/damacai.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp selected-gp-btn" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/magnum.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp selected-gp-btn" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/toto.png"/>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="table-scalable my-3">
            <table className="">
                <tr>
                    <th className="border-0"></th>
                    <th className="border-0">Number</th>
                    <th className="border-0">Big</th>
                    <th className="border-0">Small</th>
                    <th className="border-0">3 A</th>
                    <th className="border-0">3 C</th>
                    <th className="border-0">Bet type</th>
                    <th className="border-0">Amount</th>
                    <th className="border-0"></th>
                </tr>
                <tr>
                    <td>
                        <span className="sno">01</span>
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn-custom-small me-1">B</button>
                    
                            <button type="button" className="btn-custom-small me-1">I</button>
                        
                            <button type="button" className="btn-custom-small">R</button>
                        </div>                        
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td>
                        <button type="button" className="btn-delete-small">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="sno">02</span>
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn-custom-small me-1">B</button>
                    
                            <button type="button" className="btn-custom-small me-1">I</button>
                        
                            <button type="button" className="btn-custom-small">R</button>
                        </div> 
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td>
                        <button type="button" className="btn-delete-small">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="sno">03</span>
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn-custom-small me-1">B</button>
                    
                            <button type="button" className="btn-custom-small me-1">I</button>
                        
                            <button type="button" className="btn-custom-small">R</button>
                        </div> 
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td>
                        <button type="button" className="btn-delete-small">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="sno">04</span>
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn-custom-small me-1">B</button>
                    
                            <button type="button" className="btn-custom-small me-1">I</button>
                        
                            <button type="button" className="btn-custom-small">R</button>
                        </div> 
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td>
                        <button type="button" className="btn-delete-small">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="sno">05</span>
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn-custom-small me-1">B</button>
                    
                            <button type="button" className="btn-custom-small me-1">I</button>
                        
                            <button type="button" className="btn-custom-small">R</button>
                        </div> 
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td>
                        <button type="button" className="btn-delete-small">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="sno">06</span>
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn-custom-small me-1">B</button>
                    
                            <button type="button" className="btn-custom-small me-1">I</button>
                        
                            <button type="button" className="btn-custom-small">R</button>
                        </div> 
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td>
                        <button type="button" className="btn-delete-small">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="sno">07</span>
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn-custom-small me-1">B</button>
                    
                            <button type="button" className="btn-custom-small me-1">I</button>
                        
                            <button type="button" className="btn-custom-small">R</button>
                        </div> 
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td>
                        <button type="button" className="btn-delete-small">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="sno">08</span>
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn-custom-small me-1">B</button>
                    
                            <button type="button" className="btn-custom-small me-1">I</button>
                        
                            <button type="button" className="btn-custom-small">R</button>
                        </div> 
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td>
                        <button type="button" className="btn-delete-small">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="sno">09</span>
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn-custom-small me-1">B</button>
                    
                            <button type="button" className="btn-custom-small me-1">I</button>
                        
                            <button type="button" className="btn-custom-small">R</button>
                        </div> 
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td>
                        <button type="button" className="btn-delete-small">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="sno">10</span>
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td><input type="text" className="form-control-custom"/></td>
                    <td>
                        <div className="btn-group">
                            <button type="button" className="btn-custom-small me-1">B</button>
                    
                            <button type="button" className="btn-custom-small me-1">I</button>
                        
                            <button type="button" className="btn-custom-small">R</button>
                        </div> 
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"/>
                    </td>
                    <td>
                        <button type="button" className="btn-delete-small">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td colspan="6">
                        Total Bet Amount 216.00
                    </td>
                    <td><button type="button" className="btn-custom-curve1 me-1">CLEAR</button></td>
                    <td colspan="2">
                            <button type="button" className="btn-custom-curve2">Submit</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</section>














  <Footer/>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
<script src="assets/js/owl.carousel.js"></script>
<script src="assets/js/main.js"></script>
{/*--Footer--*/}
</>
      
  )
}
