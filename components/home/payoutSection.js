import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import { useTranslation } from "react-i18next";

import WinnerGameData from './winnerGameData'
import Link from 'next/link';
const PayoutSection = ({_transactions}) => {
    const { t } = useTranslation();


    let transactions = _transactions;
    let market = transactions.market;
    let oddSettings = transactions.market;
    let oddSet = transactions && transactions.market && transactions.market.odd_settings ? transactions.market.odd_settings : [];
    // let oddSettings = market.odd_settings;
    return (
      <>
        <section className="payouts-part custom-padding">
    <div className="container"> 
        <div className="heading-part text-center mb-4">
            {/* <h5 className="text-uppercase fw-bold">{t('PAYOUTS')}</h5> */}
            <h2 className="text-uppercase text-color-main fw-bold">{t('Winning_Payouts')}</h2>
        </div>
        <div className="theme-tabs py-4">

              <ul className="nav nav-tabs theme-nav-tabs" id="myTab" role="tablist">
             

               
                <li className="nav-item" role="presentation">
                <button className="nav-link active d-inline-flex align-items-center" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                      <span className="circle-logo-gp me-2"><img src="assets/images/icons/damacai.png" className="img-gp" alt=""/></span> <span className="name-gp">DA MA CAI</span>
                </button>
              </li>
            
                <li className="nav-item" role="presentation">
                  <button className="nav-link d-inline-flex align-items-center" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                    <span className="circle-logo-gp me-2"><img src="assets/images/icons/magnum.png" className="img-gp" alt=""/></span> <span className="name-gp">MAGNUM</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link d-inline-flex align-items-center" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                    <span className="circle-logo-gp me-2"><img src="assets/images/icons/toto.png" className="img-gp" alt=""/></span> <span className="name-gp">SPORTS TOTO</span>
                  </button>
                </li>



              </ul>
              <div className="tab-content py-5" id="myTabContent">



               { oddSet && oddSet.map((item,i) => {
                  let gameName = '';
                  let customId ='';
                  let labelledby  = '';
                  let className = 'tab-pane fade show active';
                if(item.game_play_id == 1){
                     gameName = 'Da Ma Chai';
                      customId ='home';
                      labelledby = 'home-tab';
                      className = 'tab-pane fade show active';
                }else if(item.game_play_id == 2){
                    gameName = 'Da Ma Chai1111';
                    customId ='profile';
                    labelledby = 'profile-tab';
                    className = 'tab-pane fade show ';
               }else if(item.game_play_id == 3){
                gameName = 'Da Ma Chai 33333333';
                customId ='contact';
                labelledby = 'contact-tab';
                className = 'tab-pane fade show';
           }

                       return(<div className={className} id={customId} role="tabpanel" aria-labelledby={labelledby} key={i}>
                       <WinnerGameData  _item={item}/>
                  </div>)
              })} 



                 {/* <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                     <WinnerGameData />
                </div>  */}


                {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <WinnerGameData _oddSet={oddSet[1]}/>
                     <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="coupon-block">
                                <div className="half-cicle left">
                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                    <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">{t('Big_Bet')}</th>
                                                    <th className="text-end">{t('Small_Bet')}</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{t('1st_Prize')}</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('2nd_Prize')}</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('3rd_Prize')}</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('Special_Prize')}</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('Consolation_Prize')}</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        {t("PAYOUTS")}
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
                </div> */}


                {/* <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <WinnerGameData _oddSet={oddSet[2]}/>
                     <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="coupon-block">
                                <div className="half-cicle left">
                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                    <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">{t('Big_Bet')}</th>
                                                    <th className="text-end">{t('Small_Bet')}</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{t('1st_Prize')}</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('2nd_Prize')}</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('3rd_Prize')}</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('Special_Prize')}</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('Consolation_Prize')}</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                    {t("PAYOUTS")}
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
                </div> */}


              </div>
        </div>
        <div className="clearfix text-center">
            {/* <a href="#" className="btn-yellow rounded-full">{t('Play_now')}</a> */}
            <Link href="/betting"> 
                    <span role='button' className="btn-yellow rounded-full">{t("Play_now")}</span>
            </Link>
        </div>
    </div>
  </section>
      </>
    )
  }
  export default PayoutSection;