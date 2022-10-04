import React from 'react';
import { useTranslation } from "react-i18next";
const GamePlayPrize = () => {
    const { t } = useTranslation();
    return (
      <>
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
                            <div class="gp-prize-play-btn ms-auto">
                                <div class="gp-prize-play-btn ms-auto">
                                  <p class="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                                  <p class="mb-0 fs-5 fw-bold">4567891</p>
                                </div>
                            </div>
                        </div>
                        <div className="row first-three">
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        {t('1st_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('2nd_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('3rd_Prize')}
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
                                    <td colspan="5" className="border-bottom border-light">{t('Special_Prize')}</td>
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
                                    <td colspan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
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
                            <div class="gp-prize-play-btn ms-auto">
                                <div class="gp-prize-play-btn ms-auto">
                                  <p class="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                                  <p class="mb-0 fs-5 fw-bold">4567891</p>
                                </div>
                            </div>
                        </div>
                        <div className="row first-three">
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('1st_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('2nd_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('3rd_Prize')}
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
                                    <td colspan="5" className="border-bottom border-light">{t('Special_Prize')}</td>
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
                                    <td colspan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
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
                            <div class="gp-prize-play-btn ms-auto">
                                <div class="gp-prize-play-btn ms-auto">
                                  <p class="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                                  <p class="mb-0 fs-5 fw-bold">4567891</p>
                                </div>
                            </div>
                        </div>
                        <div className="row first-three">
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        {t('1st_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('2nd_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('3rd_Prize')}
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
                                    <td colspan="5" className="border-bottom border-light">{t('Special_Prize')}</td>
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
                                    <td colspan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
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
      </>
    )
  }
  export default GamePlayPrize;
  