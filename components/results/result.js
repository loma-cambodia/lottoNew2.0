import React from "react";
import { useTranslation } from "react-i18next";
const Result = () => {
  const { t } = useTranslation();
    return (
        <>
      <div class="accordion my-3 custom-accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button" type="button">
              <span>{t('Past_Draw_Result')}: 28/09/2022 (WED)</span> <span class="print-btn"><i class="fa-solid fa-print"></i></span>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="row">
                <div class="col-md-4">
                  <div class="card damamcai">
                      <div class="card-body">
                          <div class="card-top">
                              <div class="logo-gp-prize">
                                  <div class="logo-gp-prize-outer">
                                      <div class="logo-gp-prize-inner">
                                          <img src="assets/images/icons/damacai.png" alt="" class="img-icon-prize"/>
                                      </div>
                                  </div>
                              </div>
                              <div class="name-lottery">
                                  <p class="fw-bold">DA MA CAI</p>
                                  <p class="date-cal"><span class="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> 22-09-2022</p>
                              </div>
                              <div class="gp-prize-play-btn ms-auto">
                                <div class="gp-prize-play-btn ms-auto">
                                  <p class="fw-bold small mb-0 text-end">Draw ID</p>
                                  <p class="mb-0 fs-5 fw-bold">4567891</p>
                                </div>
                            </div>
                          </div>
                          <div class="row first-three">
                              <div class="col-12">
                                  <div class="verticle-prizelist">
                                    <ul class="list-group">
                                      <li class="list-group-item d-flex justify-content-between align-items-center">
                                        {/* <span class="prize-icon"><img src="assets/images/icons/1st-prize.png" class="img-fluid" alt=""></span> */}
                                        <span class="prize-name">{t('1st_Prize')}</span>
                                        <span class="badge bg-danger rounded-pill fs-6">6459</span>
                                      </li>
                                      <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span class="prize-name">{t('2nd_Prize')}</span>
                                        <span class="badge bg-danger rounded-pill fs-6">6459</span>
                                      </li>
                                      <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span class="prize-name">{t('3rd_Prize')}</span>
                                        <span class="badge bg-danger rounded-pill fs-6">6459</span>
                                      </li>
                                    </ul>
                                  </div>
                              </div>                                
                          </div>
                          <div class="row">
                            <div class="col-6">
                              <div class="s-and-c">
                                <table class="table-custom">
                                    <tr>
                                        <td colspan="2" class="border-bottom border-light">{t('Special_Prize')}</td>
                                    </tr>
                                    <tr>
                                        <td class="border-bottom border-light">87537</td>
                                        <td class="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td class="border-bottom border-light">87537</td>
                                        <td class="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                      <td class="border-bottom border-light">87537</td>
                                      <td class="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td class="border-bottom border-light">87537</td>
                                        <td class="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                  </tr>
                                  <tr>
                                      <td class="border-bottom border-light">87537</td>
                                      <td class="border-bottom border-light">87537</td>
                                  </tr>
                                  <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                  </tr>
                                  <tr>
                                      <td class="border-bottom border-light">87537</td>
                                      <td class="border-bottom border-light">87537</td>
                                  </tr>
                                </table>
                            </div>
                            </div>
                            <div class="col-6">
                              <div class="s-and-c">
                                <table class="table-custom">
                                    <tr>
                                        <td colspan="5" class="border-bottom border-light">{t('Consolation_Prize')}</td>
                                    </tr>
                                    <tr>
                                        <td class="border-bottom border-light">87537</td>
                                        <td class="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td class="border-bottom border-light">87537</td>
                                        <td class="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                      <td class="border-bottom border-light">87537</td>
                                      <td class="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td class="border-bottom border-light">87537</td>
                                        <td class="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                      <td class="border-bottom border-light">87537</td>
                                      <td class="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td class="border-bottom border-light">87537</td>
                                        <td class="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                      <td class="border-bottom border-light">87537</td>
                                      <td class="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td class="border-bottom border-light">87537</td>
                                        <td class="border-bottom border-light">87537</td>
                                    </tr>
                                </table>
                            </div>
                            </div>
                          </div>
                          
                          
                      </div>
                  </div>
                </div>
              <div class="col-md-4">
                  <div class="card magnum">
                    <div class="card-body">
                      <div class="card-top">
                          <div class="logo-gp-prize">
                              <div class="logo-gp-prize-outer">
                                  <div class="logo-gp-prize-inner">
                                      <img src="assets/images/icons/magnum.png" alt="" class="img-icon-prize"/>
                                  </div>
                              </div>
                          </div>
                          <div class="name-lottery">
                              <p class="fw-bold">MAGNUM</p>
                              <p class="date-cal"><span class="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> 22-09-2022</p>
                          </div>
                          <div class="gp-prize-play-btn ms-auto">
                            <div class="gp-prize-play-btn ms-auto">
                              <p class="fw-bold small mb-0 text-end">Draw ID</p>
                              <p class="mb-0 fs-5 fw-bold">4567891</p>
                            </div>
                        </div>
                      </div>
                      <div class="row first-three">
                          <div class="col-12">
                              <div class="verticle-prizelist">
                                <ul class="list-group">
                                  <li class="list-group-item d-flex justify-content-between align-items-center">
                                     {/* <span class="prize-icon"><img src="assets/images/icons/1st-prize.png" class="img-fluid" alt=""></span> */}
                                    <span class="prize-name">{t('1st_Prize')}</span>
                                    <span class="badge bg-warning rounded-pill fs-6 text-dark">6459</span>
                                  </li>
                                  <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="prize-name">{t('2nd_Prize')}</span>
                                    <span class="badge bg-warning rounded-pill fs-6 text-dark">6459</span>
                                  </li>
                                  <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="prize-name">{t('3rd_Prize')}</span>
                                    <span class="badge bg-warning rounded-pill fs-6 text-dark">6459</span>
                                  </li>
                                </ul>
                              </div>
                          </div>                                
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <div class="s-and-c">
                            <table class="table-custom">
                                <tr>
                                    <td colspan="2" class="border-bottom border-light">{t('Special_Prize')}</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td class="border-bottom border-light">87537</td>
                                  <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                <td class="border-bottom border-light">87537</td>
                                <td class="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                  <td class="border-bottom border-light">87537</td>
                                  <td class="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                <td class="border-bottom border-light">87537</td>
                                <td class="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                  <td class="border-bottom border-light">87537</td>
                                  <td class="border-bottom border-light">87537</td>
                              </tr>
                            </table>
                        </div>
                        </div>
                        <div class="col-6">
                          <div class="s-and-c">
                            <table class="table-custom">
                                <tr>
                                    <td colspan="5" class="border-bottom border-light">{t('Consolation_Prize')}</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td class="border-bottom border-light">87537</td>
                                  <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td class="border-bottom border-light">87537</td>
                                  <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td class="border-bottom border-light">87537</td>
                                  <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                            </table>
                        </div>
                        </div>
                      </div>
                      
                      
                  </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card toto">
                    <div class="card-body">
                      <div class="card-top">
                          <div class="logo-gp-prize">
                              <div class="logo-gp-prize-outer">
                                  <div class="logo-gp-prize-inner">
                                      <img src="assets/images/icons/toto.png" alt="" class="img-icon-prize"/>
                                  </div>
                              </div>
                          </div>
                          <div class="name-lottery">
                              <p class="fw-bold">SPORTS TOTO</p>
                              <p class="date-cal"><span class="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> 22-09-2022</p>
                          </div>
                          <div class="gp-prize-play-btn ms-auto">
                            <p class="fw-bold small mb-0 text-end">Draw ID</p>
                            <p class="mb-0 fs-5 fw-bold">4567891</p>
                          </div>
                      </div>
                      <div class="row first-three">
                          <div class="col-12">
                              <div class="verticle-prizelist">
                                <ul class="list-group">
                                  <li class="list-group-item d-flex justify-content-between align-items-center">
                                  {/* <span class="prize-icon"><img src="assets/images/icons/1st-prize.png" class="img-fluid" alt=""></span> */}
                                    <span class="prize-name">{t('1st_Prize')}</span>
                                    <span class="badge bg-toto rounded-pill fs-6">6459</span>
                                  </li>
                                  <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="prize-name">{t('2nd_Prize')}</span>
                                    <span class="badge bg-toto rounded-pill fs-6">6459</span>
                                  </li>
                                  <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="prize-name">{t('3rd_Prize')}</span>
                                    <span class="badge bg-toto rounded-pill fs-6">6459</span>
                                  </li>
                                </ul>
                              </div>
                          </div>                                
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <div class="s-and-c">
                            <table class="table-custom">
                                <tr>
                                    <td colspan="2" class="border-bottom border-light">{t('Special_Prize')}</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td class="border-bottom border-light">87537</td>
                                  <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                <td class="border-bottom border-light">87537</td>
                                <td class="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                  <td class="border-bottom border-light">87537</td>
                                  <td class="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                <td class="border-bottom border-light">87537</td>
                                <td class="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                  <td class="border-bottom border-light">87537</td>
                                  <td class="border-bottom border-light">87537</td>
                              </tr>
                            </table>
                        </div>
                        </div>
                        <div class="col-6">
                          <div class="s-and-c">
                            <table class="table-custom">
                                <tr>
                                    <td colspan="5" class="border-bottom border-light">{t('Consolation_Prize')}</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td class="border-bottom border-light">87537</td>
                                  <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td class="border-bottom border-light">87537</td>
                                  <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td class="border-bottom border-light">87537</td>
                                  <td class="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td class="border-bottom border-light">87537</td>
                                    <td class="border-bottom border-light">87537</td>
                                </tr>
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