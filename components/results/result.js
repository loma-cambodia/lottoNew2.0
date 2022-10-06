import React from "react";
import { useTranslation } from "react-i18next";
const Result = () => {
  const { t } = useTranslation();
    return (
        <>
      <div className="accordion my-3 custom-accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button" type="button">
              <span>{t('Past_Draw_Result')}: 28/09/2022 (WED)</span> <span className="print-btn"><i className="fa-solid fa-print"></i></span>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="row">
                 <div className="col-md-4">
                  <div className="card damamcai">
                      <div className="card-body">
                          <div className="card-top">
                              <div className="logo-gp-prize">
                                  <div className="logo-gp-prize-outer">
                                      <div className="logo-gp-prize-inner">
                                          <img src="assets/images/icons/damacai.png" alt="" className="img-icon-prize"/>
                                      </div>
                                  </div>
                              </div>
                              <div className="name-lottery">
                                  <p className="fw-bold">DA MA CAI</p>
                                  <p className="date-cal"><span className="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> 22-09-2022</p>
                              </div>
                              <div className="gp-prize-play-btn ms-auto">
                                <div className="gp-prize-play-btn ms-auto">
                                  <p className="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                                  <p className="mb-0 fs-5 fw-bold">4567891</p>
                                </div>
                            </div>
                          </div>
                          <div className="row first-three">
                              <div className="col-12">
                                  <div className="verticle-prizelist">
                                    <ul className="list-group">
                                      <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="prize-name">{t('1st_Prize')}</span>
                                        <span className="badge bg-danger rounded-pill fs-6">6459</span>
                                      </li>
                                      <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="prize-name">{t('2nd_Prize')}</span>
                                        <span className="badge bg-danger rounded-pill fs-6">6459</span>
                                      </li>
                                      <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="prize-name">{t('3rd_Prize')}</span>
                                        <span className="badge bg-danger rounded-pill fs-6">6459</span>
                                      </li>
                                    </ul>
                                  </div>
                              </div>                                
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div className="s-and-c">
                                <table className="table-custom">
                                <tbody>
                                    <tr>
                                        <td colspan="2" className="border-bottom border-light">{t('Special_Prize')}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                      <td className="border-bottom border-light">87537</td>
                                      <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                  </tr>
                                  <tr>
                                      <td className="border-bottom border-light">87537</td>
                                      <td className="border-bottom border-light">87537</td>
                                  </tr>
                                  <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                  </tr>
                                  <tr>
                                      <td className="border-bottom border-light">87537</td>
                                      <td className="border-bottom border-light">87537</td>
                                  </tr>
                                  </tbody>
                                </table>
                            </div>
                            </div>
                            <div className="col-6">
                              <div className="s-and-c">
                                <table className="table-custom">
                                  <tbody>
                                    <tr>
                                        <td colspan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                      <td className="border-bottom border-light">87537</td>
                                      <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                      <td className="border-bottom border-light">87537</td>
                                      <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                      <td className="border-bottom border-light">87537</td>
                                      <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
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
                            <div className="gp-prize-play-btn ms-auto">
                              <p className="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                              <p className="mb-0 fs-5 fw-bold">4567891</p>
                            </div>
                        </div>
                      </div>
                      <div className="row first-three">
                          <div className="col-12">
                              <div className="verticle-prizelist">
                                <ul className="list-group">
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="prize-name">{t('1st_Prize')}</span>
                                    <span className="badge bg-warning rounded-pill fs-6 text-dark">6459</span>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="prize-name">{t('2nd_Prize')}</span>
                                    <span className="badge bg-warning rounded-pill fs-6 text-dark">6459</span>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="prize-name">{t('3rd_Prize')}</span>
                                    <span className="badge bg-warning rounded-pill fs-6 text-dark">6459</span>
                                  </li>
                                </ul>
                              </div>
                          </div>                                
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colspan="2" className="border-bottom border-light">{t('Special_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                <td className="border-bottom border-light">87537</td>
                                <td className="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                <td className="border-bottom border-light">87537</td>
                                <td className="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                              </tr>
                              </tbody>
                            </table>
                        </div>
                        </div>
                        <div className="col-6">
                          <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
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
                            <p className="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                            <p className="mb-0 fs-5 fw-bold">4567891</p>
                          </div>
                      </div>
                      <div className="row first-three">
                          <div className="col-12">
                              <div className="verticle-prizelist">
                                <ul className="list-group">
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="prize-name">{t('1st_Prize')}</span>
                                    <span className="badge bg-toto rounded-pill fs-6">6459</span>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="prize-name">{t('2nd_Prize')}</span>
                                    <span className="badge bg-toto rounded-pill fs-6">6459</span>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="prize-name">{t('3rd_Prize')}</span>
                                    <span className="badge bg-toto rounded-pill fs-6">6459</span>
                                  </li>
                                </ul>
                              </div>
                          </div>                                
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="s-and-c">
                            <table className="table-custom">
                              <tbody>
                                <tr>
                                    <td colspan="2" className="border-bottom border-light">{t('Special_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                <td className="border-bottom border-light">87537</td>
                                <td className="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                <td className="border-bottom border-light">87537</td>
                                <td className="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                              </tr>
                              </tbody>
                            </table>
                        </div>
                        </div>
                        <div className="col-6">
                          <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
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
            </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Result;