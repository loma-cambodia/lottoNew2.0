
import React from 'react';
import { useTranslation } from "react-i18next";
const InvestmentCalculator = () => {
  const { t } = useTranslation();
    return (
      <>
       <section className="bg-light custom-padding">
            <div className="container">
                <div className="heading-part text-center mb-4">
                    {/* <h5 className="text-uppercase fw-bold">{t('how_to')}</h5> */}
                    <h2 className="text-uppercase text-color-main fw-bold">{t('Investment Calculator')}</h2>
                </div>
                <div className='back-section'>
                    <div className='row align-items-center'>
                        <div className='col-md-5 col-sm-5'>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>Number</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                            </div>  
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>Company</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <div class="d-flex">
                                            <div class="select-gp" id="checkboxes">
                                                <ul id="checkboxes" class="list-inline">
                                                    <li class=" list-inline-item">
                                                        <span class=" outer-circle-gp" title="Select">
                                                            <span class="inner-circle-gp">
                                                                <img class="img-fluid" src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png" />
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li class=" list-inline-item">
                                                        <span class=" outer-circle-gp" title="Select">
                                                            <span class="inner-circle-gp">
                                                                <img class="img-fluid" src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png" />
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li class=" list-inline-item">
                                                        <span class=" outer-circle-gp" title="Select">
                                                            <span class="inner-circle-gp">
                                                                <img class="img-fluid" src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png" />
                                                            </span>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>Bet Type</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" class="btn-custom-small me-3" title="Box">B</button>
                                            <button type="button" class="btn-custom-small me-3" title="iBox">I</button>
                                            <button type="button" class="btn-custom-small" title="Reverse">R</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>Big</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>Small</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>3A</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>3C</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div class="clearfix text-center"><span role="button" class="d-block btn-yellow rounded-full">CLEAR</span></div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="clearfix text-center"><span role="button" class="d-block btn-yellow rounded-full">Calculate</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7  col-sm-7'>
                            <div className='absolute-div'>
                                <div className='inner-abs-div'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
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
  export default InvestmentCalculator;
  